import MAYA_1_SPRITE from "./assets/MAYA_1_SPRITE.png";
import MAYA_1_PERFIL from "./assets/MAYA_1_PERFIL.png";
import MAYA_2_SPRITE from "./assets/MAYA_2_SPRITE.png";
import MAYA_2_PERFIL from "./assets/MAYA_2_PERFIL.png";
import MAYA_3_SPRITE from "./assets/MAYA_3_SPRITE.png";
import MAYA_3_PERFIL from "./assets/MAYA_3_PERFIL.png";
import MAYA_4_SPRITE from "./assets/MAYA_4_SPRITE.png";
import MAYA_4_PERFIL from "./assets/MAYA_4_PERFIL.png";
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem";
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { ITEM_PROFICIENCIA, PRONOMES } from "../../../constants";

export const MAYA = {
  ..._BASE_ORIGINAL,
  id: 8,
  nome: "Maya",
  titulo: "Imperatriz das Lâminas",
  pronomes: PRONOMES.FEMININO,
  elemento: ELEMENTOS.AR,
  corTema: COR_TEMA.PRETO,
  raridade: 5,
  proficiencia: ITEM_PROFICIENCIA.LEVE,
  comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
  visuais: [
    {
      visualId: 1,
      nome: "Original",
      sprite: MAYA_1_SPRITE,
      perfil: MAYA_1_PERFIL,
      santuario: null
    },
    {
      visualId: 2,
      nome: "Traje do Corvo",
      sprite: MAYA_2_SPRITE,
      perfil: MAYA_2_PERFIL,
      santuario: null
    },
    {
      visualId: 3,
      nome: "Traje de Gala",
      sprite: MAYA_3_SPRITE,
      perfil: MAYA_3_PERFIL,
      santuario: null
    },
    {
      visualId: 4,
      nome: "Traje Pirata",
      sprite: MAYA_4_SPRITE,
      perfil: MAYA_4_PERFIL,
      santuario: null
    }
  ],
  status: {
    pvBase: 16,
    pmBase: 3,
    pvBonus: 4
  },
  atributosBase: {
    forca: 4,
    agilidade: 5,
    magia: 2,
    vigor: 3
  },
  evolucoes: [
    {
      level: 1,
      experienciaNecessaria: 1250,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [{ ataqueId: 14, variantes: [] }],
      habilidades: []
    },
    {
      level: 2,
      experienciaNecessaria: 3750,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [{ ataqueId: 14, variantes: [] }],
      habilidades: []
    },
    {
      level: 3,
      experienciaNecessaria: 7500,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 14, variantes: [] },
        { ataqueId: 16, variantes: [] },
        { ataqueId: 49, variantes: [] }
      ],
      habilidades: []
    },
    {
      level: 4,
      experienciaNecessaria: 12500,
      bonusAtributos: { forca: 1, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 14, variantes: [] },
        { ataqueId: 16, variantes: [] },
        { ataqueId: 49, variantes: [] }
      ],
      habilidades: []
    },
    {
      level: 5,
      experienciaNecessaria: 18750,
      bonusAtributos: { forca: 1, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 14, variantes: [] },
        { ataqueId: 16, variantes: [] },
        { ataqueId: 49, variantes: [] },
        { ataqueId: 31, variantes: [] },
        { ataqueId: 51, variantes: [] }
      ],
      habilidades: []
    }
  ]
};
