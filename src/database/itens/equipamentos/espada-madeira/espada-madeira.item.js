import ESPADA_MADEIRA_SPRITE from "./ESPADA_MADEIRA_SPRITE.png"
import BASE_SANTUARIO from "../assets/BASE_SANTUARIO.png"
import { ARMAS_TIPO } from "../../../../constants"
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const ESPADA_MADEIRA = {
    id: 22,
    nome: "Espada de Madeira",
    descricao: "Uma arma",
    sprite: ESPADA_MADEIRA_SPRITE,
    raridade: 3,
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