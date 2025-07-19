import ESPADA_ADAMANTE_SPRITE from "./ESPADA_ADAMANTE_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ITEM_PROFICIENCIA } from "../../../../constants"
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"

export const ESPADA_ADAMANTE = {
    id: 5,
    nome: "Espada de Adamante",
    descricao: `Uma espada forjada com o resistente material Adamante.`,
    sprite: ESPADA_ADAMANTE_SPRITE,
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