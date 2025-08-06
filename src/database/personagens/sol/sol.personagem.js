import SOL_1_SPRITE from "./assets/SOL_1_SPRITE.png";
import SOL_1_PERFIL from "./assets/SOL_1_PERFIL.png";
import SOL_2_SPRITE from "./assets/SOL_2_SPRITE.png";
import SOL_2_PERFIL from "./assets/SOL_2_PERFIL.png";
import SOL_3_SPRITE from "./assets/SOL_3_SPRITE.png";
import SOL_3_PERFIL from "./assets/SOL_3_PERFIL.png";
import SOL_4_SPRITE from "./assets/SOL_4_SPRITE.png";
import SOL_4_PERFIL from "./assets/SOL_4_PERFIL.png";
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem";
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { ITEM_PROFICIENCIA, PRONOMES } from "../../../constants";

export const SOL = {
  ..._BASE_ORIGINAL,
  id: 5,
  nome: "Sol",
  titulo: "Punhos de Ferro",
  elemento: ELEMENTOS.FOGO,
  corTema: COR_TEMA.VERMELHO,
  raridade: 5,
  proficiencia: ITEM_PROFICIENCIA.LEVE,
  comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
  visuais: [
    {
      visualId: 1,
      nome: "Com máscara",
      sprite: SOL_1_SPRITE,
      perfil: SOL_1_PERFIL,
      santuario: null
    },
    {
      visualId: 2,
      nome: "Sem máscara",
      sprite: SOL_2_SPRITE,
      perfil: SOL_2_PERFIL,
      santuario: null
    },
    {
      visualId: 3,
      nome: "Com camisa",
      sprite: SOL_3_SPRITE,
      perfil: SOL_3_PERFIL,
      santuario: null
    },
    {
      visualId: 4,
      nome: "Traje de Escravo",
      sprite: SOL_4_SPRITE,
      perfil: SOL_4_PERFIL,
      santuario: null
    }
  ],
  status: {
    pvBase: 20,
    pmBase: 3,
    pvBonus: 5
  },
  atributosBase: {
    forca: 5,
    agilidade: 4,
    magia: 2,
    vigor: 3
  },
  evolucoes: [
    {
      level: 1,
      experienciaNecessaria: 1250,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [{ ataqueId: 1, variantes: [] }],
      habilidades: []
    },
    {
      level: 2,
      experienciaNecessaria: 3750,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [{ ataqueId: 1, variantes: [] }],
      habilidades: []
    },
    {
      level: 3,
      experienciaNecessaria: 7500,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 1, variantes: [] },
        { ataqueId: 16, variantes: [] }
      ],
      habilidades: []
    },
    {
      level: 4,
      experienciaNecessaria: 12500,
      bonusAtributos: { forca: 0, agilidade: 1, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 1, variantes: [] },
        { ataqueId: 16, variantes: [] }
      ],
      habilidades: []
    },
    {
      level: 5,
      experienciaNecessaria: 18750,
      bonusAtributos: { forca: 0, agilidade: 1, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 1, variantes: [] },
        { ataqueId: 16, variantes: [] },
        { ataqueId: 47, variantes: [] }
      ],
      habilidades: []
    }
  ]
};
