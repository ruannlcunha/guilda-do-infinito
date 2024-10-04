import KIENDRA_1_SPRITE from "./assets/KIENDRA_1_SPRITE.png"
import KIENDRA_1_PERFIL from "./assets/KIENDRA_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const KIENDRA = {
    ..._BASE_ORIGINAL,
    id: 28,
    nome: "Kien'dra",
    titulo: "Filha das Chamas",
    elemento: ELEMENTOS.FOGO,
    corTema: COR_TEMA.VERMELHO,
    raridade: 4,
    visuais:[
            {
            visualId: 1,
            nome: "Original",
            sprite: KIENDRA_1_SPRITE,
            perfil: KIENDRA_1_PERFIL,
            santuario: null,
            }
        ],
    status: {
        pvBase: 14,
        pmBase: 4,
        pvBonus: 3
    },
    atributosBase: {
        forca: 2,
        agilidade: 3,
        magia: 4,
        vigor: 1
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [14],
            habilidades: []
        },
        {
            level: 2,
            experienciaNecessaria: 3000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [14],
            habilidades: []
        },
        {
            level: 3,
            experienciaNecessaria: 6000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [14,2],
            habilidades: []
        },
        {
            level: 4,
            experienciaNecessaria: 10000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 1, vigor: 0},
            talentos: [],
            ataques: [14,2],
            habilidades: []
        },
        {
            level: 5,
            experienciaNecessaria: 15000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 1, vigor: 0},
            talentos: [],
            ataques: [14,2,27],
            habilidades: []
        },
    ],
}