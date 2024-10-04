import ANDY_1_SPRITE from "./assets/ANDY_1_SPRITE.png"
import ANDY_1_PERFIL from "./assets/ANDY_1_PERFIL.png"
import ANDY_2_SPRITE from "./assets/ANDY_2_SPRITE.png"
import ANDY_2_PERFIL from "./assets/ANDY_2_PERFIL.png"
import ANDY_3_SPRITE from "./assets/ANDY_3_SPRITE.png"
import ANDY_3_PERFIL from "./assets/ANDY_3_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { ELEMENTOS, COR_TEMA } from "../../../constants/personagens/personagem.constant"

export const ANDY = {
    ..._BASE_ORIGINAL,
    id: 12,
    nome: "Andy",
    titulo: "Caçador dos Ventos",
    elemento: ELEMENTOS.AR,
    corTema: COR_TEMA.VERDE,
    raridade: 4,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: ANDY_1_SPRITE,
            perfil: ANDY_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Traje Casual",
            sprite: ANDY_2_SPRITE,
            perfil: ANDY_2_PERFIL,
            santuario: null,
        },
        {
            visualId: 3,
            nome: "Traje do Baile",
            sprite: ANDY_3_SPRITE,
            perfil: ANDY_3_PERFIL,
            santuario: null,
        },

    ],
    status: {
        pvBase: 16,
        pmBase: 4,
        pvBonus: 4
    },
    atributosBase: {
        forca: 2,
        agilidade: 3,
        magia: 3,
        vigor: 1
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [17,18],
            habilidades: []
        },
        {
            level: 2,
            experienciaNecessaria: 3000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [17,18],
            habilidades: []
        },
        {
            level: 3,
            experienciaNecessaria: 6000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [17,18,10],
            habilidades: []
        },
        {
            level: 4,
            experienciaNecessaria: 10000,
            bonusAtributos: {forca: 0, agilidade: 1, magia: 0, vigor: 0},
            talentos: [],
            ataques: [17,18,10],
            habilidades: []
        },
        {
            level: 5,
            experienciaNecessaria: 15000,
            bonusAtributos: {forca: 0, agilidade: 1, magia: 0, vigor: 0},
            talentos: [],
            ataques: [17,18,10,71],
            habilidades: []
        },
    ]
}