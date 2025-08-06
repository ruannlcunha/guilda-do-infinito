import MANOPLA_TERRA_SPRITE from "./MANOPLA_TERRA_SPRITE.png";
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png";
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { createBonusItem } from "../../../../utils/create-bonus-item.util";
import { ITEM_PROFICIENCIA } from "../../../../constants";
import { BONUS_DADO } from "../../../../constants/personagens/personagem.constant";
import { ATAQUES } from "../../../ataques";

export const MANOPLA_TERRA = {
  id: 27,
  nome: "Manopla da Terra",
  descricao: `Uma manopla feita de cascas de árvores encontradas em florestas com grande densidade de mana. Está muito ligada a energia da natureza e ao elemento Terra.`,
  sprite: MANOPLA_TERRA_SPRITE,
  raridade: 4,
  santuario: BASE_SANTUARIO,
  itemTipo: ITEM_TIPO.EQUIPAMENTO,
  proficiencia: ITEM_PROFICIENCIA.LEVE,
  equipamentoTipo: EQUIPAMENTO_TIPO.ARMA,
  acoes: {
    ataques: [{ ataqueId: ATAQUES.GOLPE_RAPIDO_TERRA.id, variantes: [] }],
    habilidades: [],
    talentos: []
  },
  bonus: [createBonusItem("Dano", BONUS_DADO.DANO, 1)]
};
