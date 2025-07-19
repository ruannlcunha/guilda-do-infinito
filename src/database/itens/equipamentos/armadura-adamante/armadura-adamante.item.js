import ARMADURA_ADAMANTE_SPRITE from "./ARMADURA_ADAMANTE_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ARMADURA_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"

export const ARMADURA_ADAMANTE = {
    id: 25,
    nome: "Armadura de Adamante",
    descricao: "Uma armadura de adamante, um material extremamente resistente a danos físicos.",
    sprite: ARMADURA_ADAMANTE_SPRITE,
    raridade: 4,
    tipo: ARMADURA_TIPO.PESADA,
    santuario: BASE_SANTUARIO,
    itemTipo: ITEM_TIPO.EQUIPAMENTO,
    equipamentoTipo: "ARMADURA",
    acoes: {
        ataques: [],
        habilidades: [],
        talentos: [],
    },
    bonus: [
        createBonusItem("Defesa", "defesa", 4),
    ]
}