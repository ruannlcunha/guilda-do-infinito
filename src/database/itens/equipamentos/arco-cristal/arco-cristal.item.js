import ARCO_CRISTAL_SPRITE from "./ARCO_CRISTAL_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"
import { ITEM_PROFICIENCIA } from "../../../../constants"
import { ATAQUES } from "../../../ataques"
import { BONUS_DADO } from "../../../../constants/personagens/personagem.constant"

export const ARCO_CRISTAL = {
    id: 17,
    nome: "Arco de Cristal",
    descricao: "Um arco cuidadosamente equilibrado com poderosas flechas de um material de aço cristalino. É uma ótima escolha para habilidosos arqueiros, porém tem um alto custo em flechas.",
    sprite: ARCO_CRISTAL_SPRITE,
    raridade: 4,
    santuario: BASE_SANTUARIO,
    itemTipo: ITEM_TIPO.EQUIPAMENTO,
    proficiencia: ITEM_PROFICIENCIA.LEVE,
    equipamentoTipo: EQUIPAMENTO_TIPO.ARMA,
    acoes: {
        ataques: [{ataqueId: ATAQUES.TIRO_PRECISO.id, variantes: []}],
        habilidades: [],
        talentos: [],
    },
    bonus: [
            createBonusItem("Ataque", BONUS_DADO.ATAQUE, 2),
    ]
}