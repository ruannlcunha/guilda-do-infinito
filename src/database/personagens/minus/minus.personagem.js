import MINUS_1_SPRITE from "./assets/MINUS_1_SPRITE.png";
import MINUS_1_PERFIL from "./assets/MINUS_1_PERFIL.png";
import MINUS_2_SPRITE from "./assets/MINUS_2_SPRITE.png";
import MINUS_2_PERFIL from "./assets/MINUS_2_PERFIL.png";
import MINUS_3_SPRITE from "./assets/MINUS_3_SPRITE.png";
import MINUS_3_PERFIL from "./assets/MINUS_3_PERFIL.png";
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem";
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { ITEM_PROFICIENCIA, PRONOMES } from "../../../constants";

export const MINUS = {
  ..._BASE_ORIGINAL,
  id: 6,
  nome: "Minus",
  titulo: "Fera Lunar",
  elemento: ELEMENTOS.TREVAS,
  corTema: COR_TEMA.BRANCO,
  raridade: 5,
  proficiencia: ITEM_PROFICIENCIA.LEVE,
  comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
  visuais: [
    {
      visualId: 1,
      nome: "Original",
      sprite: MINUS_1_SPRITE,
      perfil: MINUS_1_PERFIL,
      santuario: null
    },
    {
      visualId: 2,
      nome: "Traje do Bárbaro",
      sprite: MINUS_2_SPRITE,
      perfil: MINUS_2_PERFIL,
      santuario: null
    },
    {
      visualId: 3,
      nome: "Mascarado",
      sprite: MINUS_3_SPRITE,
      perfil: MINUS_3_PERFIL,
      santuario: null
    }
  ],
  status: {
    pvBase: 24,
    pmBase: 3,
    pvBonus: 6
  },
  atributosBase: {
    forca: 5,
    agilidade: 3,
    magia: 2,
    vigor: 4
  },
  evolucoes: [
    {
      level: 1,
      experienciaNecessaria: 1250,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 15, variantes: [] },
        { ataqueId: 75, variantes: [] }
      ],
      habilidades: []
    },
    {
      level: 2,
      experienciaNecessaria: 3750,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 15, variantes: [] },
        { ataqueId: 75, variantes: [] }
      ],
      habilidades: []
    },
    {
      level: 3,
      experienciaNecessaria: 7500,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 15, variantes: [] },
        { ataqueId: 75, variantes: [] }
      ],
      habilidades: []
    },
    {
      level: 4,
      experienciaNecessaria: 12500,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 1 },
      talentos: [],
      ataques: [
        { ataqueId: 15, variantes: [] },
        { ataqueId: 75, variantes: [] }
      ],
      habilidades: []
    },
    {
      level: 5,
      experienciaNecessaria: 18750,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 1 },
      talentos: [],
      ataques: [
        { ataqueId: 15, variantes: [] },
        { ataqueId: 75, variantes: [] },
        { ataqueId: 43, variantes: [] }
      ],
      habilidades: []
    }
  ]
};
