import CAJADO_ANCIAO_SPRITE from "./CAJADO_ANCIAO_SPRITE.png"
import BASE_SANTUARIO from "../assets/BASE_SANTUARIO.png"
import { ARMAS_TIPO } from "../../../../constants"
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const CAJADO_ANCIAO = {
    id: 49,
    nome: "Cajado Ancião",
    descricao: "Um cajado feito da madeira de uma Árvore Anciã, uma árvore considerada divina.",
    sprite: CAJADO_ANCIAO_SPRITE,
    raridade: 5,
    tipo: ARMAS_TIPO.LEVE,
    santuario: BASE_SANTUARIO,
    categoria: ITENS_CATEGORIA.EQUIPAMENTO,
    equipamentoTipo: "ARMA",
    bonus: [
        {
            nome: "Magia",
            icon: ICONS.MAGIA,
            atributo: "magia",
            valor: 2,
        },
        {
            nome: "Vigor",
            icon: ICONS.VIGOR,
            atributo: "vigor",
            valor: 2,
        },
    ]
}