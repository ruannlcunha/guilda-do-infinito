import JJC_1_SPRITE from "./assets/JJC_1_SPRITE.png"
import JJC_1_PERFIL from "./assets/JJC_1_PERFIL.png"
import JJC_2_SPRITE from "./assets/JJC_2_SPRITE.png"
import JJC_2_PERFIL from "./assets/JJC_2_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const JJC = {
    ..._BASE_ORIGINAL,
    id: 25,
    nome: "JJC",
    titulo: "Carrasco da Justiça",
    elemento: ELEMENTOS.FOGO,
    corTema: COR_TEMA.LARANJA,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: JJC_1_SPRITE,
            perfil: JJC_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Forma Verdadeira",
            sprite: JJC_2_SPRITE,
            perfil: JJC_2_PERFIL,
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
            experienciaNecessaria: 1250,
            atributos: {
                forca: 4,
                agilidade: 2,
                magia: 3,
                vigor: 5
            },
            talentos: [],
            ataques: [15],
            habilidades: []
        },
        {
            level: 2,
            experienciaNecessaria: 3750,
            atributos: {
                forca: 4,
                agilidade: 2,
                magia: 3,
                vigor: 5
            },
            talentos: [],
            ataques: [15],
            habilidades: []
        },
        {
            level: 3,
            experienciaNecessaria: 7500,
            atributos: {
                forca: 4,
                agilidade: 2,
                magia: 3,
                vigor: 5
            },
            talentos: [],
            ataques: [15,2],
            habilidades: [13]
        },
        {
            level: 4,
            experienciaNecessaria: 12500,
            atributos: {
                forca: 4,
                agilidade: 2,
                magia: 3,
                vigor: 6
            },
            talentos: [],
            ataques: [15,2],
            habilidades: [13]
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            atributos: {
                forca: 5,
                agilidade: 3,
                magia: 4,
                vigor: 7
            },
            talentos: [],
            ataques: [15,2,37],
            habilidades: [13]
        },
    ],
}