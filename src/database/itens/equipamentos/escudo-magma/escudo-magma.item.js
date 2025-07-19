import ESCUDO_MAGMA_SPRITE from "./ESCUDO_MAGMA_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"

export const ESCUDO_MAGMA = {
    id: 20,
    nome: "Escudo de Magma",
    descricao: "Um escudo forjado no magma resistente ao fogo.",
    sprite: ESCUDO_MAGMA_SPRITE,
    raridade: 4,
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
        createBonusItem("Defesa", "defesa", 3),
    ]
}