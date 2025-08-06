import DEVORADORA_ALMAS_SPRITE from "./DEVORADORA_ALMAS_SPRITE.png";
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png";
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { createBonusItem } from "../../../../utils/create-bonus-item.util";
import { ITEM_PROFICIENCIA } from "../../../../constants";
import { BONUS_DADO } from "../../../../constants/personagens/personagem.constant";
import { ATAQUES } from "../../../ataques";

export const DEVORADORA_ALMAS = {
  id: 6,
  nome: "Devoradora de Almas",
  descricao: `Uma espada mágica responsável pela morte de milhares de seres vivos.
    Sua lâmina em cor de sangue é alimentada pelo cristal mágico em forma de olho que carrega as almas daqueles que assassina.
    Dizem que o portador é atormentado pelas almas em seu cristal, sofrendo de pesadelos todas as noites.`,
  sprite: DEVORADORA_ALMAS_SPRITE,
  raridade: 5,
  santuario: BASE_SANTUARIO,
  itemTipo: ITEM_TIPO.EQUIPAMENTO,
  proficiencia: ITEM_PROFICIENCIA.PESADA,
  equipamentoTipo: EQUIPAMENTO_TIPO.ARMA,
  acoes: {
    ataques: [
      { ataqueId: ATAQUES.GOLPE_PRECISO.id, variantes: [] },
      { ataqueId: ATAQUES.GOLPE_PRECISO_TREVAS.id, variantes: [] },
      { ataqueId: ATAQUES.DRENAR_VITALIDADE.id, variantes: [] }
    ],
    habilidades: [],
    talentos: []
  },
  bonus: [createBonusItem("Ataque", BONUS_DADO.ATAQUE, 1), createBonusItem("Dano", BONUS_DADO.DANO, 1), createBonusItem("Conjuração", BONUS_DADO.CONJURACAO, 1)]
};
