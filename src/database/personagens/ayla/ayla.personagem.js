import AYLA_1_SPRITE from "./assets/AYLA_1_SPRITE.png"
import AYLA_1_PERFIL from "./assets/AYLA_1_PERFIL.png"
import AYLA_2_SPRITE from "./assets/AYLA_2_SPRITE.png"
import AYLA_2_PERFIL from "./assets/AYLA_2_PERFIL.png"
import AYLA_3_SPRITE from "./assets/AYLA_3_SPRITE.png"
import AYLA_3_PERFIL from "./assets/AYLA_3_PERFIL.png"
import AYLA_4_SPRITE from "./assets/AYLA_4_SPRITE.png"
import AYLA_4_PERFIL from "./assets/AYLA_4_PERFIL.png"
import AYLA_5_SPRITE from "./assets/AYLA_5_SPRITE.png"
import AYLA_5_PERFIL from "./assets/AYLA_5_PERFIL.png"
import AYLA_6_SPRITE from "./assets/AYLA_6_SPRITE.png"
import AYLA_6_PERFIL from "./assets/AYLA_6_PERFIL.png"
import AYLA_7_SPRITE from "./assets/AYLA_7_SPRITE.png"
import AYLA_7_PERFIL from "./assets/AYLA_7_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { ELEMENTOS, COR_TEMA } from "../../../constants/personagens/personagem.constant"

export const AYLA = {
    ..._BASE_ORIGINAL,
    id: 2,
    nome: "Ayla",
    titulo: "Guardiã Imortal",
    elemento: ELEMENTOS.FOGO,
    corTema: COR_TEMA.AMARELO,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: AYLA_1_SPRITE,
            perfil: AYLA_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Armadura das Sombras",
            sprite: AYLA_2_SPRITE,
            perfil: AYLA_2_PERFIL,
            santuario: null,
        },
        {
            visualId: 3,
            nome: "Armadura Divina",
            sprite: AYLA_3_SPRITE,
            perfil: AYLA_3_PERFIL,
            santuario: null,
        },
        {
            visualId: 4,
            nome: "Guilda de Orion",
            sprite: AYLA_4_SPRITE,
            perfil: AYLA_4_PERFIL,
            santuario: null,
        },
        {
            visualId: 5,
            nome: "Vestido do Baile",
            sprite: AYLA_5_SPRITE,
            perfil: AYLA_5_PERFIL,
            santuario: null,
        },
        {
            visualId: 6,
            nome: "Roupas Casuais",
            sprite: AYLA_6_SPRITE,
            perfil: AYLA_6_PERFIL,
            santuario: null,
        },
        {
            visualId: 7,
            nome: "Versão Alpha",
            sprite: AYLA_7_SPRITE,
            perfil: AYLA_7_PERFIL,
            santuario: null,
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
            forca: 4,
            agilidade: 2,
            magia: 5,
            vigor: 3
        },
        talentos: [],
        ataques: [27],
        habilidades: []
    },
    {
        level: 2,
        experienciaNecessaria: 250,
        atributos: {
            forca: 4,
            agilidade: 2,
            magia: 5,
            vigor: 3
        },
        talentos: [],
        ataques: [],
        habilidades: []
    }
    ],
}