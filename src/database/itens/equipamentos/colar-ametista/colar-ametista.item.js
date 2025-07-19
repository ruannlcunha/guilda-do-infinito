import COLAR_AMETISTA_SPRITE from "./COLAR_AMETISTA_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"

export const COLAR_AMETISTA = {
    id: 53,
    nome: "Colar de Ametista",
    descricao: "Um colar com uma pedra de ametista.",
    sprite: COLAR_AMETISTA_SPRITE,
    raridade: 4,
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
    ]
}