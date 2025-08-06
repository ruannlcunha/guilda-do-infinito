import ANEL_VIGOR_DOURADO_SPRITE from "./ANEL_VIGOR_DOURADO_SPRITE.png";
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png";
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { createBonusItem } from "../../../../utils/create-bonus-item.util";
import { ITEM_PROFICIENCIA } from "../../../../constants";
import { TALENTOS } from "../../../talentos";

export const ANEL_VIGOR_DOURADO = {
  id: 11,
  nome: "Anel de Vigor Dourado",
  descricao: "Um anel feito de ouro com um efeito super revigorante. Muito utilizado por nobres que desejam se sentir mais jovens e saudáveis.",
  sprite: ANEL_VIGOR_DOURADO_SPRITE,
  raridade: 5,
  santuario: BASE_SANTUARIO,
  itemTipo: ITEM_TIPO.EQUIPAMENTO,
  proficiencia: ITEM_PROFICIENCIA.LEVE,
  equipamentoTipo: EQUIPAMENTO_TIPO.ACESSORIO,
  acoes: {
    ataques: [],
    habilidades: [],
    talentos: [TALENTOS.VITALIDADE_APRIMORADA]
  },
  bonus: [createBonusItem("Vigor", "vigor", 2)]
};
