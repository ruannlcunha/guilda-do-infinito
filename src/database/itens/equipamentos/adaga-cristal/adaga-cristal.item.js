import ADAGA_CRISTAL_SPRITE from "./ADAGA_CRISTAL_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ITEM_PROFICIENCIA } from "../../../../constants"
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"

export const ADAGA_CRISTAL = {
    id: 16,
    nome: "Adaga de Cristal",
    descricao: "Uma adaga afiada feita de um aço cristalino muito resistente.",
    sprite: ADAGA_CRISTAL_SPRITE,
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