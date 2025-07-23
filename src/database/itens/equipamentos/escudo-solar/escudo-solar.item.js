import ESCUDO_SOLAR_SPRITE from "./ESCUDO_SOLAR_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"
import { ITEM_PROFICIENCIA } from "../../../../constants"
import { HABILIDADES } from "../../../habilidades"
import { RESISTENCIA_DANO } from "../../../../constants/personagens/personagem.constant"

export const ESCUDO_SOLAR = {
    id: 21,
    nome: "Escudo Solar",
    descricao: `Um lendário escudo dourado em formato de sol que emite uma aura calorosa de conforto a aqueles em sua volta.
    As lendas dizem que esse escudo foi utilizado por um herói abençoado pelo Deus do Sol para proteger os humanos da escuridão, mesmo nas noites mais escuras.`,
    sprite: ESCUDO_SOLAR_SPRITE,
    raridade: 5,
    santuario: BASE_SANTUARIO,
    itemTipo: ITEM_TIPO.EQUIPAMENTO,
    proficiencia: ITEM_PROFICIENCIA.PESADA,
    equipamentoTipo: EQUIPAMENTO_TIPO.ACESSORIO,
    acoes: {
        ataques: [],
        habilidades: [{habilidadeId: HABILIDADES.DEFENDER.id, variantes: []}],
        talentos: [],
    },
    bonus: [
        createBonusItem("Defesa", "defesa", 2),
        createBonusItem("Resistência a Dano (Luz)", RESISTENCIA_DANO.LUZ, 5),
        createBonusItem("Resistência a Dano (Fogo)", RESISTENCIA_DANO.FOGO, 5),
    ]
}