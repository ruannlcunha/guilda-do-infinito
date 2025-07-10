import ANEL_VIGOR_DOURADO_SPRITE from "./ANEL_VIGOR_DOURADO_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const ANEL_VIGOR_DOURADO = {
    id: 11,
    nome: "Anel de Vigor Dourado",
    descricao: "Um anel feito de ouro com um efeito super revigorante.",
    sprite: ANEL_VIGOR_DOURADO_SPRITE,
    raridade: 5,
    santuario: BASE_SANTUARIO,
    categoria: ITENS_CATEGORIA.EQUIPAMENTO,
    equipamentoTipo: "ACESSORIO",
    bonus: [
        {
            nome: "Vigor",
            icon: ICONS.VIGOR,
            atributo: "vigor",
            valor: 3,
        },
    ]
}