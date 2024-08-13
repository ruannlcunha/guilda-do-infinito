import CAJADO_SOMBRIO_SPRITE from "./CAJADO_SOMBRIO_SPRITE.png"
import BASE_SANTUARIO from "../assets/BASE_SANTUARIO.png"
import { ARMAS_TIPO } from "../../../../constants"
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const CAJADO_SOMBRIO = {
    id: 48,
    nome: "Cajado Sombrio",
    descricao: "Um poderoso cajado com um núcleo de energia sombria.",
    sprite: CAJADO_SOMBRIO_SPRITE,
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
            valor: 3,
        },
        {
            nome: "Vigor",
            icon: ICONS.VIGOR,
            atributo: "vigor",
            valor: 1,
        },
    ]
}