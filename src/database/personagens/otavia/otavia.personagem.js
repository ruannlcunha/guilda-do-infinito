import OTAVIA_1_SPRITE from "./assets/OTAVIA_1_SPRITE.png"
import OTAVIA_1_PERFIL from "./assets/OTAVIA_1_PERFIL.png"
import OTAVIA_2_SPRITE from "./assets/OTAVIA_2_SPRITE.png"
import OTAVIA_2_PERFIL from "./assets/OTAVIA_2_PERFIL.png"
import OTAVIA_3_SPRITE from "./assets/OTAVIA_3_SPRITE.png"
import OTAVIA_3_PERFIL from "./assets/OTAVIA_3_PERFIL.png"
import OTAVIA_4_SPRITE from "./assets/OTAVIA_4_SPRITE.png"
import OTAVIA_4_PERFIL from "./assets/OTAVIA_4_PERFIL.png"
import OTAVIA_5_SPRITE from "./assets/OTAVIA_5_SPRITE.png"
import OTAVIA_5_PERFIL from "./assets/OTAVIA_5_PERFIL.png"
import OTAVIA_6_SPRITE from "./assets/OTAVIA_6_SPRITE.png"
import OTAVIA_6_PERFIL from "./assets/OTAVIA_6_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const OTAVIA = {
    ..._BASE_ORIGINAL,
    id: 7,
    nome: "Otavia",
    titulo: "Valkiria",
    elemento: ELEMENTOS.AR,
    corTema: COR_TEMA.ROSA,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Traje de Qareen",
            sprite: OTAVIA_1_SPRITE,
            perfil: OTAVIA_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Traje de Aventureira",
            sprite: OTAVIA_2_SPRITE,
            perfil: OTAVIA_2_PERFIL,
            santuario: null,
        },
        {
            visualId: 3,
            nome: "Traje Casual",
            sprite: OTAVIA_3_SPRITE,
            perfil: OTAVIA_3_PERFIL,
            santuario: null,
        },
        {
            visualId: 4,
            nome: "Traje da Rosa",
            sprite: OTAVIA_4_SPRITE,
            perfil: OTAVIA_4_PERFIL,
            santuario: null,
        },
        {
            visualId: 5,
            nome: "Pós time-skip",
            sprite: OTAVIA_5_SPRITE,
            perfil: OTAVIA_5_PERFIL,
            santuario: null,
        },
        {
            visualId: 6,
            nome: "Armadura de Kally",
            sprite: OTAVIA_6_SPRITE,
            perfil: OTAVIA_6_PERFIL,
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
            ataques: [1],
            habilidades: [1]
        },
        {
            level: 2,
            experienciaNecessaria: 3750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [1],
            habilidades: [1]
        },
        {
            level: 3,
            experienciaNecessaria: 7500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [1,14],
            habilidades: [1]
        },
        {
            level: 4,
            experienciaNecessaria: 12500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 1, vigor: 0},
            talentos: [],
            ataques: [1,14],
            habilidades: [1]
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 1, vigor: 0},
            talentos: [],
            ataques: [1,14,51],
            habilidades: [1]
        },
    ],
}