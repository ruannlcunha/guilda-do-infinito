import ESCUDO_MADEIRA_SPRITE from "./ESCUDO_MADEIRA_SPRITE.png"
import BASE_SANTUARIO from "../assets/BASE_SANTUARIO.png"
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const ESCUDO_MADEIRA = {
    id: 34,
    nome: "Escudo de Madeira",
    descricao: "Um escudo",
    sprite: ESCUDO_MADEIRA_SPRITE,
    raridade: 3,
    santuario: BASE_SANTUARIO,
    categoria: ITENS_CATEGORIA.EQUIPAMENTO,
    tipo: "Escudo",
    equipamentoTipo: "ACESSORIO",
    bonus: [
        {
            nome: "Defesa",
            icon: ICONS.DEFESA,
            atributo: "defesa",
            valor: 1,
        },
    ]
}