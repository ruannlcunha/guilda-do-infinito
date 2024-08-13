import CALEB_1_SPRITE from "./assets/CALEB_1_SPRITE.png"
import CALEB_1_PERFIL from "./assets/CALEB_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const CALEB = {
    ..._BASE_ORIGINAL,
    id: 21,
    nome: "Caleb",
    titulo: "Pequeno Inventor",
    elemento: ELEMENTOS.NULO,
    corTema: COR_TEMA.LARANJA,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: CALEB_1_SPRITE,
            perfil: CALEB_1_PERFIL,
            santuario: null
        }
    ],
    status: {
        pvBase: 14,
        pmBase: 4,
        pvBonus: 3
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
            ataques: [17,18],
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
            ataques: [17,18],
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
            ataques: [17,18,58],
            habilidades: [1]
        },
    ]
}