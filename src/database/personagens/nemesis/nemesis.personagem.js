import NEMESIS_1_SPRITE from "./assets/NEMESIS_1_SPRITE.png"
import NEMESIS_1_PERFIL from "./assets/NEMESIS_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const NEMESIS = {
    ..._BASE_ORIGINAL,
    id: 33,
    nome: "Nêmesis",
    titulo: "Destruidora de Mundos",
    elemento: ELEMENTOS.TREVAS,
    corTema: COR_TEMA.ROXO,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: NEMESIS_1_SPRITE,
            perfil: NEMESIS_1_PERFIL,
            santuario: null,
        }
    ],
    status: {
        pvBase: 16,
        pmBase: 5,
        pvBonus: 4
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
            ataques: [1,5],
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
            ataques: [1,5],
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
            ataques: [1,5],
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
            ataques: [1,5],
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
            ataques: [1,5,33,53],
            habilidades: [1]
        },
    ]
}