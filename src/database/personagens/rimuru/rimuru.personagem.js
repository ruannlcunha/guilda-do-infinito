import RIMURU_1_SPRITE from "./assets/RIMURU_1_SPRITE.png";
import RIMURU_1_PERFIL from "./assets/RIMURU_1_PERFIL.png";
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem";
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { ITEM_PROFICIENCIA, PRONOMES } from "../../../constants";

export const RIMURU = {
  ..._BASE_ORIGINAL,
  id: 43,
  nome: "Rimuru",
  titulo: "Herói Assassino",
  elemento: ELEMENTOS.AR,
  corTema: COR_TEMA.TURQUESA,
  raridade: 5,
  proficiencia: ITEM_PROFICIENCIA.LEVE,
  comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
  visuais: [
    {
      visualId: 1,
      nome: "Original",
      sprite: RIMURU_1_SPRITE,
      perfil: RIMURU_1_PERFIL,
      santuario: null
    }
  ],
  status: {
    pvBase: 14,
    pmBase: 4,
    pvBonus: 3
  },
  atributosBase: {
    forca: 4,
    agilidade: 5,
    magia: 3,
    vigor: 2
  },
  evolucoes: [
    {
      level: 1,
      experienciaNecessaria: 1000,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [{ ataqueId: 14, variantes: [] }],
      habilidades: []
    },
    {
      level: 2,
      experienciaNecessaria: 3000,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [{ ataqueId: 14, variantes: [] }],
      habilidades: []
    },
    {
      level: 3,
      experienciaNecessaria: 6000,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 14, variantes: [] },
        { ataqueId: 16, variantes: [] }
      ],
      habilidades: []
    },
    {
      level: 4,
      experienciaNecessaria: 10000,
      bonusAtributos: { forca: 0, agilidade: 1, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 14, variantes: [] },
        { ataqueId: 16, variantes: [] }
      ],
      habilidades: []
    },
    {
      level: 5,
      experienciaNecessaria: 15000,
      bonusAtributos: { forca: 0, agilidade: 1, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 14, variantes: [] },
        { ataqueId: 16, variantes: [] },
        { ataqueId: 31, variantes: [] },
        { ataqueId: 51, variantes: [] }
      ],
      habilidades: []
    }
  ]
};
