import MANOPLA_RUBI_SPRITE from "./MANOPLA_RUBI_SPRITE.png";
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png";
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { createBonusItem } from "../../../../utils/create-bonus-item.util";
import { ITEM_PROFICIENCIA } from "../../../../constants";
import { BONUS_DADO } from "../../../../constants/personagens/personagem.constant";
import { ATAQUES } from "../../../ataques";

export const MANOPLA_RUBI = {
  id: 26,
  nome: "Manopla Rubi",
  descricao: "Uma manopla vermelha feita de aço reforçado com jóias de rubi. O rubi é uma jóia dura e aumenta o impacto dos golpes.",
  sprite: MANOPLA_RUBI_SPRITE,
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
  bonus: [createBonusItem("Dano", BONUS_DADO.DANO, 2)]
};
