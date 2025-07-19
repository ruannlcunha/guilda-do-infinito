import COLAR_DEMONIACO_SPRITE from "./COLAR_DEMONIACO_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"

export const COLAR_DEMONIACO = {
    id: 55,
    nome: "Colar Demoníaco",
    descricao: "Um colar com um núcleo de energia amaldiçoada.",
    sprite: COLAR_DEMONIACO_SPRITE,
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
        createBonusItem("Magia", "magia", 2),
        createBonusItem("Vigor", "vigor", -1),
    ]
}