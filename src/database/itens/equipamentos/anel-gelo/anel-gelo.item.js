import ANEL_GELO_SPRITE from "./ANEL_GELO_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"
import { ITEM_PROFICIENCIA } from "../../../../constants"
import { RESISTENCIA_DANO } from "../../../../constants/personagens/personagem.constant"

export const ANEL_GELO = {
    id: 30,
    nome: "Anel de Gelo",
    descricao: `Um anel mágico feito de Gelo Eterno, um gelo que nunca derrete encontrado nas geleiras dos desertos de neve.
    Dizem que apenas grandes manifestações arcanas de Fogo conseguem aquecer o anel.`,
    sprite: ANEL_GELO_SPRITE,
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
        createBonusItem("Resistência a Dano (Gelo)", RESISTENCIA_DANO.GELO, 10),
    ]
}