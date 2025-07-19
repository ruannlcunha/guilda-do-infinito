import ANEL_COBRA_OURO_SPRITE from "./ANEL_COBRA_OURO_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"

export const ANEL_COBRA_OURO = {
    id: 31,
    nome: "Anel de Cobra Dourado",
    descricao: "Uma pequena cobra dourada que se enrola em seu dedo como um anel.",
    sprite: ANEL_COBRA_OURO_SPRITE,
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