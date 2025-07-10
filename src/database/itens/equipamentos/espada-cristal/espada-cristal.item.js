import ESPADA_CRISTAL_SPRITE from "./ESPADA_CRISTAL_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ARMAS_TIPO } from "../../../../constants"
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const ESPADA_CRISTAL = {
    id: 21,
    nome: "Espada de Cristal",
    descricao: "Uma espada com lâmina feita de um cristal resistente.",
    sprite: ESPADA_CRISTAL_SPRITE,
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
            valor: 2,
        },
    ]
}