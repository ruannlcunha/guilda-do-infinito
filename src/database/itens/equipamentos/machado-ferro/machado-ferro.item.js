import MACHADO_FERRO_SPRITE from "./MACHADO_FERRO_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"
import { ITEM_PROFICIENCIA } from "../../../../constants"
import { BONUS_DADO } from "../../../../constants/personagens/personagem.constant"
import { ATAQUES } from "../../../ataques"

export const MACHADO_FERRO = {
    id: 24,
    nome: "Machado de Ferro",
    descricao: "Um machado com a lâmina feita de ferro. É bem vista sendo utilizada por guerreiros de grande porte e pelos povos Orcs.",
    sprite: MACHADO_FERRO_SPRITE,
    raridade: 3,
    santuario: BASE_SANTUARIO,
    itemTipo: ITEM_TIPO.EQUIPAMENTO,
    proficiencia: ITEM_PROFICIENCIA.PESADA,
    equipamentoTipo: EQUIPAMENTO_TIPO.ARMA,
    acoes: {
        ataques: [{ataqueId: ATAQUES.GOLPE_PESADO.id, variantes: []}],
        habilidades: [],
        talentos: [],
    },
    bonus: [
        createBonusItem("Dano", BONUS_DADO.DANO, 1),
    ]
}