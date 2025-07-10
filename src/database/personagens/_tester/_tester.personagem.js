import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { ATAQUES_DATA } from "../../ataques"
import { HABILIDADES_DATA } from "../../habilidades"
import { IMAGES } from "../../../constants/images"

export const TESTER = {
    ..._BASE_ORIGINAL,
    id: 999,
    nome: "TESTER",
    titulo: "Personagem Teste",
    elemento: ELEMENTOS.NULO,
    corTema: COR_TEMA.PRETO,
    raridade: 5,
    comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: IMAGES.GENERICO_SPRITE,
            perfil: IMAGES.GENERICO_PERFIL,
            santuario: null,
        },
    ],
    status: {
        pvBase: 999,
        pmBase: 999,
        pvBonus: 10,
    },
    atributosBase: {
        forca: 99,
        agilidade: 10,
        magia: 99,
        vigor: 99
    },
    evolucoes: [
        {
            level: 1,
            experienciaNecessaria: 1250,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [...ATAQUES_DATA.map(atq=>{return atq.id})],
            habilidades: [...HABILIDADES_DATA.map(hbl=>{return hbl.id})],
        },
        {
            level: 2,
            experienciaNecessaria: 3750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [...ATAQUES_DATA.map(atq=>{return atq.id})],
            habilidades: [...HABILIDADES_DATA.map(hbl=>{return hbl.id})],
        },
        {
            level: 3,
            experienciaNecessaria: 7500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [...ATAQUES_DATA.map(atq=>{return atq.id})],
            habilidades: [...HABILIDADES_DATA.map(hbl=>{return hbl.id})],
        },
        {
            level: 4,
            experienciaNecessaria: 12500,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [...ATAQUES_DATA.map(atq=>{return atq.id})],
            habilidades: [...HABILIDADES_DATA.map(hbl=>{return hbl.id})],
        },
        {
            level: 5,
            experienciaNecessaria: 18750,
            bonusAtributos: {forca: 0, agilidade: 0, magia: 0, vigor: 0},
            talentos: [],
            ataques: [...ATAQUES_DATA.map(atq=>{return atq.id})],
            habilidades: [...HABILIDADES_DATA.map(hbl=>{return hbl.id})],
        },
    ],
}