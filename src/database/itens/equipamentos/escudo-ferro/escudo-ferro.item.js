import ESCUDO_FERRO_SPRITE from "./ESCUDO_FERRO_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"
import { ITEM_PROFICIENCIA } from "../../../../constants"
import { HABILIDADES } from "../../../habilidades"

export const ESCUDO_FERRO = {
    id: 23,
    nome: "Escudo de Ferro",
    descricao: "Um escudo reforçado feito de ferro. Muito utilizado por guardas de reinos para protegê-los de criminosos e afastar multidões.",
    sprite: ESCUDO_FERRO_SPRITE,
    raridade: 4,
    santuario: BASE_SANTUARIO,
    itemTipo: ITEM_TIPO.EQUIPAMENTO,
    proficiencia: ITEM_PROFICIENCIA.PESADA,
    equipamentoTipo: EQUIPAMENTO_TIPO.ACESSORIO,
    acoes: {
        ataques: [],
        habilidades: [{habilidadeId: HABILIDADES.DEFENDER.id, variantes: []}],
        talentos: [],
    },
    bonus: [
        createBonusItem("Defesa", "defesa", 2),
    ]
}