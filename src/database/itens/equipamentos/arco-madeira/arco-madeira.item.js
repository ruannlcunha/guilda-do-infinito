import ARCO_MADEIRA_SPRITE from "./ARCO_MADEIRA_SPRITE.png";
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png";
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { createBonusItem } from "../../../../utils/create-bonus-item.util";
import { ITEM_PROFICIENCIA } from "../../../../constants";
import { BONUS_DADO } from "../../../../constants/personagens/personagem.constant";
import { ATAQUES } from "../../../ataques";

export const ARCO_MADEIRA = {
  id: 2,
  nome: "Arco de Madeira",
  descricao: "Um simples arco de madeira. Muito usado em treinos, mas possui um disparo menos potente e de menor alcance.",
  sprite: ARCO_MADEIRA_SPRITE,
  raridade: 3,
  santuario: BASE_SANTUARIO,
  itemTipo: ITEM_TIPO.EQUIPAMENTO,
  proficiencia: ITEM_PROFICIENCIA.LEVE,
  equipamentoTipo: EQUIPAMENTO_TIPO.ARMA,
  acoes: {
    ataques: [{ ataqueId: ATAQUES.TIRO_PRECISO.id, variantes: [] }],
    habilidades: [],
    talentos: []
  },
  bonus: [createBonusItem("Ataque", BONUS_DADO.ATAQUE, 1)]
};
