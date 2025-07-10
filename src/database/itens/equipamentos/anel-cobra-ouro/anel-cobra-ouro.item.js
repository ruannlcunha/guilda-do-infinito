import ANEL_COBRA_OURO_SPRITE from "./ANEL_COBRA_OURO_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const ANEL_COBRA_OURO = {
    id: 31,
    nome: "Anel de Cobra Dourado",
    descricao: "Uma pequena cobra dourada que se enrola em seu dedo como um anel.",
    sprite: ANEL_COBRA_OURO_SPRITE,
    raridade: 5,
    santuario: BASE_SANTUARIO,
    categoria: ITENS_CATEGORIA.EQUIPAMENTO,
    tipo: "Acessório",
    equipamentoTipo: "ACESSORIO",
    bonus: [
        {
            nome: "Vigor",
            icon: ICONS.VIGOR,
            atributo: "vigor",
            valor: 1,
        },
    ]
}