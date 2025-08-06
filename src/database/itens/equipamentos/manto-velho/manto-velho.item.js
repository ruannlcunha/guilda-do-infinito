import MANTO_VELHO_SPRITE from "./MANTO_VELHO_SPRITE.png";
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png";
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { createBonusItem } from "../../../../utils/create-bonus-item.util";
import { ITEM_PROFICIENCIA } from "../../../../constants";

export const MANTO_VELHO = {
  id: 50,
  nome: "Manto Velho",
  descricao: "Um manto sujo e desgastado, feito com tecidos velhos e finos. É visto sendo utilizado por povos de baixa renda.",
  sprite: MANTO_VELHO_SPRITE,
  raridade: 3,
  santuario: BASE_SANTUARIO,
  itemTipo: ITEM_TIPO.EQUIPAMENTO,
  proficiencia: ITEM_PROFICIENCIA.LEVE,
  equipamentoTipo: EQUIPAMENTO_TIPO.ARMADURA,
  acoes: {
    ataques: [],
    habilidades: [],
    talentos: []
  },
  bonus: [createBonusItem("Defesa", "defesa", 1)]
};
