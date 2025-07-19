import ESCUDO_MADEIRA_SPRITE from "./ESCUDO_MADEIRA_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"

export const ESCUDO_MADEIRA = {
    id: 14,
    nome: "Escudo de Madeira",
    descricao: "Um simples escudo de madeira.",
    sprite: ESCUDO_MADEIRA_SPRITE,
    raridade: 3,
    santuario: BASE_SANTUARIO,
    itemTipo: ITEM_TIPO.EQUIPAMENTO,
    tipo: "Escudo",
    equipamentoTipo: "ACESSORIO",
    acoes: {
        ataques: [],
        habilidades: [],
        talentos: [],
    },
    bonus: [
        createBonusItem("Defesa", "defesa", 1),
    ]
}