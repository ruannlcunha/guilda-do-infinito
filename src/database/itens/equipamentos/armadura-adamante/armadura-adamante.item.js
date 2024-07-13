import ARMADURA_ADAMANTE_SPRITE from "./ARMADURA_ADAMANTE_SPRITE.png"
import BASE_SANTUARIO from "../assets/BASE_SANTUARIO.png"
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const ARMADURA_ADAMANTE = {
    id: 30,
    nome: "Armadura de Adamante",
    descricao: "Uma armadura",
    sprite: ARMADURA_ADAMANTE_SPRITE,
    raridade: 4,
    tipo: "Armadura Pesada",
    santuario: BASE_SANTUARIO,
    categoria: ITENS_CATEGORIA.EQUIPAMENTO,
    equipamentoTipo: "ARMADURA",
    bonus: [
        {
            nome: "Defesa",
            icon: ICONS.DEFESA,
            atributo: "defesa",
            valor: 3,
        },
    ]
}