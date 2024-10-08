import FENRI_1_SPRITE from "./assets/FENRI_1_SPRITE.png"
import FENRI_1_PERFIL from "./assets/FENRI_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const FENRI = {
    ..._BASE_ORIGINAL,
    id: 39,
    nome: "Fenri",
    titulo: "Ladrão Mentiroso",
    elemento: ELEMENTOS.ACIDO,
    corTema: COR_TEMA.AZUL,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: FENRI_1_SPRITE,
            perfil: FENRI_1_PERFIL,
            santuario: null,
        },
    ],
    status: {
        pvBase: 14,
        pmBase: 4,
        pvBonus: 3
    },
    atributosBase: {
        forca: 4,
        agilidade: 5,
        magia: 2,
        vigor: 3
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [16,17],
            habilidades: []
        },
        {
            level: 2,
            experienciaNecessaria: 3000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [16,17],
            habilidades: []
        },
        {
            level: 3,
            experienciaNecessaria: 6000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [16,17,14],
            habilidades: []
        },
        {
            level: 4,
            experienciaNecessaria: 10000,
            bonusAtributos: {forca: 0, agilidade: 1, magia: 0, vigor: 0},
            talentos: [],
            ataques: [16,17,14],
            habilidades: []
        },
        {
            level: 5,
            experienciaNecessaria: 15000,
            bonusAtributos: {forca: 0, agilidade: 1, magia: 0, vigor: 0},
            talentos: [],
            ataques: [16,17,14,56,26],
            habilidades: []
        },
    ],
}