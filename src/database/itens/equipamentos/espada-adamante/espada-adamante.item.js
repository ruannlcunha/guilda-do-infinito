import ESPADA_ADAMANTE_SPRITE from "./ESPADA_ADAMANTE_SPRITE.png"
import BASE_SANTUARIO from "../_assets/BASE_SANTUARIO.png"
import { ARMAS_TIPO } from "../../../../constants"
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant"
import { ICONS } from "../../../../constants/images"

export const ESPADA_ADAMANTE = {
    id: 5,
    nome: "Espada de Adamante",
    descricao: `Uma espada forjada com o resistente material Adamante.`,
    sprite: ESPADA_ADAMANTE_SPRITE,
    raridade: 4,
    tipo: ARMAS_TIPO.PESADA,
    santuario: BASE_SANTUARIO,
    categoria: ITENS_CATEGORIA.EQUIPAMENTO,
    equipamentoTipo: "ARMA",
    bonus: [
        {
            nome: "Força",
            icon: ICONS.FORCA,
            atributo: "forca",
            valor: 2,
        },
    ]
}