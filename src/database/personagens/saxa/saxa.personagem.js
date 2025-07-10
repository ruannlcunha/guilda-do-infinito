import SAXA_1_SPRITE from "./assets/SAXA_1_SPRITE.png"
import SAXA_1_PERFIL from "./assets/SAXA_1_PERFIL.png"
import SAXA_2_SPRITE from "./assets/SAXA_2_SPRITE.png"
import SAXA_2_PERFIL from "./assets/SAXA_2_PERFIL.png"
import SAXA_3_SPRITE from "./assets/SAXA_3_SPRITE.png"
import SAXA_3_PERFIL from "./assets/SAXA_3_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { PRONOMES } from "../../../constants"

export const SAXA = {
    ..._BASE_ORIGINAL,
    id: 53,
    nome: "Saxa",
    titulo: "Bruxa das Chamas",
    pronomes: PRONOMES.FEMININO,
    elemento: ELEMENTOS.FOGO,
    corTema: COR_TEMA.PRETO,
    raridade: 5,
    comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
    visuais:[
        {
            visualId: 1,
            nome: "Versão 1",
            sprite: SAXA_1_SPRITE,
            perfil: SAXA_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Versão 2",
            sprite: SAXA_2_SPRITE,
            perfil: SAXA_2_PERFIL,
            santuario: null,
        },
        {
            visualId: 3,
            nome: "Bruxa Carmesim",
            sprite: SAXA_3_SPRITE,
            perfil: SAXA_3_PERFIL,
            santuario: null,
        },
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
                {ataqueId: 22, variantes: []},
                {ataqueId: 2, variantes: []},
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
                {ataqueId: 22, variantes: []},
                {ataqueId: 2, variantes: []},
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
                {ataqueId: 22, variantes: []},
                {ataqueId: 2, variantes: []},
                {ataqueId: 9, variantes: []},
                {ataqueId: 5, variantes: []},
            ],
            habilidades: []
        },
        {
            level: 4,
            experienciaNecessaria: 12500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 1, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 1, variantes: []},
                {ataqueId: 22, variantes: []},
                {ataqueId: 2, variantes: []},
                {ataqueId: 9, variantes: []},
                {ataqueId: 5, variantes: []},
            ],
            habilidades: []
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 1, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 1, variantes: []},
                {ataqueId: 22, variantes: []},
                {ataqueId: 2, variantes: []},
                {ataqueId: 9, variantes: []},
                {ataqueId: 5, variantes: []},
            ],
            habilidades: []
        },
    ]
}