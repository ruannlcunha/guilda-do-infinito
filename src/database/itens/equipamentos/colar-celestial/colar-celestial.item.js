import COLAR_CELESTIAL_SPRITE from "./COLAR_CELESTIAL_SPRITE.png";
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png";
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { createBonusItem } from "../../../../utils/create-bonus-item.util";
import { ITEM_PROFICIENCIA } from "../../../../constants";
import { RESISTENCIA_DANO } from "../../../../constants/personagens/personagem.constant";

export const COLAR_CELESTIAL = {
  id: 54,
  nome: "Colar Celestial",
  descricao: `Um colar abençoado diretamente por um anjo, carrega a energia dos céus consigo.
    Aquele que o utiliza se sente mais próximo do seu deus, o ar que respira se torna mais puro, e os sentimentos negativos são minimizados.`,
  sprite: COLAR_CELESTIAL_SPRITE,
  raridade: 5,
  santuario: BASE_SANTUARIO,
  itemTipo: ITEM_TIPO.EQUIPAMENTO,
  proficiencia: ITEM_PROFICIENCIA.LEVE,
  equipamentoTipo: EQUIPAMENTO_TIPO.ACESSORIO,
  acoes: {
    ataques: [],
    habilidades: [],
    talentos: []
  },
  bonus: [createBonusItem("Vigor", "vigor", 1), createBonusItem("Resistência a Dano (Luz)", RESISTENCIA_DANO.LUZ, 5), createBonusItem("Resistência a Dano (Ar)", RESISTENCIA_DANO.AR, 5)]
};
