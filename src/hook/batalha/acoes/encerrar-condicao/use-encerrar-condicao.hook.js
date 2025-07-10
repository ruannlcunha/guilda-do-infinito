import { CONDICOES } from "../../../../constants/personagens/personagem.constant"

export function useEncerrarCondicao() {

    function encerrarEnvenenado(personagem) {
        if(personagem.condicoes.some(condicao=>condicao.nome===CONDICOES.ENVENENADO.nome)) {
            functions.adicionarLog(`${personagem.nome} não está mais ${CONDICOES.ENVENENADO.nome}`)
            const novasCondicoes = [...personagem.condicoes.filter(condicao=>condicao.nome !== CONDICOES.ENVENENADO.nome)]
            const novoPersonagem = {
                ...personagem,
                condicoes: novasCondicoes,
            }
            return novoPersonagem
        }
        return personagem
    }

    function encerrarQueimando(personagem) {
        const APAGAR_CHAMAS_ID = 1;

        if(personagem.condicoes.some(condicao=>condicao.nome===CONDICOES.QUEIMANDO.nome)) {
            functions.adicionarLog(`${personagem.nome} não está mais ${CONDICOES.QUEIMANDO.nome}`)
            const novasCondicoes = [...personagem.condicoes.filter(condicao=>condicao.nome !== CONDICOES.QUEIMANDO.nome)]
            const novasAcoesExtras = [...personagem.acoesExtras.filter(acao=>acao.id !== APAGAR_CHAMAS_ID)]
            const novoPersonagem = {
                ...personagem,
                condicoes: novasCondicoes,
                acoesExtras: novasAcoesExtras,
            }
            return novoPersonagem
        }
        return personagem
    }

    function encerrarCongelado(personagem, functions) {
        const QUEBRAR_GELO_ID = 1;

        if(personagem.condicoes.some(condicao=>condicao.nome===CONDICOES.CONGELADO.nome)) {
            functions.adicionarLog(`${personagem.nome} não está mais ${CONDICOES.CONGELADO.nome}.`)
            const novasCondicoes = [...personagem.condicoes.filter(condicao=>condicao.nome !== CONDICOES.CONGELADO.nome)]
            const novasAcoesExtras = [...personagem.acoesExtras.filter(acao=>acao.id !== QUEBRAR_GELO_ID)]
            const novoPersonagem = {
                ...personagem,
                condicoes: novasCondicoes,
                acoesExtras: novasAcoesExtras,
            }
            return novoPersonagem
        }
        return personagem
    }

    function encerrarDormindo(personagem, functions) {
        if(personagem.condicoes.some(condicao=>condicao.nome===CONDICOES.DORMINDO.nome)) {
            functions.adicionarLog(`${personagem.nome} acordou e não está mais ${CONDICOES.DORMINDO.nome}.`)
            const novasCondicoes = [...personagem.condicoes.filter(condicao=>condicao.nome !== CONDICOES.DORMINDO.nome)]
            const novaDefesa = (personagem.defesa)+5
            const novoPersonagem = {
                ...personagem,
                defesa: novaDefesa,
                condicoes: novasCondicoes,
            }
            return novoPersonagem
        }
        return personagem
    }

    function encerrarAtordoado(personagem, functions) {
        if(personagem.condicoes.some(condicao=>condicao.nome===CONDICOES.ATORDOADO.nome)) {
            functions.adicionarLog(`${personagem.nome} não está mais ${CONDICOES.ATORDOADO.nome}.`)
            const novasCondicoes = [...personagem.condicoes.filter(condicao=>condicao.nome !== CONDICOES.ATORDOADO.nome)]
            const novaDefesa = (personagem.defesa)+2
            const novoPersonagem = {
                ...personagem,
                defesa: novaDefesa,
                condicoes: novasCondicoes,
            }
            return novoPersonagem
        }
        return personagem
    }

    function encerrarAbençoado(personagem, functions) {
        if(personagem.condicoes.some(condicao=>condicao.nome===CONDICOES.ABENCOADO.nome)) {
            functions.adicionarLog(`${personagem.nome} não está mais ${CONDICOES.ABENCOADO.nome}.`)
            const novasCondicoes = [...personagem.condicoes.filter(condicao=>condicao.nome !== CONDICOES.ABENCOADO.nome)]
            const novoBonusDado = [...personagem.bonusDado.filter(bonus=>bonus.condicao !== CONDICOES.ABENCOADO.nome)]
            const novoPersonagem = {
                ...personagem,
                bonusDado: novoBonusDado,
                condicoes: novasCondicoes,
            }
            return novoPersonagem
        }
        return personagem
    }

    function encerrarAmaldiçoado(personagem, functions) {
        if(personagem.condicoes.some(condicao=>condicao.nome===CONDICOES.AMALDICOADO.nome)) {
            functions.adicionarLog(`${personagem.nome} não está mais ${CONDICOES.AMALDICOADO.nome}.`)
            const novasCondicoes = [...personagem.condicoes.filter(condicao=>condicao.nome !== CONDICOES.AMALDICOADO.nome)]
            const novoBonusDado = [...personagem.bonusDado.filter(bonus=>bonus.condicao !== CONDICOES.AMALDICOADO.nome)]
            const novoPersonagem = {
                ...personagem,
                bonusDado: novoBonusDado,
                condicoes: novasCondicoes,
            }
            return novoPersonagem
        }
        return personagem
    }

    return {
        encerrarEnvenenado,
        encerrarQueimando,
        encerrarCongelado,
        encerrarDormindo,
        encerrarAtordoado,
        encerrarAbençoado,
        encerrarAmaldiçoado,
    }

}