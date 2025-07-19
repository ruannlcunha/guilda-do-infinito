import BOTAS_ELFICAS_SPRITE from "./BOTAS_ELFICAS_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"

export const BOTAS_ELFICAS = {
    id: 56,
    nome: "Botas Élficas",
    descricao: `Um par de botas usadas pelo povo élfico
                para aumentar sua agilidade e furtividade.`,
    sprite: BOTAS_ELFICAS_SPRITE,
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
        createBonusItem("Defesa", "defesa", 2),
        createBonusItem("Agilidade", "agilidade", 1),
    ]
}