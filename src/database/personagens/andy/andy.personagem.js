import ANDY_1_SPRITE from "./assets/ANDY_1_SPRITE.png"
import ANDY_1_PERFIL from "./assets/ANDY_1_PERFIL.png"
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
        }

    ],
    status: {
        pvBase: 16,
        pmBase: 4,
        pvBonus: 4
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1000,
            atributos: {
                forca: 2,
                agilidade: 3,
                magia: 3,
                vigor: 1
            },
            talentos: [],
            ataques: [17,18],
            habilidades: []
        },
        {
            level: 2,
            experienciaNecessaria: 3000,
            atributos: {
                forca: 2,
                agilidade: 3,
                magia: 3,
                vigor: 1
            },
            talentos: [],
            ataques: [17,18],
            habilidades: []
        },
        {
            level: 3,
            experienciaNecessaria: 6000,
            atributos: {
                forca: 2,
                agilidade: 3,
                magia: 3,
                vigor: 1
            },
            talentos: [],
            ataques: [17,18,10],
            habilidades: []
        },
        {
            level: 4,
            experienciaNecessaria: 30000,
            atributos: {
                forca: 2,
                agilidade: 4,
                magia: 3,
                vigor: 1
            },
            talentos: [],
            ataques: [17,18,10],
            habilidades: []
        },
        {
            level: 5,
            experienciaNecessaria: 15000,
            atributos: {
                forca: 3,
                agilidade: 5,
                magia: 4,
                vigor: 2
            },
            talentos: [],
            ataques: [17,18,10,71],
            habilidades: []
        },
    ]
}