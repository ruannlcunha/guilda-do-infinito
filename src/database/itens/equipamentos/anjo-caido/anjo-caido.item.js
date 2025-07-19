import ANJO_CAIDO_SPRITE from "./ANJO_CAIDO_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ITEM_PROFICIENCIA } from "../../../../constants"
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"

export const ANJO_CAIDO = {
    id: 57,
    nome: "Anjo Caído",
    descricao: "Um arco lendário que representa o bem e o mal.",
    sprite: ANJO_CAIDO_SPRITE,
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
        createBonusItem("Agilidade", "agilidade", 3),
        createBonusItem("Magia", "magia", 1),
        createBonusItem("Vigor", "vigor", 1),
    ]
}