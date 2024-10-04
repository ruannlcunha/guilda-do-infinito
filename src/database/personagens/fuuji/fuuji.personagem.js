import FUUJI_1_SPRITE from "./assets/FUUJI_1_SPRITE.png"
import FUUJI_1_PERFIL from "./assets/FUUJI_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const FUUJI = {
    ..._BASE_ORIGINAL,
    id: 54,
    nome: "Fuuji",
    titulo: "Demônio Guerreiro",
    elemento: ELEMENTOS.FOGO,
    corTema: COR_TEMA.VERMELHO,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: FUUJI_1_SPRITE,
            perfil: FUUJI_1_PERFIL,
            santuario: null,
        },
    ],
    status: {
        pvBase: 20,
        pmBase: 5,
        pvBonus: 3
    },
    atributosBase: {
        forca: 5,
        agilidade: 3,
        magia: 2,
        vigor: 4
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1250,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [16,17],
            habilidades: [13]
        },
        {
            level: 2,
            experienciaNecessaria: 3750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [16,17],
            habilidades: [13]
        },
        {
            level: 3,
            experienciaNecessaria: 7500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [16,17,14,18],
            habilidades: [13]
        },
        {
            level: 4,
            experienciaNecessaria: 12500,
            bonusAtributos: {forca: 1, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [16,17,14,18],
            habilidades: [13]
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            bonusAtributos: {forca: 1, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [16,17,14,18,27,67],
            habilidades: [13]
        },
    ],
}