import MOXXIE_1_SPRITE from "./assets/MOXXIE_1_SPRITE.png";
import MOXXIE_1_PERFIL from "./assets/MOXXIE_1_PERFIL.png";
import MOXXIE_2_SPRITE from "./assets/MOXXIE_2_SPRITE.png";
import MOXXIE_2_PERFIL from "./assets/MOXXIE_2_PERFIL.png";
import MOXXIE_3_SPRITE from "./assets/MOXXIE_3_SPRITE.png";
import MOXXIE_3_PERFIL from "./assets/MOXXIE_3_PERFIL.png";
import MOXXIE_4_SPRITE from "./assets/MOXXIE_4_SPRITE.gif";
import MOXXIE_4_PERFIL from "./assets/MOXXIE_4_PERFIL.gif";
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem";
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { ITEM_PROFICIENCIA, PRONOMES } from "../../../constants";
import { ATAQUES } from "../../ataques";

export const MOXXIE = {
  ..._BASE_ORIGINAL,
  id: 13,
  nome: "Moxxie",
  titulo: "Anjo das Florestas",
  elemento: ELEMENTOS.TERRA,
  corTema: COR_TEMA.VERDE,
  raridade: 5,
  proficiencia: ITEM_PROFICIENCIA.LEVE,
  comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
  visuais: [
    {
      visualId: 1,
      nome: "Original",
      sprite: MOXXIE_1_SPRITE,
      perfil: MOXXIE_1_PERFIL,
      santuario: null
    },
    {
      visualId: 2,
      nome: "Traje Casual",
      sprite: MOXXIE_2_SPRITE,
      perfil: MOXXIE_2_PERFIL,
      santuario: null
    },
    {
      visualId: 3,
      nome: "Traje de Inverno",
      sprite: MOXXIE_3_SPRITE,
      perfil: MOXXIE_3_PERFIL,
      santuario: null
    },
    {
      visualId: 4,
      nome: "Armadura Divina",
      sprite: MOXXIE_4_SPRITE,
      perfil: MOXXIE_4_PERFIL,
      santuario: null
    }
  ],
  status: {
    pvBase: 16,
    pmBase: 4,
    pvBonus: 4
  },
  atributosBase: {
    forca: 4,
    agilidade: 2,
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
        { ataqueId: 14, variantes: [] },
        { ataqueId: 6, variantes: [] }
      ],
      habilidades: [
        { habilidadeId: 1, variantes: [] },
        { habilidadeId: 11, variantes: [] }
      ]
    },
    {
      level: 2,
      experienciaNecessaria: 3750,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 14, variantes: [] },
        { ataqueId: 6, variantes: [] }
      ],
      habilidades: [
        { habilidadeId: 1, variantes: [] },
        { habilidadeId: 11, variantes: [] }
      ]
    },
    {
      level: 3,
      experienciaNecessaria: 7500,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 14, variantes: [] },
        { ataqueId: 6, variantes: [] },
        { ataqueId: 12, variantes: [] },
        { ataqueId: 9, variantes: [] }
      ],
      habilidades: [
        { habilidadeId: 1, variantes: [] },
        { habilidadeId: 11, variantes: [] }
      ]
    },
    {
      level: 4,
      experienciaNecessaria: 12500,
      bonusAtributos: { forca: 0, agilidade: 1, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 14, variantes: [] },
        { ataqueId: 6, variantes: [] },
        { ataqueId: 12, variantes: [] },
        { ataqueId: 9, variantes: [] }
      ],
      habilidades: [
        { habilidadeId: 1, variantes: [] },
        { habilidadeId: 11, variantes: [] }
      ]
    },
    {
      level: 5,
      experienciaNecessaria: 18750,
      bonusAtributos: { forca: 0, agilidade: 1, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 14, variantes: [] },
        { ataqueId: 6, variantes: [] },
        { ataqueId: 12, variantes: [] },
        { ataqueId: 9, variantes: [] },
        { ataqueId: 30, variantes: [] },
        { ataqueId: 47, variantes: [] },
        { ataqueId: ATAQUES.GOLPE_PARCEIRO_CORPO.id, variantes: [] },
        { ataqueId: ATAQUES.EXPLOSAO_FOGO.id, variantes: [] }
      ],
      habilidades: [
        { habilidadeId: 1, variantes: [] },
        { habilidadeId: 11, variantes: [] }
      ]
    }
  ]
};
