import KAI_1_SPRITE from "./assets/KAI_1_SPRITE.png"
import KAI_1_PERFIL from "./assets/KAI_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const KAI = {
    ..._BASE_ORIGINAL,
    id: 24,
    nome: "Kai",
    titulo: "Gatuna Forasteira",
    elemento: ELEMENTOS.ACIDO,
    corTema: COR_TEMA.ROSA,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: KAI_1_SPRITE,
            perfil: KAI_1_PERFIL,
            santuario: null,
        }
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
                forca: 5,
                agilidade: 4,
                magia: 3,
                vigor: 2
            },
            talentos: [],
            ataques: [14],
            habilidades: []
        },
        {
            level: 2,
            experienciaNecessaria: 3750,
            atributos: {
                forca: 5,
                agilidade: 4,
                magia: 3,
                vigor: 2
            },
            talentos: [],
            ataques: [14],
            habilidades: []
        },
        {
            level: 3,
            experienciaNecessaria: 7500,
            atributos: {
                forca: 5,
                agilidade: 4,
                magia: 3,
                vigor: 2
            },
            talentos: [],
            ataques: [14,16],
            habilidades: []
        },
        {
            level: 4,
            experienciaNecessaria: 12500,
            atributos: {
                forca: 6,
                agilidade: 4,
                magia: 3,
                vigor: 2
            },
            talentos: [],
            ataques: [14,16],
            habilidades: []
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            atributos: {
                forca: 6,
                agilidade: 4,
                magia: 3,
                vigor: 2
            },
            talentos: [],
            ataques: [14,16,29,49],
            habilidades: []
        },
    ],
}