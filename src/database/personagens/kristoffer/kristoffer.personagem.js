import KRISTOFFER_1_SPRITE from "./assets/KRISTOFFER_1_SPRITE.png"
import KRISTOFFER_1_PERFIL from "./assets/KRISTOFFER_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { ELEMENTOS, COR_TEMA } from "../../../constants/personagens/personagem.constant"

export const KRISTOFFER = {
    ..._BASE_ORIGINAL,
    id: 46,
    nome: "Kristoffer",
    titulo: "Paladino da Ambição",
    elemento: ELEMENTOS.LUZ,
    corTema: COR_TEMA.TURQUESA,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: KRISTOFFER_1_SPRITE,
            perfil: KRISTOFFER_1_PERFIL,
            santuario: null,
        },
    ],
    status: {
        pvBase: 20,
        pmBase: 3,
        pvBonus: 5,
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
            ataques: [14],
            habilidades: [12]
        },
        {
            level: 2,
            experienciaNecessaria: 3750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [14],
            habilidades: [12]
        },
        {
            level: 3,
            experienciaNecessaria: 7500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [14,15],
            habilidades: [12, 1]
        },
        {
            level: 4,
            experienciaNecessaria: 12500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 1},
            talentos: [],
            ataques: [14,15],
            habilidades: [12, 1]
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 1},
            talentos: [],
            ataques: [14,15,34],
            habilidades: [12, 1]
        },
    ],
}