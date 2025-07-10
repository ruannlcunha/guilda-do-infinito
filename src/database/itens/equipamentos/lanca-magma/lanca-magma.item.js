import LANCA_MAGMA_SPRITE from "./LANCA_MAGMA_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ARMAS_TIPO } from "../../../../constants"
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const LANCA_MAGMA = {
    id: 59,
    nome: "Lança de Magma",
    descricao: "Uma lança forjada no magma que queima os inimigos perfurados por ela.",
    sprite: LANCA_MAGMA_SPRITE,
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