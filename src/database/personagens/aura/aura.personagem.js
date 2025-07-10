import AURA_1_SPRITE from "./assets/AURA_1_SPRITE.png"
import AURA_1_PERFIL from "./assets/AURA_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { PRONOMES } from "../../../constants"

export const AURA = {
    ..._BASE_ORIGINAL,
    id: 47,
    nome: "Aura",
    titulo: "Guerreiro do Oriente",
    elemento: ELEMENTOS.TERRA,
    corTema: COR_TEMA.AZUL,
    raridade: 5,
    comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: AURA_1_SPRITE,
            perfil: AURA_1_PERFIL,
            santuario: null,
        },
    ],
    status: {
        pvBase: 20,
        pmBase: 5,
        pvBonus: 3
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
            experienciaNecessaria: 1250,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 14, variantes: []}
            ],
            habilidades: [
                {habilidadeId: 13, variantes: []},
                {habilidadeId: 14, variantes: []},
            ],
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
                {habilidadeId: 13, variantes: []},
                {habilidadeId: 14, variantes: []},
            ],
        },
        {
            level: 3,
            experienciaNecessaria: 7500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 14, variantes: []},
                {ataqueId: 15, variantes: []}
            ],
            habilidades: [
                {habilidadeId: 13, variantes: []},
                {habilidadeId: 14, variantes: []},
            ],
        },
        {
            level: 4,
            experienciaNecessaria: 12500,
            bonusAtributos: {forca: 1, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 14, variantes: []},
                {ataqueId: 15, variantes: []}
            ],
            habilidades: [
                {habilidadeId: 13, variantes: []},
                {habilidadeId: 14, variantes: []},
            ],
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            bonusAtributos: {forca: 1, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 14, variantes: []},
                {ataqueId: 15, variantes: []},
                {ataqueId: 30, variantes: []},
            ],
            habilidades: [
                {habilidadeId: 13, variantes: []},
                {habilidadeId: 14, variantes: []},
            ],
        },
    ],
}