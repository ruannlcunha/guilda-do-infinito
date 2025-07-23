import { ICONS } from "../constants/images"
import { BONUS_DADO, RESISTENCIA_DANO } from "../constants/personagens/personagem.constant"

export function createBonusItem(nome, atributo, valor) {
    let icon = ICONS[atributo.toUpperCase()]
    if(Object.values(BONUS_DADO).some(bonus=> bonus === atributo)) {
        icon = ICONS.BONUS_DADO
    }
    if(Object.values(RESISTENCIA_DANO).some(bonus=> bonus === atributo)) {
        const elementoResistencia = atributo.split("RESISTENCIA_")
        icon = ICONS[`ELEMENTO_${elementoResistencia[1]}`]
    }

    return {
            nome: nome,
            icon: icon,
            atributo: atributo,
            valor: valor,
        }
}