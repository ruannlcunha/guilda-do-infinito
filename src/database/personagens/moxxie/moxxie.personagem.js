import MOXXIE_1_SPRITE from "./assets/MOXXIE_1_SPRITE.png"
import MOXXIE_1_PERFIL from "./assets/MOXXIE_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { ELEMENTOS, COR_TEMA } from "../../../constants/personagens/personagem.constant"

export const MOXXIE = {
    ..._BASE_ORIGINAL,
    id: 13,
    nome: "Moxxie",
    titulo: "Anjo das Florestas",
    elemento: ELEMENTOS.TERRA,
    corTema: COR_TEMA.VERDE,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: MOXXIE_1_SPRITE,
            perfil: MOXXIE_1_PERFIL,
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
            experienciaNecessaria: 1250,
            atributos: {
                forca: 4,
                agilidade: 2,
                magia: 5,
                vigor: 3
            },
            talentos: [],
            ataques: [14,6,],
            habilidades: [1]
        },
        {
            level: 2,
            experienciaNecessaria: 3750,
            atributos: {
                forca: 4,
                agilidade: 2,
                magia: 5,
                vigor: 3
            },
            talentos: [],
            ataques: [14,6,],
            habilidades: [1]
        },
        {
            level: 3,
            experienciaNecessaria: 7500,
            atributos: {
                forca: 4,
                agilidade: 2,
                magia: 5,
                vigor: 3
            },
            talentos: [],
            ataques: [14,6,12,9],
            habilidades: [1]
        },
        {
            level: 4,
            experienciaNecessaria: 37500,
            atributos: {
                forca: 4,
                agilidade: 3,
                magia: 5,
                vigor: 3
            },
            talentos: [],
            ataques: [14,6,12,9],
            habilidades: [1]
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            atributos: {
                forca: 4,
                agilidade: 3,
                magia: 5,
                vigor: 3
            },
            talentos: [],
            ataques: [14,6,12,9,30,47],
            habilidades: [1]
        },
    ]
}