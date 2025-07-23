import CAJADO_SOMBRIO_SPRITE from "./CAJADO_SOMBRIO_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"
import { ITEM_PROFICIENCIA } from "../../../../constants"
import { BONUS_DADO } from "../../../../constants/personagens/personagem.constant"
import { ATAQUES } from "../../../ataques"
import { HABILIDADES } from "../../../habilidades"

export const CAJADO_SOMBRIO = {
    id: 48,
    nome: "Cajado Sombrio",
    descricao: `Um cajado amaldiçoado já utilizado por um Lorde Demônio.
    Feito de um aço negro com um núcleo arcano carregado com energia negativa obtida pelo sofrimento de milhares de seres vivos.
    Sua aura negativa é tão grande que causa calafrios a aqueles que a veem.`,
    sprite: CAJADO_SOMBRIO_SPRITE,
    raridade: 5,
    santuario: BASE_SANTUARIO,
    itemTipo: ITEM_TIPO.EQUIPAMENTO,
    proficiencia: ITEM_PROFICIENCIA.LEVE,
    equipamentoTipo: EQUIPAMENTO_TIPO.ARMA,
    acoes: {
        ataques: [
            {ataqueId: ATAQUES.GOLPE_RAPIDO.id, variantes: []},
            {ataqueId: ATAQUES.GOLPE_RAPIDO_TREVAS.id, variantes: []},
            {ataqueId: ATAQUES.TOQUE_SOMBRIO.id, variantes: []},
        ],
        habilidades: [{habilidadeId: HABILIDADES.LANCAR_MALDICAO.id, variantes: []}],
        talentos: [],
    },
    bonus: [
            createBonusItem("Conjuração", BONUS_DADO.CONJURACAO, 2),
            createBonusItem("Dano", BONUS_DADO.DANO, 1),
    ]
}