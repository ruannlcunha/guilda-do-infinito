import ESPADA_ADAMANTE_SPRITE from "./ESPADA_ADAMANTE_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"
import { ITEM_PROFICIENCIA } from "../../../../constants"
import { BONUS_DADO } from "../../../../constants/personagens/personagem.constant"
import { ATAQUES } from "../../../ataques"

export const ESPADA_ADAMANTE = {
    id: 5,
    nome: "Espada de Adamante",
    descricao: `Uma espada de lâmina feita com o resistente material Adamante, encontrado nas profundezas das minas. O peso do material fornece um bom equilíbrio entre ataque e dano.`,
    sprite: ESPADA_ADAMANTE_SPRITE,
    raridade: 4,
    santuario: BASE_SANTUARIO,
    itemTipo: ITEM_TIPO.EQUIPAMENTO,
    proficiencia: ITEM_PROFICIENCIA.PESADA,
    equipamentoTipo: EQUIPAMENTO_TIPO.ARMA,
    acoes: {
        ataques: [{ataqueId: ATAQUES.GOLPE_PRECISO.id, variantes: []}],
        habilidades: [],
        talentos: [],
    },
    bonus: [
        createBonusItem("Ataque", BONUS_DADO.ATAQUE, 1),
        createBonusItem("Dano", BONUS_DADO.DANO, 1),
    ]
}