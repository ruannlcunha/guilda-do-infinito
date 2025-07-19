import ANEL_DRAGAO_SPRITE from "./ANEL_DRAGAO_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"

export const ANEL_DRAGAO = {
    id: 32,
    nome: "Anel de Dragão",
    descricao: "Um anel feito com escamas de um poderoso dragão.",
    sprite: ANEL_DRAGAO_SPRITE,
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
        createBonusItem("Vigor", "vigor", 1),
    ]
}