import ADAGA_CRISTAL_SPRITE from "./ADAGA_CRISTAL_SPRITE.png"
import BASE_SANTUARIO from "../assets/BASE_SANTUARIO.png"
import { ARMAS_TIPO } from "../../../../constants"
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const ADAGA_CRISTAL = {
    id: 16,
    nome: "Adaga de Cristal",
    descricao: "Uma arma",
    sprite: ADAGA_CRISTAL_SPRITE,
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