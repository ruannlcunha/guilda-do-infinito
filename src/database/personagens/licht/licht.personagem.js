import LICHT_1_SPRITE from "./assets/LICHT_1_SPRITE.png"
import LICHT_1_PERFIL from "./assets/LICHT_1_PERFIL.png"
import LICHT_2_SPRITE from "./assets/LICHT_2_SPRITE.png"
import LICHT_2_PERFIL from "./assets/LICHT_2_PERFIL.png"
import LICHT_3_SPRITE from "./assets/LICHT_3_SPRITE.png"
import LICHT_3_PERFIL from "./assets/LICHT_3_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const LICHT = {
    ..._BASE_ORIGINAL,
    id: 56,
    nome: "Licht",
    titulo: "Espectro Esquecido",
    elemento: ELEMENTOS.TREVAS,
    corTema: COR_TEMA.AZUL,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: LICHT_1_SPRITE,
            perfil: LICHT_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Traje Formal",
            sprite: LICHT_2_SPRITE,
            perfil: LICHT_2_PERFIL,
            santuario: null,
        },
        {
            visualId: 3,
            nome: "Forma de Criança",
            sprite: LICHT_3_SPRITE,
            perfil: LICHT_3_PERFIL,
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
            ataques: [1,5,12],
            habilidades: [1]
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
            ataques: [1,5,12],
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
            ataques: [1,5,12],
            habilidades: [1]
        },
    ]
}