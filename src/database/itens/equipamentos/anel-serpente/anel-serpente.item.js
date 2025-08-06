import ANEL_SERPENTE_SPRITE from "./ANEL_SERPENTE_SPRITE.png";
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png";
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { createBonusItem } from "../../../../utils/create-bonus-item.util";
import { ITEM_PROFICIENCIA } from "../../../../constants";
import { TALENTOS } from "../../../talentos";

export const ANEL_SERPENTE = {
  id: 31,
  nome: "Anel da Serpente",
  descricao: `Um item mágico que se assemelha a uma pequena cobra dourada que se enrola em seu dedo formando um anel, 
    para no fim injetar um veneno através de uma leve mordidada, modificando o seu sangue.`,
  sprite: ANEL_SERPENTE_SPRITE,
  raridade: 4,
  santuario: BASE_SANTUARIO,
  itemTipo: ITEM_TIPO.EQUIPAMENTO,
  proficiencia: ITEM_PROFICIENCIA.LEVE,
  equipamentoTipo: EQUIPAMENTO_TIPO.ACESSORIO,
  acoes: {
    ataques: [],
    habilidades: [],
    talentos: [TALENTOS.SANGUE_DE_COBRA]
  },
  bonus: [createBonusItem("Vigor", "vigor", 1)]
};
