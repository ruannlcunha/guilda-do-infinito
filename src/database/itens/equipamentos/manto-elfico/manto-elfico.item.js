import MANTO_ELFICO_SPRITE from "./MANTO_ELFICO_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ARMADURA_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"

export const MANTO_ELFICO = {
    id: 51,
    nome: "Manto Élfico",
    descricao: "Um manto leve usado pelos elfos.",
    sprite: MANTO_ELFICO_SPRITE,
    raridade: 4,
    tipo: ARMADURA_TIPO.LEVE,
    santuario: BASE_SANTUARIO,
    itemTipo: ITEM_TIPO.EQUIPAMENTO,
    equipamentoTipo: "ARMADURA",
    acoes: {
        ataques: [],
        habilidades: [],
        talentos: [],
    },
    bonus: [
        createBonusItem("Defesa", "defesa", 2),
        createBonusItem("Agilidade", "agilidade", 1),
    ]
}