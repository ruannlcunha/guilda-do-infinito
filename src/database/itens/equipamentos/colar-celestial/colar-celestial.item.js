import COLAR_CELESTIAL_SPRITE from "./COLAR_CELESTIAL_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"

export const COLAR_CELESTIAL = {
    id: 54,
    nome: "Colar Celestial",
    descricao: "Um colar com um núcleo raro de energia celestial.",
    sprite: COLAR_CELESTIAL_SPRITE,
    raridade: 5,
    santuario: BASE_SANTUARIO,
    itemTipo: ITEM_TIPO.EQUIPAMENTO,
    tipo: "Acessório",
    equipamentoTipo: "ACESSORIO",
    acoes: {
        ataques: [],
        habilidades: [],
        talentos: [],
    },
    bonus: [
        createBonusItem("Magia", "magia", 1),
        createBonusItem("Vigor", "vigor", 1),
    ]
}