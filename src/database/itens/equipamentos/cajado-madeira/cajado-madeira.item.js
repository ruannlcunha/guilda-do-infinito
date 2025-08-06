import CAJADO_MADEIRA_SPRITE from "./CAJADO_MADEIRA_SPRITE.png";
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png";
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { createBonusItem } from "../../../../utils/create-bonus-item.util";
import { ITEM_PROFICIENCIA } from "../../../../constants";
import { BONUS_DADO } from "../../../../constants/personagens/personagem.constant";
import { ATAQUES } from "../../../ataques";

export const CAJADO_MADEIRA = {
  id: 3,
  nome: "Cajado de Madeira",
  descricao: "Um simples cajado de madeira. Muito usado por druídas, que obtém sua mana pela magia da Natureza.",
  sprite: CAJADO_MADEIRA_SPRITE,
  raridade: 3,
  santuario: BASE_SANTUARIO,
  itemTipo: ITEM_TIPO.EQUIPAMENTO,
  proficiencia: ITEM_PROFICIENCIA.LEVE,
  equipamentoTipo: EQUIPAMENTO_TIPO.ARMA,
  acoes: {
    ataques: [{ ataqueId: ATAQUES.GOLPE_RAPIDO.id, variantes: [] }],
    habilidades: [],
    talentos: []
  },
  bonus: [createBonusItem("Conjuração", BONUS_DADO.CONJURACAO, 1)]
};
