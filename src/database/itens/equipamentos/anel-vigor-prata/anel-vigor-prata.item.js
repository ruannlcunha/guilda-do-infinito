import ANEL_VIGOR_PRATA_SPRITE from "./ANEL_VIGOR_PRATA_SPRITE.png";
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png";
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { createBonusItem } from "../../../../utils/create-bonus-item.util";
import { ITEM_PROFICIENCIA } from "../../../../constants";
import { TALENTOS } from "../../../talentos";

export const ANEL_VIGOR_PRATA = {
  id: 10,
  nome: "Anel de Vigor Prata",
  descricao: "Um anel feito de prata com um efeito revigorante. É visto sendo utilizado por curandeiros que desejam acelerar o processo de cicatrização dos feridos.",
  sprite: ANEL_VIGOR_PRATA_SPRITE,
  raridade: 4,
  santuario: BASE_SANTUARIO,
  itemTipo: ITEM_TIPO.EQUIPAMENTO,
  proficiencia: ITEM_PROFICIENCIA.LEVE,
  equipamentoTipo: EQUIPAMENTO_TIPO.ACESSORIO,
  acoes: {
    ataques: [],
    habilidades: [],
    talentos: [TALENTOS.VITALIDADE_APRIMORADA]
  },
  bonus: [createBonusItem("Vigor", "vigor", 1)]
};
