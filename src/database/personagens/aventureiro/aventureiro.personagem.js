import AVENTUREIRO_1_SPRITE_1 from "./assets/AVENTUREIRO_1_SPRITE_1.png"
import AVENTUREIRO_1_PERFIL_1 from "./assets/AVENTUREIRO_1_PERFIL_1.png"
import AVENTUREIRO_1_SANTUARIO_1 from "./assets/AVENTUREIRO_1_SANTUARIO_1.png"
import AVENTUREIRO_2_SPRITE_1 from "./assets/AVENTUREIRO_2_SPRITE_1.png"
import AVENTUREIRO_2_PERFIL_1 from "./assets/AVENTUREIRO_2_PERFIL_1.png"
import AVENTUREIRO_2_SANTUARIO_1 from "./assets/AVENTUREIRO_2_SANTUARIO_1.png"
import AVENTUREIRO_3_SPRITE_1 from "./assets/AVENTUREIRO_3_SPRITE_1.png"
import AVENTUREIRO_3_PERFIL_1 from "./assets/AVENTUREIRO_3_PERFIL_1.png"
import AVENTUREIRO_3_SANTUARIO_1 from "./assets/AVENTUREIRO_3_SANTUARIO_1.png"
import {_BASE_ORIGINAL} from "../_base/_base-original.personagem"
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { PRONOMES } from "../../../constants"

export const AVENTUREIRO = {
    ..._BASE_ORIGINAL,
    id: 1,
    nome: null,
    titulo: null,
    elemento: ELEMENTOS.LUZ,
    corTema: COR_TEMA.CIANO,
    raridade: 5,
    comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
    visuais:[
        {
            visualId: 1,
            nome: "Original 1",
            sprite: AVENTUREIRO_1_SPRITE_1,
            perfil: AVENTUREIRO_1_PERFIL_1,
            santuario: AVENTUREIRO_1_SANTUARIO_1
        },
        {
            visualId: 2,
            nome: "Original 2",
            sprite: AVENTUREIRO_2_SPRITE_1,
            perfil: AVENTUREIRO_2_PERFIL_1,
            santuario: AVENTUREIRO_2_SANTUARIO_1
        },
        {
            visualId: 3,
            nome: "Original 3",
            sprite: AVENTUREIRO_3_SPRITE_1,
            perfil: AVENTUREIRO_3_PERFIL_1,
            santuario: AVENTUREIRO_3_SANTUARIO_1
        }
    ],
    status: {
        pvBase: 20,
        pmBase: 3,
        pvBonus: 5,
    },
    atributosBase: {
        forca: 5,
        agilidade: 3,
        magia: 2,
        vigor: 4
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 1, variantes: []},
                {ataqueId: 14, variantes: []}
            ],
            habilidades: [
                {habilidadeId: 12, variantes: []},
            ]
        },
        {
            level: 2,
            experienciaNecessaria: 3000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 1, variantes: []},
                {ataqueId: 14, variantes: []}
            ],
            habilidades: [
                {habilidadeId: 12, variantes: []},
            ]
        },
        {
            level: 3,
            experienciaNecessaria: 6000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 1, variantes: []},
                {ataqueId: 14, variantes: []},
                {ataqueId: 12, variantes: []},
            ],
            habilidades: [
                {habilidadeId: 12, variantes: []},
                {habilidadeId: 13, variantes: []},
            ],
        },
        {
            level: 4,
            experienciaNecessaria: 10000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 1, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 1, variantes: []},
                {ataqueId: 14, variantes: []},
                {ataqueId: 12, variantes: []},
            ],
            habilidades: [
                {habilidadeId: 12, variantes: []},
                {habilidadeId: 13, variantes: []},
            ],
        },
        {
            level: 5,
            experienciaNecessaria: 15000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 1, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 1, variantes: []},
                {ataqueId: 14, variantes: []},
                {ataqueId: 12, variantes: []},
                {ataqueId: 34, variantes: []},
            ],
            habilidades: [
                {habilidadeId: 12, variantes: []},
                {habilidadeId: 13, variantes: []},
            ],
        },
    ]
}