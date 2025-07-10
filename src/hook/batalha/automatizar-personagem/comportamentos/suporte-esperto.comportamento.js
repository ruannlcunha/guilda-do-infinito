import { getAliados, getInimigos, getRandomInt } from "../../../../utils"
import { escolherAlvos, validarCustoMana } from "../../../../utils/comportamentos-base.util"
import { ALVOS, HABILIDADE_TIPO } from "../../../../constants/acoes/acoes.constant"

export function suporteEspertoComportamento(personagemAtivo, personagens) {
    const habilidadesBuffs = [...personagemAtivo.habilidades].filter(habilidade => habilidade.tipo === HABILIDADE_TIPO.BUFF)
    const habilidadesDebuffs = [...personagemAtivo.habilidades].filter(habilidade => habilidade.tipo === HABILIDADE_TIPO.DEBUFF)
    const acoesCurativas = [...personagemAtivo.habilidades].filter(habilidade => habilidade.tipo === HABILIDADE_TIPO.CURA)
    const acoesOfensivas = [...personagemAtivo.ataques]
    const aliados = getAliados(personagemAtivo, personagens)
    const inimigos = getInimigos(personagemAtivo, personagens)
    let acoes = null
    let alvoEscolhido = null
    let indexAcao = null
    let acaoEscolhida = { custo: null }

    if(inimigos.filter(inimigo=> inimigo.pv.atual <= (personagemAtivo.pv.maximo / 6)).length>0) {
        acoes = [...acoesOfensivas]
        const alvosFeridos = inimigos.filter(inimigo=> inimigo.pv.atual <= (personagemAtivo.pv.maximo / 6) && !inimigo.isMorto)
        const alvoMenosVida = alvosFeridos.reduce((alvoAtual, obj) => {
            return obj.pv.atual < alvoAtual.pv.atual ? obj : alvoAtual;
        });
        alvoEscolhido = alvoMenosVida 
    }
    //Se o personagem estiver com pouca vida, escolhe ações curativas e o alvo a si mesmo.
    else if(personagemAtivo.pv.atual <= (personagemAtivo.pv.maximo / 4) && acoesCurativas.length > 0 && validarCustoMana(acoesCurativas, personagemAtivo)) {
        acoes = acoesCurativas
        alvoEscolhido = personagemAtivo
    }
    else if(aliados.length===0 || aliados.filter(aliado=> !aliado.isMorto).length === 0) {
        acoes = [...acoesOfensivas, ...habilidadesBuffs, ...habilidadesDebuffs]
    }
    else if(validarCustoMana([...habilidadesBuffs, ...habilidadesDebuffs, ...acoesCurativas], personagemAtivo)){
        acoes = [...habilidadesBuffs, ...habilidadesDebuffs, ...acoesCurativas]
    }
    else {
        acoes = [...acoesOfensivas]
    }

    validarCustoMana(acoes, personagemAtivo, true)

    while (acaoEscolhida.custo > personagemAtivo.pm.atual || acaoEscolhida.custo === null || !alvoEscolhido || !acoes) {
        indexAcao = getRandomInt(1, acoes.length)
        acaoEscolhida = acoes.find((acao, i) => (i + 1) === indexAcao)
        if (acaoEscolhida.variantes.length > 0) {
            acaoEscolhida.variantes.map(varianteCategoria => {
                const indexVariante = getRandomInt(1, varianteCategoria.lista.length)
                const varianteEscolhida = varianteCategoria.lista.find((_variante, i) => (i + 1) === indexVariante)
                acaoEscolhida = { ...acaoEscolhida, ...varianteEscolhida.novaAcao }
            })
        }

        if(!alvoEscolhido) {
            const alvosPossiveis = escolherAlvos(personagens, personagemAtivo, acaoEscolhida)
            if (acaoEscolhida.alvos === ALVOS.INIMIGOS_AREA || acaoEscolhida.alvos === ALVOS.ALIADOS_AREA) {
                alvoEscolhido = alvosPossiveis
            }
            else {
                if (acaoEscolhida.tipo.includes("ATAQUE")) {
                    const menorVida = Math.min(...alvosPossiveis.map(alvo => alvo.pv.atual))
                    alvoEscolhido = alvosPossiveis.find(alvo => alvo.pv.atual === menorVida)
                }
                else {
                    const indexAlvo = getRandomInt(0, (alvosPossiveis.length-1))
                    alvoEscolhido = alvosPossiveis[indexAlvo]
                    if(acaoEscolhida.tipo === HABILIDADE_TIPO.CURA && alvoEscolhido.pv.atual == alvoEscolhido.pv.maximo) {
                        alvoEscolhido = null
                    }
                }
            }
        }
    }

    return {acaoEscolhida, alvoEscolhido}
}