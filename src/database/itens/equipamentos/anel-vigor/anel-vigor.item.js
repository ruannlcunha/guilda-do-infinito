import ANEL_VIGOR_SPRITE from "./ANEL_VIGOR_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"

export const ANEL_VIGOR = {
    id: 9,
    nome: "Anel de Vigor",
    descricao: "Um anel feito de bronze com um efeito revigorante.",
    sprite: ANEL_VIGOR_SPRITE,
    raridade: 3,
    santuario: BASE_SANTUARIO,
    itemTipo: ITEM_TIPO.EQUIPAMENTO,
    equipamentoTipo: "ACESSORIO",
    acoes: {
        ataques: [],
        habilidades: [],
        talentos: [],
    },
    bonus: [
        createBonusItem("Vigor", "vigor", 1),
    ]
}