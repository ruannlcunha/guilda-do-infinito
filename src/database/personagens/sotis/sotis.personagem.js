import SOTIS_1_SPRITE from "./assets/SOTIS_1_SPRITE.png";
import SOTIS_1_PERFIL from "./assets/SOTIS_1_PERFIL.png";
import SOTIS_2_SPRITE from "./assets/SOTIS_2_SPRITE.png";
import SOTIS_2_PERFIL from "./assets/SOTIS_2_PERFIL.png";
import SOTIS_3_SPRITE from "./assets/SOTIS_3_SPRITE.gif";
import SOTIS_3_PERFIL from "./assets/SOTIS_3_PERFIL.gif";
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem";
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { ITEM_PROFICIENCIA, PRONOMES } from "../../../constants";
import { TALENTOS } from "../../talentos";
import { HABILIDADES } from "../../habilidades";

export const SOTIS = {
  ..._BASE_ORIGINAL,
  id: 18,
  nome: "Sotis",
  titulo: "Arqueira Divina",
  pronomes: PRONOMES.FEMININO,
  elemento: ELEMENTOS.LUZ,
  corTema: COR_TEMA.ROXO,
  raridade: 5,
  proficiencia: ITEM_PROFICIENCIA.LEVE,
  comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
  visuais: [
    {
      visualId: 1,
      nome: "Original",
      sprite: SOTIS_1_SPRITE,
      perfil: SOTIS_1_PERFIL,
      santuario: null
    },
    {
      visualId: 2,
      nome: "O Segredo de Khaas",
      sprite: SOTIS_2_SPRITE,
      perfil: SOTIS_2_PERFIL,
      santuario: null
    },
    {
      visualId: 3,
      nome: "Armadura Divina",
      sprite: SOTIS_3_SPRITE,
      perfil: SOTIS_3_PERFIL,
      santuario: null
    }
  ],
  status: {
    pvBase: 16,
    pmBase: 4,
    pvBonus: 4
  },
  atributosBase: {
    forca: 3,
    agilidade: 5,
    magia: 4,
    vigor: 2
  },
  evolucoes: [
    {
      level: 1,
      experienciaNecessaria: 1250,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [TALENTOS.ESQUIVA_APRIMORADA],
      ataques: [
        { ataqueId: 17, variantes: [] },
        { ataqueId: 18, variantes: [] }
      ],
      habilidades: [{ habilidadeId: 13, variantes: [] }]
    },
    {
      level: 2,
      experienciaNecessaria: 3750,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [TALENTOS.ESQUIVA_APRIMORADA],
      ataques: [
        { ataqueId: 17, variantes: [] },
        { ataqueId: 18, variantes: [] }
      ],
      habilidades: [{ habilidadeId: 13, variantes: [] }]
    },
    {
      level: 3,
      experienciaNecessaria: 7500,
      bonusAtributos: { forca: 0, agilidade: 0, magia: 0, vigor: 0 },
      talentos: [TALENTOS.ESQUIVA_APRIMORADA],
      ataques: [
        { ataqueId: 17, variantes: [] },
        { ataqueId: 18, variantes: [] },
        { ataqueId: 22, variantes: [] }
      ],
      habilidades: [{ habilidadeId: 13, variantes: [] }]
    },
    {
      level: 4,
      experienciaNecessaria: 12500,
      bonusAtributos: { forca: 0, agilidade: 1, magia: 0, vigor: 0 },
      talentos: [TALENTOS.ESQUIVA_APRIMORADA],
      ataques: [
        { ataqueId: 17, variantes: [] },
        { ataqueId: 18, variantes: [] },
        { ataqueId: 22, variantes: [] }
      ],
      habilidades: [{ habilidadeId: 13, variantes: [] }]
    },
    {
      level: 5,
      experienciaNecessaria: 18750,
      bonusAtributos: { forca: 0, agilidade: 1, magia: 0, vigor: 0 },
      talentos: [TALENTOS.ESQUIVA_APRIMORADA],
      ataques: [{ ataqueId: 17, variantes: [] }],
      habilidades: [
        { habilidadeId: 13, variantes: [] },
        { habilidadeId: HABILIDADES.ATAQUE_ESPECIAL.id, variantes: [] }
      ]
    }
  ]
};
