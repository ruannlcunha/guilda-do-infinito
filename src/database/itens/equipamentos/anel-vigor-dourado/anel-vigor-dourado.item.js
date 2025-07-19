import ANEL_VIGOR_DOURADO_SPRITE from "./ANEL_VIGOR_DOURADO_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"

export const ANEL_VIGOR_DOURADO = {
    id: 11,
    nome: "Anel de Vigor Dourado",
    descricao: "Um anel feito de ouro com um efeito super revigorante.",
    sprite: ANEL_VIGOR_DOURADO_SPRITE,
    raridade: 5,
    santuario: BASE_SANTUARIO,
    itemTipo: ITEM_TIPO.EQUIPAMENTO,
    equipamentoTipo: "ACESSORIO",
    acoes: {
        ataques: [],
        habilidades: [],
        talentos: [],
    },
    bonus: [
        createBonusItem("Vigor", "vigor", 3),
    ]
}