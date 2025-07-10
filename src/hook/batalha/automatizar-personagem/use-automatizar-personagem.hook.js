import { ACAO_EXECUCAO, ALVOS } from "../../../constants/acoes/acoes.constant"
import { COMPORTAMENTOS, CONDICOES } from "../../../constants/personagens/personagem.constant"
import { ACOES_EXTRAS } from "../../../database/acoes-extras";
import { sleep } from "../../../utils";
import { useToast } from "../../toast/use-toast.hook";
import { usePularTurno } from "../pular-turno/use-pular-turno.hook";
import { atacanteEspertoComportamento, atacanteFerozComportamento, suporteEspertoComportamento, suporteMedicoComportamento } from "./comportamentos";

export function useAutomatizarPersonagem() {
  const { toastWarning } = useToast()  
  const { pularTurno } = usePularTurno();

    async function automatizarPersonagem(personagemAtivo, personagens, functions) {
        let acaoRealizada = false
        let quantidadeDeErros = 0
        while(!acaoRealizada) {
            functions.setAcaoEmAndamento(true)
            try {
                if(_verificarSePodeAgir(personagemAtivo)) {
                    let comportamento = {acaoEscolhida: {execucao: null}}
                    //Por enquanto BOTs não usam ações livres
                    while(comportamento.acaoEscolhida.execucao !== ACAO_EXECUCAO.PADRAO) {
                        comportamento = _escolherComportamento(personagemAtivo.comportamento, personagemAtivo, personagens)
                    }
                    await sleep(3000)
                    functions.setAnimacoes(old=> {return {...old, hudAtivo: false}})
                    functions.ativarBannerInimigo(comportamento.acaoEscolhida.nome, personagemAtivo.perfil,
                                                comportamento.alvoEscolhido, personagemAtivo.corTema)
                    await sleep(5100)
                    await comportamento.acaoEscolhida.evento(personagemAtivo, comportamento.alvoEscolhido, comportamento.acaoEscolhida, functions);
                    acaoRealizada = true
                }
                else {
                    pularTurno(functions.setTurnos);
                }
            } catch(e) {
                console.log(e.message)
                acaoRealizada = false
                quantidadeDeErros = quantidadeDeErros+1
                if(quantidadeDeErros>=2) {
                    acaoRealizada = true
                    const mensagemDeErro = `${personagemAtivo.nome} não conseguiu realizar a ação pela segunda vez consecutiva, então seu turno foi pulado.`
                    toastWarning(mensagemDeErro)
                    functions.adicionarLog(mensagemDeErro)
                    pularTurno(functions.setTurnos)
                }
            }
        }
    }
    
    

    function _verificarSePodeAgir(personagem) {
        if(personagem.condicoes.some(condicao=>
            condicao.nome === CONDICOES.PARALISADO.nome ||
            condicao.nome === CONDICOES.DORMINDO.nome)) {
          return false
        }

        const condicaoAtordoado = personagem.condicoes.find(condicao=>condicao.nome === CONDICOES.ATORDOADO.nome)
        if(condicaoAtordoado) {
          if(condicaoAtordoado.acaoBloqueada) return false
        }

        return true
    }
    

    function _verificarCondicoesAcaoExtra(personagem) {
        if(personagem.condicoes.some(condicao=>
            condicao.nome === CONDICOES.CONGELADO.nome)) {
          return true
        }
        return false
    }

    function _realizarAcaoExtraDeCondicao(personagem) {
        const acoes = [...personagem.acoesExtras]
        let acaoEscolhida = null
        if(personagem.condicoes.some(condicao=>
            condicao.nome === CONDICOES.CONGELADO.nome)) {
          acaoEscolhida = acoes.find((acao)=> acao.id===ACOES_EXTRAS.QUEBRAR_GELO.id)
        }
        
        const alvoEscolhido = personagem
        return {acaoEscolhida, alvoEscolhido}
    }

    function _escolherComportamento(comportamento, personagemAtivo, personagens) {
        if(_verificarCondicoesAcaoExtra(personagemAtivo)) {
            return _realizarAcaoExtraDeCondicao(personagemAtivo)
        }
        else {
            if(comportamento) {
                if(comportamento===COMPORTAMENTOS.ATACANTE_FEROZ) {
                    return atacanteFerozComportamento(personagemAtivo, personagens)
                }
                if(comportamento===COMPORTAMENTOS.ATACANTE_ESPERTO) {
                    return atacanteEspertoComportamento(personagemAtivo, personagens)
                }
                if(comportamento===COMPORTAMENTOS.SUPORTE_ESPERTO) {
                    return suporteEspertoComportamento(personagemAtivo, personagens)
                }
                if(comportamento===COMPORTAMENTOS.SUPORTE_MEDICO) {
                    return suporteMedicoComportamento(personagemAtivo, personagens)
                }
            }
            else {
                return atacanteFerozComportamento(personagemAtivo, personagens)
            }
        }
    }
    

    return { automatizarPersonagem }

}