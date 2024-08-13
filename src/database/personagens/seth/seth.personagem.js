import SETH_1_SPRITE from "./assets/SETH_1_SPRITE.png"
import SETH_1_PERFIL from "./assets/SETH_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const SETH = {
    ..._BASE_ORIGINAL,
    id: 22,
    nome: "Seth",
    titulo: "Dançarino das Chamas",
    elemento: ELEMENTOS.FOGO,
    corTema: COR_TEMA.VERMELHO,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: SETH_1_SPRITE,
            perfil: SETH_1_PERFIL,
            santuario: null
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
                forca: 3,
                agilidade: 4,
                magia: 5,
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
                forca: 3,
                agilidade: 4,
                magia: 5,
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
                forca: 3,
                agilidade: 4,
                magia: 5,
                vigor: 2
            },
            talentos: [],
            ataques: [14,2],
            habilidades: []
        },
        {
            level: 4,
            experienciaNecessaria: 37500,
            atributos: {
                forca: 3,
                agilidade: 4,
                magia: 6,
                vigor: 2
            },
            talentos: [],
            ataques: [14,2],
            habilidades: []
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            atributos: {
                forca: 3,
                agilidade: 4,
                magia: 6,
                vigor: 2
            },
            talentos: [],
            ataques: [14,2,27],
            habilidades: []
        },
    ],
}