import ARCO_MAGMA_SPRITE from "./ARCO_MAGMA_SPRITE.png";
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png";
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { createBonusItem } from "../../../../utils/create-bonus-item.util";
import { ITEM_PROFICIENCIA } from "../../../../constants";
import { ATAQUES } from "../../../ataques";
import { BONUS_DADO } from "../../../../constants/personagens/personagem.constant";

export const ARCO_MAGMA = {
  id: 19,
  nome: "Arco de Magma",
  descricao: "Um arco forjado no magma de um vulcão. Suas flechas ao serem disparadas entram em combustão, queimando o alvo.",
  sprite: ARCO_MAGMA_SPRITE,
  raridade: 4,
  santuario: BASE_SANTUARIO,
  itemTipo: ITEM_TIPO.EQUIPAMENTO,
  proficiencia: ITEM_PROFICIENCIA.LEVE,
  equipamentoTipo: EQUIPAMENTO_TIPO.ARMA,
  acoes: {
    ataques: [{ ataqueId: ATAQUES.TIRO_PRECISO_FOGO.id, variantes: [] }],
    habilidades: [],
    talentos: []
  },
  bonus: [createBonusItem("Dano", BONUS_DADO.DANO, 1)]
};
