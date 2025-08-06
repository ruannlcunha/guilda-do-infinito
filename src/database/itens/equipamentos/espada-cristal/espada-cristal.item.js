import ESPADA_CRISTAL_SPRITE from "./ESPADA_CRISTAL_SPRITE.png";
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png";
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { createBonusItem } from "../../../../utils/create-bonus-item.util";
import { ITEM_PROFICIENCIA } from "../../../../constants";
import { ATAQUES } from "../../../ataques";
import { BONUS_DADO } from "../../../../constants/personagens/personagem.constant";

export const ESPADA_CRISTAL = {
  id: 15,
  nome: "Espada de Cristal",
  descricao: "Uma espada de lâmina feita de um aço cristalino muito afiado. Sua lâmina se assemelha a uma jóia, e é muito vista em posse de colecionadores de armas.",
  sprite: ESPADA_CRISTAL_SPRITE,
  raridade: 4,
  santuario: BASE_SANTUARIO,
  itemTipo: ITEM_TIPO.EQUIPAMENTO,
  proficiencia: ITEM_PROFICIENCIA.PESADA,
  equipamentoTipo: EQUIPAMENTO_TIPO.ARMA,
  acoes: {
    ataques: [{ ataqueId: ATAQUES.GOLPE_PRECISO.id, variantes: [] }],
    habilidades: [],
    talentos: []
  },
  bonus: [createBonusItem("Ataque", BONUS_DADO.ATAQUE, 2)]
};
