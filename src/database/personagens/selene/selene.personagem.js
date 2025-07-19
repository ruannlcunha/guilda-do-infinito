import SELENE_1_SPRITE from "./assets/SELENE_1_SPRITE.png"
import SELENE_1_PERFIL from "./assets/SELENE_1_PERFIL.png"
import SELENE_2_SPRITE from "./assets/SELENE_2_SPRITE.png"
import SELENE_2_PERFIL from "./assets/SELENE_2_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { ITEM_PROFICIENCIA, PRONOMES } from "../../../constants"

export const SELENE = {
    ..._BASE_ORIGINAL,
    id: 31,
    nome: "Selene",
    titulo: "Guardiã Azul",
    pronomes: PRONOMES.FEMININO,
    elemento: ELEMENTOS.AGUA,
    corTema: COR_TEMA.AZUL,
    raridade: 5,
    proficiencia: ITEM_PROFICIENCIA.LEVE,
    comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: SELENE_1_SPRITE,
            perfil: SELENE_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Roupas Comuns",
            sprite: SELENE_2_SPRITE,
            perfil: SELENE_2_PERFIL,
            santuario: null,
        }
    ],
    status: {
        pvBase: 20,
        pmBase: 5,
        pvBonus: 3
    },
    atributosBase: {
        forca: 4,
        agilidade: 2,
        magia: 3,
        vigor: 5
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1250,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 15, variantes: []}
            ],
            habilidades: []
        },
        {
            level: 2,
            experienciaNecessaria: 3750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 15, variantes: []}
            ],
            habilidades: []
        },
        {
            level: 3,
            experienciaNecessaria: 7500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 15, variantes: []},
                {ataqueId: 7, variantes: []},
                {ataqueId: 10, variantes: []},
            ],
            habilidades: [
                {habilidadeId: 13, variantes: []},
            ]
        },
        {
            level: 4,
            experienciaNecessaria: 12500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 1},
            talentos: [],
            ataques: [
                {ataqueId: 15, variantes: []},
                {ataqueId: 7, variantes: []},
                {ataqueId: 10, variantes: []},
            ],
            habilidades: [
                {habilidadeId: 13, variantes: []},
            ]
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 1},
            talentos: [],
            ataques: [
                {ataqueId: 15, variantes: []},
                {ataqueId: 7, variantes: []},
                {ataqueId: 10, variantes: []},
                {ataqueId: 38, variantes: []},
                {ataqueId: 40, variantes: []},
            ],
            habilidades: [
                {habilidadeId: 13, variantes: []},
            ]
        },
    ],
}