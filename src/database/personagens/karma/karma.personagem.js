import KARMA_1_SPRITE from "./assets/KARMA_1_SPRITE.png"
import KARMA_1_PERFIL from "./assets/KARMA_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { ITEM_PROFICIENCIA, PRONOMES } from "../../../constants"
import { HABILIDADES } from "../../habilidades";

export const KARMA = {
    ..._BASE_ORIGINAL,
    id: 48,
    nome: "Karma",
    titulo: "Clérigo do Oriente",
    pronomes: PRONOMES.MASCULINO,
    elemento: ELEMENTOS.AR,
    corTema: COR_TEMA.CIANO,
    raridade: 5,
    proficiencia: ITEM_PROFICIENCIA.LEVE,
    comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: KARMA_1_SPRITE,
            perfil: KARMA_1_PERFIL,
            santuario: null,
        },
    ],
    status: {
        pvBase: 16,
        pmBase: 5,
        pvBonus: 4
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
                {ataqueId: 12, variantes: []}
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
                {ataqueId: 12, variantes: []}
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
                {ataqueId: 34, variantes: []},
                {ataqueId: 31, variantes: []},
            ],
            habilidades: [
                1,6,
                HABILIDADES.LANCAR_MALDICAO.id,
                HABILIDADES.DISSIPAR_BENCAO.id,
                ,24,25,28,
            ]
        },
    ],
}