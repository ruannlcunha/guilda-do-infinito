import MACHADO_MADEIRA_SPRITE from "./MACHADO_MADEIRA_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"
import { ITEM_PROFICIENCIA } from "../../../../constants"
import { BONUS_DADO } from "../../../../constants/personagens/personagem.constant"
import { ATAQUES } from "../../../ataques"

export const MACHADO_MADEIRA = {
    id: 12,
    nome: "Machado de Madeira",
    descricao: "Um simples machado feito de madeira. Muito utilizado em treinos de combate para não ferir fatalmente os envolvidos.",
    sprite: MACHADO_MADEIRA_SPRITE,
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
        createBonusItem("Ataque", BONUS_DADO.ATAQUE, 1),
    ]
}