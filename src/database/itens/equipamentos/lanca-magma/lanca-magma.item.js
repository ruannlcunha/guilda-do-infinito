import LANCA_MAGMA_SPRITE from "./LANCA_MAGMA_SPRITE.png";
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png";
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { createBonusItem } from "../../../../utils/create-bonus-item.util";
import { ITEM_PROFICIENCIA } from "../../../../constants";
import { ATAQUES } from "../../../ataques";
import { BONUS_DADO } from "../../../../constants/personagens/personagem.constant";

export const LANCA_MAGMA = {
  id: 22,
  nome: "Lança de Magma",
  descricao: "Uma lança forjada no magma de um vulcão. Sua lâmina queima os inimigos perfurados por ela.",
  sprite: LANCA_MAGMA_SPRITE,
  raridade: 4,
  santuario: BASE_SANTUARIO,
  itemTipo: ITEM_TIPO.EQUIPAMENTO,
  proficiencia: ITEM_PROFICIENCIA.PESADA,
  equipamentoTipo: EQUIPAMENTO_TIPO.ARMA,
  acoes: {
    ataques: [{ ataqueId: ATAQUES.GOLPE_PRECISO_FOGO.id, variantes: [] }],
    habilidades: [],
    talentos: []
  },
  bonus: [createBonusItem("Ataque", BONUS_DADO.ATAQUE, 1)]
};
