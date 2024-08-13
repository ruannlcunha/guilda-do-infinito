import ARCO_MADEIRA_SPRITE from "./ARCO_MADEIRA_SPRITE.png"
import BASE_SANTUARIO from "../assets/BASE_SANTUARIO.png"
import { ARMAS_TIPO } from "../../../../constants"
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const ARCO_MADEIRA = {
    id: 18,
    nome: "Arco de Madeira",
    descricao: "Um simples arco de madeira.",
    sprite: ARCO_MADEIRA_SPRITE,
    raridade: 3,
    tipo: ARMAS_TIPO.LEVE,
    santuario: BASE_SANTUARIO,
    categoria: ITENS_CATEGORIA.EQUIPAMENTO,
    equipamentoTipo: "ARMA",
    bonus: [
        {
            nome: "Agilidade",
            icon: ICONS.AGILIDADE,
            atributo: "agilidade",
            valor: 1,
        },
    ]
}