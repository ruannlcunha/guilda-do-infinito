import GENEVIEVE_1_SPRITE from "./assets/GENEVIEVE_1_SPRITE.png"
import GENEVIEVE_1_PERFIL from "./assets/GENEVIEVE_1_PERFIL.png"
import GENEVIEVE_2_SPRITE from "./assets/GENEVIEVE_2_SPRITE.png"
import GENEVIEVE_2_PERFIL from "./assets/GENEVIEVE_2_PERFIL.png"
import GENEVIEVE_3_SPRITE from "./assets/GENEVIEVE_3_SPRITE.png"
import GENEVIEVE_3_PERFIL from "./assets/GENEVIEVE_3_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { ITEM_PROFICIENCIA, PRONOMES } from "../../../constants"

export const GENEVIEVE = {
    ..._BASE_ORIGINAL,
    id: 23,
    nome: "Genevieve",
    titulo: "A Curandeira",
    pronomes: PRONOMES.FEMININO,
    elemento: ELEMENTOS.ACIDO,
    corTema: COR_TEMA.TURQUESA,
    raridade: 5,
    proficiencia: ITEM_PROFICIENCIA.LEVE,
    comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: GENEVIEVE_1_SPRITE,
            perfil: GENEVIEVE_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Traje das Flores",
            sprite: GENEVIEVE_2_SPRITE,
            perfil: GENEVIEVE_2_PERFIL,
            santuario: null,
        },
        {
            visualId: 3,
            nome: "Traje Nobre",
            sprite: GENEVIEVE_3_SPRITE,
            perfil: GENEVIEVE_3_PERFIL,
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
            ataques: [
                {ataqueId: 16, variantes: []}
            ],
            habilidades: [
                {habilidadeId: 1, variantes: []},
                {habilidadeId: 11, variantes: []},
            ],
        },
        {
            level: 2,
            experienciaNecessaria: 3750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 16, variantes: []}
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
                {ataqueId: 16, variantes: []},
                {ataqueId: 6, variantes: []}
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
                {ataqueId: 16, variantes: []},
                {ataqueId: 6, variantes: []}
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
                {ataqueId: 16, variantes: []},
                {ataqueId: 6, variantes: []},
                {ataqueId: 49, variantes: []},
                {ataqueId: 79, variantes: []},
            ],
            habilidades: [
                {habilidadeId: 1, variantes: []},
            ]
        },
    ]
}