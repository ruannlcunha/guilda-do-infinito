import OPHELIA_1_SPRITE from "./assets/OPHELIA_1_SPRITE.png"
import OPHELIA_1_PERFIL from "./assets/OPHELIA_1_PERFIL.png"
import OPHELIA_2_SPRITE from "./assets/OPHELIA_2_SPRITE.png"
import OPHELIA_2_PERFIL from "./assets/OPHELIA_2_PERFIL.png"
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
        {
            visualId: 2,
            nome: "Traje Casual",
            sprite: OPHELIA_2_SPRITE,
            perfil: OPHELIA_2_PERFIL,
            santuario: null,
        },
    ],
    status: {
        pvBase: 12,
        pmBase: 6,
        pvBonus: 2
    },
    atributosBase: {
        forca: 2,
        agilidade: 4,
        magia: 5,
        vigor: 3
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1250,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [1],
            habilidades: [1]
        },
        {
            level: 2,
            experienciaNecessaria: 3750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [1],
            habilidades: [1]
        },
        {
            level: 3,
            experienciaNecessaria: 7500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [1],
            habilidades: [1]
        },
        {
            level: 4,
            experienciaNecessaria: 12500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 1, vigor: 0},
            talentos: [],
            ataques: [1],
            habilidades: [1]
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 1, vigor: 0},
            talentos: [],
            ataques: [1,21],
            habilidades: [1]
        },
    ]
}