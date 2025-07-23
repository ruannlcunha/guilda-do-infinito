import ESPADA_MAGMA_SPRITE from "./ESPADA_MAGMA_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"
import { ITEM_PROFICIENCIA } from "../../../../constants"
import { BONUS_DADO } from "../../../../constants/personagens/personagem.constant"
import { ATAQUES } from "../../../ataques"

export const ESPADA_MAGMA = {
    id: 18,
    nome: "Espada de Magma",
    descricao: "Uma poderosa espada pesada forjada no magma de um vulcão. Sua lâmina de grossa espessura causa forte dano com queimaduras no inimigo.",
    sprite: ESPADA_MAGMA_SPRITE,
    raridade: 4,
    santuario: BASE_SANTUARIO,
    itemTipo: ITEM_TIPO.EQUIPAMENTO,
    proficiencia: ITEM_PROFICIENCIA.PESADA,
    equipamentoTipo: EQUIPAMENTO_TIPO.ARMA,
    acoes: {
        ataques: [{ataqueId: ATAQUES.GOLPE_PRECISO_FOGO.id, variantes: []}],
        habilidades: [],
        talentos: [],
    },
    bonus: [
            createBonusItem("Dano", BONUS_DADO.DANO, 1),
    ]
}