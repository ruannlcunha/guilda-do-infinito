import CLOUD_1_SPRITE from "./assets/CLOUD_1_SPRITE.png";
import CLOUD_1_PERFIL from "./assets/CLOUD_1_PERFIL.png";
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem";
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { ITEM_PROFICIENCIA, PRONOMES } from "../../../constants";

export const CLOUD = {
  ..._BASE_ORIGINAL,
  id: 49,
  nome: "Cloud",
  titulo: "O Pacifista",
  elemento: ELEMENTOS.ELETRICO,
  corTema: COR_TEMA.BRANCO,
  raridade: 5,
  proficiencia: ITEM_PROFICIENCIA.LEVE,
  comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
  visuais: [
    {
      visualId: 1,
      nome: "Original",
      sprite: CLOUD_1_SPRITE,
      perfil: CLOUD_1_PERFIL,
      santuario: null
    }
  ],
  status: {
    pvBase: 14,
    pmBase: 4,
    pvBonus: 3
  },
  atributosBase: {
    forca: 3,
    agilidade: 4,
    magia: 5,
    vigor: 2
  },
  evolucoes: [
    {
      level: 1,
      experienciaNecessaria: 1250,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [{ ataqueId: 19, variantes: [] }],
      habilidades: []
    },
    {
      level: 2,
      experienciaNecessaria: 3750,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [{ ataqueId: 19, variantes: [] }],
      habilidades: []
    },
    {
      level: 3,
      experienciaNecessaria: 7500,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [{ ataqueId: 19, variantes: [] }],
      habilidades: [{ habilidadeId: 1, variantes: [] }]
    },
    {
      level: 4,
      experienciaNecessaria: 12500,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 1, vigor: 0 },
      talentos: [],
      ataques: [{ ataqueId: 19, variantes: [] }],
      habilidades: [{ habilidadeId: 1, variantes: [] }]
    },
    {
      level: 5,
      experienciaNecessaria: 18750,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 1, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 19, variantes: [] },
        { ataqueId: 56, variantes: [] }
      ],
      habilidades: [{ habilidadeId: 1, variantes: [] }]
    }
  ]
};
