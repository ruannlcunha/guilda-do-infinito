import FUUJI_1_SPRITE from "./assets/FUUJI_1_SPRITE.png";
import FUUJI_1_PERFIL from "./assets/FUUJI_1_PERFIL.png";
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem";
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { ITEM_PROFICIENCIA, PRONOMES } from "../../../constants";

export const FUUJI = {
  ..._BASE_ORIGINAL,
  id: 54,
  nome: "Fuuji",
  titulo: "Demônio Guerreiro",
  elemento: ELEMENTOS.FOGO,
  corTema: COR_TEMA.VERMELHO,
  raridade: 5,
  proficiencia: ITEM_PROFICIENCIA.LEVE,
  comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
  visuais: [
    {
      visualId: 1,
      nome: "Original",
      sprite: FUUJI_1_SPRITE,
      perfil: FUUJI_1_PERFIL,
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
    agilidade: 3,
    magia: 2,
    vigor: 4
  },
  evolucoes: [
    {
      level: 1,
      experienciaNecessaria: 1250,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 16, variantes: [] },
        { ataqueId: 17, variantes: [] }
      ],
      habilidades: [{ habilidadeId: 13, variantes: [] }]
    },
    {
      level: 2,
      experienciaNecessaria: 3750,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 16, variantes: [] },
        { ataqueId: 17, variantes: [] }
      ],
      habilidades: [{ habilidadeId: 13, variantes: [] }]
    },
    {
      level: 3,
      experienciaNecessaria: 7500,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 16, variantes: [] },
        { ataqueId: 17, variantes: [] },
        { ataqueId: 14, variantes: [] },
        { ataqueId: 18, variantes: [] }
      ],
      habilidades: [{ habilidadeId: 13, variantes: [] }]
    },
    {
      level: 4,
      experienciaNecessaria: 12500,
      bonusAtributos: { forca: 1, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 16, variantes: [] },
        { ataqueId: 17, variantes: [] },
        { ataqueId: 14, variantes: [] },
        { ataqueId: 18, variantes: [] }
      ],
      habilidades: [{ habilidadeId: 13, variantes: [] }]
    },
    {
      level: 5,
      experienciaNecessaria: 18750,
      bonusAtributos: { forca: 1, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [],
      ataques: [
        { ataqueId: 16, variantes: [] },
        { ataqueId: 17, variantes: [] },
        { ataqueId: 14, variantes: [] },
        { ataqueId: 18, variantes: [] },
        { ataqueId: 27, variantes: [] },
        { ataqueId: 67, variantes: [] }
      ],
      habilidades: [{ habilidadeId: 13, variantes: [] }]
    }
  ]
};
