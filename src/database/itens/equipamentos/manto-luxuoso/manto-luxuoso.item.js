import MANTO_LUXUOSO_SPRITE from "./MANTO_LUXUOSO_SPRITE.png"
import BASE_SANTUARIO from "../assets/BASE_SANTUARIO.png"
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const MANTO_LUXUOSO = {
    id: 52,
    nome: "Manto Luxuoso",
    descricao: "Um manto feito com materiais de grande qualidade que auxilia na conjuração.",
    sprite: MANTO_LUXUOSO_SPRITE,
    raridade: 5,
    tipo: "Armadura Leve",
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
        {
            nome: "Magia",
            icon: ICONS.MAGIA,
            atributo: "magia",
            valor: 1,
        },
        {
            nome: "Vigor",
            icon: ICONS.VIGOR,
            atributo: "vigor",
            valor: 1,
        },
    ]
}