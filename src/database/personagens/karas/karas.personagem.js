import KARAS_1_SPRITE from "./assets/KARAS_1_SPRITE.png"
import KARAS_1_PERFIL from "./assets/KARAS_1_PERFIL.png"
import KARAS_2_SPRITE from "./assets/KARAS_2_SPRITE.png"
import KARAS_2_PERFIL from "./assets/KARAS_2_PERFIL.png"
import KARAS_3_SPRITE from "./assets/KARAS_3_SPRITE.png"
import KARAS_3_PERFIL from "./assets/KARAS_3_PERFIL.png"
import KARAS_4_SPRITE from "./assets/KARAS_4_SPRITE.gif"
import KARAS_4_PERFIL from "./assets/KARAS_4_PERFIL.gif"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { PRONOMES } from "../../../constants"

export const KARAS = {
    ..._BASE_ORIGINAL,
    id: 15,
    nome: "Karas",
    titulo: "Príncipe das Marés",
    elemento: ELEMENTOS.AGUA,
    corTema: COR_TEMA.AZUL,
    raridade: 5,
    comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: KARAS_1_SPRITE,
            perfil: KARAS_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Traje Nobre",
            sprite: KARAS_2_SPRITE,
            perfil: KARAS_2_PERFIL,
            santuario: null,
        },
        {
            visualId: 3,
            nome: "Traje Casual",
            sprite: KARAS_3_SPRITE,
            perfil: KARAS_3_PERFIL,
            santuario: null,
        },
        {
            visualId: 4,
            nome: "Armadura Divina",
            sprite: KARAS_4_SPRITE,
            perfil: KARAS_4_PERFIL,
            santuario: null,
        },

    ],
    status: {
        pvBase: 16,
        pmBase: 4,
        pvBonus: 5
    },
    atributosBase: {
        forca: 3,
        agilidade: 2,
        magia: 5,
        vigor: 4
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1250,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 14, variantes: []}
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
                {ataqueId: 14, variantes: []}
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
                {ataqueId: 14, variantes: []},
                {ataqueId: 12, variantes: []},
                {ataqueId: 7, variantes: []},
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
                {ataqueId: 14, variantes: []},
                {ataqueId: 12, variantes: []},
                {ataqueId: 7, variantes: []},
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
                {ataqueId: 14, variantes: []},
                {ataqueId: 12, variantes: []},
                {ataqueId: 7, variantes: []},
                {ataqueId: 28, variantes: []},
            ],
            habilidades: [
                {habilidadeId: 1, variantes: []},
            ]
        },
    ]
}