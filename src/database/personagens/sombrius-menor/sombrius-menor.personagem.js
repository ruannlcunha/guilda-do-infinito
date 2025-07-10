import SOMBRIUS_MENOR_1_SPRITE from "./assets/SOMBRIUS_MENOR_1_SPRITE.png"
import SOMBRIUS_MENOR_1_PERFIL from "./assets/SOMBRIUS_MENOR_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { PRONOMES } from "../../../constants"

export const SOMBRIUS_MENOR = {
    ..._BASE_ORIGINAL,
    id: 10,
    nome: "Sombrius Menor",
    titulo: "Sombrius",
    elemento: ELEMENTOS.TREVAS,
    corTema: COR_TEMA.CIANO,
    raridade: 3,
    comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: SOMBRIUS_MENOR_1_SPRITE,
            perfil: SOMBRIUS_MENOR_1_PERFIL,
            santuario: null,
        },
    ],
    status: {
        pvBase: 5,
        pmBase: 2,
        pvBonus: 3
    },
    atributosBase: {
        forca: 0,
        agilidade: 1,
        magia: 2,
        vigor: 3
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1250,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 76, variantes: []},
                {ataqueId: 5, variantes: []}
            ],
            habilidades: []
        },
        {
            level: 2,
            experienciaNecessaria: 3750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 76, variantes: []},
                {ataqueId: 5, variantes: []}
            ],
            habilidades: []
        },
        {
            level: 3,
            experienciaNecessaria: 7500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 76, variantes: []},
                {ataqueId: 5, variantes: []}
            ],
            habilidades: []
        },
        {
            level: 4,
            experienciaNecessaria: 12500,
            bonusAtributos: {forca: 0, agilidade: 1, magia: 0, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 76, variantes: []},
                {ataqueId: 5, variantes: []}
            ],
            habilidades: []
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            bonusAtributos: {forca: 0, agilidade: 1, magia: 0, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 76, variantes: []},
                {ataqueId: 5, variantes: []}
            ],
            habilidades: []
        },
    ],
}