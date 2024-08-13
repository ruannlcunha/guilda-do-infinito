import EREENA_1_SPRITE from "./assets/EREENA_1_SPRITE.png"
import EREENA_1_PERFIL from "./assets/EREENA_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const EREENA = {
    ..._BASE_ORIGINAL,
    id: 17,
    nome: "Ereena",
    titulo: "Demônio Pálido",
    elemento: ELEMENTOS.GELO,
    corTema: COR_TEMA.CIANO,
    raridade: 4,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: EREENA_1_SPRITE,
            perfil: EREENA_1_PERFIL,
            santuario: null,
        }
    ],
    status: {
        pvBase: 20,
        pmBase: 3,
        pvBonus: 5
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1000,
            atributos: {
                forca: 4,
                agilidade: 2,
                magia: 3,
                vigor: 1
            },
            talentos: [],
            ataques: [14],
            habilidades: [13]
        },
        {
            level: 2,
            experienciaNecessaria: 3000,
            atributos: {
                forca: 4,
                agilidade: 2,
                magia: 3,
                vigor: 1
            },
            talentos: [],
            ataques: [14],
            habilidades: [13]
        },
        {
            level: 3,
            experienciaNecessaria: 6000,
            atributos: {
                forca: 4,
                agilidade: 2,
                magia: 3,
                vigor: 1
            },
            talentos: [],
            ataques: [14,21],
            habilidades: [13]
        },
        {
            level: 4,
            experienciaNecessaria: 30000,
            atributos: {
                forca: 5,
                agilidade: 2,
                magia: 3,
                vigor: 1
            },
            talentos: [],
            ataques: [14,21],
            habilidades: [13]
        },
        {
            level: 5,
            experienciaNecessaria: 15000,
            atributos: {
                forca: 6,
                agilidade: 3,
                magia: 4,
                vigor: 2
            },
            talentos: [],
            ataques: [14,21,32],
            habilidades: [13]
        },
    ],
}