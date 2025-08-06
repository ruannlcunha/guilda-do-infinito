import CAJADO_ANCIAO_SPRITE from "./CAJADO_ANCIAO_SPRITE.png";
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png";
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { createBonusItem } from "../../../../utils/create-bonus-item.util";
import { ITEM_PROFICIENCIA } from "../../../../constants";
import { BONUS_DADO } from "../../../../constants/personagens/personagem.constant";
import { ATAQUES } from "../../../ataques";

export const CAJADO_ANCIAO = {
  id: 49,
  nome: "Cajado Ancião",
  descricao: `Um cajado feito com os galhos de uma Árvore Anciã, uma árvore considerada divina e com enorme concentração de mana que transborda no usuário.
    É extremamente difícil obter um desses cajados, pois além da madeira de uma Árvore Anciã ser de grande rigidez, elas também são protegidas por tribos devotas à Deusa da Natureza.`,
  sprite: CAJADO_ANCIAO_SPRITE,
  raridade: 5,
  santuario: BASE_SANTUARIO,
  itemTipo: ITEM_TIPO.EQUIPAMENTO,
  proficiencia: ITEM_PROFICIENCIA.LEVE,
  equipamentoTipo: EQUIPAMENTO_TIPO.ARMA,
  acoes: {
    ataques: [
      { ataqueId: ATAQUES.GOLPE_RAPIDO.id, variantes: [] },
      { ataqueId: ATAQUES.GOLPE_RAPIDO_TERRA.id, variantes: [] },
      { ataqueId: ATAQUES.RAIZES_CORTANTES.id, variantes: [] }
    ],
    habilidades: [],
    talentos: []
  },
  bonus: [createBonusItem("Conjuração", BONUS_DADO.CONJURACAO, 3)]
};
