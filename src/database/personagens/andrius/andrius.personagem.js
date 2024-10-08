import ANDRIUS_1_SPRITE from "./assets/ANDRIUS_1_SPRITE.png"
import ANDRIUS_1_PERFIL from "./assets/ANDRIUS_1_PERFIL.png"
import ANDRIUS_2_SPRITE from "./assets/ANDRIUS_2_SPRITE.png"
import ANDRIUS_2_PERFIL from "./assets/ANDRIUS_2_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const ANDRIUS = {
    ..._BASE_ORIGINAL,
    id: 16,
    nome: "Andrius",
    titulo: "Rei das Sombras",
    elemento: ELEMENTOS.TREVAS,
    corTema: COR_TEMA.ROXO,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Armadura Sombria",
            sprite: ANDRIUS_1_SPRITE,
            perfil: ANDRIUS_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Traje Real",
            sprite: ANDRIUS_2_SPRITE,
            perfil: ANDRIUS_2_PERFIL,
            santuario: null,
        }

    ],
    status: {
        pvBase: 20,
        pmBase: 3,
        pvBonus: 5,
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
            ataques: [14,15],
            habilidades: [12]
        },
        {
            level: 2,
            experienciaNecessaria: 3750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [14,15],
            habilidades: [12]
        },
        {
            level: 3,
            experienciaNecessaria: 7500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [14,15,5,21],
            habilidades: [12, 1]
        },
        {
            level: 4,
            experienciaNecessaria: 12500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 1},
            talentos: [],
            ataques: [14,15,5,21],
            habilidades: [12, 1]
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 1},
            talentos: [],
            ataques: [14,15,5,21,33],
            habilidades: [12, 1]
        },
    ],
}