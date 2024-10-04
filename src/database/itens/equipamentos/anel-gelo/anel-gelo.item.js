import ANEL_GELO_SPRITE from "./ANEL_GELO_SPRITE.png"
import BASE_SANTUARIO from "../assets/BASE_SANTUARIO.png"
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const ANEL_GELO = {
    id: 33,
    nome: "Anel de Gelo",
    descricao: "Um anel mágico feito com um gelo que nunca derrete.",
    sprite: ANEL_GELO_SPRITE,
    raridade: 4,
    santuario: BASE_SANTUARIO,
    categoria: ITENS_CATEGORIA.EQUIPAMENTO,
    tipo: "Acessório",
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