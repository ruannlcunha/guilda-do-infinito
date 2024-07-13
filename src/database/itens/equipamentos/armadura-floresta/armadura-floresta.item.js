import ARMADURA_FLORESTA_SPRITE from "./ARMADURA_FLORESTA_SPRITE.png"
import BASE_SANTUARIO from "../assets/BASE_SANTUARIO.png"
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const ARMADURA_FLORESTA = {
    id: 29,
    nome: "Armadura da Floresta",
    descricao: "Uma armadura",
    sprite: ARMADURA_FLORESTA_SPRITE,
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