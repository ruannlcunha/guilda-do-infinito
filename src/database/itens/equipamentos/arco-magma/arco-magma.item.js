import ARCO_MAGMA_SPRITE from "./ARCO_MAGMA_SPRITE.png"
import BASE_SANTUARIO from "../assets/BASE_SANTUARIO.png"
import { ARMAS_TIPO } from "../../../../constants"
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const ARCO_MAGMA = {
    id: 19,
    nome: "Arco de Magma",
    descricao: "Um arco forjado no magma com flechas que queimam os alvos.",
    sprite: ARCO_MAGMA_SPRITE,
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