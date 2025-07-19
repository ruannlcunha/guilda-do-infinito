import ESPADA_FERRO_SPRITE from "./ESPADA_FERRO_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ITEM_PROFICIENCIA } from "../../../../constants"
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"
import { BONUS_DADO } from "../../../../constants/personagens/personagem.constant"

export const ESPADA_FERRO = {
    id: 4,
    nome: "Espada de Ferro",
    descricao: "Uma simples espada de ferro.",
    sprite: ESPADA_FERRO_SPRITE,
    raridade: 3,
    tipo: ITEM_PROFICIENCIA.PESADA,
    santuario: BASE_SANTUARIO,
    itemTipo: ITEM_TIPO.EQUIPAMENTO,
    equipamentoTipo: "ARMA",
    acoes: {
        ataques: [],
        habilidades: [],
        talentos: [],
    },
    bonus: [
        createBonusItem("Força", "forca", 1),
        createBonusItem("Teste de ataque", BONUS_DADO.ATAQUE, 1),
    ]
}