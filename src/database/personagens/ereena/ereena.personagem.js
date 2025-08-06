import EREENA_1_SPRITE from "./assets/EREENA_1_SPRITE.png";
import EREENA_1_PERFIL from "./assets/EREENA_1_PERFIL.png";
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem";
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { ITEM_PROFICIENCIA, PRONOMES } from "../../../constants";

export const EREENA = {
  ..._BASE_ORIGINAL,
  id: 17,
  nome: "Ereena",
  titulo: "Demônio Pálido",
  pronomes: PRONOMES.FEMININO,
  elemento: ELEMENTOS.GELO,
  corTema: COR_TEMA.CIANO,
  raridade: 4,
  proficiencia: ITEM_PROFICIENCIA.LEVE,
  comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
  visuais: [
    {
      visualId: 1,
      nome: "Original",
      sprite: EREENA_1_SPRITE,
      perfil: EREENA_1_PERFIL,
      santuario: null
    }
  ],
  status: {
    pvBase: 20,
    pmBase: 3,
    pvBonus: 5
  },
  atributosBase: {
    forca: 4,
    agilidade: 2,
    magia: 3,
    vigor: 1
  },
  evolucoes: [
    {
      level: 1,
      experienciaNecessaria: 1000,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [{ ataqueId: 14, variantes: [] }],
      habilidades: [{ habilidadeId: 13, variantes: [] }]
    },
    {
      level: 2,
      experienciaNecessaria: 3000,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [{ ataqueId: 14, variantes: [] }],
      habilidades: [{ habilidadeId: 13, variantes: [] }]
    },
    {
      level: 3,
      experienciaNecessaria: 6000,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 14, variantes: [] },
        { ataqueId: 21, variantes: [] }
      ],
      habilidades: [{ habilidadeId: 13, variantes: [] }]
    },
    {
      level: 4,
      experienciaNecessaria: 10000,
      bonusAtributos: { forca: 1, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 14, variantes: [] },
        { ataqueId: 21, variantes: [] }
      ],
      habilidades: [{ habilidadeId: 13, variantes: [] }]
    },
    {
      level: 5,
      experienciaNecessaria: 15000,
      bonusAtributos: { forca: 1, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 14, variantes: [] },
        { ataqueId: 21, variantes: [] },
        { ataqueId: 32, variantes: [] }
      ],
      habilidades: [{ habilidadeId: 13, variantes: [] }]
    }
  ]
};
