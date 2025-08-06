import OPHELIA_1_SPRITE from "./assets/OPHELIA_1_SPRITE.png";
import OPHELIA_1_PERFIL from "./assets/OPHELIA_1_PERFIL.png";
import OPHELIA_2_SPRITE from "./assets/OPHELIA_2_SPRITE.png";
import OPHELIA_2_PERFIL from "./assets/OPHELIA_2_PERFIL.png";
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem";
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { ITEM_PROFICIENCIA, PRONOMES } from "../../../constants";
import { TALENTOS } from "../../talentos";
import { HABILIDADES } from "../../habilidades";
import { ATAQUES } from "../../ataques";

export const OPHELIA = {
  ..._BASE_ORIGINAL,
  id: 50,
  nome: "Ophelia",
  titulo: "A Nevasca",
  pronomes: PRONOMES.FEMININO,
  elemento: ELEMENTOS.GELO,
  corTema: COR_TEMA.AZUL,
  raridade: 5,
  proficiencia: ITEM_PROFICIENCIA.LEVE,
  comportamento: COMPORTAMENTOS.SUPORTE_MEDICO,
  visuais: [
    {
      visualId: 1,
      nome: "Original",
      sprite: OPHELIA_1_SPRITE,
      perfil: OPHELIA_1_PERFIL,
      santuario: null
    },
    {
      visualId: 2,
      nome: "Traje Casual",
      sprite: OPHELIA_2_SPRITE,
      perfil: OPHELIA_2_PERFIL,
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
      talentos: [TALENTOS.CURA_APRIMORADA],
      ataques: [{ ataqueId: 1, variantes: [] }],
      habilidades: [
        { habilidadeId: 1, variantes: [] },
        { habilidadeId: 12, variantes: [] }
      ]
    },
    {
      level: 2,
      experienciaNecessaria: 3750,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [TALENTOS.CURA_APRIMORADA],
      ataques: [{ ataqueId: 1, variantes: [] }],
      habilidades: [
        { habilidadeId: 1, variantes: [] },
        { habilidadeId: 12, variantes: [] }
      ]
    },
    {
      level: 3,
      experienciaNecessaria: 7500,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [TALENTOS.CURA_APRIMORADA],
      ataques: [{ ataqueId: 1, variantes: [] }],
      habilidades: [
        { habilidadeId: 1, variantes: [] },
        { habilidadeId: 12, variantes: [] }
      ]
    },
    {
      level: 4,
      experienciaNecessaria: 12500,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 1, vigor: 0 },
      talentos: [TALENTOS.CURA_APRIMORADA],
      ataques: [{ ataqueId: 1, variantes: [] }],
      habilidades: [
        { habilidadeId: 1, variantes: [] },
        { habilidadeId: 12, variantes: [] }
      ]
    },
    {
      level: 5,
      experienciaNecessaria: 18750,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 1, vigor: 0 },
      talentos: [TALENTOS.CURA_APRIMORADA],
      ataques: [
        { ataqueId: 1, variantes: [] },
        { ataqueId: 21, variantes: [] },
        {
          ataqueId: ATAQUES.BOLA_DE_FOGO.id,
          variantes: ["NIVEL_1", "NIVEL_2"]
        }
      ],
      habilidades: [
        {
          habilidadeId: HABILIDADES.CURAR_FERIMENTOS.id,
          variantes: ["NIVEL_1", "NIVEL_2"]
        },
        {
          habilidadeId: HABILIDADES.ENCANTAR_ARMA.id,
          variantes: ["NORMAL", "ELEMENTAL_1", "ESSENCIA", "GELO"]
        }
      ]
    }
  ]
};
