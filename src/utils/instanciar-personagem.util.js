import { ATAQUES_DATA, HABILIDADES_DATA, ITENS_DATA, PERSONAGENS_DATA } from "../database"
import { evoluirPersonagem } from "./evoluir-personagem.util"
import basePessoal from "../database/personagens/_base/_base-pessoal.personagem.json"

export function instanciarPersonagem(_personagem) {
    const personagem = {...basePessoal, ..._personagem};
    const data = PERSONAGENS_DATA.find(item => item.id === personagem.personagemId)
    const visual = data.visuais.find(item => item.visualId === personagem.visualAtivo)
    const personagemEvoluido = evoluirPersonagem(personagem)
    const evolucao = data.evolucoes.find(item => item.level === personagemEvoluido.level)

    const novosAtaques = ATAQUES_DATA
    .filter(ataqueData => evolucao.ataques.find(ataque=>ataque.ataqueId === ataqueData.id))
    .map(ataque=> {
        if(evolucao.ataques.find(ataqueEvo=>ataqueEvo.ataqueId === ataque.id).variantes.length>0) {
            const variantesAtuais = evolucao.ataques.find(ataqueEvo=>ataqueEvo.ataqueId === ataque.id).variantes
            const novasVariantes = [...ataque.variantes]
            .filter(variante=> variante.lista.some(item => variantesAtuais.includes(item.varianteId)))
            .map(variante=> {
                const novaListaVariante = [...variante.lista].filter(varianteItem=> variantesAtuais.some(atual=> atual === varianteItem.varianteId))
                return {...variante, lista: novaListaVariante}
            })
            return {...ataque, variantes: novasVariantes}
        }
        return {...ataque, variantes: []}
    })
    
    const novasHabilidades = HABILIDADES_DATA
    .filter(habilidadeData => evolucao.habilidades.find(habilidade=>habilidade.habilidadeId === habilidadeData.id))
    .map(habilidade=> {
        if(evolucao.habilidades.find(habilidadeEvo=>habilidadeEvo.habilidadeId === habilidade.id).variantes.length>0) {
            const variantesAtuais = evolucao.habilidades.find(habilidadeEvo=>habilidadeEvo.habilidadeId === habilidade.id).variantes
            const novasVariantes = [...habilidade.variantes]
            .filter(variante=> variante.lista.some(item => variantesAtuais.includes(item.varianteId)))
            .map(variante=> {
                const novaListaVariante = [...variante.lista].filter(varianteItem=> variantesAtuais.some(atual=> atual === varianteItem.varianteId))
                return {...variante, lista: novaListaVariante}
            })
            return {...habilidade, variantes: novasVariantes}
        }
        return {...habilidade, variantes: []}
    })
    const novosTalentos = evolucao.talentos

    const _equipamentos = personagem.equipamentoProntoId ? 
        data.equipamentosProntos.find(equipamento=>equipamento.id===personagem.equipamentoProntoId)
        : personagem.equipamentos
    const _inventario = personagem.equipamentoProntoId? _equipamentos.consumiveis : personagem.inventario
    const atributos = _getAtributos(data, evolucao, _equipamentos)
    const defesa = (10 + atributos.agilidade + _findBonusEquipamento(_equipamentos, "defesa"))
    const status = {
        pv: (data.status.pvBase
        +(data.status.pvBonus*(personagemEvoluido.level-1))
        +(atributos.vigor*(personagemEvoluido.level-1)))
        *personagem.multiplicadores.pv,
        pm: (data.status.pmBase*personagemEvoluido.level)
        *personagem.multiplicadores.pm,
    }
    
    let personagemInstanciado = {
        ...data,
        id: data.id,
        nome: `${data.nome? data.nome : personagem.nome}`,
        level: personagemEvoluido.level,
        elemento: data.elemento,
        visualId: personagem.visualAtivo,
        visualNome: visual.nome,
        sprite: visual.sprite,
        perfil: visual.perfil,
        titulo: `${data.titulo? data.titulo : personagem.titulo}`,
        pronomes: data.pronomes,
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
        bonusDado: [],
        resistenciaDano: [],
        passivas: evolucao.passivas,
        ataques: novosAtaques,
        habilidades: novasHabilidades,
        talentos: novosTalentos,
        equipamentoProntoId: personagem.equipamentoProntoId,
        equipamentos: _equipamentos,
        inventario: {
            espaco: {
                atual: personagem.inventario.length,
                maximo: (atributos.forca*5),
            },
            itens: _inventario.map(item =>{
                const itemData = ITENS_DATA.find(data=> data.id==item.itemId)
                return { 
                    ...itemData,
                    quantidade: item.quantidade
                }
            }),
        },
        multiplicadores: personagem.multiplicadores,
        isExtra: personagem.isExtra,
    }

    novosTalentos.map(talento=> {
        personagemInstanciado = talento.evento(personagemInstanciado)
    })

    return personagemInstanciado
}

export function instanciarBasePessoal(personagemInstanciado) {
    return {
        personagemId: personagemInstanciado.id,
        visualAtivo: personagemInstanciado.visualId,
        level: personagemInstanciado.level,
        experienciaAtual: personagemInstanciado.experiencia.atual,
        equipamentos: personagemInstanciado.equipamentos,
        equipamentoProntoId: personagemInstanciado.equipamentoProntoId,
        inventario: personagemInstanciado.inventario.itens,
        multiplicadores: personagemInstanciado.multiplicadores,
        isExtra: personagemInstanciado.isExtra,
    }
}

function _findBonusEquipamento(equipamentos, atributo) {
    const _equipamentos = {
        arma: equipamentos.arma,
        armadura: equipamentos.armadura,
        acessorio1: equipamentos.acessorio1,
        acessorio2: equipamentos.acessorio2,
    }
    let novoBonus = 0
    Object.values(_equipamentos).map(equipamentoId=> {
        const _equipamento = ITENS_DATA.find(item=>item.id==equipamentoId)
        if(_equipamento) {
            const _bonus = _equipamento.bonus
            const bonusEncontrado = _bonus.find(__bonus=> __bonus.atributo == atributo)
            if(bonusEncontrado) {
                novoBonus = novoBonus + bonusEncontrado.valor
            }
        }
        return
    })

    return novoBonus
}

function _getAtributos(personagem, evolucao, equipamentos) {
    const oldAtributos = personagem.atributosBase
    const levelBonus = _getAtributosBonusLevel(evolucao.level)

    const _forca = oldAtributos.forca + levelBonus + evolucao.bonusAtributos.forca
    const _agilidade = oldAtributos.agilidade + levelBonus + evolucao.bonusAtributos.agilidade
    const _magia = oldAtributos.magia + levelBonus + evolucao.bonusAtributos.magia
    const _vigor = oldAtributos.vigor + levelBonus + evolucao.bonusAtributos.vigor

    const _atributos = {
        forca: _forca + _findBonusEquipamento(equipamentos, "forca"),
        agilidade: _agilidade + _findBonusEquipamento(equipamentos, "agilidade"),
        magia: _magia + _findBonusEquipamento(equipamentos, "magia"),
        vigor: _vigor + _findBonusEquipamento(equipamentos, "vigor"),
    }

    return _atributos
}

function _getAtributosBonusLevel(level) {
    if(level>=17) {
        return 4
    }
    else if(level>=14) {
        return 3
    }
    else if(level>=9) {
        return 2
    }
    else if(level>=5) {
        return 1
    }
    else if(level<5) {
        return 0
    }
}
