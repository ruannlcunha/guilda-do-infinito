import { ALVOS, HABILIDADE_TIPO } from "../../../../constants/acoes/acoes.constant"
import { getRandomInt } from "../../../../utils"
import { escolherAlvos, validarCustoMana } from "../../../../utils/comportamentos-base.util"


export function atacanteEspertoComportamento(personagemAtivo, personagens) {
    const habilidadesBuffs = [...personagemAtivo.habilidades].filter(habilidade => habilidade.tipo === HABILIDADE_TIPO.BUFF)
    const acoesCurativas = [...personagemAtivo.habilidades].filter(habilidade => habilidade.tipo === HABILIDADE_TIPO.CURA)
    let acoes = [...personagemAtivo.ataques, ...habilidadesBuffs]
    let alvoEscolhido = null
    let indexAcao = null
    let acaoEscolhida = { custo: null }

    if (personagemAtivo.pv.atual <= (personagemAtivo.pv.maximo / 4) && acoesCurativas.length > 0 && validarCustoMana(acoesCurativas, personagemAtivo)) {
        acoes = acoesCurativas
    }

    validarCustoMana(acoes, personagemAtivo, true)

    while (acaoEscolhida.custo > personagemAtivo.pm.atual || acaoEscolhida.custo === null || !alvoEscolhido) {
        indexAcao = getRandomInt(1, acoes.length)
        acaoEscolhida = acoes.find((acao, i) => (i + 1) === indexAcao)
        if (acaoEscolhida.variantes.length > 0) {
            acaoEscolhida.variantes.map(varianteCategoria => {
                const indexVariante = getRandomInt(1, varianteCategoria.lista.length)
                const varianteEscolhida = varianteCategoria.lista.find((_variante, i) => (i + 1) === indexVariante)
                acaoEscolhida = { ...acaoEscolhida, ...varianteEscolhida.novaAcao }
            })
        }
        if (acoes == acoesCurativas) {
            alvoEscolhido = personagemAtivo
        }
        else {
            const alvosPossiveis = escolherAlvos(personagens, personagemAtivo, acaoEscolhida)
            if (acaoEscolhida.alvos === ALVOS.INIMIGOS_AREA || acaoEscolhida.alvos === ALVOS.ALIADOS_AREA) {
                alvoEscolhido = alvosPossiveis
            }
            else {
                if (!acaoEscolhida.tipo.includes("ATAQUE")) {
                    alvoEscolhido = personagemAtivo
                }
                else {
                    const menorVida = Math.min(...alvosPossiveis.map(alvo => alvo.pv.atual))
                    alvoEscolhido = alvosPossiveis.find(alvo => alvo.pv.atual === menorVida)
                }
            }
        }
    }

    return {acaoEscolhida, alvoEscolhido}
}