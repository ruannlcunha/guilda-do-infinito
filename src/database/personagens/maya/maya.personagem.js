import MAYA_1_SPRITE from "./assets/MAYA_1_SPRITE.png"
import MAYA_1_PERFIL from "./assets/MAYA_1_PERFIL.png"
import MAYA_2_SPRITE from "./assets/MAYA_2_SPRITE.png"
import MAYA_2_PERFIL from "./assets/MAYA_2_PERFIL.png"
import MAYA_3_SPRITE from "./assets/MAYA_3_SPRITE.png"
import MAYA_3_PERFIL from "./assets/MAYA_3_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const MAYA = {
    ..._BASE_ORIGINAL,
    id: 8,
    nome: "Maya",
    titulo: "Imperatriz das Lâminas",
    elemento: ELEMENTOS.AR,
    corTema: COR_TEMA.PRETO,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: MAYA_1_SPRITE,
            perfil: MAYA_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Traje do Corvo",
            sprite: MAYA_2_SPRITE,
            perfil: MAYA_2_PERFIL,
            santuario: null,
        },
        {
            visualId: 3,
            nome: "Traje de Gala",
            sprite: MAYA_3_SPRITE,
            perfil: MAYA_3_PERFIL,
            santuario: null,
        },
    ],
    status: {
        pvBase: 16,
        pmBase: 3,
        pvBonus: 4
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1250,
            atributos: {
                forca: 4,
                agilidade: 5,
                magia: 2,
                vigor: 3
            },
            talentos: [],
            ataques: [14],
            habilidades: []
        },
        {
            level: 2,
            experienciaNecessaria: 3750,
            atributos: {
                forca: 4,
                agilidade: 5,
                magia: 2,
                vigor: 3
            },
            talentos: [],
            ataques: [14],
            habilidades: []
        },
        {
            level: 3,
            experienciaNecessaria: 7500,
            atributos: {
                forca: 4,
                agilidade: 5,
                magia: 2,
                vigor: 3
            },
            talentos: [],
            ataques: [14,16,49],
            habilidades: []
        },
        {
            level: 4,
            experienciaNecessaria: 37500,
            atributos: {
                forca: 5,
                agilidade: 5,
                magia: 2,
                vigor: 3
            },
            talentos: [],
            ataques: [14,16,49],
            habilidades: []
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            atributos: {
                forca: 6,
                agilidade: 6,
                magia: 3,
                vigor: 4
            },
            talentos: [],
            ataques: [14,16,49,31,51],
            habilidades: []
        },
    ],
}