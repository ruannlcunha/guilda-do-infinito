import NERO_1_SPRITE from "./assets/NERO_1_SPRITE.png"
import NERO_1_PERFIL from "./assets/NERO_1_PERFIL.png"
import NERO_2_SPRITE from "./assets/NERO_2_SPRITE.png"
import NERO_2_PERFIL from "./assets/NERO_2_PERFIL.png"
import NERO_3_SPRITE from "./assets/NERO_3_SPRITE.png"
import NERO_3_PERFIL from "./assets/NERO_3_PERFIL.png"
import NERO_4_SPRITE from "./assets/NERO_4_SPRITE.png"
import NERO_4_PERFIL from "./assets/NERO_4_PERFIL.png"
import NERO_5_SPRITE from "./assets/NERO_5_SPRITE.png"
import NERO_5_PERFIL from "./assets/NERO_5_PERFIL.png"
import NERO_6_SPRITE from "./assets/NERO_6_SPRITE.png"
import NERO_6_PERFIL from "./assets/NERO_6_PERFIL.png"
import NERO_7_SPRITE from "./assets/NERO_7_SPRITE.png"
import NERO_7_PERFIL from "./assets/NERO_7_PERFIL.png"
import NERO_8_SPRITE from "./assets/NERO_8_SPRITE.gif"
import NERO_8_PERFIL from "./assets/NERO_8_PERFIL.gif"
import NERO_9_SPRITE from "./assets/NERO_9_SPRITE.gif"
import NERO_9_PERFIL from "./assets/NERO_9_PERFIL.gif"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { ITEM_PROFICIENCIA, PRONOMES } from "../../../constants"

export const NERO = {
    ..._BASE_ORIGINAL,
    id: 14,
    nome: "Nero",
    titulo: "Inventora Amaldiçoada",
    pronomes: PRONOMES.FEMININO,
    elemento: ELEMENTOS.FOGO,
    corTema: COR_TEMA.LARANJA,
    raridade: 5,
    proficiencia: ITEM_PROFICIENCIA.LEVE,
    comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
    visuais:[
        {
            visualId: 1,
            nome: "Original (Gato)",
            sprite: NERO_1_SPRITE,
            perfil: NERO_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Pelugem Pálida",
            sprite: NERO_2_SPRITE,
            perfil: NERO_2_PERFIL,
            santuario: null,
        },
        {
            visualId: 3,
            nome: "Original (Humana)",
            sprite: NERO_3_SPRITE,
            perfil: NERO_3_PERFIL,
            santuario: null,
        },
        {
            visualId: 4,
            nome: "Inventora (Gato)",
            sprite: NERO_4_SPRITE,
            perfil: NERO_4_PERFIL,
            santuario: null,
        },
        {
            visualId: 5,
            nome: "Inventora (Humana)",
            sprite: NERO_5_SPRITE,
            perfil: NERO_5_PERFIL,
            santuario: null,
        },
        {
            visualId: 6,
            nome: "Casual (Gato)",
            sprite: NERO_6_SPRITE,
            perfil: NERO_6_PERFIL,
            santuario: null,
        },
        {
            visualId: 7,
            nome: "Casual (Humana)",
            sprite: NERO_7_SPRITE,
            perfil: NERO_7_PERFIL,
            santuario: null,
        },
        {
            visualId: 8,
            nome: "Armadura Divina (Gato)",
            sprite: NERO_8_SPRITE,
            perfil: NERO_8_PERFIL,
            santuario: null,
        },
        {
            visualId: 9,
            nome: "Armadura Divina (Humana)",
            sprite: NERO_9_SPRITE,
            perfil: NERO_9_PERFIL,
            santuario: null,
        },
    ],
    status: {
        pvBase: 14,
        pmBase: 4,
        pvBonus: 3
    },
    atributosBase: {
        forca: 2,
        agilidade: 4,
        magia: 5,
        vigor: 3
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1250,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 19, variantes: []}
            ],
            habilidades: []
        },
        {
            level: 2,
            experienciaNecessaria: 3750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 19, variantes: []}
            ],
            habilidades: []
        },
        {
            level: 3,
            experienciaNecessaria: 7500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 19, variantes: []},
                {ataqueId: 19, variantes: []},
                {ataqueId: 2, variantes: []},
            ],
            habilidades: []
        },
        {
            level: 4,
            experienciaNecessaria: 12500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 1, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 19, variantes: []},
                {ataqueId: 19, variantes: []},
                {ataqueId: 2, variantes: []},
            ],
            habilidades: []
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 1, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 19, variantes: []},
                {ataqueId: 19, variantes: []},
                {ataqueId: 2, variantes: []},
                {ataqueId: 55, variantes: []},
            ],
            habilidades: []
        },
    ]
}