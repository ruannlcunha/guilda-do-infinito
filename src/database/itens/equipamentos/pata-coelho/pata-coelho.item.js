import PATA_COELHO_SPRITE from "./PATA_COELHO_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"

export const PATA_COELHO = {
    id: 28,
    nome: "Pata de Coelho",
    descricao: "Um acessório que traz sorte e agilidade ao usuário.",
    sprite: PATA_COELHO_SPRITE,
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
        createBonusItem("Agilidade", "agilidade", 1),
    ]
}