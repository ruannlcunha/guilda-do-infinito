import HERES_1_SPRITE from "./assets/HERES_1_SPRITE.png"
import HERES_1_PERFIL from "./assets/HERES_1_PERFIL.png"
import HERES_2_SPRITE from "./assets/HERES_2_SPRITE.png"
import HERES_2_PERFIL from "./assets/HERES_2_PERFIL.png"
import HERES_3_SPRITE from "./assets/HERES_3_SPRITE.png"
import HERES_3_PERFIL from "./assets/HERES_3_PERFIL.png"
import HERES_4_SPRITE from "./assets/HERES_4_SPRITE.png"
import HERES_4_PERFIL from "./assets/HERES_4_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const HERES = {
    ..._BASE_ORIGINAL,
    id: 52,
    nome: "Heres",
    titulo: "Necromante Viajante",
    elemento: ELEMENTOS.TREVAS,
    corTema: COR_TEMA.AZUL,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: HERES_1_SPRITE,
            perfil: HERES_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Mascarado",
            sprite: HERES_2_SPRITE,
            perfil: HERES_2_PERFIL,
            santuario: null,
        },
        {
            visualId: 3,
            nome: "Sem Armadura",
            sprite: HERES_3_SPRITE,
            perfil: HERES_3_PERFIL,
            santuario: null,
        },
        {
            visualId: 4,
            nome: "Forma Zumbificada",
            sprite: HERES_4_SPRITE,
            perfil: HERES_4_PERFIL,
            santuario: null,
        },
    ],
    status: {
        pvBase: 16,
        pmBase: 5,
        pvBonus: 4
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1250,
            atributos: {
                forca: 3,
                agilidade: 2,
                magia: 5,
                vigor: 4
            },
            talentos: [],
            ataques: [1,5],
            habilidades: [1]
        },
        {
            level: 2,
            experienciaNecessaria: 3750,
            atributos: {
                forca: 3,
                agilidade: 2,
                magia: 5,
                vigor: 4
            },
            talentos: [],
            ataques: [1,5],
            habilidades: [1]
        },
        {
            level: 3,
            experienciaNecessaria: 7500,
            atributos: {
                forca: 3,
                agilidade: 2,
                magia: 5,
                vigor: 4
            },
            talentos: [],
            ataques: [1,5,14],
            habilidades: [1]
        },
        {
            level: 4,
            experienciaNecessaria: 12500,
            atributos: {
                forca: 3,
                agilidade: 2,
                magia: 6,
                vigor: 4
            },
            talentos: [],
            ataques: [1,5,14],
            habilidades: [1]
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            atributos: {
                forca: 4,
                agilidade: 3,
                magia: 7,
                vigor: 5
            },
            talentos: [],
            ataques: [1,5,14,33],
            habilidades: [1]
        },
    ],
}