import WANDA_1_SPRITE from "./assets/WANDA_1_SPRITE.png"
import WANDA_1_PERFIL from "./assets/WANDA_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const WANDA = {
    ..._BASE_ORIGINAL,
    id: 69,
    nome: "Wanda",
    titulo: "Aprendiz de Alquimista",
    elemento: ELEMENTOS.NULO,
    corTema: COR_TEMA.VERMELHO,
    raridade: 4,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: WANDA_1_SPRITE,
            perfil: WANDA_1_PERFIL,
            santuario: null
        }
    ],
    status: {
        pvBase: 14,
        pmBase: 4,
        pvBonus: 3
    },
    atributosBase: {
        forca: 1,
        agilidade: 3,
        magia: 4,
        vigor: 2
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [1],
            habilidades: [1]
        },
        {
            level: 2,
            experienciaNecessaria: 3000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [1],
            habilidades: [1]
        },
        {
            level: 3,
            experienciaNecessaria: 6000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [1],
            habilidades: [1]
        },
        {
            level: 4,
            experienciaNecessaria: 10000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 1, vigor: 0},
            talentos: [],
            ataques: [1],
            habilidades: [1]
        },
        {
            level: 5,
            experienciaNecessaria: 15000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 1, vigor: 0},
            talentos: [],
            ataques: [1],
            habilidades: [1]
        },
    ]
}