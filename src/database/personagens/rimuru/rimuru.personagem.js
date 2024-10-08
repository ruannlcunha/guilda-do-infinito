import RIMURU_1_SPRITE from "./assets/RIMURU_1_SPRITE.png"
import RIMURU_1_PERFIL from "./assets/RIMURU_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const RIMURU = {
    ..._BASE_ORIGINAL,
    id: 43,
    nome: "Rimuru",
    titulo: "Herói Assassino",
    elemento: ELEMENTOS.AR,
    corTema: COR_TEMA.TURQUESA,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: RIMURU_1_SPRITE,
            perfil: RIMURU_1_PERFIL,
            santuario: null,
        },
    ],
    status: {
        pvBase: 14,
        pmBase: 4,
        pvBonus: 3
    },
    atributosBase: {
        forca: 4,
        agilidade: 5,
        magia: 3,
        vigor: 2
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [14],
            habilidades: []
        },
        {
            level: 2,
            experienciaNecessaria: 3000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [14],
            habilidades: []
        },
        {
            level: 3,
            experienciaNecessaria: 6000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [14,16],
            habilidades: []
        },
        {
            level: 4,
            experienciaNecessaria: 10000,
            bonusAtributos: {forca: 0, agilidade: 1, magia: 0, vigor: 0},
            talentos: [],
            ataques: [14,16],
            habilidades: []
        },
        {
            level: 5,
            experienciaNecessaria: 15000,
            bonusAtributos: {forca: 0, agilidade: 1, magia: 0, vigor: 0},
            talentos: [],
            ataques: [14,16,31,51],
            habilidades: []
        },
    ],
}