import LICHT_1_SPRITE from "./assets/LICHT_1_SPRITE.png";
import LICHT_1_PERFIL from "./assets/LICHT_1_PERFIL.png";
import LICHT_2_SPRITE from "./assets/LICHT_2_SPRITE.png";
import LICHT_2_PERFIL from "./assets/LICHT_2_PERFIL.png";
import LICHT_3_SPRITE from "./assets/LICHT_3_SPRITE.png";
import LICHT_3_PERFIL from "./assets/LICHT_3_PERFIL.png";
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem";
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { ITEM_PROFICIENCIA, PRONOMES } from "../../../constants";

export const LICHT = {
  ..._BASE_ORIGINAL,
  id: 56,
  nome: "Licht",
  titulo: "Espectro Esquecido",
  elemento: ELEMENTOS.TREVAS,
  corTema: COR_TEMA.AZUL,
  raridade: 5,
  proficiencia: ITEM_PROFICIENCIA.LEVE,
  comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
  visuais: [
    {
      visualId: 1,
      nome: "Original",
      sprite: LICHT_1_SPRITE,
      perfil: LICHT_1_PERFIL,
      santuario: null
    },
    {
      visualId: 2,
      nome: "Traje Formal",
      sprite: LICHT_2_SPRITE,
      perfil: LICHT_2_PERFIL,
      santuario: null
    },
    {
      visualId: 3,
      nome: "Forma de Criança",
      sprite: LICHT_3_SPRITE,
      perfil: LICHT_3_PERFIL,
      santuario: null
    }
  ],
  status: {
    pvBase: 12,
    pmBase: 6,
    pvBonus: 2
  },
  atributosBase: {
    forca: 2,
    agilidade: 4,
    magia: 5,
    vigor: 3
  },
  evolucoes: [
    {
      level: 1,
      experienciaNecessaria: 1250,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 1, variantes: [] },
        { ataqueId: 5, variantes: [] }
      ],
      habilidades: []
    },
    {
      level: 2,
      experienciaNecessaria: 3750,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 1, variantes: [] },
        { ataqueId: 5, variantes: [] }
      ],
      habilidades: []
    },
    {
      level: 3,
      experienciaNecessaria: 7500,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 1, variantes: [] },
        { ataqueId: 5, variantes: [] },
        { ataqueId: 12, variantes: [] }
      ],
      habilidades: [{ habilidadeId: 1, variantes: [] }]
    },
    {
      level: 4,
      experienciaNecessaria: 12500,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 1, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 1, variantes: [] },
        { ataqueId: 5, variantes: [] },
        { ataqueId: 12, variantes: [] }
      ],
      habilidades: [{ habilidadeId: 1, variantes: [] }]
    },
    {
      level: 5,
      experienciaNecessaria: 18750,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 1, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 1, variantes: [] },
        { ataqueId: 5, variantes: [] },
        { ataqueId: 12, variantes: [] }
      ],
      habilidades: [{ habilidadeId: 1, variantes: [] }]
    }
  ]
};
