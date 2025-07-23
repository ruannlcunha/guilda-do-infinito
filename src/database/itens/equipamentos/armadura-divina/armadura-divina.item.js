import ARMADURA_DIVINA_SPRITE from "./ARMADURA_DIVINA_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"
import { ITEM_PROFICIENCIA } from "../../../../constants"
import { RESISTENCIA_DANO } from "../../../../constants/personagens/personagem.constant"

export const ARMADURA_DIVINA = {
    id: 8,
    nome: "Armadura Divina",
    descricao: "Uma lendária armadura dourada abençoada pelos deuses na Grande Guerra Divina, feita de ouro reforçado e encantada por clérigos.",
    sprite: ARMADURA_DIVINA_SPRITE,
    raridade: 5,
    santuario: BASE_SANTUARIO,
    itemTipo: ITEM_TIPO.EQUIPAMENTO,
    proficiencia: ITEM_PROFICIENCIA.PESADA,
    equipamentoTipo: EQUIPAMENTO_TIPO.ARMADURA,
    acoes: {
        ataques: [],
        habilidades: [],
        talentos: [],
    },
    bonus: [
        createBonusItem("Defesa", "defesa", 5),
        createBonusItem("Vigor", "vigor", 1),
        createBonusItem("Resistência a Dano (Luz)", RESISTENCIA_DANO.LUZ, 5),
    ]
}