import ALAN_1_SPRITE from "./assets/ALAN_1_SPRITE.png"
import ALAN_1_PERFIL from "./assets/ALAN_1_PERFIL.png"
import ALAN_2_SPRITE from "./assets/ALAN_2_SPRITE.png"
import ALAN_2_PERFIL from "./assets/ALAN_2_PERFIL.png"
import ALAN_3_SPRITE from "./assets/ALAN_3_SPRITE.png"
import ALAN_3_PERFIL from "./assets/ALAN_3_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { ITEM_PROFICIENCIA, PRONOMES } from "../../../constants"

export const ALAN = {
    ..._BASE_ORIGINAL,
    id: 34,
    nome: "Alan",
    titulo: "Escudeiro Real",
    elemento: ELEMENTOS.TERRA,
    corTema: COR_TEMA.AZUL,
    raridade: 4,
    proficiencia: ITEM_PROFICIENCIA.LEVE,
    comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
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
    atributosBase: {
        forca: 3,
        agilidade: 1,
        magia: 2,
        vigor: 4
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 14, variantes: []}
            ],
            habilidades: []
        },
        {
            level: 2,
            experienciaNecessaria: 3000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 14, variantes: []}
            ],
            habilidades: []
        },
        {
            level: 3,
            experienciaNecessaria: 6000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [
                {ataqueId: 14, variantes: []}
            ],
            habilidades: []
        },
        {
            level: 4,
            experienciaNecessaria: 10000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 1},
            talentos: [],
            ataques: [
                {ataqueId: 14, variantes: []}
            ],
            habilidades: []
        },
        {
            level: 5,
            experienciaNecessaria: 15000,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 1},
            talentos: [],
            ataques: [
                {ataqueId: 14, variantes: []},
                {ataqueId: 30, variantes: []}
            ],
            habilidades: []
        },
    ],
}