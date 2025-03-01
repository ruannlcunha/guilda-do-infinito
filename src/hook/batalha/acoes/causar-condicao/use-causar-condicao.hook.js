import { CONDICOES } from "../../../../constants/personagens/personagem.constant"
import { ACOES_EXTRAS_DATA } from "../../../../database/acoes-extras";
import { useRolarDado } from "../../rolar-dado/use-rolar-dado.hook";
import { useAcoesBase } from "../_base/use-acoes-base.hook"

export function useCausarCondicao() {
    const {testeResistencia} = useAcoesBase()
    const { rolarDado } = useRolarDado();

    function causarEnvenenado(alvo, dificuldade, functions, testeAcerto) {
        if(!alvo.condicoes.find(condicao=>condicao.nome===CONDICOES.ENVENENADO.nome)) {
            const modificadorVigor = {valor: alvo.atributos.vigor, atributo: "Vigor"}
            const alvoResistencia = testeResistencia(alvo, dificuldade, modificadorVigor, functions)
            const {dados} = rolarDado(1, 4, []);
            const turnos = dados[0].resultado
            
            if(testeAcerto) {
                if(testeAcerto.acerto) {
                    functions.adicionarLog(`${alvo.nome} está Envenenado por ${turnos} turnos.`)
                    const novaCondicao = {...CONDICOES.ENVENENADO, turnos: turnos}
                    
                    return {
                        ...alvo,
                        condicoes: [...alvo.condicoes, novaCondicao],
                    }
                }
                return alvo
            }
            else if(!alvoResistencia.testeAcerto) {
                functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar Envenenado mas falhou com ${alvoResistencia.total}.`)
                functions.adicionarLog(`${alvo.nome} está Envenenado por ${turnos} turnos.`)
                const novaCondicao = {...CONDICOES.ENVENENADO, turnos: turnos}
                return {...alvoResistencia.personagem, condicoes: [...alvoResistencia.personagem.condicoes, novaCondicao]}
            }
            else {
                functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar Envenenado e teve um sucesso com ${alvoResistencia.total}.`)
                return alvoResistencia.personagem
            }
        }
        else {
            functions.adicionarLog(`${alvo.nome} já está Envenenado.`)
            return alvo
        }
    }

    function causarQueimando(alvo, dificuldade, functions, testeAcerto) {
        if(!alvo.condicoes.find(condicao=>condicao.nome===CONDICOES.QUEIMANDO.nome)) {
            const modificadorAgilidade = {valor: alvo.atributos.agilidade, atributo: "Agilidade"}
            const alvoResistencia = testeResistencia(alvo, dificuldade, modificadorAgilidade, functions)
            
            if(testeAcerto) {
                if(testeAcerto.acerto) {
                    functions.adicionarLog(`${alvo.nome} está Queimando`)
                    const novaCondicao = {...CONDICOES.QUEIMANDO, dificuldade}
                    const APAGAR_CHAMAS_ID = 2;
                    const novaAcaoExtra = ACOES_EXTRAS_DATA.find(acao=>acao.id === APAGAR_CHAMAS_ID)
                    
                    return {
                        ...alvo,
                        condicoes: [...alvo.condicoes, novaCondicao],
                        acoesExtras: [...alvo.acoesExtras, novaAcaoExtra],
                    }
                }
                return alvo
            }
            else if(!alvoResistencia.testeAcerto) {
                functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar Queimando mas falhou com ${alvoResistencia.total}.`)
                functions.adicionarLog(`${alvo.nome} está Queimando`)
                const novaCondicao = {...CONDICOES.QUEIMANDO}
                const APAGAR_CHAMAS_ID = 1;
                const novaAcaoExtra = ACOES_EXTRAS_DATA.find(acao=>acao.id === APAGAR_CHAMAS_ID)

                return {
                    ...alvoResistencia.personagem,
                    condicoes: [...alvoResistencia.personagem.condicoes, novaCondicao],
                    acoesExtras: [...alvoResistencia.personagem.acoesExtras, novaAcaoExtra],
                }
            }
            else {
                functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar Queimando e teve um sucesso com ${alvoResistencia.total}.`)
                return alvoResistencia.personagem
            }
        }
        else {
            functions.adicionarLog(`${alvo.nome} já está Queimando.`)
            return alvo
        }
    }

    function causarCongelado(alvo, dificuldade, functions, testeAcerto) {
        if(!alvo.condicoes.find(condicao=>condicao.nome===CONDICOES.CONGELADO.nome)) {
            const modificadorVigor = {valor: alvo.atributos.vigor, atributo: "Vigor"}
            const alvoResistencia = testeResistencia(alvo, dificuldade, modificadorVigor, functions)

            if(testeAcerto) {
                if(testeAcerto.acerto) {
                    functions.adicionarLog(`${alvo.nome} está Congelado`)
                    const novaCondicao = {...CONDICOES.CONGELADO, dificuldade}
                    const QUEBRAR_GELO_ID = 2;
                    const novaAcaoExtra = ACOES_EXTRAS_DATA.find(acao=>acao.id === QUEBRAR_GELO_ID)
                    
                    return {
                        ...alvo,
                        condicoes: [...alvo.condicoes, novaCondicao],
                        acoesExtras: [...alvo.acoesExtras, novaAcaoExtra],
                    }
                }
                return alvo
            }
            else if(!alvoResistencia.testeAcerto) {
                functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar Congelado mas falhou com ${alvoResistencia.total}.`)
                functions.adicionarLog(`${alvo.nome} está Congelado`)
                const novaCondicao = {...CONDICOES.CONGELADO, dificuldade}
                const QUEBRAR_GELO_ID = 2;
                const novaAcaoExtra = ACOES_EXTRAS_DATA.find(acao=>acao.id === QUEBRAR_GELO_ID)

                return {
                    ...alvoResistencia.personagem,
                    condicoes: [...alvoResistencia.personagem.condicoes, novaCondicao],
                    acoesExtras: [...alvoResistencia.personagem.acoesExtras, novaAcaoExtra],
                }
            }
            else {
                functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar Congelado e teve um sucesso com ${alvoResistencia.total}.`)
                return alvoResistencia.personagem
            }
        }
        else {
            functions.adicionarLog(`${alvo.nome} já está Congelado.`)
            return alvo
        }
    }

    
    function causarParalisado(alvo, dificuldade, functions, testeAcerto) {
        if(!alvo.condicoes.find(condicao=>condicao.nome===CONDICOES.PARALISADO.nome)) {
            const modificadorVigor = {valor: alvo.atributos.vigor, atributo: "Vigor"}
            const alvoResistencia = testeResistencia(alvo, dificuldade, modificadorVigor, functions)
            const turnos = 1
            
            if(testeAcerto) {
                if(testeAcerto.acerto) {
                    functions.adicionarLog(`${alvo.nome} está Paralisado pelo próximo turno.`)
                    const novaCondicao = {...CONDICOES.PARALISADO, turnos: turnos}
                    const novaDefesa = (alvo.defesa)-5
                    
                    return {
                        ...alvo,
                        defesa: novaDefesa,
                        condicoes: [...alvo.condicoes, novaCondicao],
                    }
                }
                return alvo
            }
            else if(!alvoResistencia.testeAcerto) {
                functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar Paralisado mas falhou com ${alvoResistencia.total}.`)
                functions.adicionarLog(`${alvo.nome} está Paralisado pelo próximo turno.`)
                const novaCondicao = {...CONDICOES.PARALISADO, turnos: turnos}
                const novaDefesa = (alvo.defesa)-5
                return {
                    ...alvoResistencia.personagem,
                    defesa: novaDefesa,
                    condicoes: [...alvoResistencia.personagem.condicoes, novaCondicao],
                }
            }
            else {
                functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar Paralisado e teve um sucesso com ${alvoResistencia.total}.`)
                return alvoResistencia.personagem
            }
        }
        else {
            functions.adicionarLog(`${alvo.nome} já está Paralisado.`)
            return alvo
        }
    }

    
    function causarDormindo(alvo, dificuldade, functions, testeAcerto) {
        if(!alvo.condicoes.find(condicao=>condicao.nome===CONDICOES.DORMINDO.nome)) {
            const modificadorVigor = {valor: alvo.atributos.vigor, atributo: "Vigor"}
            const alvoResistencia = testeResistencia(alvo, dificuldade, modificadorVigor, functions)
            const {dados} = rolarDado(1, 4, []);
            const turnos = dados[0].resultado
            
            if(testeAcerto) {
                if(testeAcerto.acerto) {
                    functions.adicionarLog(`${alvo.nome} está Dormindo por ${turnos} turnos.`)
                    const novaCondicao = {...CONDICOES.DORMINDO, turnos: turnos}
                    const novaDefesa = (alvo.defesa)-5
                    
                    return {
                        ...alvo,
                        defesa: novaDefesa,
                        condicoes: [...alvo.condicoes, novaCondicao],
                    }
                }
                return alvo
            }
            else if(!alvoResistencia.testeAcerto) {
                functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar Dormindo mas falhou com ${alvoResistencia.total}.`)
                functions.adicionarLog(`${alvo.nome} está Dormindo por ${turnos} turnos.`)
                const novaCondicao = {...CONDICOES.DORMINDO, turnos: turnos}
                const novaDefesa = (alvo.defesa)-5
                return {
                    ...alvoResistencia.personagem,
                    defesa: novaDefesa,
                    condicoes: [...alvoResistencia.personagem.condicoes, novaCondicao],
                }
            }
            else {
                functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar Dormindo e teve um sucesso com ${alvoResistencia.total}.`)
                return alvoResistencia.personagem
            }
        }
        else {
            functions.adicionarLog(`${alvo.nome} já está Dormindo.`)
            return alvo
        }
    }

    return {
        causarEnvenenado,
        causarQueimando,
        causarCongelado,
        causarParalisado,
        causarDormindo,
    }

}