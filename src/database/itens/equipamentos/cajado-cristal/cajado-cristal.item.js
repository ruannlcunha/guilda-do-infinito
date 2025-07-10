import CAJADO_CRISTAL_SPRITE from "./CAJADO_CRISTAL_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ARMAS_TIPO } from "../../../../constants"
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const CAJADO_CRISTAL = {
    id: 47,
    nome: "Cajado de Cristal",
    descricao: "Um cajado cristalino que facilita a concentração de mana.",
    sprite: CAJADO_CRISTAL_SPRITE,
    raridade: 4,
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
    ]
}