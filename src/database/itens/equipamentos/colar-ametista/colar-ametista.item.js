import COLAR_AMETISTA_SPRITE from "./COLAR_AMETISTA_SPRITE.png"
import BASE_SANTUARIO from "../assets/BASE_SANTUARIO.png"
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const COLAR_AMETISTA = {
    id: 53,
    nome: "Colar de Ametista",
    descricao: "Um acessório",
    sprite: COLAR_AMETISTA_SPRITE,
    raridade: 4,
    santuario: BASE_SANTUARIO,
    categoria: ITENS_CATEGORIA.EQUIPAMENTO,
    tipo: "Acessório",
    equipamentoTipo: "ACESSORIO",
    bonus: [
        {
            nome: "Magia",
            icon: ICONS.MAGIA,
            atributo: "magia",
            valor: 1,
        },
    ]
}