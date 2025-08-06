import CAJADO_CRISTAL_SPRITE from "./CAJADO_CRISTAL_SPRITE.png";
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png";
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { createBonusItem } from "../../../../utils/create-bonus-item.util";
import { ITEM_PROFICIENCIA } from "../../../../constants";
import { ATAQUES } from "../../../ataques";
import { BONUS_DADO } from "../../../../constants/personagens/personagem.constant";

export const CAJADO_CRISTAL = {
  id: 47,
  nome: "Cajado de Cristal",
  descricao: "Um cajado dourado com um núcleo arcano em forma de um lindo cristal carregado de mana. É muito visto na posse de magos de alto escalão do reino.",
  sprite: CAJADO_CRISTAL_SPRITE,
  raridade: 4,
  santuario: BASE_SANTUARIO,
  itemTipo: ITEM_TIPO.EQUIPAMENTO,
  proficiencia: ITEM_PROFICIENCIA.LEVE,
  equipamentoTipo: EQUIPAMENTO_TIPO.ARMA,
  acoes: {
    ataques: [{ ataqueId: ATAQUES.GOLPE_RAPIDO.id, variantes: [] }],
    habilidades: [],
    talentos: []
  },
  bonus: [createBonusItem("Conjuração", BONUS_DADO.CONJURACAO, 2)]
};
