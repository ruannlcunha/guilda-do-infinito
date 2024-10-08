import RHOGAR_1_SPRITE from "./assets/RHOGAR_1_SPRITE.png"
import RHOGAR_1_PERFIL from "./assets/RHOGAR_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const RHOGAR = {
    ..._BASE_ORIGINAL,
    id: 68,
    nome: "Rhogar",
    titulo: "Draconato Monge",
    elemento: ELEMENTOS.ELETRICO,
    corTema: COR_TEMA.AMARELO,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Com máscara",
            sprite: RHOGAR_1_SPRITE,
            perfil: RHOGAR_1_PERFIL,
            santuario: null,
        },
    ],
    status: {
        pvBase: 20,
        pmBase: 3,
        pvBonus: 5
    },
    atributosBase: {
        forca: 5,
        agilidade: 4,
        magia: 2,
        vigor: 3
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1250,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [1],
            habilidades: []
        },
        {
            level: 2,
            experienciaNecessaria: 3750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [1],
            habilidades: []
        },
        {
            level: 3,
            experienciaNecessaria: 7500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [1,16,22],
            habilidades: []
        },
        {
            level: 4,
            experienciaNecessaria: 12500,
            bonusAtributos: {forca: 0, agilidade: 1, magia: 0, vigor: 0},
            talentos: [],
            ataques: [1,16,22],
            habilidades: []
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            bonusAtributos: {forca: 0, agilidade: 1, magia: 0, vigor: 0},
            talentos: [],
            ataques: [1,16,22,46],
            habilidades: []
        },
    ],
}