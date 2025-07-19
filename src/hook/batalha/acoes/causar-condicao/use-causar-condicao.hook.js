import { ARMADURA_TIPO } from "../../../../constants/itens/itens.constant";
import { BONUS_DADO, CONDICOES } from "../../../../constants/personagens/personagem.constant"
import { ACOES_EXTRAS_DATA } from "../../../../database/acoes-extras";
import { diminuirTurno, getArmadura } from "../../../../utils";
import { aumentarTurno } from "../../../../utils/alterar-turnos.util";
import { useRolarDado } from "../../rolar-dado/use-rolar-dado.hook";
import { useAcoesBase } from "../_base/use-acoes-base.hook"
import { useEncerrarCondicao } from "../encerrar-condicao/use-encerrar-condicao.hook";

export function useCausarCondicao() {
    const { testarResistencia } = useAcoesBase()
    const { rolarDado } = useRolarDado();
    const { encerrarAbençoado, encerrarAmaldiçoado } = useEncerrarCondicao()

    function causarEnvenenado(alvo, dificuldade, acao, functions, testeAcerto) {
        if(!alvo.condicoes.find(condicao=>condicao.nome===CONDICOES.ENVENENADO.nome)) {
            const modificadorVigor = {valor: alvo.atributos.vigor, atributo: "Vigor"}
            const alvoResistencia = testarResistencia(alvo, dificuldade, modificadorVigor, functions)
            const {dados} = rolarDado(1, 4, []);
            const turnos = dados[0].resultado
            
            if(testeAcerto) {
                if(testeAcerto.acerto) {
                    functions.adicionarLog(`${alvo.nome} está Envenenado por ${turnos} turnos.`)
                    const novaCondicao = {...CONDICOES.ENVENENADO, duracao: turnos, acaoOrigem: acao.nome}
                    
                    return {
                        ...alvo,
                        condicoes: [...alvo.condicoes, novaCondicao],
                    }
                }
                return alvo
            }
            else if(!alvoResistencia.acerto) {
                functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar Envenenado mas falhou com ${alvoResistencia.total}.`)
                functions.adicionarLog(`${alvo.nome} está Envenenado por ${turnos} turnos.`)
                const novaCondicao = {...CONDICOES.ENVENENADO, duracao: turnos, acaoOrigem: acao.nome}
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

    function causarQueimando(alvo, dificuldade, acao, functions, testeAcerto) {
        if(!alvo.condicoes.find(condicao=>condicao.nome===CONDICOES.QUEIMANDO.nome)) {
            const modificadorAgilidade = {valor: alvo.atributos.agilidade, atributo: "Agilidade"}
            const alvoResistencia = testarResistencia(alvo, dificuldade, modificadorAgilidade, functions)
            
            if(testeAcerto) {
                if(testeAcerto.acerto) {
                    functions.adicionarLog(`${alvo.nome} está Queimando`)
                    const novaCondicao = {...CONDICOES.QUEIMANDO, dificuldade, acaoOrigem: acao.nome}
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
            else if(!alvoResistencia.acerto) {
                functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar Queimando mas falhou com ${alvoResistencia.total}.`)
                functions.adicionarLog(`${alvo.nome} está Queimando`)
                const novaCondicao = {...CONDICOES.QUEIMANDO, acaoOrigem: acao.nome}
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

    function causarCongelado(alvo, dificuldade, acao, functions, testeAcerto) {
        if(!alvo.condicoes.find(condicao=>condicao.nome===CONDICOES.CONGELADO.nome)) {
            const modificadorVigor = {valor: alvo.atributos.vigor, atributo: "Vigor"}
            const alvoResistencia = testarResistencia(alvo, dificuldade, modificadorVigor, functions)

            if(testeAcerto) {
                if(testeAcerto.acerto) {
                    functions.adicionarLog(`${alvo.nome} está Congelado`)
                    const novaCondicao = {...CONDICOES.CONGELADO, dificuldade, acaoOrigem: acao.nome}
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
            else if(!alvoResistencia.acerto) {
                functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar Congelado mas falhou com ${alvoResistencia.total}.`)
                functions.adicionarLog(`${alvo.nome} está Congelado`)
                const novaCondicao = {...CONDICOES.CONGELADO, dificuldade, acaoOrigem: acao.nome}
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

    
    function causarParalisado(alvo, dificuldade, acao, functions, testeAcerto) {
        if(!alvo.condicoes.find(condicao=>condicao.nome===CONDICOES.PARALISADO.nome)) {
            const modificadorVigor = {valor: alvo.atributos.vigor, atributo: "Vigor"}
            const alvoResistencia = testarResistencia(alvo, dificuldade, modificadorVigor, functions)
            const turnos = 1
            
            if(testeAcerto) {
                if(testeAcerto.acerto) {
                    functions.adicionarLog(`${alvo.nome} está Paralisado pelo próximo turno.`)
                    const novaCondicao = {...CONDICOES.PARALISADO, duracao: turnos, acaoOrigem: acao.nome}
                    const novaDefesa = (alvo.defesa)-5
                    
                    return {
                        ...alvo,
                        defesa: novaDefesa,
                        condicoes: [...alvo.condicoes, novaCondicao],
                    }
                }
                return alvo
            }
            else if(!alvoResistencia.acerto) {
                functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar Paralisado mas falhou com ${alvoResistencia.total}.`)
                functions.adicionarLog(`${alvo.nome} está Paralisado pelo próximo turno.`)
                const novaCondicao = {...CONDICOES.PARALISADO, duracao: turnos, acaoOrigem: acao.nome}
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

    
    function causarDormindo(alvo, dificuldade, acao, functions, testeAcerto) {
        if(!alvo.condicoes.find(condicao=>condicao.nome===CONDICOES.DORMINDO.nome)) {
            const modificadorVigor = {valor: alvo.atributos.vigor, atributo: "Vigor"}
            const alvoResistencia = testarResistencia(alvo, dificuldade, modificadorVigor, functions)
            const {dados} = rolarDado(1, 4, []);
            const turnos = dados[0].resultado
            
            if(testeAcerto) {
                if(testeAcerto.acerto) {
                    functions.adicionarLog(`${alvo.nome} está Dormindo por ${turnos} turnos.`)
                    const novaCondicao = {...CONDICOES.DORMINDO, duracao: turnos, acaoOrigem: acao.nome}
                    const novaDefesa = (alvo.defesa)-5
                    
                    return {
                        ...alvo,
                        defesa: novaDefesa,
                        condicoes: [...alvo.condicoes, novaCondicao],
                    }
                }
                return alvo
            }
            else if(!alvoResistencia.acerto) {
                functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar Dormindo mas falhou com ${alvoResistencia.total}.`)
                functions.adicionarLog(`${alvo.nome} está Dormindo por ${turnos} turnos.`)
                const novaCondicao = {...CONDICOES.DORMINDO, duracao: turnos, acaoOrigem: acao.nome}
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

    
    function causarAtordoado(alvo, dificuldade, acao, functions, testeAcerto) {
        if(!alvo.condicoes.find(condicao=>condicao.nome===CONDICOES.ATORDOADO.nome)) {
            const modificadorVigor = {valor: alvo.atributos.vigor, atributo: "Vigor"}
            const alvoResistencia = testarResistencia(alvo, dificuldade, modificadorVigor, functions)
            const {dados} = rolarDado(1, 6, []);
            const turnos = dados[0].resultado
            
            if(testeAcerto) {
                if(testeAcerto.acerto) {
                    functions.adicionarLog(`${alvo.nome} está Atordoado por ${turnos} turnos.`)
                    const novaCondicao = {...CONDICOES.ATORDOADO, duracao: turnos, acaoOrigem: acao.nome}
                    const novaDefesa = (alvo.defesa)-2
                    
                    return {
                        ...alvo,
                        defesa: novaDefesa,
                        condicoes: [...alvo.condicoes, novaCondicao],
                    }
                }
                return alvo
            }
            else if(!alvoResistencia.acerto) {
                functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar Atordoado mas falhou com ${alvoResistencia.total}.`)
                functions.adicionarLog(`${alvo.nome} está Atordoado por ${turnos} turnos.`)
                const novaCondicao = {...CONDICOES.ATORDOADO, duracao: turnos, acaoOrigem: acao.nome}
                const novaDefesa = (alvoResistencia.personagem.defesa)-2
                return {
                    ...alvoResistencia.personagem,
                    defesa: novaDefesa,
                    condicoes: [...alvoResistencia.personagem.condicoes, novaCondicao],
                }
            }
            else {
                functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar Atordoado e teve um sucesso com ${alvoResistencia.total}.`)
                return alvoResistencia.personagem
            }
        }
        else {
            functions.adicionarLog(`${alvo.nome} já está Atordoado.`)
            return alvo
        }
    }

    
    function causarLento(alvo, dificuldade, acao, functions, testeAcerto) {
        if(!alvo.condicoes.find(condicao=>condicao.nome===CONDICOES.LENTO.nome)) {
            const modificadorAgilidade = {valor: alvo.atributos.agilidade, atributo: "Agilidade"}
            const alvoResistencia = testarResistencia(alvo, dificuldade, modificadorAgilidade, functions)
            const {dados} = rolarDado(1, 4, []);
            const turnos = dados[0].resultado
            
            if(testeAcerto) {
                if(testeAcerto.acerto) {
                    functions.adicionarLog(`${alvo.nome} está ${CONDICOES.LENTO.nome} por ${turnos} turnos.`)
                    const novaCondicao = {...CONDICOES.LENTO, duracao: turnos, acaoOrigem: acao.nome}
                    const novosAtributos = {...alvo.atributos, agilidade: (alvo.atributos.agilidade)-1}
                    diminuirTurno(alvo, functions)
                    return {
                        ...alvo,
                        atributos: novosAtributos,
                        condicoes: [...alvo.condicoes, novaCondicao],
                    }
                }
                return alvo
            }
            else if(!alvoResistencia.acerto) {
                functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar ${CONDICOES.LENTO.nome} mas falhou com ${alvoResistencia.total}.`)
                functions.adicionarLog(`${alvo.nome} está ${CONDICOES.LENTO.nome} por ${turnos} turnos.`)
                const novaCondicao = {...CONDICOES.LENTO, duracao: turnos, acaoOrigem: acao.nome}
                const novosAtributos = {...alvoResistencia.personagem.atributos, agilidade: (alvoResistencia.personagem.atributos.agilidade)-1}
                diminuirTurno(alvoResistencia.personagem, functions)
                return {
                    ...alvoResistencia.personagem,
                    atributos: novosAtributos,
                    condicoes: [...alvoResistencia.personagem.condicoes, novaCondicao],
                }
            }
            else {
                functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar ${CONDICOES.LENTO.nome} e teve um sucesso com ${alvoResistencia.total}.`)
                return alvoResistencia.personagem
            }
        }
        else {
            functions.adicionarLog(`${alvo.nome} já está ${CONDICOES.LENTO.nome}.`)
            return alvo
        }
    }

    function causarVeloz(alvo, turnos, acao, functions) {
        if(!alvo.condicoes.find(condicao=>condicao.nome===CONDICOES.VELOZ.nome)) {
            functions.adicionarLog(`${alvo.nome} está ${CONDICOES.VELOZ.nome} por ${turnos} turnos.`)
            const novaCondicao = {...CONDICOES.VELOZ, duracao: turnos, acaoOrigem: acao.nome}
            const novosAtributos = {...alvo.atributos, agilidade: (alvo.atributos.agilidade)+1}
            aumentarTurno(alvo, functions)
            return {
                ...alvo,
                atributos: novosAtributos,
                condicoes: [...alvo.condicoes, novaCondicao],
            }
        }
        else {
            functions.adicionarLog(`AVISO: ${alvo.nome} já está sob efeito de ${CONDICOES.VELOZ.nome}.`)
            throw { message: `${alvo.nome} já está sob efeito de ${CONDICOES.VELOZ.nome}.` }
        }
    }

    
    function causarArmaduraMagica(alvo, acao, functions) {
        if(!alvo.condicoes.find(condicao=>condicao.nome===CONDICOES.ARMADURA_MAGICA.nome)) {
            if(alvo.equipamentos.armadura) {
                const armadura = getArmadura(alvo)
                if(armadura.tipo===ARMADURA_TIPO.PESADA) {
                    functions.adicionarLog(`AVISO: ${alvo.nome} está usando Armadura Pesada e não pode receber os efeitos de ${CONDICOES.ARMADURA_MAGICA.nome}.`)
                    throw { message: `${alvo.nome} está usando Armadura Pesada e não pode receber os efeitos de ${CONDICOES.ARMADURA_MAGICA.nome}.`}
                }
            }
            functions.adicionarLog(`${alvo.nome} recebeu os efeitos de ${CONDICOES.ARMADURA_MAGICA.nome} e ganhou +5 de Defesa.`)
            const novaCondicao = {...CONDICOES.ARMADURA_MAGICA, acaoOrigem: acao.nome}
            const novaDefesa = (alvo.defesa)+5
            return {
                ...alvo,
                defesa: novaDefesa,
                condicoes: [...alvo.condicoes, novaCondicao],
            }
        }
        else {
            functions.adicionarLog(`AVISO: ${alvo.nome} já está sob efeito de ${CONDICOES.ARMADURA_MAGICA.nome}.`)
            throw { message: `${alvo.nome} já está sob efeito de ${CONDICOES.ARMADURA_MAGICA.nome}.` }
        }
    }
    
    function causarDuplicatas(alvo, acao, functions) {
        if(!alvo.condicoes.find(condicao=>condicao.nome===CONDICOES.DUPLICATAS.nome)) {
            functions.adicionarLog(`${alvo.nome} recebeu 3 clones ilusórios e ganhou +6 de Defesa.`)
            const novaCondicao = {...CONDICOES.DUPLICATAS, acaoOrigem: acao.nome}
            const novaDefesa = (alvo.defesa)+6
            return {
                ...alvo,
                defesa: novaDefesa,
                condicoes: [...alvo.condicoes, novaCondicao],
            }
        }
        else {
            functions.adicionarLog(`AVISO: ${alvo.nome} já está sob efeito de ${CONDICOES.DUPLICATAS.nome}.`)
            throw { message: `${alvo.nome} já está sob efeito de ${CONDICOES.DUPLICATAS.nome}.` }
        }
    }

    function causarAbencoado(alvo, acao, functions) {
        if(!alvo.condicoes.find(condicao=>condicao.nome===CONDICOES.ABENCOADO.nome)) {
            functions.adicionarLog(`${alvo.nome} foi abençoad${alvo.pronomes.minusculo_2} e recebeu +1 de bônus em ataques e dano.`)
            const novaCondicao = {...CONDICOES.ABENCOADO, acaoOrigem: acao.nome}
            const novoBonus = {modificador: 1, tipo: BONUS_DADO.ATAQUE_DANO, condicao: CONDICOES.ABENCOADO.nome}
            if(alvo.condicoes.some(condicao=>condicao.nome===CONDICOES.AMALDICOADO.nome)) {
                functions.adicionarLog(`A condição ${CONDICOES.AMALDICOADO.nome} de ${alvo.nome} foi anulada pela condição ${CONDICOES.ABENCOADO.nome}.`)
                const novoAlvo = encerrarAmaldiçoado(alvo, functions)
                return {
                    ...novoAlvo,
                    bonusDado: [...novoAlvo.bonusDado, novoBonus],
                    condicoes: [...novoAlvo.condicoes, novaCondicao],
                }
            }
            return {
                ...alvo,
                bonusDado: [...alvo.bonusDado, novoBonus],
                condicoes: [...alvo.condicoes, novaCondicao],
            }
        }
        else {
            functions.adicionarLog(`AVISO: ${alvo.nome} já está sob efeito de ${CONDICOES.ABENCOADO.nome}.`)
            throw { message: `${alvo.nome} já está sob efeito de ${CONDICOES.ABENCOADO.nome}.` }
        }
    }

    
    function causarAmaldicoado(alvo, dificuldade, acao, functions, testeAcerto) {
        if(!alvo.condicoes.find(condicao=>condicao.nome===CONDICOES.AMALDICOADO.nome)) {
            const modificadorMagia = {valor: alvo.atributos.magia, atributo: "Magia"}
            const alvoResistencia = testarResistencia(alvo, dificuldade, modificadorMagia, functions)
            
            if(testeAcerto) {
                if(testeAcerto.acerto) {
                    functions.adicionarLog(`${alvo.nome} foi amaldiçoad${alvo.pronomes.minusculo_2} e recebeu -1 de bônus em ataques e dano.`)
                    const novaCondicao = {...CONDICOES.AMALDICOADO, acaoOrigem: acao.nome}
                    const novoBonus = {modificador: -1, tipo: BONUS_DADO.ATAQUE_DANO, condicao: CONDICOES.AMALDICOADO.nome}
                    if(alvo.condicoes.some(condicao=>condicao.nome===CONDICOES.ABENCOADO.nome)) {
                        functions.adicionarLog(`A condição ${CONDICOES.ABENCOADO.nome} de ${alvo.nome} foi anulada pela condição ${CONDICOES.AMALDICOADO.nome}.`)
                        const novoAlvo = encerrarAbençoado(alvo, functions)
                        return {
                            ...novoAlvo,
                            bonusDado: [...novoAlvo.bonusDado, novoBonus],
                            condicoes: [...novoAlvo.condicoes, novaCondicao],
                        }
                    }
                    return {
                        ...alvo,
                        bonusDado: [...alvo.bonusDado, novoBonus],
                        condicoes: [...alvo.condicoes, novaCondicao],
                    }
                }
                return alvo
            }
            else if(!alvoResistencia.acerto) {
                functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar ${CONDICOES.AMALDICOADO.nome} mas falhou com ${alvoResistencia.total}.`)
                functions.adicionarLog(`${alvo.nome} foi amaldiçoad${alvo.pronomes.minusculo_2} e recebeu -1 de bônus em ataques e dano.`)
                const novaCondicao = {...CONDICOES.AMALDICOADO, acaoOrigem: acao.nome}
                const novoBonus = {modificador: -1, tipo: BONUS_DADO.ATAQUE_DANO, condicao: CONDICOES.AMALDICOADO.nome}
                if(alvo.condicoes.some(condicao=>condicao.nome===CONDICOES.ABENCOADO.nome)) {
                    functions.adicionarLog(`A condição ${CONDICOES.ABENCOADO.nome} de ${alvo.nome} foi anulada pela condição ${CONDICOES.AMALDICOADO.nome}.`)
                    const novoAlvo = encerrarAbençoado(alvo, functions)
                    return {
                        ...novoAlvo,
                        bonusDado: [...novoAlvo.bonusDado, novoBonus],
                        condicoes: [...novoAlvo.condicoes, novaCondicao],
                    }
                }
                return {
                    ...alvo,
                    bonusDado: [...alvo.bonusDado, novoBonus],
                    condicoes: [...alvo.condicoes, novaCondicao],
                }
            }
            else {
                functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar ${CONDICOES.AMALDICOADO.nome} e teve um sucesso com ${alvoResistencia.total}.`)
                return alvoResistencia.personagem
            }
        }
        else {
            functions.adicionarLog(`${alvo.nome} já está ${CONDICOES.AMALDICOADO.nome}.`)
            return alvo
        }
    }

    function causarAtaqueEspecial(alvo, acao, functions) {
        if(!alvo.condicoes.find(condicao=>condicao.nome===CONDICOES.ATAQUE_ESPECIAL.nome)) {
            functions.adicionarLog(`${alvo.nome} melhorou seu físico e recebeu +4 de bônus de ataque até seu próximo turno.`)
            const novaCondicao = {...CONDICOES.ATAQUE_ESPECIAL, acaoOrigem: acao.nome}
            const novoBonus = {modificador: 4, tipo: BONUS_DADO.ATAQUE, condicao: CONDICOES.ATAQUE_ESPECIAL.nome}
            return {
                ...alvo,
                bonusDado: [...alvo.bonusDado, novoBonus],
                condicoes: [...alvo.condicoes, novaCondicao],
            }
        }
        else {
            functions.adicionarLog(`AVISO: ${alvo.nome} já está sob efeito de ${CONDICOES.ATAQUE_ESPECIAL.nome}.`)
            throw { message: `${alvo.nome} já está sob efeito de ${CONDICOES.ATAQUE_ESPECIAL.nome}.` }
        }
    }

    return {
        causarEnvenenado,
        causarQueimando,
        causarCongelado,
        causarParalisado,
        causarDormindo,
        causarAtordoado,
        causarLento,
        causarVeloz,
        causarArmaduraMagica,
        causarDuplicatas,
        causarAbencoado,
        causarAmaldicoado,
        causarAtaqueEspecial,
    }

}