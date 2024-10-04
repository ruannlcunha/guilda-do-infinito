import CORA_1_SPRITE from "./assets/CORA_1_SPRITE.png"
import CORA_1_PERFIL from "./assets/CORA_1_PERFIL.png"
import CORA_2_SPRITE from "./assets/CORA_2_SPRITE.png"
import CORA_2_PERFIL from "./assets/CORA_2_PERFIL.png"
import CORA_3_SPRITE from "./assets/CORA_3_SPRITE.png"
import CORA_3_PERFIL from "./assets/CORA_3_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { ELEMENTOS, COR_TEMA } from "../../../constants/personagens/personagem.constant"

export const CORA = {
    ..._BASE_ORIGINAL,
    id: 41,
    nome: "Cora",
    titulo: "A Lobisomem",
    elemento: ELEMENTOS.TERRA,
    corTema: COR_TEMA.VERDE_ESCURO,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: CORA_1_SPRITE,
            perfil: CORA_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Traje Antigo",
            sprite: CORA_2_SPRITE,
            perfil: CORA_2_PERFIL,
            santuario: null,
        },
        {
            visualId: 3,
            nome: "Lobisomem",
            sprite: CORA_3_SPRITE,
            perfil: CORA_3_PERFIL,
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
            ataques: [17,6],
            habilidades: [1]
        },
        {
            level: 2,
            experienciaNecessaria: 3750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [17,6],
            habilidades: [1]
        },
        {
            level: 3,
            experienciaNecessaria: 7500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [17,6,10,9],
            habilidades: [1]
        },
        {
            level: 4,
            experienciaNecessaria: 12500,
            bonusAtributos: {forca: 0, agilidade: 1, magia: 0, vigor: 0},
            talentos: [],
            ataques: [17,6,10,9],
            habilidades: [1]
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            bonusAtributos: {forca: 0, agilidade: 1, magia: 0, vigor: 0},
            talentos: [],
            ataques: [17,6,10,9,60],
            habilidades: [1]
        },
    ]
}