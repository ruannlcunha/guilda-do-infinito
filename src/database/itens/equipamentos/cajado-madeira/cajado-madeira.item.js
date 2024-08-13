import CAJADO_MADEIRA_SPRITE from "./CAJADO_MADEIRA_SPRITE.png"
import BASE_SANTUARIO from "../assets/BASE_SANTUARIO.png"
import { ARMAS_TIPO } from "../../../../constants"
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const CAJADO_MADEIRA = {
    id: 20,
    nome: "Cajado de Madeira",
    descricao: "Um simples cajado de madeira.",
    sprite: CAJADO_MADEIRA_SPRITE,
    raridade: 3,
    tipo: ARMAS_TIPO.LEVE,
    santuario: BASE_SANTUARIO,
    categoria: ITENS_CATEGORIA.EQUIPAMENTO,
    equipamentoTipo: "ARMA",
    bonus: [
        {
            nome: "Magia",
            icon: ICONS.MAGIA,
            atributo: "magia",
            valor: 1,
        },
    ]
}