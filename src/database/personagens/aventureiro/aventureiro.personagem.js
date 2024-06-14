import AVENTUREIRO_1_SPRITE_1 from "./assets/AVENTUREIRO_1_SPRITE_1.png"
import AVENTUREIRO_2_SPRITE_1 from "./assets/AVENTUREIRO_2_SPRITE_1.png"
import AVENTUREIRO_3_SPRITE_1 from "./assets/AVENTUREIRO_3_SPRITE_1.png"
import AVENTUREIRO_1_PERFIL_1 from "./assets/AVENTUREIRO_1_PERFIL_1.png"
import AVENTUREIRO_2_PERFIL_1 from "./assets/AVENTUREIRO_2_PERFIL_1.png"
import AVENTUREIRO_3_PERFIL_1 from "./assets/AVENTUREIRO_3_PERFIL_1.png"
import { ATAQUES_DATA } from "../../ataques"
import { HABILIDADES_DATA } from "../../habilidades"

const SPRITES = {
    AVENTUREIRO_1_SPRITE_1,
    AVENTUREIRO_2_SPRITE_1,
    AVENTUREIRO_3_SPRITE_1,
}
const PERFILS = {
    AVENTUREIRO_1_PERFIL_1,
    AVENTUREIRO_2_PERFIL_1,
    AVENTUREIRO_3_PERFIL_1,
}

export const AVENTUREIRO = {
    id: 1,
    nome: null,
    elemento: "LUZ",
    arma: "TODOS",
    comportamento: "ATACANTE",
    corTema: "tema-ciano",
    estrelas: 5,
    skins:[
        {
            skinId: 1,
            sprite: SPRITES.AVENTUREIRO_1_SPRITE_1,
            perfil: PERFILS.AVENTUREIRO_1_PERFIL_1,
        },
        {
            skinId: 2,
            sprite: SPRITES.AVENTUREIRO_2_SPRITE_1,
            perfil: PERFILS.AVENTUREIRO_2_PERFIL_1,
        },
        {
            skinId: 3,
            sprite: SPRITES.AVENTUREIRO_3_SPRITE_1,
            perfil: PERFILS.AVENTUREIRO_3_PERFIL_1,
        },
    ],
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 100,
            pv: 15,
            pm: 10,
            atributos: {
                forca: 1,
                agilidade: 1,
                magia: 1,
                vigor: 1,
            },
            passivas: [
                {id:1},
            ],
            ataques: [
                ATAQUES_DATA.SOCO,
            ],
            habilidades: [
                HABILIDADES_DATA.CURA,
            ],
        }
    ]
}