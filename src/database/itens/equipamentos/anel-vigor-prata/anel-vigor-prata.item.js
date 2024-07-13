import ANEL_VIGOR_PRATA_SPRITE from "./ANEL_VIGOR_PRATA_SPRITE.png"
import BASE_SANTUARIO from "../assets/BASE_SANTUARIO.png"
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const ANEL_VIGOR_PRATA = {
    id: 10,
    nome: "Anel de Vigor Prata",
    descricao: "Um anel feito de prata com um efeito revigorante.",
    sprite: ANEL_VIGOR_PRATA_SPRITE,
    raridade: 4,
    santuario: BASE_SANTUARIO,
    categoria: ITENS_CATEGORIA.EQUIPAMENTO,
    equipamentoTipo: "ACESSORIO",
    bonus: [
        {
            nome: "Vigor",
            icon: ICONS.VIGOR,
            atributo: "vigor",
            valor: 2,
        },
    ]
}