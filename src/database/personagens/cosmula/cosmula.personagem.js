import COSMULA_1_SPRITE from "./assets/COSMULA_1_SPRITE.png";
import COSMULA_1_PERFIL from "./assets/COSMULA_1_PERFIL.png";
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem";
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { ITEM_PROFICIENCIA, PRONOMES } from "../../../constants";

export const COSMULA = {
  ..._BASE_ORIGINAL,
  id: 36,
  nome: "Cósmula",
  titulo: "Bruxa Pálida",
  pronomes: PRONOMES.FEMININO,
  elemento: ELEMENTOS.AR,
  corTema: COR_TEMA.CIANO,
  raridade: 4,
  proficiencia: ITEM_PROFICIENCIA.LEVE,
  comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
  visuais: [
    {
      visualId: 1,
      nome: "Original",
      sprite: COSMULA_1_SPRITE,
      perfil: COSMULA_1_PERFIL,
      santuario: null
    }
  ],
  status: {
    pvBase: 12,
    pmBase: 6,
    pvBonus: 2
  },
  atributosBase: {
    forca: 1,
    agilidade: 3,
    magia: 4,
    vigor: 2
  },
  evolucoes: [
    {
      level: 1,
      experienciaNecessaria: 1000,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 1, variantes: [] },
        { ataqueId: 10, variantes: [] },
        { ataqueId: 21, variantes: [] }
      ],
      habilidades: []
    },
    {
      level: 2,
      experienciaNecessaria: 3000,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 1, variantes: [] },
        { ataqueId: 10, variantes: [] },
        { ataqueId: 21, variantes: [] }
      ],
      habilidades: []
    },
    {
      level: 3,
      experienciaNecessaria: 6000,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 1, variantes: [] },
        { ataqueId: 10, variantes: [] },
        { ataqueId: 21, variantes: [] },
        { ataqueId: 5, variantes: [] },
        { ataqueId: 12, variantes: [] }
      ],
      habilidades: [{ habilidadeId: 1, variantes: [] }]
    },
    {
      level: 4,
      experienciaNecessaria: 10000,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 1, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 1, variantes: [] },
        { ataqueId: 10, variantes: [] },
        { ataqueId: 21, variantes: [] },
        { ataqueId: 5, variantes: [] },
        { ataqueId: 12, variantes: [] }
      ],
      habilidades: [{ habilidadeId: 1, variantes: [] }]
    },
    {
      level: 5,
      experienciaNecessaria: 15000,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 1, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 1, variantes: [] },
        { ataqueId: 10, variantes: [] },
        { ataqueId: 21, variantes: [] },
        { ataqueId: 5, variantes: [] },
        { ataqueId: 12, variantes: [] },
        { ataqueId: 51, variantes: [] }
      ],
      habilidades: [{ habilidadeId: 1, variantes: [] }]
    }
  ]
};
