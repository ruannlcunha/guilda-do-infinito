import LUCIUS_1_SPRITE from "./assets/LUCIUS_1_SPRITE.png"
import LUCIUS_1_PERFIL from "./assets/LUCIUS_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const LUCIUS = {
    ..._BASE_ORIGINAL,
    id: 57,
    nome: "Lucius",
    titulo: "Dragão Celestial",
    elemento: ELEMENTOS.LUZ,
    corTema: COR_TEMA.CIANO,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: LUCIUS_1_SPRITE,
            perfil: LUCIUS_1_PERFIL,
            santuario: null,
        },
    ],
    status: {
        pvBase: 20,
        pmBase: 5,
        pvBonus: 3
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1250,
            atributos: {
                forca: 5,
                agilidade: 3,
                magia: 2,
                vigor: 4
            },
            talentos: [],
            ataques: [14,12],
            habilidades: []
        },
        {
            level: 2,
            experienciaNecessaria: 3750,
            atributos: {
                forca: 5,
                agilidade: 3,
                magia: 2,
                vigor: 4
            },
            talentos: [],
            ataques: [14,12],
            habilidades: []
        },
        {
            level: 3,
            experienciaNecessaria: 7500,
            atributos: {
                forca: 5,
                agilidade: 3,
                magia: 2,
                vigor: 4
            },
            talentos: [],
            ataques: [14,12,15],
            habilidades: []
        },
        {
            level: 4,
            experienciaNecessaria: 37500,
            atributos: {
                forca: 6,
                agilidade: 3,
                magia: 2,
                vigor: 4
            },
            talentos: [],
            ataques: [14,12,15],
            habilidades: []
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            atributos: {
                forca: 7,
                agilidade: 4,
                magia: 3,
                vigor: 5
            },
            talentos: [],
            ataques: [14,12,15,34,44],
            habilidades: []
        },
    ],
}