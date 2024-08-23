import OPHELIA_1_SPRITE from "./assets/OPHELIA_1_SPRITE.png"
import OPHELIA_1_PERFIL from "./assets/OPHELIA_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const OPHELIA = {
    ..._BASE_ORIGINAL,
    id: 50,
    nome: "Ophelia",
    titulo: "A Nevasca",
    elemento: ELEMENTOS.GELO,
    corTema: COR_TEMA.AZUL,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: OPHELIA_1_SPRITE,
            perfil: OPHELIA_1_PERFIL,
            santuario: null,
        },
    ],
    status: {
        pvBase: 12,
        pmBase: 6,
        pvBonus: 2
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
            ataques: [1],
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
            ataques: [1],
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
            ataques: [1],
            habilidades: [1]
        },
        {
            level: 4,
            experienciaNecessaria: 12500,
            atributos: {
                forca: 2,
                agilidade: 4,
                magia: 6,
                vigor: 3
            },
            talentos: [],
            ataques: [1],
            habilidades: [1]
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            atributos: {
                forca: 3,
                agilidade: 5,
                magia: 7,
                vigor: 4
            },
            talentos: [],
            ataques: [1,21],
            habilidades: [1]
        },
    ]
}