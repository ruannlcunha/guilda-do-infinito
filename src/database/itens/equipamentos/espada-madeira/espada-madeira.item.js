import ESPADA_MADEIRA_SPRITE from "./ESPADA_MADEIRA_SPRITE.png";
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png";
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { createBonusItem } from "../../../../utils/create-bonus-item.util";
import { ITEM_PROFICIENCIA } from "../../../../constants";
import { BONUS_DADO } from "../../../../constants/personagens/personagem.constant";
import { ATAQUES } from "../../../ataques";

export const ESPADA_MADEIRA = {
  id: 1,
  nome: "Espada de Madeira",
  descricao: "Uma simples espada feita de madeira. Muito utilizada em treinos de combate para não ferir fatalmente os envolvidos.",
  sprite: ESPADA_MADEIRA_SPRITE,
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
  bonus: [createBonusItem("Ataque", BONUS_DADO.ATAQUE, 1)]
};
