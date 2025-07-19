import SAZANNA_1_SPRITE from "./assets/SAZANNA_1_SPRITE.png"
import SAZANNA_1_PERFIL from "./assets/SAZANNA_1_PERFIL.png"
import SAZANNA_2_SPRITE from "./assets/SAZANNA_2_SPRITE.png"
import SAZANNA_2_PERFIL from "./assets/SAZANNA_2_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { ITEM_PROFICIENCIA, PRONOMES } from "../../../constants"

export const SAZANNA = {
    ..._BASE_ORIGINAL,
    id: 26,
    nome: "Saz'anna",
    titulo: "Instrutora Real",
    pronomes: PRONOMES.FEMININO,
    elemento: ELEMENTOS.FOGO,
    corTema: COR_TEMA.ROXO,
    raridade: 4,
    proficiencia: ITEM_PROFICIENCIA.LEVE,
    comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
    visuais:[
        {
            visualId: 1,
            nome: "Com Máscara",
            sprite: SAZANNA_1_SPRITE,
            perfil: SAZANNA_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Sem Máscara",
            sprite: SAZANNA_2_SPRITE,
            perfil: SAZANNA_2_PERFIL,
            santuario: null,
        }
    ],
    status: {
        pvBase: 12,
        pmBase: 6,
        pvBonus: 2
    },
    atributosBase: {
        forca: 1,
        agilidade: 3,
        magia: 4,
        vigor: 2
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 1, variantes: []},
                {ataqueId: 2, variantes: []}
            ],
            habilidades: []
        },
        {
            level: 2,
            experienciaNecessaria: 3000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 1, variantes: []},
                {ataqueId: 2, variantes: []}
            ],
            habilidades: []
        },
        {
            level: 3,
            experienciaNecessaria: 6000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 1, variantes: []},
                {ataqueId: 16, variantes: []},
                {ataqueId: 2, variantes: []},
                {ataqueId: 5, variantes: []},
            ],
            habilidades: []
        },
        {
            level: 4,
            experienciaNecessaria: 10000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 1, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 1, variantes: []},
                {ataqueId: 16, variantes: []},
                {ataqueId: 2, variantes: []},
                {ataqueId: 5, variantes: []},
            ],
            habilidades: []
        },
        {
            level: 5,
            experienciaNecessaria: 15000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 1, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 1, variantes: []},
                {ataqueId: 16, variantes: []},
                {ataqueId: 2, variantes: []},
                {ataqueId: 5, variantes: []},
                {ataqueId: 47, variantes: []},
                {ataqueId: 53, variantes: []},
            ],
            habilidades: []
        },
    ]
}