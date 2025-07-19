import CAJADO_CRISTAL_SPRITE from "./CAJADO_CRISTAL_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ITEM_PROFICIENCIA } from "../../../../constants"
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"

export const CAJADO_CRISTAL = {
    id: 47,
    nome: "Cajado de Cristal",
    descricao: "Um cajado cristalino que facilita a concentração de mana.",
    sprite: CAJADO_CRISTAL_SPRITE,
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
        createBonusItem("Magia", "magia", 2),
    ]
}