import MATADORA_DRAGOES_SPRITE from "./MATADORA_DRAGOES_SPRITE.png"
import BASE_SANTUARIO from "../assets/BASE_SANTUARIO.png"
import { ARMAS_TIPO } from "../../../../constants"
import { EQUIPAMENTO_TIPO, ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const MATADORA_DRAGOES = {
    id: 6,
    nome: "Matadora de Dragões",
    descricao: "Uma espada lendária responsável pela morte de poderosos dragões.",
    sprite: MATADORA_DRAGOES_SPRITE,
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
            nome: "Agilidade",
            icon: ICONS.AGILIDADE,
            atributo: "agilidade",
            valor: 2,
        },
        {
            nome: "Magia",
            icon: ICONS.MAGIA,
            atributo: "magia",
            valor: 2,
        },
    ]
}