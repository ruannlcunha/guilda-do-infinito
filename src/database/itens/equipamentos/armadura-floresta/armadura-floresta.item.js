import ARMADURA_FLORESTA_SPRITE from "./ARMADURA_FLORESTA_SPRITE.png";
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png";
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { createBonusItem } from "../../../../utils/create-bonus-item.util";
import { ITEM_PROFICIENCIA } from "../../../../constants";
import { RESISTENCIA_DANO } from "../../../../constants/personagens/personagem.constant";

export const ARMADURA_FLORESTA = {
  id: 29,
  nome: "Armadura da Floresta",
  descricao: `Uma armadura feita de uma mistura de aço e cascas de árvores encontradas em florestas com grande densidade de mana.
    Está muito ligada a energia da natureza e ao elemento Terra.`,
  sprite: ARMADURA_FLORESTA_SPRITE,
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
  bonus: [createBonusItem("Defesa", "defesa", 3), createBonusItem("Resistencia a Dano (Terra)", RESISTENCIA_DANO.TERRA, 2)]
};
