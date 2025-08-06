import ANEL_VIGOR_SPRITE from "./ANEL_VIGOR_SPRITE.png";
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png";
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { ITEM_PROFICIENCIA } from "../../../../constants";
import { TALENTOS } from "../../../talentos";

export const ANEL_VIGOR = {
  id: 9,
  nome: "Anel de Vigor",
  descricao: "Um anel feito de bronze com um efeito revigorante. Ajuda o usuário a se sentir mais disposto.",
  sprite: ANEL_VIGOR_SPRITE,
  raridade: 3,
  santuario: BASE_SANTUARIO,
  itemTipo: ITEM_TIPO.EQUIPAMENTO,
  proficiencia: ITEM_PROFICIENCIA.LEVE,
  equipamentoTipo: EQUIPAMENTO_TIPO.ACESSORIO,
  acoes: {
    ataques: [],
    habilidades: [],
    talentos: [TALENTOS.VITALIDADE_APRIMORADA]
  },
  bonus: []
};
