import GLUTAO_1_SPRITE from "./assets/GLUTAO_1_SPRITE.png"
import GLUTAO_1_PERFIL from "./assets/GLUTAO_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const SOMBRIUS_GLUTAO = {
    ..._BASE_ORIGINAL,
    id: 70,
    nome: "Sombrius Glutão",
    titulo: "Sombrius",
    elemento: ELEMENTOS.TREVAS,
    corTema: COR_TEMA.CIANO,
    raridade: 3,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: GLUTAO_1_SPRITE,
            perfil: GLUTAO_1_PERFIL,
            santuario: null,
        },
    ],
    status: {
        pvBase: 20,
        pmBase: 3,
        pvBonus: 3
    },
    atributosBase: {
        forca: 2,
        agilidade: 0,
        magia: 1,
        vigor: 3
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1250,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [76,77,78],
            habilidades: []
        },
        {
            level: 2,
            experienciaNecessaria: 3750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [76,77,78],
            habilidades: []
        },
        {
            level: 3,
            experienciaNecessaria: 7500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [76,77,78],
            habilidades: []
        },
        {
            level: 4,
            experienciaNecessaria: 12500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 1},
            talentos: [],
            ataques: [76,77,78],
            habilidades: []
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 1},
            talentos: [],
            ataques: [76,77,78],
            habilidades: []
        },
    ],
}