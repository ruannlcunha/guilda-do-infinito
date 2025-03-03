import PATA_COELHO_SPRITE from "./PATA_COELHO_SPRITE.png"
import BASE_SANTUARIO from "../assets/BASE_SANTUARIO.png"
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const PATA_COELHO = {
    id: 37,
    nome: "Pata de Coelho",
    descricao: "Um acessório que traz sorte e agilidade ao usuário.",
    sprite: PATA_COELHO_SPRITE,
    raridade: 4,
    santuario: BASE_SANTUARIO,
    categoria: ITENS_CATEGORIA.EQUIPAMENTO,
    tipo: "Acessório",
    equipamentoTipo: "ACESSORIO",
    bonus: [
        {
            nome: "Agilidade",
            icon: ICONS.AGILIDADE,
            atributo: "agilidade",
            valor: 1,
        },
    ]
}