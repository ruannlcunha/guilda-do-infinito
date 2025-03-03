import GENEVIEVE_1_SPRITE from "./assets/GENEVIEVE_1_SPRITE.png"
import GENEVIEVE_1_PERFIL from "./assets/GENEVIEVE_1_PERFIL.png"
import GENEVIEVE_2_SPRITE from "./assets/GENEVIEVE_2_SPRITE.png"
import GENEVIEVE_2_PERFIL from "./assets/GENEVIEVE_2_PERFIL.png"
import GENEVIEVE_3_SPRITE from "./assets/GENEVIEVE_3_SPRITE.png"
import GENEVIEVE_3_PERFIL from "./assets/GENEVIEVE_3_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const GENEVIEVE = {
    ..._BASE_ORIGINAL,
    id: 23,
    nome: "Genevieve",
    titulo: "A Curandeira",
    elemento: ELEMENTOS.ACIDO,
    corTema: COR_TEMA.TURQUESA,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: GENEVIEVE_1_SPRITE,
            perfil: GENEVIEVE_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Traje das Flores",
            sprite: GENEVIEVE_2_SPRITE,
            perfil: GENEVIEVE_2_PERFIL,
            santuario: null,
        },
        {
            visualId: 3,
            nome: "Traje Nobre",
            sprite: GENEVIEVE_3_SPRITE,
            perfil: GENEVIEVE_3_PERFIL,
            santuario: null,
        },
    ],
    status: {
        pvBase: 16,
        pmBase: 4,
        pvBonus: 4
    },
    atributosBase: {
        forca: 4,
        agilidade: 2,
        magia: 5,
        vigor: 3
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1250,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [16],
            habilidades: [1]
        },
        {
            level: 2,
            experienciaNecessaria: 3750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [16],
            habilidades: [1]
        },
        {
            level: 3,
            experienciaNecessaria: 7500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [16,6],
            habilidades: [1]
        },
        {
            level: 4,
            experienciaNecessaria: 12500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 1, vigor: 0},
            talentos: [],
            ataques: [16,6],
            habilidades: [1]
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 1, vigor: 0},
            talentos: [],
            ataques: [16,6,49,79],
            habilidades: [1]
        },
    ]
}