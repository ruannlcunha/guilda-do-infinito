import SILKY_1_SPRITE from "./assets/SILKY_1_SPRITE.png"
import SILKY_1_PERFIL from "./assets/SILKY_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const SILKY = {
    ..._BASE_ORIGINAL,
    id: 32,
    nome: "Silky",
    titulo: "Guardiã Solitária",
    elemento: ELEMENTOS.ELETRICO,
    corTema: COR_TEMA.ROXO,
    raridade: 4,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: SILKY_1_SPRITE,
            perfil: SILKY_1_PERFIL,
            santuario: null,
        },
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
            ataques: [1,22],
            habilidades: []
        },
        {
            level: 2,
            experienciaNecessaria: 3000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [1,22],
            habilidades: []
        },
        {
            level: 3,
            experienciaNecessaria: 6000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [1,16,22,5,12],
            habilidades: [1]
        },
        {
            level: 4,
            experienciaNecessaria: 12500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 1, vigor: 0},
            talentos: [],
            ataques: [1,16,22,5,12],
            habilidades: [1]
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 1, vigor: 0},
            talentos: [],
            ataques: [1,16,22,5,12,45,46],
            habilidades: [1]
        },
    ]
}