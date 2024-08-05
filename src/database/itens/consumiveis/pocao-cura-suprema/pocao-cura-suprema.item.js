
import { ACOES_AUDIO } from "../../../../constants/audios/acoes.constant";
import { EFFECTS } from "../../../../constants/images";
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant";
import { useAcoesBase } from "../../../../hook/batalha/acoes/_base/use-acoes-base.hook";

const { iniciarEfeito, restaurarVida, finalizarAcao, consumirItem, informarErro } = useAcoesBase();

export const POCAO_CURA_SUPREMA = {
    id: 14,
    nome: "Poção de Cura Suprema",
    descricao: "Um enorme frasco de vidro contendo um líquido vermelho mágico que recupera sua vida.",
    efeito: "Cura completamente o PV de você mesmo ou de um aliado.",
    evento: pocaoCuraSuprema,
    alvos: "ALIADOS",
    sprite: "/guilda-do-infinito/src/database/itens/consumiveis/pocao-cura-suprema/POCAO_CURA_SUPREMA.png",
    raridade: 5,
    categoria: ITENS_CATEGORIA.CONSUMIVEL,
}

function pocaoCuraSuprema(personagem, alvo, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    try {
      const personagemNovo = consumirItem(personagem, POCAO_CURA_SUPREMA.id, functions)
      const novoAlvo = personagem.idCombate===alvo.idCombate ? personagemNovo : alvo
      const alvoRestaurado = restaurarVida(novoAlvo, novoAlvo.pv.maximo, functions);
      const duracao = iniciarEfeito(alvoRestaurado, functions, EFFECTS.CURA_EFFECT, ACOES_AUDIO.CURA);
      finalizarAcao(functions, alvoRestaurado, duracao);
    } catch (error) {
      informarErro(error, functions)
    }
}