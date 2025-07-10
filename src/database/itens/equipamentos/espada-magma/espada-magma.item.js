import ESPADA_MAGMA_SPRITE from "./ESPADA_MAGMA_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ARMAS_TIPO } from "../../../../constants"
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const ESPADA_MAGMA = {
    id: 23,
    nome: "Espada de Magma",
    descricao: "Uma espada forjada no magma com uma lâmina que queima os inimigos.",
    sprite: ESPADA_MAGMA_SPRITE,
    raridade: 4,
    tipo: ARMAS_TIPO.PESADA,
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