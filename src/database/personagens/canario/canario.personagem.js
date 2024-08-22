import CANARIO_1_SPRITE from "./assets/CANARIO_1_SPRITE.png"
import CANARIO_1_PERFIL from "./assets/CANARIO_1_PERFIL.png"
import CANARIO_2_SPRITE from "./assets/CANARIO_2_SPRITE.png"
import CANARIO_2_PERFIL from "./assets/CANARIO_2_PERFIL.png"
import CANARIO_3_SPRITE from "./assets/CANARIO_3_SPRITE.png"
import CANARIO_3_PERFIL from "./assets/CANARIO_3_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const CANARIO = {
    ..._BASE_ORIGINAL,
    id: 11,
    nome: "Canário",
    titulo: "Lider Misterioso",
    elemento: ELEMENTOS.TREVAS,
    corTema: COR_TEMA.PRETO,
    raridade: 4,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: CANARIO_1_SPRITE,
            perfil: CANARIO_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Sem Máscara",
            sprite: CANARIO_2_SPRITE,
            perfil: CANARIO_2_PERFIL,
            santuario: null,
        },
        {
            visualId: 3,
            nome: "Traje Comum",
            sprite: CANARIO_3_SPRITE,
            perfil: CANARIO_3_PERFIL,
            santuario: null,
        },
    ],
    status: {
        pvBase: 14,
        pmBase: 4,
        pvBonus: 3
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1250,
            atributos: {
                forca: 4,
                agilidade: 3,
                magia: 2,
                vigor: 1
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
                agilidade: 3,
                magia: 2,
                vigor: 1
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
                agilidade: 3,
                magia: 2,
                vigor: 1
            },
            talentos: [],
            ataques: [14,16,5],
            habilidades: []
        },
        {
            level: 4,
            experienciaNecessaria: 37500,
            atributos: {
                forca: 4,
                agilidade: 4,
                magia: 2,
                vigor: 1
            },
            talentos: [],
            ataques: [14,16,5],
            habilidades: []
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            atributos: {
                forca: 5,
                agilidade: 5,
                magia: 3,
                vigor: 2
            },
            talentos: [],
            ataques: [14,16,5,33],
            habilidades: []
        },
    ],
}