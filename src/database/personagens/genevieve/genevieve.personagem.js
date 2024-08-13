import GENEVIEVE_1_SPRITE from "./assets/GENEVIEVE_1_SPRITE.png"
import GENEVIEVE_1_PERFIL from "./assets/GENEVIEVE_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const GENEVIEVE = {
    ..._BASE_ORIGINAL,
    id: 23,
    nome: "Genevieve",
    titulo: "Curandeira Aprendiz",
    elemento: ELEMENTOS.ACIDO,
    corTema: COR_TEMA.TURQUESA,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: GENEVIEVE_1_SPRITE,
            perfil: GENEVIEVE_1_PERFIL,
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
                forca: 2,
                agilidade: 4,
                magia: 5,
                vigor: 3
            },
            talentos: [],
            ataques: [16],
            habilidades: [1]
        },
        {
            level: 2,
            experienciaNecessaria: 3750,
            atributos: {
                forca: 2,
                agilidade: 4,
                magia: 5,
                vigor: 3
            },
            talentos: [],
            ataques: [16],
            habilidades: [1]
        },
        {
            level: 3,
            experienciaNecessaria: 7500,
            atributos: {
                forca: 2,
                agilidade: 4,
                magia: 5,
                vigor: 3
            },
            talentos: [],
            ataques: [16,6],
            habilidades: [1]
        },
        {
            level: 4,
            experienciaNecessaria: 37500,
            atributos: {
                forca: 2,
                agilidade: 5,
                magia: 5,
                vigor: 3
            },
            talentos: [],
            ataques: [16,6],
            habilidades: [1]
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            atributos: {
                forca: 3,
                agilidade: 6,
                magia: 6,
                vigor: 4
            },
            talentos: [],
            ataques: [16,6,49],
            habilidades: [1]
        },
    ]
}