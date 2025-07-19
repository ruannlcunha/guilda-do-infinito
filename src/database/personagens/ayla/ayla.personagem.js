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
import AYLA_8_SPRITE from "./assets/AYLA_8_SPRITE.gif"
import AYLA_8_PERFIL from "./assets/AYLA_8_PERFIL.gif"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { ITEM_PROFICIENCIA, PRONOMES } from "../../../constants"
import { TALENTOS } from "../../talentos"
import { ATAQUES } from "../../ataques"

export const AYLA = {
    ..._BASE_ORIGINAL,
    id: 2,
    nome: "Ayla",
    titulo: "Guardiã Imortal",
    pronomes: PRONOMES.FEMININO,
    elemento: ELEMENTOS.FOGO,
    corTema: COR_TEMA.AMARELO,
    raridade: 5,
    proficiencia: ITEM_PROFICIENCIA.LEVE,
    comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
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
            nome: "Armadura Cintilante",
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
        },
        {
            visualId: 8,
            nome: "Armadura Divina",
            sprite: AYLA_8_SPRITE,
            perfil: AYLA_8_PERFIL,
            santuario: null,
        },
    ],
    status: {
        pvBase: 20,
        pmBase: 3,
        pvBonus: 5,
    },
    atributosBase: {
        forca: 4,
        agilidade: 2,
        magia: 5,
        vigor: 3
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1250,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [
                TALENTOS.CURA_APRIMORADA,
            ],
            ataques: [
                {ataqueId: 14, variantes: []},
                {ataqueId: ATAQUES.BOLA_DE_FOGO.id, variantes: ["NIVEL_1", "NIVEL_2", "NIVEL_3"]},
            ],
            habilidades: [
                {habilidadeId: 12, variantes: []},
            ]
        },
        {
            level: 2,
            experienciaNecessaria: 3750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 14, variantes: []}
            ],
            habilidades: [
                {habilidadeId: 12, variantes: []},
            ]
        },
        {
            level: 3,
            experienciaNecessaria: 7500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 14, variantes: []},
                {ataqueId: 15, variantes: []}
            ],
            habilidades: [
                {habilidadeId: 12, variantes: []},
                {habilidadeId: 1, variantes: []},
            ],
        },
        {
            level: 4,
            experienciaNecessaria: 12500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 1, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 14, variantes: []},
                {ataqueId: 15, variantes: []}
            ],
            habilidades: [
                {habilidadeId: 12, variantes: []},
                {habilidadeId: 1, variantes: []},
            ],
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 1, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 14, variantes: []},
                {ataqueId: 15, variantes: []},
                {ataqueId: 27, variantes: []},
            ],
            habilidades: [
                {habilidadeId: 12, variantes: []},
                {habilidadeId: 1, variantes: []},
            ],
        },
    ],
}