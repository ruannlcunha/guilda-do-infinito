import SOL_1_SPRITE from "./assets/SOL_1_SPRITE.png"
import SOL_1_PERFIL from "./assets/SOL_1_PERFIL.png"
import SOL_2_SPRITE from "./assets/SOL_2_SPRITE.png"
import SOL_2_PERFIL from "./assets/SOL_2_PERFIL.png"
import SOL_3_SPRITE from "./assets/SOL_3_SPRITE.png"
import SOL_3_PERFIL from "./assets/SOL_3_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const SOL = {
    ..._BASE_ORIGINAL,
    id: 5,
    nome: "Sol",
    titulo: "Punhos de Ferro",
    elemento: ELEMENTOS.FOGO,
    corTema: COR_TEMA.VERMELHO,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Com máscara",
            sprite: SOL_1_SPRITE,
            perfil: SOL_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Sem máscara",
            sprite: SOL_2_SPRITE,
            perfil: SOL_2_PERFIL,
            santuario: null,
        },
        {
            visualId: 3,
            nome: "Com camisa",
            sprite: SOL_3_SPRITE,
            perfil: SOL_3_PERFIL,
            santuario: null,
        },
    ],
    status: {
        pvBase: 20,
        pmBase: 3,
        pvBonus: 5
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1250,
            atributos: {
                forca: 5,
                agilidade: 4,
                magia: 2,
                vigor: 3
            },
            talentos: [],
            ataques: [1],
            habilidades: []
        },
        {
            level: 2,
            experienciaNecessaria: 3750,
            atributos: {
                forca: 5,
                agilidade: 4,
                magia: 2,
                vigor: 3
            },
            talentos: [],
            ataques: [1],
            habilidades: []
        },
        {
            level: 3,
            experienciaNecessaria: 7500,
            atributos: {
                forca: 5,
                agilidade: 4,
                magia: 2,
                vigor: 3
            },
            talentos: [],
            ataques: [1,14],
            habilidades: []
        },
        {
            level: 4,
            experienciaNecessaria: 37500,
            atributos: {
                forca: 5,
                agilidade: 5,
                magia: 2,
                vigor: 3
            },
            talentos: [],
            ataques: [1,14],
            habilidades: []
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            atributos: {
                forca: 6,
                agilidade: 6,
                magia: 3,
                vigor: 4
            },
            talentos: [],
            ataques: [1,14,47],
            habilidades: []
        },
    ],
}