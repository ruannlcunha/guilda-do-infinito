import PANDORA_1_SPRITE from "./assets/PANDORA_1_SPRITE.png";
import PANDORA_1_PERFIL from "./assets/PANDORA_1_PERFIL.png";
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem";
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { ITEM_PROFICIENCIA, PRONOMES } from "../../../constants";

export const PANDORA = {
  ..._BASE_ORIGINAL,
  id: 45,
  nome: "Pandora",
  titulo: "Amaldiçoada pelo Oceano",
  pronomes: PRONOMES.FEMININO,
  elemento: ELEMENTOS.AGUA,
  corTema: COR_TEMA.AZUL,
  raridade: 5,
  proficiencia: ITEM_PROFICIENCIA.LEVE,
  comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
  visuais: [
    {
      visualId: 1,
      nome: "Original",
      sprite: PANDORA_1_SPRITE,
      perfil: PANDORA_1_PERFIL,
      santuario: null
    }
  ],
  status: {
    pvBase: 16,
    pmBase: 3,
    pvBonus: 4
  },
  atributosBase: {
    forca: 4,
    agilidade: 5,
    magia: 2,
    vigor: 3
  },
  evolucoes: [
    {
      level: 1,
      experienciaNecessaria: 1250,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [{ ataqueId: 17, variantes: [] }],
      habilidades: []
    },
    {
      level: 2,
      experienciaNecessaria: 3750,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [{ ataqueId: 17, variantes: [] }],
      habilidades: []
    },
    {
      level: 3,
      experienciaNecessaria: 7500,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 17, variantes: [] },
        { ataqueId: 18, variantes: [] },
        { ataqueId: 7, variantes: [] }
      ],
      habilidades: []
    },
    {
      level: 4,
      experienciaNecessaria: 12500,
      bonusAtributos: { forca: 1, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 17, variantes: [] },
        { ataqueId: 18, variantes: [] },
        { ataqueId: 7, variantes: [] }
      ],
      habilidades: []
    },
    {
      level: 5,
      experienciaNecessaria: 18750,
      bonusAtributos: { forca: 1, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 17, variantes: [] },
        { ataqueId: 18, variantes: [] },
        { ataqueId: 7, variantes: [] },
        { ataqueId: 5, variantes: [] },
        { ataqueId: 68, variantes: [] }
      ],
      habilidades: []
    }
  ]
};
