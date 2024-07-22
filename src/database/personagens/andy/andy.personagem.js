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
            pvBase: 0,
            pmBase: 0,
            pvBonus: 0
        },
        evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 100,
            pv: 23,
            pm: 5,
            atributos: {
                forca: 1,
                agilidade: 4,
                magia: 3,
                vigor: 2
            },
            talentos: [],
            ataques: [1],
            habilidades: [1]
        },
        {
            level: 2,
            experienciaNecessaria: 250,
            pv: 28,
            pm: 8,
            atributos: {
                forca: 1,
                agilidade: 4,
                magia: 3,
                vigor: 2
            },
            passivas: [],
            ataques: [1],
            habilidades: [1]
        }
    ]
}