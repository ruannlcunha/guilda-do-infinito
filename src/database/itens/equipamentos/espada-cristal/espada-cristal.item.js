import ESPADA_CRISTAL_SPRITE from "./ESPADA_CRISTAL_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ITEM_PROFICIENCIA } from "../../../../constants"
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"

export const ESPADA_CRISTAL = {
    id: 15,
    nome: "Espada de Cristal",
    descricao: "Uma espada com lâmina feita de um cristal resistente.",
    sprite: ESPADA_CRISTAL_SPRITE,
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
        createBonusItem("Força", "forca", 2),
    ]
}