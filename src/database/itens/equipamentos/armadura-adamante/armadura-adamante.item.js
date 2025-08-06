import ARMADURA_ADAMANTE_SPRITE from "./ARMADURA_ADAMANTE_SPRITE.png";
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png";
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { createBonusItem } from "../../../../utils/create-bonus-item.util";
import { ITEM_PROFICIENCIA } from "../../../../constants";
import { RESISTENCIA_DANO } from "../../../../constants/personagens/personagem.constant";

export const ARMADURA_ADAMANTE = {
  id: 25,
  nome: "Armadura de Adamante",
  descricao: "Uma armadura de adamante, um material raro encontrado nas profundezas de minas, dura e pouco flexível, mas resistente a danos físicos.",
  sprite: ARMADURA_ADAMANTE_SPRITE,
  raridade: 4,
  santuario: BASE_SANTUARIO,
  itemTipo: ITEM_TIPO.EQUIPAMENTO,
  proficiencia: ITEM_PROFICIENCIA.PESADA,
  equipamentoTipo: EQUIPAMENTO_TIPO.ARMADURA,
  acoes: {
    ataques: [],
    habilidades: [],
    talentos: []
  },
  bonus: [createBonusItem("Defesa", "defesa", 3), createBonusItem("Resistencia a Dano (Físico)", RESISTENCIA_DANO.FISICO, 2)]
};
