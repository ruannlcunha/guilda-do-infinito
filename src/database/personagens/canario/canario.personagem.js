import CANARIO_1_SPRITE from "./assets/CANARIO_1_SPRITE.png";
import CANARIO_1_PERFIL from "./assets/CANARIO_1_PERFIL.png";
import CANARIO_2_SPRITE from "./assets/CANARIO_2_SPRITE.png";
import CANARIO_2_PERFIL from "./assets/CANARIO_2_PERFIL.png";
import CANARIO_3_SPRITE from "./assets/CANARIO_3_SPRITE.png";
import CANARIO_3_PERFIL from "./assets/CANARIO_3_PERFIL.png";
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem";
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { ITEM_PROFICIENCIA, PRONOMES } from "../../../constants";

export const CANARIO = {
  ..._BASE_ORIGINAL,
  id: 11,
  nome: "Canário",
  titulo: "Lider Misterioso",
  elemento: ELEMENTOS.TREVAS,
  corTema: COR_TEMA.PRETO,
  raridade: 4,
  proficiencia: ITEM_PROFICIENCIA.LEVE,
  comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
  visuais: [
    {
      visualId: 1,
      nome: "Original",
      sprite: CANARIO_1_SPRITE,
      perfil: CANARIO_1_PERFIL,
      santuario: null
    },
    {
      visualId: 2,
      nome: "Sem Máscara",
      sprite: CANARIO_2_SPRITE,
      perfil: CANARIO_2_PERFIL,
      santuario: null
    },
    {
      visualId: 3,
      nome: "Traje Comum",
      sprite: CANARIO_3_SPRITE,
      perfil: CANARIO_3_PERFIL,
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
    agilidade: 3,
    magia: 2,
    vigor: 1
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
        { ataqueId: 16, variantes: [] },
        { ataqueId: 5, variantes: [] }
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
        { ataqueId: 16, variantes: [] },
        { ataqueId: 5, variantes: [] }
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
        { ataqueId: 5, variantes: [] },
        { ataqueId: 33, variantes: [] }
      ],
      habilidades: []
    }
  ]
};
