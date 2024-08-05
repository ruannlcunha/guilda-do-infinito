import MANTO_ELFICO_SPRITE from "./MANTO_ELFICO_SPRITE.png"
import BASE_SANTUARIO from "../assets/BASE_SANTUARIO.png"
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const MANTO_ELFICO = {
    id: 51,
    nome: "Manto Élfico",
    descricao: "Uma armadura",
    sprite: MANTO_ELFICO_SPRITE,
    raridade: 4,
    tipo: "Armadura Leve",
    santuario: BASE_SANTUARIO,
    categoria: ITENS_CATEGORIA.EQUIPAMENTO,
    equipamentoTipo: "ARMADURA",
    bonus: [
        {
            nome: "Defesa",
            icon: ICONS.DEFESA,
            atributo: "defesa",
            valor: 2,
        },
        {
            nome: "Agilidade",
            icon: ICONS.AGILIDADE,
            atributo: "agilidade",
            valor: 1,
        },
    ]
}