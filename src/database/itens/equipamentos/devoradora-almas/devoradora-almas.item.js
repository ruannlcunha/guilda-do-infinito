import DEVORADORA_ALMAS_SPRITE from "./DEVORADORA_ALMAS_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ARMAS_TIPO } from "../../../../constants"
import { EQUIPAMENTO_TIPO, ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const DEVORADORA_ALMAS = {
    id: 6,
    nome: "Devoradora de Almas",
    descricao: "Uma espada lendária responsável pela morte de milhares de pessoas.",
    sprite: DEVORADORA_ALMAS_SPRITE,
    raridade: 5,
    tipo: ARMAS_TIPO.PESADA,
    santuario: BASE_SANTUARIO,
    categoria: ITENS_CATEGORIA.EQUIPAMENTO,
    equipamentoTipo: "ARMA",
    bonus: [
        {
            nome: "Força",
            icon: ICONS.FORCA,
            atributo: "forca",
            valor: 3,
        },
        {
            nome: "Magia",
            icon: ICONS.MAGIA,
            atributo: "magia",
            valor: 2,
        },
    ]
}