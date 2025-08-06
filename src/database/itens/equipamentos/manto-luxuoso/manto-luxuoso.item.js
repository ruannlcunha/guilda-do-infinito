import MANTO_LUXUOSO_SPRITE from "./MANTO_LUXUOSO_SPRITE.png";
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png";
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { createBonusItem } from "../../../../utils/create-bonus-item.util";
import { ITEM_PROFICIENCIA } from "../../../../constants";
import { BONUS_DADO } from "../../../../constants/personagens/personagem.constant";

export const MANTO_LUXUOSO = {
  id: 52,
  nome: "Manto Luxuoso",
  descricao: `Um manto caro feito com materiais de qualidade nobre, como linhas de seda e penas de grifo.
    Em seu interior está cravado runas arcanas que auxiliam no fluxo de mana do usuário.`,
  sprite: MANTO_LUXUOSO_SPRITE,
  raridade: 5,
  santuario: BASE_SANTUARIO,
  itemTipo: ITEM_TIPO.EQUIPAMENTO,
  proficiencia: ITEM_PROFICIENCIA.LEVE,
  equipamentoTipo: EQUIPAMENTO_TIPO.ARMADURA,
  acoes: {
    ataques: [],
    habilidades: [],
    talentos: []
  },
  bonus: [createBonusItem("Defesa", "defesa", 3), createBonusItem("Magia", "magia", 1), createBonusItem("Conjuração", BONUS_DADO.CONJURACAO, 1)]
};
