import MANOPLA_RUBI_SPRITE from "./MANOPLA_RUBI_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ITEM_PROFICIENCIA } from "../../../../constants"
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"

export const MANOPLA_RUBI = {
    id: 26,
    nome: "Manopla Rubi",
    descricao: "Uma manopla feita de aço reforçada com jóias de rubi.",
    sprite: MANOPLA_RUBI_SPRITE,
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