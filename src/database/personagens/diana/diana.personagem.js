import DIANA_1_SPRITE from "./assets/DIANA_1_SPRITE.png"
import DIANA_1_PERFIL from "./assets/DIANA_1_PERFIL.png"
import DIANA_2_SPRITE from "./assets/DIANA_2_SPRITE.png"
import DIANA_2_PERFIL from "./assets/DIANA_2_PERFIL.png"
import DIANA_3_SPRITE from "./assets/DIANA_3_SPRITE.png"
import DIANA_3_PERFIL from "./assets/DIANA_3_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const DIANA = {
    ..._BASE_ORIGINAL,
    id: 35,
    nome: "Diana",
    titulo: "Presa Ruiva",
    elemento: ELEMENTOS.FOGO,
    corTema: COR_TEMA.VERMELHO,
    raridade: 4,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: DIANA_1_SPRITE,
            perfil: DIANA_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Loba Pálida",
            sprite: DIANA_2_SPRITE,
            perfil: DIANA_2_PERFIL,
            santuario: null,
        },
        {
            visualId: 3,
            nome: "Grande Primavera",
            sprite: DIANA_3_SPRITE,
            perfil: DIANA_3_PERFIL,
            santuario: null,
        },
    ],
    status: {
        pvBase: 20,
        pmBase: 3,
        pvBonus: 5
    },
    atributosBase: {
        forca: 4,
        agilidade: 2,
        magia: 1,
        vigor: 3
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [14],
            habilidades: [13]
        },
        {
            level: 2,
            experienciaNecessaria: 3000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [14],
            habilidades: [13]
        },
        {
            level: 3,
            experienciaNecessaria: 6000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [14,16],
            habilidades: [13]
        },
        {
            level: 4,
            experienciaNecessaria: 10000,
            bonusAtributos: {forca: 1, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [14,16],
            habilidades: [13]
        },
        {
            level: 5,
            experienciaNecessaria: 15000,
            bonusAtributos: {forca: 1, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [14,16,27],
            habilidades: [13]
        },
    ],
}