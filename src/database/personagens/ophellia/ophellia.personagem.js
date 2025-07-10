import OPHELLIA_1_SPRITE from "./assets/OPHELLIA_1_SPRITE.png"
import OPHELLIA_1_PERFIL from "./assets/OPHELLIA_1_PERFIL.png"
import OPHELLIA_2_SPRITE from "./assets/OPHELLIA_2_SPRITE.png"
import OPHELLIA_2_PERFIL from "./assets/OPHELLIA_2_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { PRONOMES } from "../../../constants"

export const OPHELLIA = {
    ..._BASE_ORIGINAL,
    id: 30,
    nome: "Ophellia",
    titulo: "Guardiã Verde",
    pronomes: PRONOMES.FEMININO,
    elemento: ELEMENTOS.AR,
    corTema: COR_TEMA.VERDE,
    raridade: 5,
    comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: OPHELLIA_1_SPRITE,
            perfil: OPHELLIA_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Roupas Comuns",
            sprite: OPHELLIA_2_SPRITE,
            perfil: OPHELLIA_2_PERFIL,
            santuario: null,
        }
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
            ataques: [
                {ataqueId: 1, variantes: []},
                {ataqueId: 10, variantes: []}
            ],
            habilidades: []
        },
        {
            level: 2,
            experienciaNecessaria: 3750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 1, variantes: []},
                {ataqueId: 10, variantes: []}
            ],
            habilidades: []
        },
        {
            level: 3,
            experienciaNecessaria: 7500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 1, variantes: []},
                {ataqueId: 16, variantes: []},
                {ataqueId: 10, variantes: []},
                {ataqueId: 9, variantes: []},
                {ataqueId: 12, variantes: []},
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
                {ataqueId: 16, variantes: []},
                {ataqueId: 10, variantes: []},
                {ataqueId: 9, variantes: []},
                {ataqueId: 12, variantes: []},
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
                {ataqueId: 16, variantes: []},
                {ataqueId: 10, variantes: []},
                {ataqueId: 9, variantes: []},
                {ataqueId: 12, variantes: []},
                {ataqueId: 45, variantes: []},
                {ataqueId: 51, variantes: []},
            ],
            habilidades: [
                {habilidadeId: 1, variantes: []},
            ]
        },
    ]
}