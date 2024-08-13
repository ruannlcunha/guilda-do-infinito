import DIANA_1_SPRITE from "./assets/DIANA_1_SPRITE.png"
import DIANA_1_PERFIL from "./assets/DIANA_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const DIANA = {
    ..._BASE_ORIGINAL,
    id: 35,
    nome: "Diana",
    titulo: "Presa Ruiva",
    elemento: ELEMENTOS.FOGO,
    corTema: COR_TEMA.VERMELHO,
    raridade: 4,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: DIANA_1_SPRITE,
            perfil: DIANA_1_PERFIL,
            santuario: null,
        }
    ],
    status: {
        pvBase: 20,
        pmBase: 3,
        pvBonus: 5
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1000,
            atributos: {
                forca: 4,
                agilidade: 2,
                magia: 1,
                vigor: 3
            },
            talentos: [],
            ataques: [14],
            habilidades: [13]
        },
        {
            level: 2,
            experienciaNecessaria: 3000,
            atributos: {
                forca: 4,
                agilidade: 2,
                magia: 1,
                vigor: 3
            },
            talentos: [],
            ataques: [14],
            habilidades: [13]
        },
        {
            level: 3,
            experienciaNecessaria: 6000,
            atributos: {
                forca: 4,
                agilidade: 2,
                magia: 1,
                vigor: 3
            },
            talentos: [],
            ataques: [14,16],
            habilidades: [13]
        },
        {
            level: 4,
            experienciaNecessaria: 30000,
            atributos: {
                forca: 5,
                agilidade: 2,
                magia: 1,
                vigor: 3
            },
            talentos: [],
            ataques: [14,16],
            habilidades: [13]
        },
        {
            level: 5,
            experienciaNecessaria: 15000,
            atributos: {
                forca: 6,
                agilidade: 3,
                magia: 2,
                vigor: 4
            },
            talentos: [],
            ataques: [14,16,27],
            habilidades: [13]
        },
    ],
}