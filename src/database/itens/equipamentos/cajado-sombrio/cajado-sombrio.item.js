import CAJADO_SOMBRIO_SPRITE from "./CAJADO_SOMBRIO_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ITEM_PROFICIENCIA } from "../../../../constants"
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"

export const CAJADO_SOMBRIO = {
    id: 48,
    nome: "Cajado Sombrio",
    descricao: "Um poderoso cajado com um núcleo de energia sombria.",
    sprite: CAJADO_SOMBRIO_SPRITE,
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
        createBonusItem("Magia", "magia", 3),
        createBonusItem("Vigor", "vigor", 1),
    ]
}