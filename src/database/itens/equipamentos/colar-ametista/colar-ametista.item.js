import COLAR_AMETISTA_SPRITE from "./COLAR_AMETISTA_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"
import { ITEM_PROFICIENCIA } from "../../../../constants"
import { BONUS_DADO } from "../../../../constants/personagens/personagem.constant"

export const COLAR_AMETISTA = {
    id: 53,
    nome: "Colar de Ametista",
    descricao: "Um colar de cordão metálico com uma pedra de ametista, uma jóia que auxilia o foco de conjuração.",
    sprite: COLAR_AMETISTA_SPRITE,
    raridade: 3,
    santuario: BASE_SANTUARIO,
    itemTipo: ITEM_TIPO.EQUIPAMENTO,
    proficiencia: ITEM_PROFICIENCIA.LEVE,
    equipamentoTipo: EQUIPAMENTO_TIPO.ACESSORIO,
    acoes: {
        ataques: [],
        habilidades: [],
        talentos: [],
    },
    bonus: [
        createBonusItem("Conjuração", BONUS_DADO.CONJURACAO, 1),
    ]
}