import ESCUDO_SOLAR_SPRITE from "./ESCUDO_SOLAR_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"

export const ESCUDO_SOLAR = {
    id: 21,
    nome: "Escudo Solar",
    descricao: `Um lendário escudo usado pelo herói escolhido do Deus do Sol.`,
    sprite: ESCUDO_SOLAR_SPRITE,
    raridade: 5,
    santuario: BASE_SANTUARIO,
    itemTipo: ITEM_TIPO.EQUIPAMENTO,
    tipo: "Escudo",
    equipamentoTipo: "ACESSORIO",
    acoes: {
        ataques: [],
        habilidades: [],
        talentos: [],
    },
    bonus: [
        createBonusItem("Defesa", "defesa", 3),
        createBonusItem("Vigor", "vigor", 1),
    ]
}