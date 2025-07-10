import COLAR_DEMONIACO_SPRITE from "./COLAR_DEMONIACO_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const COLAR_DEMONIACO = {
    id: 55,
    nome: "Colar Demoníaco",
    descricao: "Um colar com um núcleo de energia amaldiçoada.",
    sprite: COLAR_DEMONIACO_SPRITE,
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
            valor: 2,
        },
        {
            nome: "Vigor",
            icon: ICONS.VIGOR,
            atributo: "vigor",
            valor: -1,
        },
    ]
}