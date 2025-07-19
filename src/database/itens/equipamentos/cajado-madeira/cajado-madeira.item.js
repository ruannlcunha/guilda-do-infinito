import CAJADO_MADEIRA_SPRITE from "./CAJADO_MADEIRA_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ITEM_PROFICIENCIA } from "../../../../constants"
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"

export const CAJADO_MADEIRA = {
    id: 3,
    nome: "Cajado de Madeira",
    descricao: "Um simples cajado de madeira.",
    sprite: CAJADO_MADEIRA_SPRITE,
    raridade: 3,
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
        createBonusItem("Magia", "magia", 1),
    ]
}