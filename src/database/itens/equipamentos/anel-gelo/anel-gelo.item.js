import ANEL_GELO_SPRITE from "./ANEL_GELO_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"

export const ANEL_GELO = {
    id: 30,
    nome: "Anel de Gelo",
    descricao: "Um anel mágico feito com um gelo que nunca derrete.",
    sprite: ANEL_GELO_SPRITE,
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
        createBonusItem("Vigor", "vigor", 1),
    ]
}