import ESCUDO_SOLAR_SPRITE from "./ESCUDO_SOLAR_SPRITE.png"
import BASE_SANTUARIO from "../assets/BASE_SANTUARIO.png"
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const ESCUDO_SOLAR = {
    id: 36,
    nome: "Escudo Solar",
    descricao: `Um lendário escudo usado pelo herói escolhido do Deus do Sol.`,
    sprite: ESCUDO_SOLAR_SPRITE,
    raridade: 5,
    santuario: BASE_SANTUARIO,
    categoria: ITENS_CATEGORIA.EQUIPAMENTO,
    tipo: "Escudo",
    equipamentoTipo: "ACESSORIO",
    bonus: [
        {
            nome: "Defesa",
            icon: ICONS.DEFESA,
            atributo: "defesa",
            valor: 3,
        },
        {
            nome: "Vigor",
            icon: ICONS.VIGOR,
            atributo: "vigor",
            valor: 1,
        },
    ]
}