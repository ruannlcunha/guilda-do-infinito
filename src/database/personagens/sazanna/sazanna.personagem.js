import SAZANNA_1_SPRITE from "./assets/SAZANNA_1_SPRITE.png"
import SAZANNA_1_PERFIL from "./assets/SAZANNA_1_PERFIL.png"
import SAZANNA_2_SPRITE from "./assets/SAZANNA_2_SPRITE.png"
import SAZANNA_2_PERFIL from "./assets/SAZANNA_2_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const SAZANNA = {
    ..._BASE_ORIGINAL,
    id: 26,
    nome: "Saz'anna",
    titulo: "Instrutora Real",
    elemento: ELEMENTOS.FOGO,
    corTema: COR_TEMA.ROXO,
    raridade: 4,
    visuais:[
        {
            visualId: 1,
            nome: "Com Máscara",
            sprite: SAZANNA_1_SPRITE,
            perfil: SAZANNA_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Sem Máscara",
            sprite: SAZANNA_2_SPRITE,
            perfil: SAZANNA_2_PERFIL,
            santuario: null,
        }
    ],
    status: {
        pvBase: 12,
        pmBase: 6,
        pvBonus: 2
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
            ataques: [1,2],
            habilidades: []
        },
        {
            level: 2,
            experienciaNecessaria: 3000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [1,2],
            habilidades: []
        },
        {
            level: 3,
            experienciaNecessaria: 6000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [1,16,2,5],
            habilidades: []
        },
        {
            level: 4,
            experienciaNecessaria: 10000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 1, vigor: 0},
            talentos: [],
            ataques: [1,16,2,5],
            habilidades: []
        },
        {
            level: 5,
            experienciaNecessaria: 15000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 1, vigor: 0},
            talentos: [],
            ataques: [1,16,2,5,47,53],
            habilidades: []
        },
    ]
}