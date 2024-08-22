import SAXA_1_SPRITE from "./assets/SAXA_1_SPRITE.png"
import SAXA_1_PERFIL from "./assets/SAXA_1_PERFIL.png"
import SAXA_2_SPRITE from "./assets/SAXA_2_SPRITE.png"
import SAXA_2_PERFIL from "./assets/SAXA_2_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const SAXA = {
    ..._BASE_ORIGINAL,
    id: 53,
    nome: "Saxa",
    titulo: "A Bruxa",
    elemento: ELEMENTOS.ELETRICO,
    corTema: COR_TEMA.PRETO,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Versão 1",
            sprite: SAXA_1_SPRITE,
            perfil: SAXA_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Versão 2",
            sprite: SAXA_2_SPRITE,
            perfil: SAXA_2_PERFIL,
            santuario: null,
        }
    ],
    status: {
        pvBase: 12,
        pmBase: 6,
        pvBonus: 2
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1250,
            atributos: {
                forca: 2,
                agilidade: 4,
                magia: 5,
                vigor: 3
            },
            talentos: [],
            ataques: [1,22,2],
            habilidades: []
        },
        {
            level: 2,
            experienciaNecessaria: 3750,
            atributos: {
                forca: 2,
                agilidade: 4,
                magia: 5,
                vigor: 3
            },
            talentos: [],
            ataques: [1,22,2],
            habilidades: []
        },
        {
            level: 3,
            experienciaNecessaria: 7500,
            atributos: {
                forca: 2,
                agilidade: 4,
                magia: 5,
                vigor: 3
            },
            talentos: [],
            ataques: [1,22,2,9,4],
            habilidades: [1]
        },
        {
            level: 4,
            experienciaNecessaria: 37500,
            atributos: {
                forca: 2,
                agilidade: 4,
                magia: 6,
                vigor: 3
            },
            talentos: [],
            ataques: [1,22,2,9,4],
            habilidades: [1]
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            atributos: {
                forca: 3,
                agilidade: 5,
                magia: 7,
                vigor: 4
            },
            talentos: [],
            ataques: [1,22,2,9,4],
            habilidades: [1]
        },
    ]
}