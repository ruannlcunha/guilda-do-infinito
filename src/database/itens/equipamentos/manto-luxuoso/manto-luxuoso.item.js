import MANTO_LUXUOSO_SPRITE from "./MANTO_LUXUOSO_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ARMADURA_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"

export const MANTO_LUXUOSO = {
    id: 52,
    nome: "Manto Luxuoso",
    descricao: "Um manto feito com materiais de grande qualidade que auxilia na conjuração.",
    sprite: MANTO_LUXUOSO_SPRITE,
    raridade: 5,
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
        createBonusItem("Defesa", "defesa", 3),
        createBonusItem("Magia", "magia", 1),
        createBonusItem("Vigor", "vigor", 1),
    ]
}