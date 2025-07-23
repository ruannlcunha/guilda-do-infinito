import ESCUDO_MADEIRA_SPRITE from "./ESCUDO_MADEIRA_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"
import { ITEM_PROFICIENCIA } from "../../../../constants"
import { HABILIDADES } from "../../../habilidades"

export const ESCUDO_MADEIRA = {
    id: 14,
    nome: "Escudo de Madeira",
    descricao: "Um pequeno escudo circular feito de madeira. Pode ser facilmente quebrado dependendo do ataque sofrido.",
    sprite: ESCUDO_MADEIRA_SPRITE,
    raridade: 3,
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
        createBonusItem("Defesa", "defesa", 1),
    ]
}