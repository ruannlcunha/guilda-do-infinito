import ESCUDO_FERRO_SPRITE from "./ESCUDO_FERRO_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const ESCUDO_FERRO = {
    id: 46,
    nome: "Escudo de Ferro",
    descricao: "Um escudo de ferro reforçado.",
    sprite: ESCUDO_FERRO_SPRITE,
    raridade: 4,
    santuario: BASE_SANTUARIO,
    categoria: ITENS_CATEGORIA.EQUIPAMENTO,
    tipo: "Escudo",
    equipamentoTipo: "ACESSORIO",
    bonus: [
        {
            nome: "Defesa",
            icon: ICONS.DEFESA,
            atributo: "defesa",
            valor: 2,
        },
    ]
}