import ALAN_1_SPRITE from "./assets/ALAN_1_SPRITE.png"
import ALAN_1_PERFIL from "./assets/ALAN_1_PERFIL.png"
import ALAN_2_SPRITE from "./assets/ALAN_2_SPRITE.png"
import ALAN_2_PERFIL from "./assets/ALAN_2_PERFIL.png"
import ALAN_3_SPRITE from "./assets/ALAN_3_SPRITE.png"
import ALAN_3_PERFIL from "./assets/ALAN_3_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const ALAN = {
    ..._BASE_ORIGINAL,
    id: 34,
    nome: "Alan",
    titulo: "Escudeiro Real",
    elemento: ELEMENTOS.TERRA,
    corTema: COR_TEMA.AZUL,
    raridade: 4,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: ALAN_1_SPRITE,
            perfil: ALAN_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Versão do Sonho",
            sprite: ALAN_2_SPRITE,
            perfil: ALAN_2_PERFIL,
            santuario: null,
        },
        {
            visualId: 3,
            nome: "Segredo de Khaas",
            sprite: ALAN_3_SPRITE,
            perfil: ALAN_3_PERFIL,
            santuario: null,
        }
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
                forca: 3,
                agilidade: 1,
                magia: 2,
                vigor: 4
            },
            talentos: [],
            ataques: [13],
            habilidades: []
        },
        {
            level: 2,
            experienciaNecessaria: 3000,
            atributos: {
                forca: 3,
                agilidade: 1,
                magia: 2,
                vigor: 4
            },
            talentos: [],
            ataques: [13],
            habilidades: []
        },
        {
            level: 3,
            experienciaNecessaria: 6000,
            atributos: {
                forca: 3,
                agilidade: 1,
                magia: 2,
                vigor: 4
            },
            talentos: [],
            ataques: [13],
            habilidades: []
        },
        {
            level: 4,
            experienciaNecessaria: 30000,
            atributos: {
                forca: 3,
                agilidade: 1,
                magia: 2,
                vigor: 5
            },
            talentos: [],
            ataques: [13],
            habilidades: []
        },
        {
            level: 5,
            experienciaNecessaria: 15000,
            atributos: {
                forca: 4,
                agilidade: 2,
                magia: 3,
                vigor: 6
            },
            talentos: [],
            ataques: [13,30],
            habilidades: []
        },
    ],
}