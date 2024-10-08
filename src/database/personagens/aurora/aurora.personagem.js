import AURORA_1_SPRITE from "./assets/AURORA_1_SPRITE.png"
import AURORA_1_PERFIL from "./assets/AURORA_1_PERFIL.png"
import AURORA_2_SPRITE from "./assets/AURORA_2_SPRITE.png"
import AURORA_2_PERFIL from "./assets/AURORA_2_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const AURORA = {
    ..._BASE_ORIGINAL,
    id: 29,
    nome: "Aurora",
    titulo: "Guardiã Rosa",
    elemento: ELEMENTOS.LUZ,
    corTema: COR_TEMA.ROSA,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: AURORA_1_SPRITE,
            perfil: AURORA_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Roupas Comuns",
            sprite: AURORA_2_SPRITE,
            perfil: AURORA_2_PERFIL,
            santuario: null,
        }
    ],
    status: {
        pvBase: 20,
        pmBase: 3,
        pvBonus: 5
    },
    atributosBase: {
        forca: 5,
        agilidade: 2,
        magia: 4,
        vigor: 3
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1250,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [14],
            habilidades: [13]
        },
        {
            level: 2,
            experienciaNecessaria: 3750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [14],
            habilidades: [13]
        },
        {
            level: 3,
            experienciaNecessaria: 7500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [14,12],
            habilidades: [13,12]
        },
        {
            level: 4,
            experienciaNecessaria: 12500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 1, vigor: 0},
            talentos: [],
            ataques: [14,12],
            habilidades: [13,12]
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 1, vigor: 0},
            talentos: [],
            ataques: [14,12,34],
            habilidades: [13,12]
        },
    ],
}