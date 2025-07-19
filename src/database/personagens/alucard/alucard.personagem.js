import ALUCARD_1_SPRITE from "./assets/ALUCARD_1_SPRITE.png"
import ALUCARD_1_PERFIL from "./assets/ALUCARD_1_PERFIL.png"
import ALUCARD_2_SPRITE from "./assets/ALUCARD_2_SPRITE.png"
import ALUCARD_2_PERFIL from "./assets/ALUCARD_2_PERFIL.png"
import ALUCARD_3_SPRITE from "./assets/ALUCARD_3_SPRITE.png"
import ALUCARD_3_PERFIL from "./assets/ALUCARD_3_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { ITEM_PROFICIENCIA, PRONOMES } from "../../../constants"

export const ALUCARD = {
    ..._BASE_ORIGINAL,
    id: 37,
    nome: "Alucard",
    titulo: "Príncipe Vampiro",
    elemento: ELEMENTOS.ELETRICO,
    corTema: COR_TEMA.AMARELO,
    raridade: 5,
    proficiencia: ITEM_PROFICIENCIA.LEVE,
    comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: ALUCARD_1_SPRITE,
            perfil: ALUCARD_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Traje Antigo",
            sprite: ALUCARD_2_SPRITE,
            perfil: ALUCARD_2_PERFIL,
            santuario: null,
        },
        {
            visualId: 3,
            nome: "Forma Feminina",
            sprite: ALUCARD_3_SPRITE,
            perfil: ALUCARD_3_PERFIL,
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
                {ataqueId: 16, variantes: []},
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
                {ataqueId: 16, variantes: []},
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
                {ataqueId: 16, variantes: []},
                {ataqueId: 22, variantes: []},
                {ataqueId: 2, variantes: []},
                {ataqueId: 10, variantes: []},
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
                {ataqueId: 16, variantes: []},
                {ataqueId: 22, variantes: []},
                {ataqueId: 2, variantes: []},
                {ataqueId: 10, variantes: []},
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
                {ataqueId: 16, variantes: []},
                {ataqueId: 22, variantes: []},
                {ataqueId: 2, variantes: []},
                {ataqueId: 10, variantes: []},
                {ataqueId: 5, variantes: []},
            ],
            habilidades: []
        },
    ]
}