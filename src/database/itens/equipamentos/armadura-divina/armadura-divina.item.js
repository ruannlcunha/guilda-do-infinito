import ARMADURA_DIVINA_SPRITE from "./ARMADURA_DIVINA_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ARMADURA_TIPO, ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const ARMADURA_DIVINA = {
    id: 8,
    nome: "Armadura Divina",
    descricao: "Uma armadura lendária vestida pelos deuses.",
    sprite: ARMADURA_DIVINA_SPRITE,
    raridade: 5,
    tipo: ARMADURA_TIPO.PESADA,
    santuario: BASE_SANTUARIO,
    categoria: ITENS_CATEGORIA.EQUIPAMENTO,
    equipamentoTipo: "ARMADURA",
    bonus: [
        {
            nome: "Defesa",
            icon: ICONS.DEFESA,
            atributo: "defesa",
            valor: 5,
        },
        {
            nome: "Vigor",
            icon: ICONS.VIGOR,
            atributo: "vigor",
            valor: 1,
        },
    ]
}