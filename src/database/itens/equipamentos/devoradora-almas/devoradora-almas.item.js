import DEVORADORA_ALMAS_SPRITE from "./DEVORADORA_ALMAS_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ITEM_PROFICIENCIA } from "../../../../constants"
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"
import { BONUS_DADO } from "../../../../constants/personagens/personagem.constant"

export const DEVORADORA_ALMAS = {
    id: 6,
    nome: "Devoradora de Almas",
    descricao: "Uma espada lendária responsável pela morte de milhares de pessoas.",
    sprite: DEVORADORA_ALMAS_SPRITE,
    raridade: 5,
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
        createBonusItem ("Força", "forca", 3),
        createBonusItem("Magia", "magia", 2),
        createBonusItem("Teste de ataque", BONUS_DADO.ATAQUE, 2),
    ]
}