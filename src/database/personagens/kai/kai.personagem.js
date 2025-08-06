import KAI_1_SPRITE from "./assets/KAI_1_SPRITE.png";
import KAI_1_PERFIL from "./assets/KAI_1_PERFIL.png";
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem";
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { ITEM_PROFICIENCIA, PRONOMES } from "../../../constants";

export const KAI = {
  ..._BASE_ORIGINAL,
  id: 24,
  nome: "Kai",
  titulo: "Gatuna Forasteira",
  pronomes: PRONOMES.FEMININO,
  elemento: ELEMENTOS.ACIDO,
  corTema: COR_TEMA.ROSA,
  raridade: 5,
  proficiencia: ITEM_PROFICIENCIA.LEVE,
  comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
  visuais: [
    {
      visualId: 1,
      nome: "Original",
      sprite: KAI_1_SPRITE,
      perfil: KAI_1_PERFIL,
      santuario: null
    }
  ],
  status: {
    pvBase: 20,
    pmBase: 5,
    pvBonus: 3
  },
  atributosBase: {
    forca: 5,
    agilidade: 4,
    magia: 3,
    vigor: 2
  },
  evolucoes: [
    {
      level: 1,
      experienciaNecessaria: 1250,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [{ ataqueId: 14, variantes: [] }],
      habilidades: [{ habilidadeId: 13, variantes: [] }]
    },
    {
      level: 2,
      experienciaNecessaria: 3750,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [{ ataqueId: 14, variantes: [] }],
      habilidades: [{ habilidadeId: 13, variantes: [] }]
    },
    {
      level: 3,
      experienciaNecessaria: 7500,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 14, variantes: [] },
        { ataqueId: 16, variantes: [] }
      ],
      habilidades: [{ habilidadeId: 13, variantes: [] }]
    },
    {
      level: 4,
      experienciaNecessaria: 12500,
      bonusAtributos: { forca: 1, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 14, variantes: [] },
        { ataqueId: 16, variantes: [] }
      ],
      habilidades: [{ habilidadeId: 13, variantes: [] }]
    },
    {
      level: 5,
      experienciaNecessaria: 18750,
      bonusAtributos: { forca: 1, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 14, variantes: [] },
        { ataqueId: 16, variantes: [] },
        { ataqueId: 29, variantes: [] },
        { ataqueId: 49, variantes: [] }
      ],
      habilidades: [{ habilidadeId: 13, variantes: [] }]
    }
  ]
};
