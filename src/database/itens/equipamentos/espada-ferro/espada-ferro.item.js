import ESPADA_FERRO_SPRITE from "./ESPADA_FERRO_SPRITE.png";
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png";
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { createBonusItem } from "../../../../utils/create-bonus-item.util";
import { ITEM_PROFICIENCIA } from "../../../../constants";
import { BONUS_DADO } from "../../../../constants/personagens/personagem.constant";
import { ATAQUES } from "../../../ataques";

export const ESPADA_FERRO = {
  id: 4,
  nome: "Espada de Ferro",
  descricao: "Uma espada com a lâmina feita de ferro. Feita em massa pelos reinos para armar seus guardas, mas também é bem vista utilizada por aventureiros.",
  sprite: ESPADA_FERRO_SPRITE,
  raridade: 3,
  santuario: BASE_SANTUARIO,
  itemTipo: ITEM_TIPO.EQUIPAMENTO,
  proficiencia: ITEM_PROFICIENCIA.PESADA,
  equipamentoTipo: EQUIPAMENTO_TIPO.ARMA,
  acoes: {
    ataques: [{ ataqueId: ATAQUES.GOLPE_PRECISO.id, variantes: [] }],
    habilidades: [],
    talentos: []
  },
  bonus: [createBonusItem("Dano", BONUS_DADO.DANO, 1)]
};
