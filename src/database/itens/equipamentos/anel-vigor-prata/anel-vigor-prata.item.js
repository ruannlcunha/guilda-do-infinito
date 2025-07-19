import ANEL_VIGOR_PRATA_SPRITE from "./ANEL_VIGOR_PRATA_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"

export const ANEL_VIGOR_PRATA = {
    id: 10,
    nome: "Anel de Vigor Prata",
    descricao: "Um anel feito de prata com um efeito revigorante.",
    sprite: ANEL_VIGOR_PRATA_SPRITE,
    raridade: 4,
    santuario: BASE_SANTUARIO,
    itemTipo: ITEM_TIPO.EQUIPAMENTO,
    equipamentoTipo: "ACESSORIO",
    acoes: {
        ataques: [],
        habilidades: [],
        talentos: [],
    },
    bonus: [
        createBonusItem("Vigor", "vigor", 2),
    ]
}