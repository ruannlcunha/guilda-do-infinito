
export function getTransformacao(forma, personagem, array) {
    const personagemTransformacao = array.find(data=> data.personagemId === personagem.id)
    if(personagemTransformacao) {
        const transformacao = personagemTransformacao[_paraMaiusculoSemAcento(forma)]
        return {sprite: transformacao.sprite, perfil: transformacao.perfil}
    }
    const transformacaoPadrao = array.find(data=> data.personagemId === null)
    const transformacao = transformacaoPadrao[_paraMaiusculoSemAcento(forma)]
    return {sprite: transformacao.sprite, perfil: transformacao.perfil}
    
}

function _paraMaiusculoSemAcento(texto) {
  return texto
    .normalize('NFD')                 
    .replace(/[\u0300-\u036f]/g, '')  
    .toUpperCase();                   
}