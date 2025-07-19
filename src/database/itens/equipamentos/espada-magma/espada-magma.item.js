import ESPADA_MAGMA_SPRITE from "./ESPADA_MAGMA_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ITEM_PROFICIENCIA } from "../../../../constants"
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"

export const ESPADA_MAGMA = {
    id: 18,
    nome: "Espada de Magma",
    descricao: "Uma espada forjada no magma com uma lâmina que queima os inimigos.",
    sprite: ESPADA_MAGMA_SPRITE,
    raridade: 4,
    tipo: ITEM_PROFICIENCIA.PESADA,
    santuario: BASE_SANTUARIO,
    itemTipo: ITEM_TIPO.EQUIPAMENTO,
    equipamentoTipo: "ARMA",
    acoes: {
        ataques: [],
        habilidades: [],
        talentos: [],
    },
    bonus: [
        createBonusItem("Força", "forca", 1),
    ]
}