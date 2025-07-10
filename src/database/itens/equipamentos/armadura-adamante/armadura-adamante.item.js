import ARMADURA_ADAMANTE_SPRITE from "./ARMADURA_ADAMANTE_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ARMADURA_TIPO, ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const ARMADURA_ADAMANTE = {
    id: 30,
    nome: "Armadura de Adamante",
    descricao: "Uma armadura de adamante, um material extremamente resistente a danos físicos.",
    sprite: ARMADURA_ADAMANTE_SPRITE,
    raridade: 4,
    tipo: ARMADURA_TIPO.PESADA,
    santuario: BASE_SANTUARIO,
    categoria: ITENS_CATEGORIA.EQUIPAMENTO,
    equipamentoTipo: "ARMADURA",
    bonus: [
        {
            nome: "Defesa",
            icon: ICONS.DEFESA,
            atributo: "defesa",
            valor: 4,
        },
    ]
}