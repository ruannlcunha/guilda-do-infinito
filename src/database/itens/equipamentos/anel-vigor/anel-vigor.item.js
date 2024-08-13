import ANEL_VIGOR_SPRITE from "./ANEL_VIGOR_SPRITE.png"
import BASE_SANTUARIO from "../assets/BASE_SANTUARIO.png"
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const ANEL_VIGOR = {
    id: 9,
    nome: "Anel de Vigor",
    descricao: "Um anel feito de bronze com um efeito revigorante.",
    sprite: ANEL_VIGOR_SPRITE,
    raridade: 3,
    santuario: BASE_SANTUARIO,
    categoria: ITENS_CATEGORIA.EQUIPAMENTO,
    equipamentoTipo: "ACESSORIO",
    bonus: [
        {
            nome: "Vigor",
            icon: ICONS.VIGOR,
            atributo: "vigor",
            valor: 1,
        },
    ]
}