import HERES_1_SPRITE from "./assets/HERES_1_SPRITE.png";
import HERES_1_PERFIL from "./assets/HERES_1_PERFIL.png";
import HERES_2_SPRITE from "./assets/HERES_2_SPRITE.png";
import HERES_2_PERFIL from "./assets/HERES_2_PERFIL.png";
import HERES_3_SPRITE from "./assets/HERES_3_SPRITE.png";
import HERES_3_PERFIL from "./assets/HERES_3_PERFIL.png";
import HERES_4_SPRITE from "./assets/HERES_4_SPRITE.png";
import HERES_4_PERFIL from "./assets/HERES_4_PERFIL.png";
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem";
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { ITEM_PROFICIENCIA, PRONOMES } from "../../../constants";

export const HERES = {
  ..._BASE_ORIGINAL,
  id: 52,
  nome: "Heres",
  titulo: "Necromante Viajante",
  elemento: ELEMENTOS.TREVAS,
  corTema: COR_TEMA.AZUL,
  raridade: 5,
  proficiencia: ITEM_PROFICIENCIA.LEVE,
  comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
  visuais: [
    {
      visualId: 1,
      nome: "Original",
      sprite: HERES_1_SPRITE,
      perfil: HERES_1_PERFIL,
      santuario: null
    },
    {
      visualId: 2,
      nome: "Mascarado",
      sprite: HERES_2_SPRITE,
      perfil: HERES_2_PERFIL,
      santuario: null
    },
    {
      visualId: 3,
      nome: "Sem Armadura",
      sprite: HERES_3_SPRITE,
      perfil: HERES_3_PERFIL,
      santuario: null
    },
    {
      visualId: 4,
      nome: "Forma Zumbificada",
      sprite: HERES_4_SPRITE,
      perfil: HERES_4_PERFIL,
      santuario: null
    }
  ],
  status: {
    pvBase: 16,
    pmBase: 5,
    pvBonus: 4
  },
  atributosBase: {
    forca: 3,
    agilidade: 2,
    magia: 5,
    vigor: 4
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
      habilidades: [{ habilidadeId: 1, variantes: [] }]
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
      habilidades: [{ habilidadeId: 1, variantes: [] }]
    },
    {
      level: 3,
      experienciaNecessaria: 7500,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 1, variantes: [] },
        { ataqueId: 5, variantes: [] },
        { ataqueId: 14, variantes: [] }
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
        { ataqueId: 14, variantes: [] }
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
        { ataqueId: 14, variantes: [] },
        { ataqueId: 33, variantes: [] }
      ],
      habilidades: [{ habilidadeId: 1, variantes: [] }]
    }
  ]
};
