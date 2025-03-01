import { CONDICOES } from "../../../../constants/personagens/personagem.constant"

export function useEncerrarCondicao() {

    function encerrarEnvenenado(personagem) {
        if(personagem.condicoes.some(condicao=>condicao.nome===CONDICOES.ENVENENADO.nome)) {
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

    function encerrarCongelado(personagem) {
        const QUEBRAR_GELO_ID = 1;

        if(personagem.condicoes.some(condicao=>condicao.nome===CONDICOES.CONGELADO.nome)) {
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
            functions.adicionarLog(`${personagem.nome} acordou e não está mais Dormindo.`)
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

    return {
        encerrarEnvenenado,
        encerrarQueimando,
        encerrarCongelado,
        encerrarDormindo,
    }

}