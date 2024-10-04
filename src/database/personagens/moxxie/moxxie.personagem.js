import MOXXIE_1_SPRITE from "./assets/MOXXIE_1_SPRITE.png"
import MOXXIE_1_PERFIL from "./assets/MOXXIE_1_PERFIL.png"
import MOXXIE_2_SPRITE from "./assets/MOXXIE_2_SPRITE.png"
import MOXXIE_2_PERFIL from "./assets/MOXXIE_2_PERFIL.png"
import MOXXIE_3_SPRITE from "./assets/MOXXIE_3_SPRITE.png"
import MOXXIE_3_PERFIL from "./assets/MOXXIE_3_PERFIL.png"
import MOXXIE_4_SPRITE from "./assets/MOXXIE_4_SPRITE.gif"
import MOXXIE_4_PERFIL from "./assets/MOXXIE_4_PERFIL.gif"
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
        },
        {
            visualId: 2,
            nome: "Traje Casual",
            sprite: MOXXIE_2_SPRITE,
            perfil: MOXXIE_2_PERFIL,
            santuario: null,
        },
        {
            visualId: 3,
            nome: "Traje de Inverno",
            sprite: MOXXIE_3_SPRITE,
            perfil: MOXXIE_3_PERFIL,
            santuario: null,
        },
        {
            visualId: 4,
            nome: "Armadura Divina",
            sprite: MOXXIE_4_SPRITE,
            perfil: MOXXIE_4_PERFIL,
            santuario: null,
        },

    ],
    status: {
        pvBase: 16,
        pmBase: 4,
        pvBonus: 4
    },
    atributosBase: {
        forca: 4,
        agilidade: 2,
        magia: 5,
        vigor: 3
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1250,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [14,6],
            habilidades: [1]
        },
        {
            level: 2,
            experienciaNecessaria: 3750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [14,6],
            habilidades: [1]
        },
        {
            level: 3,
            experienciaNecessaria: 7500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [14,6,12,9],
            habilidades: [1]
        },
        {
            level: 4,
            experienciaNecessaria: 12500,
            bonusAtributos: {forca: 0, agilidade: 1, magia: 0, vigor: 0},
            talentos: [],
            ataques: [14,6,12,9],
            habilidades: [1]
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            bonusAtributos: {forca: 0, agilidade: 1, magia: 0, vigor: 0},
            talentos: [],
            ataques: [14,6,12,9,30,47],
            habilidades: [1]
        },
    ]
}