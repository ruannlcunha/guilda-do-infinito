import { CONDICOES } from "../../../../constants/personagens/personagem.constant"
import { getRandomInt } from "../../../../utils";
import { aumentarTurno, diminuirTurno } from "../../../../utils/alterar-turnos.util";
import { useRolarDado } from "../../rolar-dado/use-rolar-dado.hook"

export function useRealizarCondicao() {
    const {rolarDado} = useRolarDado()

    function realizarEnvenenado(personagem, functions) {
        if(personagem.condicoes.some(condicao=>condicao.nome===CONDICOES.ENVENENADO.nome)) {
            const {dados} = rolarDado(1, 4, []);
            
            functions.adicionarLog(`${personagem.nome} sofreu ${dados[0].resultado} de dano por estar ${CONDICOES.ENVENENADO.nome}.`)

            const novoPv = (personagem.pv.atual)-dados[0].resultado
            const condicaoEnvenenado = personagem.condicoes.find(condicao=>condicao.nome === CONDICOES.ENVENENADO.nome)
            const novasCondicoes = [...personagem.condicoes.filter(condicao=>condicao.nome !== CONDICOES.ENVENENADO.nome)]
            if((condicaoEnvenenado.duracao-1)>0) {
                novasCondicoes.push({...condicaoEnvenenado, duracao: (condicaoEnvenenado.duracao)-1})
            }
            else {
                functions.adicionarLog(`${personagem.nome} não está mais ${CONDICOES.ENVENENADO.nome}.`)
            }

            const novoPersonagem = {
                ...personagem,
                pv: {...personagem.pv, atual: novoPv},
                condicoes: novasCondicoes,
            }
            return novoPersonagem
        }
        return personagem
    }

    function realizarQueimando(personagem, functions) {
        if(personagem.condicoes.some(condicao=>condicao.nome===CONDICOES.QUEIMANDO.nome)) {
            const {dados} = rolarDado(1, 6, []);
            functions.adicionarLog(`${personagem.nome} sofreu ${dados[0].resultado} de dano por estar ${CONDICOES.QUEIMANDO.nome}.`)
            const novoPv = (personagem.pv.atual)-dados[0].resultado
            const novoPersonagem = {
                ...personagem,
                pv: {...personagem.pv, atual: novoPv},
            }
            return novoPersonagem
        }
        return personagem
    }

    function realizarParalisado(personagem, functions) {
        if(personagem.condicoes.some(condicao=>condicao.nome===CONDICOES.PARALISADO.nome)) {
            const condicaoParalisado = personagem.condicoes.find(condicao=>condicao.nome === CONDICOES.PARALISADO.nome)
            const novasCondicoes = [...personagem.condicoes.filter(condicao=>condicao.nome !== CONDICOES.PARALISADO.nome)]

            if((condicaoParalisado.duracao)>0) {
                functions.adicionarLog(`${personagem.nome} está paralisado e não pode agir, no seu próximo turno a paralisia acaba.`)
                novasCondicoes.push({...condicaoParalisado, duracao: (condicaoParalisado.duracao)-1})
                const novoPersonagem = {
                    ...personagem,
                    condicoes: novasCondicoes,
                }
                return novoPersonagem
            }
            else {
                functions.adicionarLog(`${personagem.nome} não está mais paralisado.`)
                const novaDefesa = (personagem.defesa)+5
                const novoPersonagem = {
                    ...personagem,
                    defesa: novaDefesa,
                    condicoes: novasCondicoes,
                }
                return novoPersonagem
            }
        }
        return personagem
    }

    function realizarDormindo(personagem, functions) {
        if(personagem.condicoes.some(condicao=>condicao.nome===CONDICOES.DORMINDO.nome)) {

            const condicaoDormindo = personagem.condicoes.find(condicao=>condicao.nome === CONDICOES.DORMINDO.nome)
            const novasCondicoes = [...personagem.condicoes.filter(condicao=>condicao.nome !== CONDICOES.DORMINDO.nome)]
            if((condicaoDormindo.duracao)>0) {
                functions.adicionarLog(`${personagem.nome} está Dormindo e não pode agir.`)
                novasCondicoes.push({...condicaoDormindo, duracao: (condicaoDormindo.duracao)-1})
                const novoPersonagem = {
                    ...personagem,
                    condicoes: novasCondicoes,
                }
                return novoPersonagem
            }
            else {
                functions.adicionarLog(`${personagem.nome} acordou e não está mais Dormindo.`)
                const novaDefesa = (personagem.defesa)+5
                const novoPersonagem = {
                    ...personagem,
                    defesa: novaDefesa,
                    condicoes: novasCondicoes,
                }
                return novoPersonagem
            }
        }
        return personagem
    }

    function realizarAtordoado(personagem, functions) {
        if(personagem.condicoes.some(condicao=>condicao.nome===CONDICOES.ATORDOADO.nome)) {
            const condicaoAtordoado = personagem.condicoes.find(condicao=>condicao.nome === CONDICOES.ATORDOADO.nome)
            const novasCondicoes = [...personagem.condicoes.filter(condicao=>condicao.nome !== CONDICOES.ATORDOADO.nome)]

            if((condicaoAtordoado.duracao)>0) {
                const probabilidade = getRandomInt(1,4)
                const acaoBloqueada = probabilidade===1
                acaoBloqueada ? functions.adicionarLog(`${personagem.nome} está Atordoado e não pode agir.`)
                : functions.adicionarLog(`${personagem.nome} está Atordoado, mas pode agir.`)

                novasCondicoes.push({...condicaoAtordoado, duracao: (condicaoAtordoado.duracao)-1, acaoBloqueada})
                const novoPersonagem = {
                    ...personagem,
                    condicoes: novasCondicoes,
                }
                return novoPersonagem
            }
            else {
                functions.adicionarLog(`${personagem.nome} não está mais Atordoado.`)
                const novaDefesa = (personagem.defesa)+2
                const novoPersonagem = {
                    ...personagem,
                    defesa: novaDefesa,
                    condicoes: novasCondicoes,
                }
                return novoPersonagem
            }
        }
        return personagem
    }

    function realizarLento(personagem, functions) {
        if(personagem.condicoes.some(condicao=>condicao.nome===CONDICOES.LENTO.nome)) {
            const condicaoLento = personagem.condicoes.find(condicao=>condicao.nome === CONDICOES.LENTO.nome)
            const novasCondicoes = [...personagem.condicoes.filter(condicao=>condicao.nome !== CONDICOES.LENTO.nome)]
            if((condicaoLento.duracao)>0) {
                novasCondicoes.push({...condicaoLento, duracao: (condicaoLento.duracao)-1})
                const novoPersonagem = {
                    ...personagem,
                    condicoes: novasCondicoes,
                }
                return novoPersonagem
            }
            else {
                aumentarTurno(personagem, functions)
                const novosAtributos = {...personagem.atributos, agilidade: (personagem.atributos.agilidade)+1}
                functions.adicionarLog(`${personagem.nome} não está mais ${CONDICOES.LENTO.nome}.`)
                const novoPersonagem = {
                    ...personagem,
                    atributos: novosAtributos,
                    condicoes: novasCondicoes,
                }
                return novoPersonagem
            }
        }
        return personagem
    }

    function realizarVeloz(personagem, functions) {
        if(personagem.condicoes.some(condicao=>condicao.nome===CONDICOES.VELOZ.nome)) {
            const condicaoVeloz = personagem.condicoes.find(condicao=>condicao.nome === CONDICOES.VELOZ.nome)
            const novasCondicoes = [...personagem.condicoes.filter(condicao=>condicao.nome !== CONDICOES.VELOZ.nome)]
            if((condicaoVeloz.duracao)>0) {
                novasCondicoes.push({...condicaoVeloz, duracao: (condicaoVeloz.duracao)-1})
                const novoPersonagem = {
                    ...personagem,
                    condicoes: novasCondicoes,
                }
                return novoPersonagem
            }
            else {
                diminuirTurno(personagem, functions)
                const novosAtributos = {...personagem.atributos, agilidade: (personagem.atributos.agilidade)-1}
                functions.adicionarLog(`${personagem.nome} não está mais ${CONDICOES.VELOZ.nome}.`)
                const novoPersonagem = {
                    ...personagem,
                    atributos: novosAtributos,
                    condicoes: novasCondicoes,
                }
                return novoPersonagem
            }
        }
        return personagem
    }

    function realizarAtaqueEspecial(personagem, functions) {
        if(personagem.condicoes.some(condicao=>condicao.nome===CONDICOES.ATAQUE_ESPECIAL.nome)) {
            const novasCondicoes = [...personagem.condicoes.filter(condicao=>condicao.nome !== CONDICOES.ATAQUE_ESPECIAL.nome)]

            functions.adicionarLog(`${personagem.nome} não está mais sob efeito de ${CONDICOES.ATAQUE_ESPECIAL.nome}.`)
            const novoBonusDado = [...personagem.bonusDado.filter(bonus=>bonus.condicao !== CONDICOES.ATAQUE_ESPECIAL.nome)]
            const novoPersonagem = {
                ...personagem,
                bonusDado: novoBonusDado,
                condicoes: novasCondicoes,
            }
            return novoPersonagem
        }
        return personagem
    }

    return [
        realizarEnvenenado,
        realizarQueimando,
        realizarParalisado,
        realizarDormindo,
        realizarAtordoado,
        realizarLento,
        realizarVeloz,
        realizarAtaqueEspecial,
    ]

}