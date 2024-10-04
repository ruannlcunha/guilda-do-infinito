import SOTIS_1_SPRITE from "./assets/SOTIS_1_SPRITE.png"
import SOTIS_1_PERFIL from "./assets/SOTIS_1_PERFIL.png"
import SOTIS_2_SPRITE from "./assets/SOTIS_2_SPRITE.png"
import SOTIS_2_PERFIL from "./assets/SOTIS_2_PERFIL.png"
import SOTIS_3_SPRITE from "./assets/SOTIS_3_SPRITE.gif"
import SOTIS_3_PERFIL from "./assets/SOTIS_3_PERFIL.gif"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const SOTIS = {
    ..._BASE_ORIGINAL,
    id: 18,
    nome: "Sotis",
    titulo: "Arqueira Divina",
    elemento: ELEMENTOS.LUZ,
    corTema: COR_TEMA.ROXO,
    raridade: 5,
    visuais: [
      {
        visualId: 1,
        nome: "Original",
        sprite: SOTIS_1_SPRITE,
        perfil: SOTIS_1_PERFIL,
        santuario: null,
      },
      {
        visualId: 2,
        nome: "O Segredo de Khaas",
        sprite: SOTIS_2_SPRITE,
        perfil: SOTIS_2_PERFIL,
        santuario: null,
      },
      {
        visualId: 3,
        nome: "Armadura Divina",
        sprite: SOTIS_3_SPRITE,
        perfil: SOTIS_3_PERFIL,
        santuario: null,
      },
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
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
          talentos: [],
          ataques: [17,18],
          habilidades: [13]
      },
      {
          level: 2,
          experienciaNecessaria: 3750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
          talentos: [],
          ataques: [17,18],
          habilidades: [13]
      },
      {
          level: 3,
          experienciaNecessaria: 7500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
          talentos: [],
          ataques: [17,18,22],
          habilidades: [13]
      },
      {
          level: 4,
          experienciaNecessaria: 12500,
            bonusAtributos: {forca: 0, agilidade: 1, magia: 0, vigor: 0},
          talentos: [],
          ataques: [17,18,22],
          habilidades: [13]
      },
      {
          level: 5,
          experienciaNecessaria: 18750,
            bonusAtributos: {forca: 0, agilidade: 1, magia: 0, vigor: 0},
          talentos: [],
          ataques: [17,18,22,65,74],
          habilidades: [13]
      },
  ],
}