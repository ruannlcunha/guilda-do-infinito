import SILKY_1_SPRITE from "./assets/SILKY_1_SPRITE.png"
import SILKY_1_PERFIL from "./assets/SILKY_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const SILKY = {
    ..._BASE_ORIGINAL,
    id: 32,
    nome: "Silky",
    titulo: "Guardiã Roxa",
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
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1250,
            atributos: {
                forca: 1,
                agilidade: 3,
                magia: 4,
                vigor: 2
            },
            talentos: [],
            ataques: [1,22],
            habilidades: []
        },
        {
            level: 2,
            experienciaNecessaria: 3750,
            atributos: {
                forca: 1,
                agilidade: 3,
                magia: 4,
                vigor: 2
            },
            talentos: [],
            ataques: [1,22],
            habilidades: []
        },
        {
            level: 3,
            experienciaNecessaria: 7500,
            atributos: {
                forca: 1,
                agilidade: 3,
                magia: 4,
                vigor: 2
            },
            talentos: [],
            ataques: [1,16,22,5,12],
            habilidades: [1]
        },
        {
            level: 4,
            experienciaNecessaria: 12500,
            atributos: {
                forca: 1,
                agilidade: 3,
                magia: 5,
                vigor: 2
            },
            talentos: [],
            ataques: [1,16,22,5,12],
            habilidades: [1]
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            atributos: {
                forca: 2,
                agilidade: 4,
                magia: 6,
                vigor: 3
            },
            talentos: [],
            ataques: [1,16,22,5,12,45,46],
            habilidades: [1]
        },
    ]
}