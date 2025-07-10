import MANTO_VELHO_SPRITE from "./MANTO_VELHO_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ARMADURA_TIPO, ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const MANTO_VELHO = {
    id: 50,
    nome: "Manto Velho",
    descricao: "Um manto velho e desgastado.",
    sprite: MANTO_VELHO_SPRITE,
    raridade: 3,
    tipo: ARMADURA_TIPO.LEVE,
    santuario: BASE_SANTUARIO,
    categoria: ITENS_CATEGORIA.EQUIPAMENTO,
    equipamentoTipo: "ARMADURA",
    bonus: [
        {
            nome: "Defesa",
            icon: ICONS.DEFESA,
            atributo: "defesa",
            valor: 1,
        },
    ]
}