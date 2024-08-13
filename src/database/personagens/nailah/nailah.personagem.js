import NAILAH_1_SPRITE from "./assets/NAILAH_1_SPRITE.png"
import NAILAH_1_PERFIL from "./assets/NAILAH_1_PERFIL.png"
import NAILAH_2_SPRITE from "./assets/NAILAH_2_SPRITE.png"
import NAILAH_2_PERFIL from "./assets/NAILAH_2_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const NAILAH = {
    ..._BASE_ORIGINAL,
    id: 20,
    nome: "Nailah",
    titulo: "Gênia Sem Lembranças",
    elemento: ELEMENTOS.ELETRICO,
    corTema: COR_TEMA.ROXO,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: NAILAH_1_SPRITE,
            perfil: NAILAH_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Forma Verdadeira",
            sprite: NAILAH_2_SPRITE,
            perfil: NAILAH_2_PERFIL,
            santuario: null,
        }
    ],
    status: {
        pvBase: 16,
        pmBase: 4,
        pvBonus: 5
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
            ataques: [17],
            habilidades: [1]
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
            ataques: [17],
            habilidades: [1]
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
            ataques: [17,22,12],
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
            ataques: [17,22,12],
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
            ataques: [17,22,12,56],
            habilidades: [1]
        },
    ]
}