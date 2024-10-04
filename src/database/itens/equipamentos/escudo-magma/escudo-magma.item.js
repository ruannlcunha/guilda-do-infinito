import ESCUDO_MAGMA_SPRITE from "./ESCUDO_MAGMA_SPRITE.png"
import BASE_SANTUARIO from "../assets/BASE_SANTUARIO.png"
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const ESCUDO_MAGMA = {
    id: 35,
    nome: "Escudo de Magma",
    descricao: "Um escudo forjado no magma resistente ao fogo.",
    sprite: ESCUDO_MAGMA_SPRITE,
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
            valor: 3,
        },
    ]
}