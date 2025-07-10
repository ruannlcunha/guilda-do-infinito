import MANOPLA_RUBI_SPRITE from "./MANOPLA_RUBI_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ARMAS_TIPO } from "../../../../constants"
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const MANOPLA_RUBI = {
    id: 26,
    nome: "Manopla Rubi",
    descricao: "Uma manopla feita de aço reforçada com jóias de rubi.",
    sprite: MANOPLA_RUBI_SPRITE,
    raridade: 4,
    tipo: ARMAS_TIPO.LEVE,
    santuario: BASE_SANTUARIO,
    categoria: ITENS_CATEGORIA.EQUIPAMENTO,
    equipamentoTipo: "ARMA",
    bonus: [
        {
            nome: "Força",
            icon: ICONS.FORCA,
            atributo: "forca",
            valor: 1,
        },
    ]
}