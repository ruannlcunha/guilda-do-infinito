import { getGifDuration } from "../../../../utils";
import { useEncerrarCondicao, usePularTurno } from "../../";
import { useRolarDado } from "../../rolar-dado/use-rolar-dado.hook";
import { BANNER_DURACAO } from "../../../../constants";
import { useToast } from "../../../";
import { SOUNDS } from "../../../../constants/audios/sounds.constant";
import { CONDICOES, ELEMENTOS } from "../../../../constants/personagens/personagem.constant";
import { realizarEspecialDuplicata } from "../../../../utils/realizar-condicoes-especiais.util";
import { getModificadoresAtaque, getModificadoresConjuracao, getModificadoresResistencia } from "../../../../utils/get-modificadores.util";
import { ACAO_CATEGORIA } from "../../../../constants/acoes/acoes.constant";

export function useAcoesBase() {
  const { pularTurno } = usePularTurno();
  const { rolarDado } = useRolarDado();
  const { encerrarDormindo, encerrarCongelado, encerrarQueimando, encerrarEscondido, encerrarAtaqueEspecial, encerrarAtaqueDivino, encerrarAtaquePoderoso} = useEncerrarCondicao();
  const encerrarCondicoes = useEncerrarCondicao();
  const { toastWarning } = useToast();

  function _matarPersonagem(alvo, functions) {
    functions.adicionarLog(`O personagem ${alvo.nome} foi derrotado.`);
    let novoAlvo = {...alvo, isMorto: true}
    
    for(let i=0; i<novoAlvo.condicoes.length;i++) {
      const condicaoAtual = novoAlvo.condicoes[i]
      for (const [funcaoNome, funcaoEncerrarCondicao] of Object.entries(encerrarCondicoes)) {
        if(funcaoNome===`encerrar${condicaoAtual.pascalCase}`) {
          novoAlvo = funcaoEncerrarCondicao(novoAlvo, {...functions, adicionarLog: ()=>{}})
        }
      }
    }
    return novoAlvo;
  }

  function alterarPersonagem(functions, novoPersonagem) {
    functions.setPersonagens((old) => {
      return old.map((personagem) => {
        if (personagem.idCombate === novoPersonagem.idCombate) {
          if (novoPersonagem.pv.atual < 1) {
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

    functions.playSound(audio);

    const novoAlvo = {
      ...alvo,
      effect: { asset: effect, isAtivo: true }
    };
    alterarPersonagem(functions, novoAlvo);

    setTimeout(() => {
      alterarPersonagem(functions, alvo);
    }, duracao);

    return duracao;
  }

  function causarDano(alvo, danos, ataque, acao, functions) {
    let novoAlvo = { ...alvo };
    let danoTotal = 0;
    let danoResistido = 0;
    let resistenciasRestantes = [...novoAlvo.resistenciaDano];

    danos.map((dano) => {
      const resistencia = resistenciasRestantes.find((resistencia) => resistencia.elemento === dano.elemento);
      let novoDano = dano.total;

      if (ataque.dado === 20) {
        novoDano = dano.total * 2;
      }
      if (resistencia) {
        resistenciasRestantes.filter((res) => res.elemento === resistencia.elemento);
        if (resistencia.valor - novoDano > 0) {
          resistenciasRestantes.push({
            ...resistencia,
            valor: resistencia.valor - novoDano
          });
        }
        novoDano = novoDano - resistencia.valor > 0 ? novoDano - resistencia.valor : 0;
        danoResistido += dano.total - novoDano;
      }

      if (novoDano > 0) novoAlvo = encerrarDormindo(novoAlvo, functions);
      if (novoDano > 0 && dano.elemento === ELEMENTOS.FOGO) novoAlvo = encerrarCongelado(novoAlvo, functions);
      if (novoDano > 0 && dano.elemento === ELEMENTOS.AGUA) novoAlvo = encerrarQueimando(novoAlvo, functions);

      danoTotal = danoTotal + novoDano;
    });

    let novaVida = Number(novoAlvo.pv.atual - danoTotal);
    novaVida < 0 ? (novaVida = 0) : null;
    novoAlvo = {
      ...novoAlvo,
      pv: {
        ...novoAlvo.pv,
        atual: novaVida
      }
    };

    danoResistido > 0 ? functions.adicionarLog(`${alvo.nome} resistiu a ${danoResistido} de dano graças a sua Resistência de Dano.`) : null;
    functions.adicionarLog(`${alvo.nome} sofreu ${danoTotal} de dano causado por ${acao.nome}.`);

    alterarPersonagem(functions, novoAlvo);
    return novoAlvo;
  }

  function consumirItem(personagem, idItem, functions) {
    const item = [...personagem.inventario.itens].find((obj) => obj.id === idItem);
    const novosItens = [...personagem.inventario.itens].filter((obj) => obj.id !== idItem);

    if (item.quantidade > 1) {
      const novoItem = { ...item, quantidade: item.quantidade - 1 };
      novosItens.push(novoItem);
    }

    const novoPersonagem = {
      ...personagem,
      inventario: {
        ...personagem.inventario,
        itens: novosItens
      }
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
        atual: novaMana
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
        atual: novaVida
      }
    };
    alterarPersonagem(functions, novoAlvo);

    return novoAlvo;
  }

  function restaurarMana(alvo, cura, functions) {
    let novaMana = Number(alvo.pm.atual + cura);
    novaMana > alvo.pm.maximo ? (novaMana = alvo.pm.maximo) : null;

    if (alvo.isMorto) {
      throw {
        message: "Personagens mortos não podem ter sua mana recuperada."
      };
    }

    const novoAlvo = {
      ...alvo,
      pm: {
        ...alvo.pm,
        atual: novaMana
      }
    };
    alterarPersonagem(functions, novoAlvo);

    return novoAlvo;
  }

  function atacar(personagem, alvo, acao, functions, ataquePadrao) {
    const novoAlvo = realizarEspecialDuplicata(alvo, functions);
    let novoPersonagem = { ...personagem };

    novoPersonagem = encerrarEscondido(novoPersonagem, functions);
    novoPersonagem = encerrarAtaqueEspecial(novoPersonagem, functions);
    novoPersonagem = encerrarAtaquePoderoso(novoPersonagem, functions);
    novoPersonagem = encerrarAtaqueDivino(novoPersonagem, functions);
    novoPersonagem = {
      ...novoPersonagem,
      condicoes: [
        ...novoPersonagem.condicoes.map((condicao) => {
          if (condicao.nome === CONDICOES.FURIA.nome) return { ...condicao, duracao: 1 };
          return condicao;
        })
      ]
    };

    let modificadores = [];
    if (acao.categoria === ACAO_CATEGORIA.MAGICO) {
      modificadores = getModificadoresConjuracao(acao, [], personagem);
    } else {
      modificadores = getModificadoresAtaque(acao, [], personagem);
    }
    const dadoRolado = rolarDado(1, 20, modificadores);

    const ataque = ataquePadrao
      ? ataquePadrao
      : {
          resultadoDado: dadoRolado.dados[0].resultado,
          resultadoTotal: dadoRolado.total,
          modificadores
        };

    !ataquePadrao ? functions.ativarBannerAtaque(ataque, alvo.defesa, personagem.corTema) : null;

    return {
      acerto: (ataque.resultadoTotal >= alvo.defesa && ataque.resultadoDado != 1) || ataque.resultadoDado == 20,
      total: ataque.resultadoTotal,
      dado: ataque.resultadoDado,
      alvo: novoAlvo,
      personagem: novoPersonagem
    };
  }

  async function finalizarAcao(personagem, functions, alvo, duracao, duracaoMinima) {
    const novoAlvo = {
      ...alvo,
      effect: { asset: null, isAtivo: false },
      testeResistencia: null
    };
    const novoPersonagem = personagem.idCombate === novoAlvo.idCombate ? { ...novoAlvo } : { ...personagem };
    const duracaoTotal = (await duracao) < duracaoMinima ? duracaoMinima : await duracao;
    setTimeout(() => {
      functions.setAcaoAtiva({
        personagem: null,
        acao: null,
        alvos: [],
        tipoAcao: null
      });
      functions.setAnimacoes((old) => {
        return { ...old, escolhendoAlvo: false, hudAtivo: true };
      });
      functions.setAcaoEmAndamento(false);
      pularTurno(functions.setTurnos);

      alterarPersonagem(functions, novoAlvo);

      alterarPersonagem(functions, {
        ...novoPersonagem,
        usouAcaoExtra: false
      });

      //limpar timeouts (talvez não faça efeito nenhum, mas estarei monitorando para verificar se os bugs de banner sumindo resolvem.)
      var timeoutsIDs = window.setTimeout(function () {}, 0);
      while (timeoutsIDs--) {
        window.clearTimeout(timeoutsIDs);
      }
    }, await duracaoTotal);
  }

  async function finalizarAcaoArea(personagem, functions, novosAlvos, duracao, duracaoMinima) {
    const duracaoTotal = (await duracao) < duracaoMinima ? duracaoMinima : await duracao;
    setTimeout(() => {
      functions.setAcaoAtiva({
        personagem: null,
        acao: null,
        alvos: [],
        tipoAcao: null
      });
      functions.setAnimacoes((old) => {
        return { ...old, escolhendoAlvo: false, hudAtivo: true };
      });
      functions.setAcaoEmAndamento(false);
      pularTurno(functions.setTurnos);

      novosAlvos.map((novoAlvo) => {
        alterarPersonagem(functions, {
          ...novoAlvo,
          usouAcaoExtra: false,
          defesaEffect: null,
          effect: { asset: null, isAtivo: false },
          testeResistencia: null
        });
      });

      if (!novosAlvos.some((alvo) => alvo.idCombate === personagem.idCombate)) {
        alterarPersonagem(functions, {
          ...personagem,
          usouAcaoExtra: false
        });
      }

      var timeoutsIDs = window.setTimeout(function () {}, 0);
      while (timeoutsIDs--) {
        window.clearTimeout(timeoutsIDs);
      }
    }, await duracaoTotal);
  }

  async function finalizarAcaoExtra(personagem, functions, alvo, duracao, duracaoMinima) {
    const novoAlvo = {
      ...alvo,
      effect: { asset: null, isAtivo: false },
      testeResistencia: null
    };
    const novoPersonagem = personagem.idCombate === novoAlvo.idCombate ? { ...novoAlvo } : { ...personagem };
    const duracaoTotal = (await duracao) < duracaoMinima ? duracaoMinima : await duracao;
    setTimeout(() => {
      functions.setAcaoAtiva({
        personagem: null,
        acao: null,
        alvos: [],
        tipoAcao: null
      });
      functions.setAnimacoes((old) => {
        return { ...old, escolhendoAlvo: false, hudAtivo: true };
      });
      functions.setAcaoEmAndamento(false);

      alterarPersonagem(functions, novoAlvo);
      alterarPersonagem(functions, {
        ...novoPersonagem,
        usouAcaoExtra: true
      });

      var timeoutsIDs = window.setTimeout(function () {}, 0);
      while (timeoutsIDs--) {
        window.clearTimeout(timeoutsIDs);
      }
    }, await duracaoTotal);
  }

  function testarResistencia(personagem, dificuldade, modificador, functions) {
    const modificadores = getModificadoresResistencia(modificador.atributo, [modificador], personagem);
    const { dados, total } = rolarDado(1, 20, modificadores);
    functions.playSound(SOUNDS.DADO);
    const teste = {
      resultadoDado: dados[0].resultado,
      resultadoTotal: total,
      ...modificador
    };
    const novoPersonagem = { ...personagem, testeResistencia: total };
    alterarPersonagem(functions, novoPersonagem);

    return {
      acerto: (teste.resultadoTotal >= dificuldade && teste.resultadoDado != 1) || teste.resultadoDado == 20,
      total: teste.resultadoTotal,
      dado: teste.resultadoDado,
      personagem: novoPersonagem
    };
  }

  function informarErro(error, functions) {
    toastWarning(error.message);
    functions.setAcaoAtiva({
      personagem: null,
      acao: null,
      alvos: [],
      tipoAcao: null
    });
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false, hudAtivo: true };
    });
  }

  function realizarEtapasAtaque(primeiraEtapa, segundaEtapa, etapaFinalizacao, resultadoAtaque, functions, personagem, alvo, ataque) {
    function _primeiraEtapa() {
      primeiraEtapa();
      if (resultadoAtaque.dado === 20) {
        functions.adicionarLog(`${personagem.nome} usou ${ataque.nome} em ${alvo.nome} e teve um sucesso crítico com ${resultadoAtaque.total} no teste!`);
      } else {
        functions.adicionarLog(`${personagem.nome} usou ${ataque.nome} em ${alvo.nome} e acertou com ${resultadoAtaque.total} no teste.`);
      }

      const segundoTimeout = setTimeout(() => {
        segundaEtapa();
      }, BANNER_DURACAO.ROLAGEM + 100);
      functions.setBanners((old) => {
        return {
          ...old,
          evento: () => {
            clearTimeout(segundoTimeout);
            segundaEtapa();
          }
        };
      });
    }

    if (resultadoAtaque.acerto) {
      const primeiroTimeout = setTimeout(() => {
        _primeiraEtapa();
      }, BANNER_DURACAO.ATAQUE + 100);

      functions.setBanners((old) => {
        return {
          ...old,
          evento: () => {
            clearTimeout(primeiroTimeout);
            _primeiraEtapa();
          }
        };
      });
    } else {
      //CASO ERRE
      const primeiroTimeout = setTimeout(() => {
        //Só finaliza a ação
        if (resultadoAtaque.dado === 1) {
          functions.adicionarLog(`${personagem.nome} usou ${ataque.nome} em ${alvo.nome} mas teve uma falha crítica com ${resultadoAtaque.total} no teste.`);
        } else {
          functions.adicionarLog(`${personagem.nome} usou ${ataque.nome} em ${alvo.nome} mas falhou com ${resultadoAtaque.total} no teste.`);
        }
        etapaFinalizacao();
        //Dps do banner rolar ele finaliza a ação
      }, BANNER_DURACAO.ATAQUE + 100);

      //Seta o evento de SKIP que basicamente é limpar o timeout anterior e realizar a ação que ele deveria
      functions.setBanners((old) => {
        return {
          ...old,
          evento: () => {
            clearTimeout(primeiroTimeout);
            functions.adicionarLog(`${personagem.nome} usou ${ataque.nome} em ${alvo.nome} mas falhou com ${resultadoAtaque.total} no teste.`);
            etapaFinalizacao();
          }
        };
      });
    }
  }

  function realizarEtapasAtaqueArea(primeiraEtapa, segundaEtapa, etapaFinalizacao, resultadoAtaques, functions, personagem, ataqueData) {
    if (resultadoAtaques.ataquePadrao.resultadoDado === 20) {
      functions.adicionarLog(`${personagem.nome} usou ${ataqueData.nome} em área e teve um sucesso crítico no teste!`);
    }
    if (resultadoAtaques.ataquePadrao.resultadoDado === 1) {
      functions.adicionarLog(`${personagem.nome} usou ${ataqueData.nome} em área mas teve uma falha crítica no teste.`);
    }

    function _alterarEfeitoDefesa(boolean) {
      resultadoAtaques.ataques.map((ataque) => {
        const novaDefesaEffect = boolean ? { acerto: ataque.acerto } : null;
        const novoAlvo = {
          ...ataque.alvo,
          defesaEffect: novaDefesaEffect
        };
        functions.setAnimacoes((old) => {
          return { ...old, escolhendoAlvo: false };
        });
        alterarPersonagem(functions, novoAlvo);
      });
    }

    function _primeiraEtapa() {
      _alterarEfeitoDefesa(false);
      primeiraEtapa();

      resultadoAtaques.ataques.map((ataque) => {
        if (ataque.acerto) {
          functions.adicionarLog(`${personagem.nome} usou ${ataqueData.nome} em ${ataque.alvo.nome} e acertou com ${ataque.total} no teste.`);
        } else {
          functions.adicionarLog(`${personagem.nome} usou ${ataqueData.nome} em ${ataque.alvo.nome} mas falhou com ${ataque.total} no teste.`);
        }
      });

      if (segundaEtapa) {
        const segundoTimeout = setTimeout(() => {
          segundaEtapa();
        }, BANNER_DURACAO.ROLAGEM + 100);
        functions.setBanners((old) => {
          return {
            ...old,
            evento: () => {
              clearTimeout(segundoTimeout);
              segundaEtapa();
            }
          };
        });
      }
    }

    let acertos = 0;
    resultadoAtaques.ataques.map((ataque) => {
      if (ataque.acerto) {
        acertos = acertos + 1;
      }
    });

    if (acertos > 0) {
      const primeiroTimeout = setTimeout(() => {
        _alterarEfeitoDefesa(true);
        setTimeout(() => {
          _primeiraEtapa();
        }, BANNER_DURACAO.DEFESA_EFFECT + 100);
      }, BANNER_DURACAO.ATAQUE + 100);

      functions.setBanners((old) => {
        return {
          ...old,
          evento: () => {
            clearTimeout(primeiroTimeout);
            _primeiraEtapa();
          }
        };
      });
    } else {
      const primeiroTimeout = setTimeout(() => {
        _alterarEfeitoDefesa(true);
        setTimeout(() => {
          _alterarEfeitoDefesa(false);
          functions.adicionarLog(`${personagem.nome} usou ${ataqueData.nome} em área mas não acertou ninguém.`);
          etapaFinalizacao();
        }, BANNER_DURACAO.DEFESA_EFFECT + 100);
      }, BANNER_DURACAO.ATAQUE + 100);

      functions.setBanners((old) => {
        return {
          ...old,
          evento: () => {
            clearTimeout(primeiroTimeout);
            _alterarEfeitoDefesa(false);
            functions.adicionarLog(`${personagem.nome} usou ${ataqueData.nome} em área mas não acertou ninguém.`);
            etapaFinalizacao();
          }
        };
      });
    }
  }

  function realizarEtapasAtaqueSemDano(primeiraEtapa, etapaFinalizacao, resultadoAtaque, functions, personagem, alvo, ataque) {
    function _primeiraEtapa() {
      primeiraEtapa();
      if (resultadoAtaque.dado === 20) {
        functions.adicionarLog(`${personagem.nome} usou ${ataque.nome} em ${alvo.nome} e teve um sucesso crítico com ${resultadoAtaque.total} no teste!`);
      } else {
        functions.adicionarLog(`${personagem.nome} usou ${ataque.nome} em ${alvo.nome} e acertou com ${resultadoAtaque.total} no teste.`);
      }
    }

    if (resultadoAtaque.acerto) {
      const primeiroTimeout = setTimeout(() => {
        _primeiraEtapa();
      }, BANNER_DURACAO.ATAQUE + 100);

      functions.setBanners((old) => {
        return {
          ...old,
          evento: () => {
            clearTimeout(primeiroTimeout);
            _primeiraEtapa();
          }
        };
      });
    } else {
      //CASO ERRE
      const primeiroTimeout = setTimeout(() => {
        //Só finaliza a ação
        if (resultadoAtaque.dado === 1) {
          functions.adicionarLog(`${personagem.nome} usou ${ataque.nome} em ${alvo.nome} mas teve uma falha crítica com ${resultadoAtaque.total} no teste.`);
        } else {
          functions.adicionarLog(`${personagem.nome} usou ${ataque.nome} em ${alvo.nome} mas falhou com ${resultadoAtaque.total} no teste.`);
        }
        etapaFinalizacao();
        //Dps do banner rolar ele finaliza a ação
      }, BANNER_DURACAO.ATAQUE + 100);

      //Seta o evento de SKIP que basicamente é limpar o timeout anterior e realizar a ação que ele deveria
      functions.setBanners((old) => {
        return {
          ...old,
          evento: () => {
            clearTimeout(primeiroTimeout);
            functions.adicionarLog(`${personagem.nome} usou ${ataque.nome} em ${alvo.nome} mas falhou com ${resultadoAtaque.total} no teste.`);
            etapaFinalizacao();
          }
        };
      });
    }
  }

  return {
    alterarPersonagem,
    iniciarEfeito,
    causarDano,
    restaurarVida,
    restaurarMana,
    finalizarAcao,
    finalizarAcaoArea,
    finalizarAcaoExtra,
    gastarMana,
    informarErro,
    consumirItem,
    atacar,
    testarResistencia,
    realizarEtapasAtaque,
    realizarEtapasAtaqueArea,
    realizarEtapasAtaqueSemDano
  };
}
