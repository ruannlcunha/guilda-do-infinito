import BOTAS_MENSAGEIRO_SPRITE from "./BOTAS_MENSAGEIRO_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"
import { ITEM_PROFICIENCIA } from "../../../../constants"
import { HABILIDADES } from "../../../habilidades"

export const BOTAS_MENSAGEIRO = {
    id: 56,
    nome: "Botas do Mensageiro",
    descricao: `Botas utilizadas pelo anjo mensageiro dos deuses. Aqueles que a vestem sentem como se pisassem em nuvens e seu corpo se torna leve como se voasse. 
    Correr com essas botas te torna veloz como um raio, e seus movimentos suaves como uma brisa.`,
    sprite: BOTAS_MENSAGEIRO_SPRITE,
    raridade: 5,
    santuario: BASE_SANTUARIO,
    itemTipo: ITEM_TIPO.EQUIPAMENTO,
    proficiencia: ITEM_PROFICIENCIA.LEVE,
    equipamentoTipo: EQUIPAMENTO_TIPO.ACESSORIO,
    acoes: {
        ataques: [],
        habilidades: [{habilidadeId: HABILIDADES.ACELERAR.id, variantes: []}],
        talentos: [],
    },
    bonus: [
        createBonusItem("Agilidade", "agilidade", 2),
    ]
}