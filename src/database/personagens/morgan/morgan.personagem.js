import MORGAN_1_SPRITE from "./assets/MORGAN_1_SPRITE.png"
import MORGAN_1_PERFIL from "./assets/MORGAN_1_PERFIL.png"
import MORGAN_2_SPRITE from "./assets/MORGAN_2_SPRITE.png"
import MORGAN_2_PERFIL from "./assets/MORGAN_2_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const MORGAN = {
    ..._BASE_ORIGINAL,
    id: 51,
    nome: "Morgan",
    titulo: "Dançarino das Profundezas",
    elemento: ELEMENTOS.AGUA,
    corTema: COR_TEMA.AZUL,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: MORGAN_1_SPRITE,
            perfil: MORGAN_1_PERFIL,
            santuario: null
        },
        {
            visualId: 2,
            nome: "Forma de Tritão",
            sprite: MORGAN_2_SPRITE,
            perfil: MORGAN_2_PERFIL,
            santuario: null
        },
    ],
    status: {
        pvBase: 14,
        pmBase: 4,
        pvBonus: 3
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1250,
            atributos: {
                forca: 3,
                agilidade: 4,
                magia: 5,
                vigor: 2
            },
            talentos: [],
            ataques: [14],
            habilidades: []
        },
        {
            level: 2,
            experienciaNecessaria: 3750,
            atributos: {
                forca: 3,
                agilidade: 4,
                magia: 5,
                vigor: 2
            },
            talentos: [],
            ataques: [14],
            habilidades: []
        },
        {
            level: 3,
            experienciaNecessaria: 7500,
            atributos: {
                forca: 3,
                agilidade: 4,
                magia: 5,
                vigor: 2
            },
            talentos: [],
            ataques: [14,7],
            habilidades: []
        },
        {
            level: 4,
            experienciaNecessaria: 37500,
            atributos: {
                forca: 3,
                agilidade: 4,
                magia: 6,
                vigor: 2
            },
            talentos: [],
            ataques: [14,7],
            habilidades: []
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            atributos: {
                forca: 3,
                agilidade: 4,
                magia: 6,
                vigor: 2
            },
            talentos: [],
            ataques: [14,7,28],
            habilidades: []
        },
    ],
}