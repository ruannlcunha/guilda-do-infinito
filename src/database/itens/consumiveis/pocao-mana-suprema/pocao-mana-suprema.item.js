import { BANNER_DURACAO } from "../../../../constants";
import { ALVOS } from "../../../../constants/acoes/acoes.constant";
import { ACOES_AUDIO } from "../../../../constants/audios/acoes.constant";
import { EFFECTS } from "../../../../constants/images";
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { useAcoesBase } from "../../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import POCAO_MANA_SUPREMA_SPRITE from "./POCAO_MANA_SUPREMA.png";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, restaurarMana, finalizarAcao, consumirItem, informarErro } = useAcoesBase();

export const POCAO_MANA_SUPREMA = {
  id: 6,
  nome: "Poção de Mana Suprema",
  descricao: "Um enorme frasco de vidro contendo um líquido azul mágico que recupera 4d4 de PM de você mesmo ou de um aliado.",
  efeito: "Recupera 4d4 de PM de você mesmo ou de um aliado.",
  evento: pocaoCuraSupremaEvento,
  alvos: ALVOS.ALIADOS,
  sprite: POCAO_MANA_SUPREMA_SPRITE,
  raridade: 5,
  itemTipo: ITEM_TIPO.CONSUMIVEL
};

function pocaoCuraSupremaEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });
  try {
    let personagemNovo = consumirItem(personagem, acao.id, functions);
    const alvoCorreto = personagem.idCombate === alvo.idCombate ? personagemNovo : alvo;
    const { dados, total } = rolarDado(4, 4, []);
    const alvoRestaurado = restaurarMana(alvoCorreto, total, functions);
    functions.ativarBannerRolagem([...dados], [], total, personagem);
    function _etapas() {
      const duracao = iniciarEfeito(alvoRestaurado, functions, EFFECTS.CURA_2, ACOES_AUDIO.CURA);
      functions.adicionarLog(`${personagem.nome} usou ${acao.nome} e recuperou ${total} PM de ${alvo.nome}.`);
      finalizarAcao(personagemNovo, functions, alvoRestaurado, duracao);
    }
    const timeout = setTimeout(() => {
      _etapas();
    }, BANNER_DURACAO.ROLAGEM);

    functions.setBanners((old) => {
      return {
        ...old,
        evento: () => {
          clearTimeout(timeout);
          _etapas();
        }
      };
    });
  } catch (error) {
    informarErro(error, functions);
    throw error;
  }
}
