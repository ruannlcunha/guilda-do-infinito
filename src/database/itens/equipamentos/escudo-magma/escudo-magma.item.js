import ESCUDO_MAGMA_SPRITE from "./ESCUDO_MAGMA_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { EQUIPAMENTO_TIPO, ITEM_TIPO } from "../../../../constants/itens/itens.constant"
import { createBonusItem } from "../../../../utils/create-bonus-item.util"
import { ITEM_PROFICIENCIA } from "../../../../constants"
import { HABILIDADES } from "../../../habilidades"
import { RESISTENCIA_DANO } from "../../../../constants/personagens/personagem.constant"

export const ESCUDO_MAGMA = {
    id: 20,
    nome: "Escudo de Magma",
    descricao: `Um escudo retangular forjado no magma de um vulcão.
    Sua empunhadura é resistente ao calor e não queima o usuário, ao contrário do seu material de composição que é quente e absorve calor.`,
    sprite: ESCUDO_MAGMA_SPRITE,
    raridade: 4,
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
        createBonusItem("Defesa", "defesa", 1),
        createBonusItem("Resistência a Dano (Fogo)", RESISTENCIA_DANO.FOGO, 5),
    ]
}