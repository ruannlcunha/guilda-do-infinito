import AKINN_1_SPRITE from "./assets/AKINN_1_SPRITE.png"
import AKINN_1_PERFIL from "./assets/AKINN_1_PERFIL.png"
import AKINN_2_SPRITE from "./assets/AKINN_2_SPRITE.png"
import AKINN_2_PERFIL from "./assets/AKINN_2_PERFIL.png"
import AKINN_3_SPRITE from "./assets/AKINN_3_SPRITE.png"
import AKINN_3_PERFIL from "./assets/AKINN_3_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const AKINN = {
    ..._BASE_ORIGINAL,
    id: 19,
    nome: "Akinn",
    titulo: "Chama de Rammeth",
    elemento: ELEMENTOS.FOGO,
    corTema: COR_TEMA.AMARELO,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: AKINN_1_SPRITE,
            perfil: AKINN_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Forma Desperta",
            sprite: AKINN_2_SPRITE,
            perfil: AKINN_2_PERFIL,
            santuario: null,
        },
        {
            visualId: 3,
            nome: "Traje de Disfarce",
            sprite: AKINN_3_SPRITE,
            perfil: AKINN_3_PERFIL,
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
            ataques: [1,2],
            habilidades: []
        },
        {
            level: 2,
            experienciaNecessaria: 3750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [1,2],
            habilidades: []
        },
        {
            level: 3,
            experienciaNecessaria: 7500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [1,16,2,5],
            habilidades: []
        },
        {
            level: 4,
            experienciaNecessaria: 12500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 1, vigor: 0},
            talentos: [],
            ataques: [1,16,2,5],
            habilidades: []
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 1, vigor: 0},
            talentos: [],
            ataques: [1,16,2,5,47,53],
            habilidades: []
        },
    ]
}