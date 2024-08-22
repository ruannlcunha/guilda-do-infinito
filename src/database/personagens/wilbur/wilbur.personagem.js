import WILBUR_1_SPRITE from "./assets/WILBUR_1_SPRITE.png"
import WILBUR_1_PERFIL from "./assets/WILBUR_1_PERFIL.png"
import WILBUR_2_SPRITE from "./assets/WILBUR_2_SPRITE.png"
import WILBUR_2_PERFIL from "./assets/WILBUR_2_PERFIL.png"
import WILBUR_3_SPRITE from "./assets/WILBUR_3_SPRITE.png"
import WILBUR_3_PERFIL from "./assets/WILBUR_3_PERFIL.png"
import WILBUR_4_SPRITE from "./assets/WILBUR_4_SPRITE.png"
import WILBUR_4_PERFIL from "./assets/WILBUR_4_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const WILBUR = {
    ..._BASE_ORIGINAL,
    id: 55,
    nome: "Wilbur",
    titulo: "Cavaleiro Heróico",
    elemento: ELEMENTOS.TERRA,
    corTema: COR_TEMA.ROXO,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: WILBUR_1_SPRITE,
            perfil: WILBUR_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Armadura Roxa",
            sprite: WILBUR_2_SPRITE,
            perfil: WILBUR_2_PERFIL,
            santuario: null,
        },
        {
            visualId: 3,
            nome: "Armadura Preta",
            sprite: WILBUR_3_SPRITE,
            perfil: WILBUR_3_PERFIL,
            santuario: null,
        },
        {
            visualId: 4,
            nome: "Paladino",
            sprite: WILBUR_4_SPRITE,
            perfil: WILBUR_4_PERFIL,
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
            experienciaNecessaria: 1000,
            atributos: {
                forca: 4,
                agilidade: 2,
                magia: 3,
                vigor: 5
            },
            talentos: [],
            ataques: [14],
            habilidades: []
        },
        {
            level: 2,
            experienciaNecessaria: 3000,
            atributos: {
                forca: 4,
                agilidade: 2,
                magia: 3,
                vigor: 5
            },
            talentos: [],
            ataques: [14],
            habilidades: []
        },
        {
            level: 3,
            experienciaNecessaria: 6000,
            atributos: {
                forca: 4,
                agilidade: 2,
                magia: 3,
                vigor: 5
            },
            talentos: [],
            ataques: [14],
            habilidades: []
        },
        {
            level: 4,
            experienciaNecessaria: 30000,
            atributos: {
                forca: 4,
                agilidade: 2,
                magia: 3,
                vigor: 6
            },
            talentos: [],
            ataques: [14],
            habilidades: []
        },
        {
            level: 5,
            experienciaNecessaria: 15000,
            atributos: {
                forca: 5,
                agilidade: 3,
                magia: 4,
                vigor: 7
            },
            talentos: [],
            ataques: [14,30],
            habilidades: []
        },
    ],
}