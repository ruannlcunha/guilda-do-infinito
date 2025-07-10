import { ALVOS } from "../constants/acoes/acoes.constant"

export function escolherAlvos(personagens, personagemAtivo, acaoEscolhida) {
    
    if (acaoEscolhida.alvos === ALVOS.INIMIGOS || acaoEscolhida.alvos === ALVOS.INIMIGOS_AREA) {
        const alvosPossiveis = personagens.filter(personagem =>
            (!personagem.isInimigo && personagemAtivo.isInimigo && !personagem.isMorto)
            ||
            (personagem.isInimigo && !personagemAtivo.isInimigo && !personagem.isMorto)
        )
        return alvosPossiveis
    }
    if (acaoEscolhida.alvos === ALVOS.ALIADOS || acaoEscolhida.alvos === ALVOS.ALIADOS_AREA) {
        const alvosPossiveis = personagens.filter(personagem =>
            (personagem.isInimigo && personagemAtivo.isInimigo && !personagem.isMorto)
            ||
            (!personagem.isInimigo && !personagemAtivo.isInimigo && !personagem.isMorto)
        )
        return alvosPossiveis
    }
    if (acaoEscolhida.alvos === ALVOS.ALIADOS_MORTOS) {
        const alvosPossiveis = personagens.filter(personagem =>
            (personagem.isInimigo && personagemAtivo.isInimigo && personagem.isMorto)
            ||
            (!personagem.isInimigo && !personagemAtivo.isInimigo && personagem.isMorto)
        )
        return alvosPossiveis
    }
    if (acaoEscolhida.alvos === ALVOS.PESSOAL) {
        return personagemAtivo
    }
}

export function validarCustoMana(acoes, personagemAtivo, isError) {
    if (!acoes.some(acao => acao.custo <= personagemAtivo.pm.atual)) {
        if (isError) throw { message: "Personagem automático não possui mana suficiente para realizar nenhum de seus ataques." }
        return false
    }
    return true
}