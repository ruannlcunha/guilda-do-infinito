import { getGifDuration } from "../../../../utils";
import { useEncerrarCondicao, usePularTurno } from "../../";
import { useRolarDado } from "../../rolar-dado/use-rolar-dado.hook";
import { BANNER_DURACAO } from "../../../../constants";
import { useToast } from "../../../";
import { SOUNDS } from "../../../../constants/audios/sounds.constant";

export function useAcoesBase() {
  const { pularTurno } = usePularTurno();
  const { rolarDado } = useRolarDado();
  const { encerrarDormindo } = useEncerrarCondicao()
  const {toastError} = useToast()

  function _matarPersonagem(alvo) {
    return { ...alvo, isMorto: true };
  }

  function alterarPersonagem(functions, novoPersonagem) {
    functions.setPersonagens((old) => {
      return old.map((personagem) => {
        if (personagem.idCombate === novoPersonagem.idCombate) {
          if (novoPersonagem.pv.atual < 1 && !novoPersonagem.isMorto) {
            return _matarPersonagem(novoPersonagem, functions);
          }
          return novoPersonagem;
        }
        return personagem;
      });
    });
  }

  async function iniciarEfeito(alvo, functions, effect, audio) {
    const duracao = await getGifDuration(effect);

    functions.playSound(audio)

    const novoAlvo = {
      ...alvo,
      effect: { asset: effect, isAtivo: true },
    };
    alterarPersonagem(functions, novoAlvo);

    setTimeout(()=>{
      alterarPersonagem(functions, alvo);
    }, duracao)

    return duracao;
  }

  function causarDano(alvo, dano, ataque, functions) {
    const novoDano = ataque.dado===20 ? (dano*2) : dano
    let novaVida = Number(alvo.pv.atual - novoDano);
    novaVida < 0 ? (novaVida = 0) : null;

    const alvoNovaVida = {
      ...alvo,
      isMorto: novaVida<1 ? true : false,
      pv: {
        ...alvo.pv,
        atual: novaVida,
      }
    };
    const novoAlvo = encerrarDormindo(alvoNovaVida, functions)

    novoAlvo.isMorto ? functions.adicionarLog(`O personagem ${alvo.nome} foi derrotado.`) : null
    
    alterarPersonagem(functions, novoAlvo)
    return novoAlvo;
  }

  function consumirItem(personagem, idItem, functions) {
    const item = [...personagem.inventario.itens].find(obj => obj.id === idItem)
    const novosItens = [...personagem.inventario.itens].filter(obj => obj.id !== idItem)

    if(item.quantidade > 1) {
      const novoItem = {...item, quantidade: item.quantidade-1}
      novosItens.push(novoItem)
    }

    const novoPersonagem = {
      ...personagem,
      inventario: {
        ...personagem.inventario,
        itens: novosItens
      },
    };
    
    alterarPersonagem(functions, novoPersonagem);
    return novoPersonagem;
  }

  function gastarMana(alvo, custo, functions) {
    let novaMana = Number(alvo.pm.atual - custo);
    if (novaMana < 0) {
      throw { message: "Personagem não tem mana suficiente." };
    }

    const novoAlvo = {
      ...alvo,
      pm: {
        ...alvo.pm,
        atual: novaMana,
      }
    };
    alterarPersonagem(functions, novoAlvo);

    return novoAlvo;
  }

  function restaurarVida(alvo, cura, functions) {
    let novaVida = Number(alvo.pv.atual + cura);
    novaVida > alvo.pv.maximo ? (novaVida = alvo.pv.maximo) : null;

    if (alvo.isMorto) {
      throw { message: "Personagens mortos não podem ser curados." };
    }

    const novoAlvo = {
      ...alvo,
      pv: {
        ...alvo.pv,
        atual: novaVida,
      }
    };
    alterarPersonagem(functions, novoAlvo);

    return novoAlvo;
  }

  function atacar(personagem, alvo, modificador, functions) {
    const {dados, total} = rolarDado(1, 20, [modificador]);
    const ataque = {resultadoDado: dados[0].resultado, resultadoTotal: total, ...modificador}
    functions.ativarBannerAtaque(ataque, alvo.defesa, personagem.corTema);
    return {acerto: (ataque.resultadoTotal >= alvo.defesa && ataque.resultadoDado!=1)||(ataque.resultadoDado==20), total: ataque.resultadoTotal, dado: ataque.resultadoDado}
  }

  async function finalizarAcao(functions, novoAlvo, duracao, duracaoMinima) {
    const duracaoTotal = await duracao<duracaoMinima ? duracaoMinima : await duracao
    setTimeout(() => {
      functions.setAcaoAtiva({ personagem: null, acao: null, alvos: [] });
      functions.setAnimacoes((old) => {
        return { ...old, escolhendoAlvo: false, hudAtivo: true };
      });
      pularTurno(functions.setTurnos);
      alterarPersonagem(functions, {
        ...novoAlvo,
        effect: { asset: null, isAtivo: false },
        testeResistencia: null,
      });

      //limpar timeouts (talvez não faça efeito nenhum, mas estarei monitorando para verificar se os bugs de banner sumindo resolvem.)
      var timeoutsIDs = window.setTimeout(function() {}, 0);
      while (timeoutsIDs--) {
      window.clearTimeout(timeoutsIDs);
}
    }, await duracaoTotal);
  }

  function testeResistencia(personagem, dificuldade, modificador, functions) {
    const {dados, total} = rolarDado(1, 20, [modificador]);
    functions.playSound(SOUNDS.DADO)
    const teste = {resultadoDado: dados[0].resultado, resultadoTotal: total, ...modificador}
    const novoPersonagem = {...personagem, testeResistencia: total}
    alterarPersonagem(functions, novoPersonagem);
    
    return {
      acerto: (teste.resultadoTotal >= dificuldade && teste.resultadoDado!=1)||(teste.resultadoDado==20),
      total: teste.resultadoTotal, dado: teste.resultadoDado,
      personagem: novoPersonagem,
    }
  }

  function informarErro(error, functions) {
    toastError(error.message)
    functions.setAcaoAtiva({ personagem: null, acao: null, alvos: [] });
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false, hudAtivo: true };
    });
  }
  
  function realizarEtapasAtaque(primeiraEtapa, segundaEtapa, etapaFinalizacao, resultadoAtaque, functions, personagem, alvo, ataque, dano) {
    
    function _primeiraEtapa() {
      primeiraEtapa()
      if(resultadoAtaque.dado===20) {
        functions.adicionarLog(`${personagem.nome} usou ${ataque.nome} em ${alvo.nome} e teve um sucesso crítico com ${resultadoAtaque.total} no teste!`)
      }else {
        functions.adicionarLog(`${personagem.nome} usou ${ataque.nome} em ${alvo.nome} e acertou com ${resultadoAtaque.total} no teste.`)
      }

      const segundoTimeout = setTimeout(()=>{
        const novoDano = resultadoAtaque.dado===20 ? (dano*2) : dano
        functions.adicionarLog(`${ataque.nome} causou ${novoDano} de dano em ${alvo.nome}.`)
        segundaEtapa()
      }, BANNER_DURACAO.ROLAGEM+100)
      functions.setBanners(old => { return {...old, evento: 
        ()=>{
          clearTimeout(segundoTimeout)
          segundaEtapa()
        }}})
    }
    
    if(resultadoAtaque.acerto) {
      const primeiroTimeout = setTimeout(() => {
        _primeiraEtapa()
        
      }, (BANNER_DURACAO.ATAQUE)+100);
      
      functions.setBanners(old => { return {...old, evento: 
        ()=>{
          clearTimeout(primeiroTimeout)
          _primeiraEtapa()
        }}})
    } else {
      //CASO ERRE
      const primeiroTimeout = setTimeout(() => {
        //Só finaliza a ação
        if(resultadoAtaque.dado===1) {
          functions.adicionarLog(`${personagem.nome} usou ${ataque.nome} em ${alvo.nome} mas teve uma falha crítica com ${resultadoAtaque.total} no teste.`)
        }else {
          functions.adicionarLog(`${personagem.nome} usou ${ataque.nome} em ${alvo.nome} mas falhou com ${resultadoAtaque.total} no teste.`)
        }
        etapaFinalizacao()
        //Dps do banner rolar ele finaliza a ação
      }, (BANNER_DURACAO.ATAQUE)+100);

      //Seta o evento de SKIP que basicamente é limpar o timeout anterior e realizar a ação que ele deveria
      functions.setBanners(old => { return {...old, evento: 
        ()=>{
          clearTimeout(primeiroTimeout)
          functions.adicionarLog(`${personagem.nome} usou ${ataque.nome} em ${alvo.nome} mas falhou com ${resultadoAtaque.total} no teste.`)
          etapaFinalizacao()
        }}})
    }
  }
  
  function realizarEtapasAtaqueSemDano(primeiraEtapa, etapaFinalizacao, resultadoAtaque, functions, personagem, alvo, ataque) {
    
    function _primeiraEtapa() {
      primeiraEtapa()
      if(resultadoAtaque.dado===20) {
        functions.adicionarLog(`${personagem.nome} usou ${ataque.nome} em ${alvo.nome} e teve um sucesso crítico com ${resultadoAtaque.total} no teste!`)
      }else {
        functions.adicionarLog(`${personagem.nome} usou ${ataque.nome} em ${alvo.nome} e acertou com ${resultadoAtaque.total} no teste.`)
      }
    }
    
    if(resultadoAtaque.acerto) {
      const primeiroTimeout = setTimeout(() => {
        _primeiraEtapa()
        
      }, (BANNER_DURACAO.ATAQUE)+100);
      
      functions.setBanners(old => { return {...old, evento: 
        ()=>{
          clearTimeout(primeiroTimeout)
          _primeiraEtapa()
        }}})
    } else {
      //CASO ERRE
      const primeiroTimeout = setTimeout(() => {
        //Só finaliza a ação
        if(resultadoAtaque.dado===1) {
          functions.adicionarLog(`${personagem.nome} usou ${ataque.nome} em ${alvo.nome} mas teve uma falha crítica com ${resultadoAtaque.total} no teste.`)
        }else {
          functions.adicionarLog(`${personagem.nome} usou ${ataque.nome} em ${alvo.nome} mas falhou com ${resultadoAtaque.total} no teste.`)
        }
        etapaFinalizacao()
        //Dps do banner rolar ele finaliza a ação
      }, (BANNER_DURACAO.ATAQUE)+100);

      //Seta o evento de SKIP que basicamente é limpar o timeout anterior e realizar a ação que ele deveria
      functions.setBanners(old => { return {...old, evento: 
        ()=>{
          clearTimeout(primeiroTimeout)
          functions.adicionarLog(`${personagem.nome} usou ${ataque.nome} em ${alvo.nome} mas falhou com ${resultadoAtaque.total} no teste.`)
          etapaFinalizacao()
        }}})
    }
  }

  return {
    alterarPersonagem,
    iniciarEfeito,
    causarDano,
    restaurarVida,
    finalizarAcao,
    gastarMana,
    informarErro,
    consumirItem,
    atacar,
    testeResistencia,
    realizarEtapasAtaque,
    realizarEtapasAtaqueSemDano,
  };
}
