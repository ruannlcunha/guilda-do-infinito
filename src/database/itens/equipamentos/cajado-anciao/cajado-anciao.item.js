import CAJADO_ANCIAO_SPRITE from "./CAJADO_ANCIAO_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ITEM_PROFICIENCIA } from "../../../../constants"
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"

export const CAJADO_ANCIAO = {
    id: 49,
    nome: "Cajado Ancião",
    descricao: "Um cajado feito da madeira de uma Árvore Anciã, uma árvore considerada divina.",
    sprite: CAJADO_ANCIAO_SPRITE,
    raridade: 5,
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
        createBonusItem("Magia", "magia", 2),
        createBonusItem("Vigor", "vigor", 2),
    ]
}