import ARMADURA_FERRO_SPRITE from "./ARMADURA_FERRO_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ARMADURA_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"

export const ARMADURA_FERRO = {
    id: 7,
    nome: "Armadura de Ferro",
    descricao: "Uma simples armadura de ferro.",
    sprite: ARMADURA_FERRO_SPRITE,
    raridade: 3,
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
        createBonusItem("Defesa", "defesa", 3),
    ]
}