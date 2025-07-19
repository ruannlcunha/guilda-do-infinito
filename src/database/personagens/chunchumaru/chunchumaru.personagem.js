import CHUNCHUMARU_1_SPRITE from "./assets/CHUNCHUMARU_1_SPRITE.png"
import CHUNCHUMARU_1_PERFIL from "./assets/CHUNCHUMARU_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { ITEM_PROFICIENCIA, PRONOMES } from "../../../constants"

export const CHUNCHUMARU = {
    ..._BASE_ORIGINAL,
    id: 40,
    nome: "Chunchumaru",
    titulo: "Pequeno Druída",
    elemento: ELEMENTOS.TERRA,
    corTema: COR_TEMA.TURQUESA,
    raridade: 5,
    proficiencia: ITEM_PROFICIENCIA.LEVE,
    comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: CHUNCHUMARU_1_SPRITE,
            perfil: CHUNCHUMARU_1_PERFIL,
            santuario: null,
        },
    ],
    status: {
        pvBase: 16,
        pmBase: 4,
        pvBonus: 4
    },
    atributosBase: {
        forca: 3,
        agilidade: 4,
        magia: 5,
        vigor: 2
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1250,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 1, variantes: []},
                {ataqueId: 6, variantes: []},
                {ataqueId: 9, variantes: []},
            ],
            habilidades: [
                {habilidadeId: 1, variantes: []},
            ]
        },
        {
            level: 2,
            experienciaNecessaria: 3750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 1, variantes: []},
                {ataqueId: 6, variantes: []},
                {ataqueId: 9, variantes: []},
            ],
            habilidades: [
                {habilidadeId: 1, variantes: []},
            ]
        },
        {
            level: 3,
            experienciaNecessaria: 7500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 1, variantes: []},
                {ataqueId: 6, variantes: []},
                {ataqueId: 9, variantes: []},
                {ataqueId: 9, variantes: []},
            ],
            habilidades: [
                {habilidadeId: 1, variantes: []},
            ]
        },
        {
            level: 4,
            experienciaNecessaria: 12500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 1, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 1, variantes: []},
                {ataqueId: 6, variantes: []},
                {ataqueId: 9, variantes: []},
                {ataqueId: 10, variantes: []},
            ],
            habilidades: [
                {habilidadeId: 1, variantes: []},
            ]
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 1, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 1, variantes: []},
                {ataqueId: 6, variantes: []},
                {ataqueId: 9, variantes: []},
                {ataqueId: 10, variantes: []},
            ],
            habilidades: [
                {habilidadeId: 1, variantes: []},
            ]
        },
    ]
}