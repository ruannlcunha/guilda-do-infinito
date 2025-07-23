import { BONUS_DADO } from "../constants/personagens/personagem.constant";

export function getModificadoresAtaque(modificadores, personagem) {
    const totalBonusDado = personagem.bonusDado
    .filter(bonus=>bonus.tipo===BONUS_DADO.ATAQUE)
    .reduce((acc, obj) => acc + obj.modificador, 0);

    if(totalBonusDado>0) {
        return [...modificadores, {valor: totalBonusDado, atributo: "Modificador"}]
    }
    return [...modificadores]
}

export function getModificadoresConjuracao(modificadores, personagem) {
    const totalBonusDado = personagem.bonusDado
    .filter(bonus=>bonus.tipo===BONUS_DADO.CONJURACAO)
    .reduce((acc, obj) => acc + obj.modificador, 0);

    if(totalBonusDado>0) {
        return [...modificadores, {valor: totalBonusDado, atributo: "Modificador"}]
    }
    return [...modificadores]
}

export function getModificadoresDano(modificadores, personagem) {
    const totalBonusDado = personagem.bonusDado
    .filter(bonus=>bonus.tipo===BONUS_DADO.DANO)
    .reduce((acc, obj) => acc + obj.modificador, 0);

    if(totalBonusDado>0) {
        return [...modificadores, {valor: totalBonusDado, atributo: "Modificador"}]
    }
    return [...modificadores]
}

export function getModificadoresCura(modificadores, personagem) {
    const bonusDado = personagem.bonusDado
    .filter(bonus=>bonus.tipo===BONUS_DADO.CURA)
    .map(bonus=> {
        const atributo = bonus.atributo ? bonus.atributo : "Modificador"
        return {valor: bonus.modificador, atributo}
    });

    if(bonusDado.length>0) {
        return [...modificadores, ...bonusDado]
    }
    return [...modificadores]
}

export function getModificadoresResistencia(atributo, modificadores, personagem) {
    let bonusTipo = null
    atributo==="Força" ? bonusTipo = BONUS_DADO.RESISTENCIA_FORCA :
    atributo==="Agilidade" ? bonusTipo = BONUS_DADO.RESISTENCIA_AGILIDADE :
    atributo==="Magia" ? bonusTipo = BONUS_DADO.RESISTENCIA_MAGIA :
    atributo==="Vigor" ? bonusTipo = BONUS_DADO.RESISTENCIA_VIGOR : null

    if(bonusTipo) {
        const totalBonusDado = personagem.bonusDado
        .filter(bonus=>bonus.tipo===bonusTipo)
        .reduce((acc, obj) => acc + obj.modificador, 0);
        
        if(totalBonusDado>0) {
            return [...modificadores, {valor: totalBonusDado, atributo: "Modificador"}]
        }
    }
        return [...modificadores]
}