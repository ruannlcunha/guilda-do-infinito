import MANOPLA_TERRA_SPRITE from "./MANOPLA_TERRA_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ITEM_PROFICIENCIA } from "../../../../constants"
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"

export const MANOPLA_TERRA = {
    id: 27,
    nome: "Manopla da Terra",
    descricao: "Um manopla encantada com o elemento Terra.",
    sprite: MANOPLA_TERRA_SPRITE,
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