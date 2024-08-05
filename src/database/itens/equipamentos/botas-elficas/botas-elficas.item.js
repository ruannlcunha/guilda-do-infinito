import BOTAS_ELFICAS_SPRITE from "./BOTAS_ELFICAS_SPRITE.png"
import BASE_SANTUARIO from "../assets/BASE_SANTUARIO.png"
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const BOTAS_ELFICAS = {
    id: 56,
    nome: "Botas Élficas",
    descricao: "Um acessório",
    sprite: BOTAS_ELFICAS_SPRITE,
    raridade: 5,
    santuario: BASE_SANTUARIO,
    categoria: ITENS_CATEGORIA.EQUIPAMENTO,
    tipo: "Acessório",
    equipamentoTipo: "ACESSORIO",
    bonus: [
        {
            nome: "Defesa",
            icon: ICONS.DEFESA,
            atributo: "defesa",
            valor: 2,
        },
        {
            nome: "Agilidade",
            icon: ICONS.AGILIDADE,
            atributo: "agilidade",
            valor: 1,
        },
    ]
}