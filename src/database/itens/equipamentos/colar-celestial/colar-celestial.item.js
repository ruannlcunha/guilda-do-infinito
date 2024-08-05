import COLAR_CELESTIAL_SPRITE from "./COLAR_CELESTIAL_SPRITE.png"
import BASE_SANTUARIO from "../assets/BASE_SANTUARIO.png"
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const COLAR_CELESTIAL = {
    id: 54,
    nome: "Colar Celestial",
    descricao: "Um acessório",
    sprite: COLAR_CELESTIAL_SPRITE,
    raridade: 5,
    santuario: BASE_SANTUARIO,
    categoria: ITENS_CATEGORIA.EQUIPAMENTO,
    tipo: "Acessório",
    equipamentoTipo: "ACESSORIO",
    bonus: [
        {
            nome: "Magia",
            icon: ICONS.MAGIA,
            atributo: "magia",
            valor: 1,
        },
        {
            nome: "Vigor",
            icon: ICONS.VIGOR,
            atributo: "vigor",
            valor: 1,
        },
    ]
}