import ADAGA_CRISTAL_SPRITE from "./ADAGA_CRISTAL_SPRITE.png";
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png";
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { createBonusItem } from "../../../../utils/create-bonus-item.util";
import { ITEM_PROFICIENCIA } from "../../../../constants";
import { ATAQUES } from "../../../ataques";
import { BONUS_DADO } from "../../../../constants/personagens/personagem.constant";
import { HABILIDADES } from "../../../habilidades";

export const ADAGA_CRISTAL = {
  id: 16,
  nome: "Adaga de Cristal",
  descricao: "Uma adaga de lâmina feita de um aço cristalino muito afiado. Sua lâmina se assemelha a uma jóia, e é muito vista em posse de colecionadores de armas.",
  sprite: ADAGA_CRISTAL_SPRITE,
  raridade: 4,
  santuario: BASE_SANTUARIO,
  itemTipo: ITEM_TIPO.EQUIPAMENTO,
  proficiencia: ITEM_PROFICIENCIA.LEVE,
  equipamentoTipo: EQUIPAMENTO_TIPO.ARMA,
  acoes: {
    ataques: [{ ataqueId: ATAQUES.GOLPE_RAPIDO.id, variantes: [] }],
    habilidades: [{ habilidadeId: HABILIDADES.ATAQUE_AGIL.id, variantes: [] }],
    talentos: []
  },
  bonus: [createBonusItem("Ataque", BONUS_DADO.ATAQUE, 2)]
};
