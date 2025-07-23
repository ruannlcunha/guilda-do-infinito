import ANEL_DRAGAO_SPRITE from "./ANEL_DRAGAO_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"
import { ITEM_PROFICIENCIA } from "../../../../constants"
import { RESISTENCIA_DANO } from "../../../../constants/personagens/personagem.constant"

export const ANEL_DRAGAO = {
    id: 32,
    nome: "Anel de Dragão",
    descricao: "Um anel feito com escamas de um poderoso dragão. Fornece ao usuário uma parcela da força e resistência de um dragão.",
    sprite: ANEL_DRAGAO_SPRITE,
    raridade: 4,
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
        createBonusItem("Força", "forca", 1),
        createBonusItem("Resistência a Dano (Físico)", RESISTENCIA_DANO.FISICO, 5),
    ]
}