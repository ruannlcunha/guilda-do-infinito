
export function getAliados(personagemAtivo, personagens) {
    if(personagemAtivo.isInimigo) {
        return [...personagens].filter(personagem=> personagem.isInimigo && personagem.idCombate !== personagemAtivo.idCombate)
    }
    return [...personagens].filter(personagem=> !personagem.isInimigo && personagem.idCombate !== personagemAtivo.idCombate)
}

export function getInimigos(personagemAtivo, personagens) {
    if(personagemAtivo.isInimigo) {
        return [...personagens].filter(personagem=> !personagem.isInimigo)
    }
    return [...personagens].filter(personagem=> personagem.isInimigo)
}