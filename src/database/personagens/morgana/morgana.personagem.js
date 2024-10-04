import MORGANA_1_SPRITE from "./assets/MORGANA_1_SPRITE.png"
import MORGANA_1_PERFIL from "./assets/MORGANA_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const MORGANA = {
    ..._BASE_ORIGINAL,
    id: 44,
    nome: "Morgana",
    titulo: "Sol Ruivo",
    elemento: ELEMENTOS.FOGO,
    corTema: COR_TEMA.VERMELHO,
    raridade: 5,
    visuais: [
      {
        visualId: 1,
        nome: "Original",
        sprite: MORGANA_1_SPRITE,
        perfil: MORGANA_1_PERFIL,
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
          ataques: [17,18,6],
          habilidades: [13]
      },
      {
          level: 4,
          experienciaNecessaria: 12500,
            bonusAtributos: {forca: 0, agilidade: 1, magia: 0, vigor: 0},
          talentos: [],
          ataques: [17,18,6],
          habilidades: [13]
      },
      {
          level: 5,
          experienciaNecessaria: 18750,
            bonusAtributos: {forca: 0, agilidade: 1, magia: 0, vigor: 0},
          talentos: [],
          ataques: [17,18,6,67],
          habilidades: [13]
      },
  ],
}