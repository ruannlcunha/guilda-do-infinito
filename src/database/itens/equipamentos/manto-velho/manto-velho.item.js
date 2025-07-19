import MANTO_VELHO_SPRITE from "./MANTO_VELHO_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ARMADURA_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"

export const MANTO_VELHO = {
    id: 50,
    nome: "Manto Velho",
    descricao: "Um manto velho e desgastado.",
    sprite: MANTO_VELHO_SPRITE,
    raridade: 3,
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
        createBonusItem("Defesa", "defesa", 1),
    ]
}