import ARMADURA_FLORESTA_SPRITE from "./ARMADURA_FLORESTA_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ARMADURA_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"

export const ARMADURA_FLORESTA = {
    id: 29,
    nome: "Armadura da Floresta",
    descricao: "Uma armadura de aço abençoada pela Deusa da Natureza.",
    sprite: ARMADURA_FLORESTA_SPRITE,
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
        createBonusItem("Defesa", "defesa", 3),
    ]
}