import JJC_1_SPRITE from "./assets/JJC_1_SPRITE.png"
import JJC_1_PERFIL from "./assets/JJC_1_PERFIL.png"
import JJC_2_SPRITE from "./assets/JJC_2_SPRITE.png"
import JJC_2_PERFIL from "./assets/JJC_2_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { ITEM_PROFICIENCIA, PRONOMES } from "../../../constants"
import { TALENTOS } from "../../talentos"
import { ATAQUES } from "../../ataques"

export const JJC = {
    ..._BASE_ORIGINAL,
    id: 25,
    nome: "JJC",
    titulo: "Carrasco da Justiça",
    elemento: ELEMENTOS.FOGO,
    corTema: COR_TEMA.LARANJA,
    raridade: 5,
    proficiencia: ITEM_PROFICIENCIA.LEVE,
    comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
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
    atributosBase: {
        forca: 4,
        agilidade: 2,
        magia: 3,
        vigor: 5
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1250,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [
                TALENTOS.ARMADURADO
            ],
            ataques: [
                {ataqueId: 15, variantes: []},
                {ataqueId: ATAQUES.BOLA_DE_FOGO.id, variantes: []},
                {ataqueId: ATAQUES.BOLA_DE_FOGO.id, variantes: []},
            ],
            habilidades: []
        },
        {
            level: 2,
            experienciaNecessaria: 3750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [
                TALENTOS.ARMADURADO
            ],
            ataques: [
                {ataqueId: 15, variantes: []}
            ],
            habilidades: []
        },
        {
            level: 3,
            experienciaNecessaria: 7500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [
                TALENTOS.ARMADURADO
            ],
            ataques: [
                {ataqueId: 15, variantes: []},
                {ataqueId: 2, variantes: []}
            ],
            habilidades: [
                {habilidadeId: 13, variantes: []},
            ]
        },
        {
            level: 4,
            experienciaNecessaria: 12500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 1},
            talentos: [
                TALENTOS.ARMADURADO
            ],
            ataques: [
                {ataqueId: 15, variantes: []},
                {ataqueId: 2, variantes: []}
            ],
            habilidades: [
                {habilidadeId: 13, variantes: []},
            ]
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 1},
            talentos: [
                TALENTOS.ARMADURADO
            ],
            ataques: [
                {ataqueId: 15, variantes: []},
                {ataqueId: 2, variantes: []},
                {ataqueId: 37, variantes: []},
            ],
            habilidades: [
                {habilidadeId: 13, variantes: []},
            ]
        },
    ],
}