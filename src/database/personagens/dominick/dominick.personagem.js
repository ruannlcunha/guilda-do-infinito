import DOMINICK_1_SPRITE from "./assets/DOMINICK_1_SPRITE.png"
import DOMINICK_1_PERFIL from "./assets/DOMINICK_1_PERFIL.png"
import DOMINICK_2_PERFIL from "./assets/DOMINICK_2_PERFIL.png"
import DOMINICK_2_SPRITE from "./assets/DOMINICK_2_SPRITE.png"
import DOMINICK_3_PERFIL from "./assets/DOMINICK_3_PERFIL.png"
import DOMINICK_3_SPRITE from "./assets/DOMINICK_3_SPRITE.png"
import DOMINICK_4_PERFIL from "./assets/DOMINICK_4_PERFIL.png"
import DOMINICK_4_SPRITE from "./assets/DOMINICK_4_SPRITE.png"
import DOMINICK_5_PERFIL from "./assets/DOMINICK_5_PERFIL.png"
import DOMINICK_5_SPRITE from "./assets/DOMINICK_5_SPRITE.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const DOMINICK = {
    ..._BASE_ORIGINAL,
    id: 3,
    nome: "Dominick",
    titulo: "Rainha dos Piratas",
    elemento: ELEMENTOS.ELETRICO,
    corTema: COR_TEMA.ROXO,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: DOMINICK_1_SPRITE,
            perfil: DOMINICK_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Original Sem Chapéu",
            sprite: DOMINICK_2_SPRITE,
            perfil: DOMINICK_2_PERFIL,
            santuario: null,
        },
        {
            visualId: 4,
            nome: "Traje de Rainha",
            sprite: DOMINICK_4_SPRITE,
            perfil: DOMINICK_4_PERFIL,
            santuario: null,
        },
        {
            visualId: 3,
            nome: "Guilda de Orion",
            sprite: DOMINICK_3_SPRITE,
            perfil: DOMINICK_3_PERFIL,
            santuario: null,
        },
        {
            visualId: 5,
            nome: "Versão Alpha",
            sprite: DOMINICK_5_SPRITE,
            perfil: DOMINICK_5_PERFIL,
            santuario: null,
        },
        ],
        status: {
            pvBase: 16,
            pmBase: 3,
            pvBonus: 4,
        },
        evolucoes: [
            {
                level: 1,
                experienciaNecessaria: 1250,
                atributos: {
                    forca: 4,
                    agilidade: 5,
                    magia: 2,
                    vigor: 3
                },
                talentos: [],
                ataques: [14, 17],
                habilidades: []
            },
            {
                level: 2,
                experienciaNecessaria: 3750,
                atributos: {
                    forca: 4,
                    agilidade: 5,
                    magia: 2,
                    vigor: 3
                },
                talentos: [],
                ataques: [14, 17],
                habilidades: []
            },
            {
                level: 3,
                experienciaNecessaria: 7500,
                atributos: {
                    forca: 4,
                    agilidade: 5,
                    magia: 2,
                    vigor: 3
                },
                talentos: [],
                ataques: [14, 17, 19],
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
                ataques: [14, 17, 19],
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
                ataques: [14, 17, 19, 26, 58],
                habilidades: []
            },
    ]
}