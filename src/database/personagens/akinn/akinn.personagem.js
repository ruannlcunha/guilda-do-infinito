import AKINN_1_SPRITE from "./assets/AKINN_1_SPRITE.png"
import AKINN_1_PERFIL from "./assets/AKINN_1_PERFIL.png"
import AKINN_2_SPRITE from "./assets/AKINN_2_SPRITE.png"
import AKINN_2_PERFIL from "./assets/AKINN_2_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const AKINN = {
    ..._BASE_ORIGINAL,
    id: 19,
    nome: "Akinn",
    titulo: "Herdeiro de Rammeth",
    elemento: ELEMENTOS.FOGO,
    corTema: COR_TEMA.AMARELO,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: AKINN_1_SPRITE,
            perfil: AKINN_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Forma Desperta",
            sprite: AKINN_2_SPRITE,
            perfil: AKINN_2_PERFIL,
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
            ataques: [1,2],
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
            ataques: [1,2],
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
            ataques: [1,16,2,5],
            habilidades: []
        },
        {
            level: 4,
            experienciaNecessaria: 12500,
            atributos: {
                forca: 2,
                agilidade: 4,
                magia: 6,
                vigor: 3
            },
            talentos: [],
            ataques: [1,16,2,5],
            habilidades: []
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
            ataques: [1,16,2,5,47,53],
            habilidades: []
        },
    ]
}