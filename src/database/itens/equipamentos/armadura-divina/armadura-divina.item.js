import ARMADURA_DIVINA_SPRITE from "./ARMADURA_DIVINA_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ARMADURA_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"
import { ATAQUES } from "../../../ataques"
import { HABILIDADES } from "../../../habilidades"
import { TALENTOS } from "../../../talentos"

export const ARMADURA_DIVINA = {
    id: 8,
    nome: "Armadura Divina",
    descricao: "Uma armadura lendária vestida pelos deuses.",
    sprite: ARMADURA_DIVINA_SPRITE,
    raridade: 5,
    tipo: ARMADURA_TIPO.PESADA,
    santuario: BASE_SANTUARIO,
    itemTipo: ITEM_TIPO.EQUIPAMENTO,
    equipamentoTipo: "ARMADURA",
    acoes: {
        ataques: [{ataqueId: ATAQUES.BOLA_DE_FOGO.id, variantes:[]}],
        habilidades: [{habilidadeId: HABILIDADES.PURIFICAR.id, variantes:[]}],
        talentos: [TALENTOS.ARMADURADO],
    },
    bonus: [
        createBonusItem("Defesa", "defesa", 5),
        createBonusItem("Vigor", "vigor", 1),
    ]
}