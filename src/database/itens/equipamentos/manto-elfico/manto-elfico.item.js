import MANTO_ELFICO_SPRITE from "./MANTO_ELFICO_SPRITE.png";
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png";
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { createBonusItem } from "../../../../utils/create-bonus-item.util";
import { ITEM_PROFICIENCIA } from "../../../../constants";
import { BONUS_DADO } from "../../../../constants/personagens/personagem.constant";

export const MANTO_ELFICO = {
  id: 51,
  nome: "Manto Élfico",
  descricao: `Um manto leve usado pelos elfos da floresta, feito com materiais orgânicos moldados com mana. 
    Sua cor verde tem a função de camuflá-los nas florestas onde habitam.`,
  sprite: MANTO_ELFICO_SPRITE,
  raridade: 4,
  santuario: BASE_SANTUARIO,
  itemTipo: ITEM_TIPO.EQUIPAMENTO,
  proficiencia: ITEM_PROFICIENCIA.LEVE,
  equipamentoTipo: EQUIPAMENTO_TIPO.ARMADURA,
  acoes: {
    ataques: [],
    habilidades: [],
    talentos: []
  },
  bonus: [createBonusItem("Defesa", "defesa", 2), createBonusItem("Conjuração", BONUS_DADO.CONJURACAO, 1)]
};
