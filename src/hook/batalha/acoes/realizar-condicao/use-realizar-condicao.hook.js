import { CONDICOES } from "../../../../constants/personagens/personagem.constant"
import { useRolarDado } from "../../rolar-dado/use-rolar-dado.hook"

export function useRealizarCondicao() {
    const {rolarDado} = useRolarDado()

    function realizarEnvenenado(personagem, functions) {
        if(personagem.condicoes.some(condicao=>condicao.nome===CONDICOES.ENVENENADO.nome)) {
            const {dados} = rolarDado(1, 6, []);
            
            functions.adicionarLog(`${personagem.nome} sofreu ${dados[0].resultado} de dano por Envenenamento.`)

            const novoPv = (personagem.pv.atual)-dados[0].resultado
            const condicaoEnvenenado = personagem.condicoes.find(condicao=>condicao.nome === CONDICOES.ENVENENADO.nome)
            const novasCondicoes = [...personagem.condicoes.filter(condicao=>condicao.nome !== CONDICOES.ENVENENADO.nome)]
            if((condicaoEnvenenado.turnos-1)>0) {
                novasCondicoes.push({...condicaoEnvenenado, turnos: (condicaoEnvenenado.turnos)-1})
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

    function realizarParalisado(personagem, functions) {
        if(personagem.condicoes.some(condicao=>condicao.nome===CONDICOES.PARALISADO.nome)) {
            functions.adicionarLog(`${personagem.nome} está paralisado e não pode agir, no seu próximo turno a paralisia acaba.`)

            const condicaoParalisado = personagem.condicoes.find(condicao=>condicao.nome === CONDICOES.PARALISADO.nome)
            const novasCondicoes = [...personagem.condicoes.filter(condicao=>condicao.nome !== CONDICOES.PARALISADO.nome)]

            if((condicaoParalisado.turnos)>0) {
                novasCondicoes.push({...condicaoParalisado, turnos: (condicaoParalisado.turnos)-1})
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
            functions.adicionarLog(`${personagem.nome} está Dormindo e não pode agir.`)

            const condicaoDormindo = personagem.condicoes.find(condicao=>condicao.nome === CONDICOES.DORMINDO.nome)
            const novasCondicoes = [...personagem.condicoes.filter(condicao=>condicao.nome !== CONDICOES.DORMINDO.nome)]
            if((condicaoDormindo.turnos)>0) {
                novasCondicoes.push({...condicaoDormindo, turnos: (condicaoDormindo.turnos)-1})
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

    return [
        realizarEnvenenado,
        realizarParalisado,
        realizarDormindo,
    ]

}