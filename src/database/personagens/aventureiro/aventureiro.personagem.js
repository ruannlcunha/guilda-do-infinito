import AVENTUREIRO_1_SPRITE_1 from "./assets/AVENTUREIRO_1_SPRITE_1.png"
import AVENTUREIRO_1_PERFIL_1 from "./assets/AVENTUREIRO_1_PERFIL_1.png"
import AVENTUREIRO_1_SANTUARIO_1 from "./assets/AVENTUREIRO_1_SANTUARIO_1.png"
import AVENTUREIRO_2_SPRITE_1 from "./assets/AVENTUREIRO_2_SPRITE_1.png"
import AVENTUREIRO_2_PERFIL_1 from "./assets/AVENTUREIRO_2_PERFIL_1.png"
import AVENTUREIRO_2_SANTUARIO_1 from "./assets/AVENTUREIRO_2_SANTUARIO_1.png"
import AVENTUREIRO_3_SPRITE_1 from "./assets/AVENTUREIRO_3_SPRITE_1.png"
import AVENTUREIRO_3_PERFIL_1 from "./assets/AVENTUREIRO_3_PERFIL_1.png"
import AVENTUREIRO_3_SANTUARIO_1 from "./assets/AVENTUREIRO_3_SANTUARIO_1.png"
import {_BASE_ORIGINAL} from "../_base/_base-original.personagem"
import { ELEMENTOS, COR_TEMA } from "../../../constants/personagens/personagem.constant"

export const AVENTUREIRO = {
    ..._BASE_ORIGINAL,
    id: 1,
    nome: null,
    titulo: null,
    elemento: ELEMENTOS.LUZ,
    corTema: COR_TEMA.CIANO,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original 1",
            sprite: AVENTUREIRO_1_SPRITE_1,
            perfil: AVENTUREIRO_1_PERFIL_1,
            santuario: AVENTUREIRO_1_SANTUARIO_1
        },
        {
            visualId: 2,
            nome: "Original 2",
            sprite: AVENTUREIRO_2_SPRITE_1,
            perfil: AVENTUREIRO_2_PERFIL_1,
            santuario: AVENTUREIRO_2_SANTUARIO_1
        },
        {
            visualId: 3,
            nome: "Original 3",
            sprite: AVENTUREIRO_3_SPRITE_1,
            perfil: AVENTUREIRO_3_PERFIL_1,
            santuario: AVENTUREIRO_3_SANTUARIO_1
        }
    ],
    status: {
        pvBase: 20,
        pmBase: 3,
        pvBonus: 5,
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 100,
            atributos: {
                forca: 2,
                agilidade: 2,
                magia: 2,
                vigor: 2
            },
            talentos: [],
            ataques: [1],
            habilidades: [1]
        },
        {
            level: 2,
            experienciaNecessaria: 250,
            atributos: {
                forca: 2,
                agilidade: 2,
                magia: 2,
                vigor: 2
            },
            talentos: [],
            ataques: [1],
            habilidades: [1]
        }
    ]
}