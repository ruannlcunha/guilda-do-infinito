import COSMULA_1_SPRITE from "./assets/COSMULA_1_SPRITE.png"
import COSMULA_1_PERFIL from "./assets/COSMULA_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const COSMULA = {
    ..._BASE_ORIGINAL,
    id: 36,
    nome: "Cósmula",
    titulo: "Bruxa Pálida",
    elemento: ELEMENTOS.AR,
    corTema: COR_TEMA.CIANO,
    raridade: 4,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: COSMULA_1_SPRITE,
            perfil: COSMULA_1_PERFIL,
            santuario: null,
        }
    ],
    status: {
        pvBase: 12,
        pmBase: 6,
        pvBonus: 2
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1000,
            atributos: {
                forca: 1,
                agilidade: 4,
                magia: 4,
                vigor: 2
            },
            talentos: [],
            ataques: [1,10,21],
            habilidades: []
        },
        {
            level: 2,
            experienciaNecessaria: 3000,
            atributos: {
                forca: 1,
                agilidade: 4,
                magia: 4,
                vigor: 2
            },
            talentos: [],
            ataques: [1,10,21],
            habilidades: []
        },
        {
            level: 3,
            experienciaNecessaria: 6000,
            atributos: {
                forca: 1,
                agilidade: 4,
                magia: 4,
                vigor: 2
            },
            talentos: [],
            ataques: [1,10,21,5,12],
            habilidades: [1]
        },
        {
            level: 4,
            experienciaNecessaria: 30000,
            atributos: {
                forca: 1,
                agilidade: 4,
                magia: 5,
                vigor: 2
            },
            talentos: [],
            ataques: [1,10,21,5,12],
            habilidades: [1]
        },
        {
            level: 5,
            experienciaNecessaria: 15000,
            atributos: {
                forca: 2,
                agilidade: 5,
                magia: 6,
                vigor: 3
            },
            talentos: [],
            ataques: [1,10,21,5,12,51],
            habilidades: [1]
        },
    ]
}