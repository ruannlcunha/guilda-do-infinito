import ARCO_MAGMA_SPRITE from "./ARCO_MAGMA_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ITEM_PROFICIENCIA } from "../../../../constants"
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"

export const ARCO_MAGMA = {
    id: 19,
    nome: "Arco de Magma",
    descricao: "Um arco forjado no magma com flechas que queimam os alvos.",
    sprite: ARCO_MAGMA_SPRITE,
    raridade: 4,
    tipo: ITEM_PROFICIENCIA.LEVE,
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