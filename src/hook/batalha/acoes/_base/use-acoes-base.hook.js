import { getGifDuration } from "../../../../utils";
import { usePularTurno } from "../../";
import { useRolarDado } from "../../rolar-dado/use-rolar-dado.hook";

export function useAcoesBase() {
  const { pularTurno } = usePularTurno();
  const { rolarDado } = useRolarDado();

  function _matarPersonagem(alvo) {
    return { ...alvo, isMorto: true };
  }

  function _alterarPersonagem(setPersonagens, novoPersonagem) {
    setPersonagens((old) => {
      return old.map((personagem) => {
        if (personagem.idCombate === novoPersonagem.idCombate) {
          if (novoPersonagem.pv.atual < 1) {
            return _matarPersonagem(novoPersonagem);
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
    _alterarPersonagem(functions.setPersonagens, novoAlvo);

    return duracao;
  }

  function causarDano(alvo, dano, functions) {
    let novaVida = Number(alvo.pv.atual - dano);
    novaVida < 0 ? (novaVida = 0) : null;

    const novoAlvo = {
      ...alvo,
      pv: {
        ...alvo.pv,
        atual: novaVida,
      }
    };
    _alterarPersonagem(functions.setPersonagens, novoAlvo);

    return novoAlvo;
  }

  function consumirItem(personagem, idItem, functions) {
    const item = [...personagem.inventario.consumiveis].find(obj => obj.id === idItem)
    const novosItens = [...personagem.inventario.consumiveis].filter(obj => obj.id !== idItem)

    if(item.quantidade > 1) {
      const novoItem = {...item, quantidade: item.quantidade-1}
      novosItens.push(novoItem)
    }

    const novoPersonagem = {
      ...personagem,
      inventario: {
        ...personagem.inventario,
        consumiveis: novosItens
      },
    };
    
    _alterarPersonagem(functions.setPersonagens, novoPersonagem);
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
    _alterarPersonagem(functions.setPersonagens, novoAlvo);

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
    _alterarPersonagem(functions.setPersonagens, novoAlvo);

    return novoAlvo;
  }

  function atacar(personagem, alvo, modificador, functions) {
    const {dados, total} = rolarDado(1, 20, [modificador]);
    const ataque = {resultadoDado: dados[0].resultado, resultadoTotal: total, ...modificador}
    functions.ativarBannerAtaque(ataque, alvo.defesa, personagem.corTema);
    return total >= alvo.defesa
  }

  async function finalizarAcao(functions, novoAlvo, duracao) {
    setTimeout(() => {
      functions.setAcaoAtiva({ personagem: null, evento: null, alvos: [] });
      functions.setAnimacoes((old) => {
        return { ...old, escolhendoAlvo: false, hudAtivo: true };
      });
      pularTurno(functions.setTurno);
      _alterarPersonagem(functions.setPersonagens, {
        ...novoAlvo,
        effect: { asset: null, isAtivo: false },
      });
    }, await duracao);
  }

  function informarErro(error, functions) {
    console.log(`TOAST: ${error.message} `);
    functions.setAcaoAtiva({ personagem: null, evento: null, alvos: [] });
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false, hudAtivo: true };
    });
  }

  return {
    iniciarEfeito,
    causarDano,
    restaurarVida,
    finalizarAcao,
    gastarMana,
    informarErro,
    consumirItem,
    atacar,
  };
}
