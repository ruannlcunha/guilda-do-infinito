import APHELIOS_1_SPRITE from "./assets/APHELIOS_1_SPRITE.png"
import APHELIOS_1_PERFIL from "./assets/APHELIOS_1_PERFIL.png"
import APHELIOS_2_SPRITE from "./assets/APHELIOS_2_SPRITE.png"
import APHELIOS_2_PERFIL from "./assets/APHELIOS_2_PERFIL.png"
import APHELIOS_3_SPRITE from "./assets/APHELIOS_3_SPRITE.png"
import APHELIOS_3_PERFIL from "./assets/APHELIOS_3_PERFIL.png"
import APHELIOS_4_SPRITE from "./assets/APHELIOS_4_SPRITE.gif"
import APHELIOS_4_PERFIL from "./assets/APHELIOS_4_PERFIL.gif"
import APHELIOS_5_SPRITE from "./assets/APHELIOS_5_SPRITE.png"
import APHELIOS_5_PERFIL from "./assets/APHELIOS_5_PERFIL.png"
import APHELIOS_6_SPRITE from "./assets/APHELIOS_6_SPRITE.png"
import APHELIOS_6_PERFIL from "./assets/APHELIOS_6_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const APHELIOS = {
    ..._BASE_ORIGINAL,
    id: 4,
    nome: "Aphelios",
    titulo: "Soberano de Gelo",
    elemento: ELEMENTOS.GELO,
    corTema: COR_TEMA.CIANO,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: APHELIOS_1_SPRITE,
            perfil: APHELIOS_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Guilda de Orion 1",
            sprite: APHELIOS_2_SPRITE,
            perfil: APHELIOS_2_PERFIL,
            santuario: null,
        },
        {
            visualId: 3,
            nome: "Guilda de Orion 2",
            sprite: APHELIOS_3_SPRITE,
            perfil: APHELIOS_3_PERFIL,
            santuario: null,
        },
        {
            visualId: 4,
            nome: "Armadura Divina",
            sprite: APHELIOS_4_SPRITE,
            perfil: APHELIOS_4_PERFIL,
            santuario: null,
        },
        {
            visualId: 5,
            nome: "Forma de Fogo",
            sprite: APHELIOS_5_SPRITE,
            perfil: APHELIOS_5_PERFIL,
            santuario: null,
        },
        {
            visualId: 6,
            nome: "Versão Alpha",
            sprite: APHELIOS_6_SPRITE,
            perfil: APHELIOS_6_PERFIL,
            santuario: null,
        },
        ],
        status: {
            pvBase: 12,
            pmBase: 6,
            pvBonus: 2
        },
        evolucoes: [
            {
                level: 1,
                experienciaNecessaria: 1250,
                atributos: {
                    forca: 2,
                    agilidade: 4,
                    magia: 5,
                    vigor: 3
                },
                talentos: [],
                ataques: [1,21],
                habilidades: []
            },
            {
                level: 2,
                experienciaNecessaria: 3750,
                atributos: {
                    forca: 2,
                    agilidade: 4,
                    magia: 5,
                    vigor: 3
                },
                talentos: [],
                ataques: [1,21],
                habilidades: []
            },
            {
                level: 3,
                experienciaNecessaria: 7500,
                atributos: {
                    forca: 2,
                    agilidade: 4,
                    magia: 5,
                    vigor: 3
                },
                talentos: [],
                ataques: [1,16,21,22],
                habilidades: []
            },
            {
                level: 4,
                experienciaNecessaria: 37500,
                atributos: {
                    forca: 2,
                    agilidade: 4,
                    magia: 6,
                    vigor: 3
                },
                talentos: [],
                ataques: [1,16,21,22],
                habilidades: []
            },
            {
                level: 5,
                experienciaNecessaria: 18750,
                atributos: {
                    forca: 3,
                    agilidade: 5,
                    magia: 7,
                    vigor: 4
                },
                talentos: [],
                ataques: [1,16,21,22,52],
                habilidades: []
            },
    ]
}