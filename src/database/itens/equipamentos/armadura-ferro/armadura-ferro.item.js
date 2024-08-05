import ARMADURA_FERRO_SPRITE from "./ARMADURA_FERRO_SPRITE.png"
import BASE_SANTUARIO from "../assets/BASE_SANTUARIO.png"
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const ARMADURA_FERRO = {
    id: 7,
    nome: "Armadura de Ferro",
    descricao: "Uma simples armadura de ferro.",
    sprite: ARMADURA_FERRO_SPRITE,
    raridade: 3,
    tipo: "Armadura Pesada",
    santuario: BASE_SANTUARIO,
    categoria: ITENS_CATEGORIA.EQUIPAMENTO,
    equipamentoTipo: "ARMADURA",
    bonus: [
        {
            nome: "Defesa",
            icon: ICONS.DEFESA,
            atributo: "defesa",
            valor: 3,
        },
    ]
}