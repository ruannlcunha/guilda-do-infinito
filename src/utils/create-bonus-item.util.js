import { ICONS } from "../constants/images"
import { BONUS_DADO } from "../constants/personagens/personagem.constant"

export function createBonusItem(nome, atributo, valor) {
    let icon = ICONS.BONUS_DADO
    if(!Object.values(BONUS_DADO).some(bonus=> bonus === atributo)) {
        icon = ICONS[atributo.toUpperCase()]
    }

    return {
            nome: nome,
            icon: icon,
            atributo: atributo,
            valor: valor,
        }
}