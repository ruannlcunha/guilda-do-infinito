import ARCO_MADEIRA_SPRITE from "./ARCO_MADEIRA_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ITEM_PROFICIENCIA } from "../../../../constants"
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"
import { BONUS_DADO } from "../../../../constants/personagens/personagem.constant"

export const ARCO_MADEIRA = {
    id: 2,
    nome: "Arco de Madeira",
    descricao: "Um simples arco de madeira.",
    sprite: ARCO_MADEIRA_SPRITE,
    raridade: 3,
    tipo: ITEM_PROFICIENCIA.LEVE,
    santuario: BASE_SANTUARIO,
    itemTipo: ITEM_TIPO.EQUIPAMENTO,
    equipamentoTipo: "ARMA",
    acoes: {
        ataques: [],
        habilidades: [],
        talentos: [],
    },
    bonus: [
        createBonusItem("Agilidade", "agilidade", 1),
        createBonusItem("Teste de Ataque", BONUS_DADO.ATAQUE, 1),
    ]
}