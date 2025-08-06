import LULU_1_SPRITE from "./assets/LULU_1_SPRITE.png";
import LULU_1_PERFIL from "./assets/LULU_1_PERFIL.png";
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem";
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { ITEM_PROFICIENCIA, PRONOMES } from "../../../constants";

export const LULU = {
  ..._BASE_ORIGINAL,
  id: 42,
  nome: "Lulu",
  titulo: "Pequena Dracônica",
  pronomes: PRONOMES.FEMININO,
  elemento: ELEMENTOS.FOGO,
  corTema: COR_TEMA.LARANJA,
  raridade: 5,
  proficiencia: ITEM_PROFICIENCIA.LEVE,
  comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
  visuais: [
    {
      visualId: 1,
      nome: "Versão 1",
      sprite: LULU_1_SPRITE,
      perfil: LULU_1_PERFIL,
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
        { ataqueId: 2, variantes: [] }
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
        { ataqueId: 2, variantes: [] }
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
        { ataqueId: 2, variantes: [] }
      ],
      habilidades: []
    },
    {
      level: 4,
      experienciaNecessaria: 12500,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 1, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 1, variantes: [] },
        { ataqueId: 2, variantes: [] }
      ],
      habilidades: []
    },
    {
      level: 5,
      experienciaNecessaria: 18750,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 1, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 1, variantes: [] },
        { ataqueId: 2, variantes: [] }
      ],
      habilidades: []
    }
  ]
};
