import ANJO_CAIDO_SPRITE from "./ANJO_CAIDO_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"
import { ITEM_PROFICIENCIA } from "../../../../constants"
import { ATAQUES } from "../../../ataques"
import { BONUS_DADO } from "../../../../constants/personagens/personagem.constant"

export const ANJO_CAIDO = {
    id: 57,
    nome: "Anjo Caído",
    descricao: `Um arco lendário que representa o bem e o mal.
    É feito com as penas de um anjo corrompido pelas Trevas, e suas flechas são moldadas captando as intenções boas ou más do usuário.
    Lendas dizem que ela foi utilizada tanto para salvar o mundo quanto para destruí-lo, e a sua própria existência simboliza a dualidade do ser vivo.`,
    sprite: ANJO_CAIDO_SPRITE,
    raridade: 5,
    santuario: BASE_SANTUARIO,
    itemTipo: ITEM_TIPO.EQUIPAMENTO,
    proficiencia: ITEM_PROFICIENCIA.LEVE,
    equipamentoTipo: EQUIPAMENTO_TIPO.ARMA,
    acoes: {
        ataques: [
            {ataqueId: ATAQUES.TIRO_PRECISO.id, variantes: []},
            {ataqueId: ATAQUES.TIRO_PRECISO_LUZ.id, variantes: []},
            {ataqueId: ATAQUES.TIRO_PRECISO_TREVAS.id, variantes: []},
        ],
        habilidades: [],
        talentos: [],
    },
    bonus: [
            createBonusItem("Ataque", BONUS_DADO.ATAQUE, 2),
            createBonusItem("Dano", BONUS_DADO.DANO, 1),
    ]
}