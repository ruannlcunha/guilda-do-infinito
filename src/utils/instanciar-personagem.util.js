import { ATAQUES_DATA, HABILIDADES_DATA, ITENS_DATA, PERSONAGENS_DATA } from "../database"
import { evoluirPersonagem } from "./evoluir-personagem.util"

export function instanciarPersonagem(personagem) {
    const data = PERSONAGENS_DATA.find(item => item.id === personagem.personagemId)
    const visual = data.visuais.find(item => item.visualId === personagem.visualAtivo)
    const personagemEvoluido = evoluirPersonagem(personagem)
    const evolucao = data.evolucoes.find(item => item.level === personagemEvoluido.level)
    const novosAtaques = ATAQUES_DATA.filter(item => evolucao.ataques.find(id=>id === item.id))
    const novasHabilidades = HABILIDADES_DATA.filter(item => evolucao.habilidades.find(id=>id === item.id))
    const novosTalentos = null
    const defesa = (10 + evolucao.atributos.agilidade + _findBonus(personagemEvoluido, "defesa"))
    const atributos = {
        forca: evolucao.atributos.forca+_findBonus(personagemEvoluido, "forca"),
        agilidade: evolucao.atributos.agilidade+_findBonus(personagemEvoluido, "agilidade"),
        magia: evolucao.atributos.magia+_findBonus(personagemEvoluido, "magia"),
        vigor: evolucao.atributos.vigor+_findBonus(personagemEvoluido, "vigor"),
    }
    const status = {
        pv: data.status.pvBase
        +(data.status.pvBonus*personagemEvoluido.level)
        +(evolucao.atributos.vigor*personagemEvoluido.level),
        pm: data.status.pmBase*personagemEvoluido.level
    }
    
    const personagemInstanciado = {
        id: data.id,
        nome: `${data.nome? data.nome : personagem.nome}`,
        level: personagemEvoluido.level,
        elemento: data.elemento,
        visualId: personagem.visualAtivo,
        visualNome: visual.nome,
        sprite: visual.sprite,
        perfil: visual.perfil,
        titulo: `${data.titulo? data.titulo : personagem.titulo}`,
        raridade: data.raridade,
        santuario: visual.santuario,
        corTema: data.corTema,
        experiencia: {
            atual: personagemEvoluido.experienciaAtual,
            maximo: evolucao.experienciaNecessaria,
        },
        pv: {
            atual: status.pv,
            maximo: status.pv,
        },
        pm: {
            atual: status.pm,
            maximo: status.pm,
        },
        defesa: defesa,
        atributos: atributos,
        passivas: evolucao.passivas,
        ataques: novosAtaques,
        habilidades: novasHabilidades,
        talentos: novosTalentos,
        equipamentos: personagem.equipamentos,
        inventario: {
            espaco: {
                atual: personagem.inventario.length,
                maximo: (evolucao.atributos.forca*5),
            },
            itens: personagem.inventario
            .map(item =>{
                const itemData = ITENS_DATA.find(data=> data.id==item.itemId)
                return { 
                    ...itemData,
                    quantidade: item.quantidade
                }
            }),
        }
    }

    return personagemInstanciado
}

function _findBonus(personagem, atributo) {
    let bonus = null
    Object.values(personagem.equipamentos).map(equipamentoId=> {
        const _equipamento = ITENS_DATA.find(item=>item.id==equipamentoId)
        if(_equipamento) {
            const _bonus = _equipamento.bonus
            const bonusEncontrado = _bonus.find(__bonus=> __bonus.atributo == atributo)
            if(bonusEncontrado) {
                bonus = bonusEncontrado
            }
        }
        return
    })
    if(bonus) {
        return bonus.valor
    }
    return 0
}