import KARAS_1_SPRITE from "./assets/KARAS_1_SPRITE.png"
import KARAS_1_PERFIL from "./assets/KARAS_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { ELEMENTOS, COR_TEMA } from "../../../constants/personagens/personagem.constant"

export const KARAS = {
    ..._BASE_ORIGINAL,
    id: 15,
    nome: "Karas",
    titulo: "Príncipe das Marés",
    elemento: ELEMENTOS.AGUA,
    corTema: COR_TEMA.AZUL,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: KARAS_1_SPRITE,
            perfil: KARAS_1_PERFIL,
            santuario: null,
        }

    ],
    status: {
        pvBase: 16,
        pmBase: 4,
        pvBonus: 5
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1250,
            atributos: {
                forca: 3,
                agilidade: 2,
                magia: 5,
                vigor: 4
            },
            talentos: [],
            ataques: [14],
            habilidades: [1]
        },
        {
            level: 2,
            experienciaNecessaria: 3750,
            atributos: {
                forca: 3,
                agilidade: 2,
                magia: 5,
                vigor: 4
            },
            talentos: [],
            ataques: [14],
            habilidades: [1]
        },
        {
            level: 3,
            experienciaNecessaria: 7500,
            atributos: {
                forca: 3,
                agilidade: 2,
                magia: 5,
                vigor: 4
            },
            talentos: [],
            ataques: [14,12,7],
            habilidades: [1]
        },
        {
            level: 4,
            experienciaNecessaria: 12500,
            atributos: {
                forca: 3,
                agilidade: 2,
                magia: 6,
                vigor: 4
            },
            talentos: [],
            ataques: [14,12,7],
            habilidades: [1]
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            atributos: {
                forca: 4,
                agilidade: 3,
                magia: 7,
                vigor: 5
            },
            talentos: [],
            ataques: [14,12,7,28],
            habilidades: [1]
        },
    ]
}