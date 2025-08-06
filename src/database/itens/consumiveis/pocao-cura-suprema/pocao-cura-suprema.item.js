import { ALVOS } from "../../../../constants/acoes/acoes.constant";
import { ACOES_AUDIO } from "../../../../constants/audios/acoes.constant";
import { EFFECTS } from "../../../../constants/images";
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { useAcoesBase } from "../../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import POCAO_CURA_SUPREMA_SPRITE from "./POCAO_CURA_SUPREMA.png";

const { iniciarEfeito, finalizarAcao, restaurarVida, consumirItem, informarErro } = useAcoesBase();

export const POCAO_CURA_SUPREMA = {
  id: 3,
  nome: "Poção de Cura Suprema",
  descricao: "Um enorme frasco de vidro contendo um líquido vermelho mágico que cura completamente os PV de você mesmo ou de um aliado.",
  efeito: "Cura completamente os PV de você mesmo ou de um aliado.",
  evento: pocaoCuraSupremaEvento,
  alvos: ALVOS.ALIADOS,
  sprite: POCAO_CURA_SUPREMA_SPRITE,
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
    const alvoRestaurado = restaurarVida(alvoCorreto, alvoCorreto.pv.maximo, functions);

    functions.adicionarLog(`${personagem.nome} usou ${acao.nome} e curou completamente os PV de ${alvo.nome}.`);
    const duracao = iniciarEfeito(alvoRestaurado, functions, EFFECTS.CURA_1, ACOES_AUDIO.CURA);
    finalizarAcao(personagemNovo, functions, alvoRestaurado, duracao);
  } catch (error) {
    informarErro(error, functions);
    throw error;
  }
}
