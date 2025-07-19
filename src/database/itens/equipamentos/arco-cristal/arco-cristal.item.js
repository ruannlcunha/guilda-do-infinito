import ARCO_CRISTAL_SPRITE from "./ARCO_CRISTAL_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ITEM_PROFICIENCIA } from "../../../../constants"
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"

export const ARCO_CRISTAL = {
    id: 17,
    nome: "Arco de Cristal",
    descricao: "Um arco cristalino com poderosas flechas perfurantes.",
    sprite: ARCO_CRISTAL_SPRITE,
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
        createBonusItem("Agilidade", "agilidade", 2),
    ]
}