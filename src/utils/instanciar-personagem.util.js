import { ATAQUES_DATA, HABILIDADES_DATA, CONSUMIVEIS_DATA, EQUIPAMENTOS_DATA, PERSONAGENS_DATA } from "../database"
import { evoluirPersonagem } from "./evoluir-personagem.util"
import basePessoal from "../database/personagens/_base/_base-pessoal.personagem.json"
import { ATAQUES } from "../database/ataques";
import { BONUS_DADO, ELEMENTOS, RESISTENCIA_DANO } from "../constants/personagens/personagem.constant";

export function instanciarPersonagem(_personagem) {
    const personagem = {...basePessoal, ..._personagem};
    const data = PERSONAGENS_DATA.find(item => item.id === personagem.personagemId)
    const visual = data.visuais.find(item => item.visualId === personagem.visualAtivo)
    const personagemEvoluido = evoluirPersonagem(personagem)
    const evolucao = data.evolucoes.find(item => item.level === personagemEvoluido.level)
    
    const _equipamentos = personagem.equipamentoProntoId ? 
    data.equipamentosProntos.find(equipamento=>equipamento.id===personagem.equipamentoProntoId) 
    : personagem.equipamentos
    const _inventario = personagem.equipamentoProntoId ? _equipamentos.consumiveis : personagem.inventario

    const novosAtaques = _getAtaques(_equipamentos, evolucao)
    const novasHabilidades = _getHabilidades(_equipamentos, evolucao)
    const novosTalentos = _getTalentos(_equipamentos, evolucao)

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
        bonusDado: _getBonusDados(_equipamentos),
        resistenciaDano: _getResistenciaDano(_equipamentos),
        passivas: evolucao.passivas,
        ataques: novosAtaques,
        habilidades: novasHabilidades,
        talentos: novosTalentos,
        equipamentoProntoId: personagem.equipamentoProntoId,
        equipamentos: _equipamentos,
        inventario: _getInventario(atributos, _inventario),
        multiplicadores: personagem.multiplicadores,
        isExtra: personagem.isExtra,
        condicoes: [],
        imunidades: [],
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

function _getInventario(atributos, inventario) {
    let espacoAtual = 0
    inventario.map(item =>{
        espacoAtual = espacoAtual + item.quantidade
    })

    return {
        espaco: {
            atual: espacoAtual,
            maximo: (atributos.forca*5),
        },
        itens: inventario.map(item =>{
            const itemData = CONSUMIVEIS_DATA.find(data=> data.id==item.itemId)
            return { 
                ...itemData,
                quantidade: item.quantidade
            }
        }),
    }
}

function _getEquipamentos(equipamentos) {
    return {
            arma: equipamentos.arma,
            armadura: equipamentos.armadura,
            acessorio1: equipamentos.acessorio1,
            acessorio2: equipamentos.acessorio2,
        }
}
 
function _getTalentos(equipamentos, evolucao) {
    let talentosEquipamentos = []
    Object.values(_getEquipamentos(equipamentos)).map(itemId => {
        const itemData = EQUIPAMENTOS_DATA.find(data=> data.id==itemId)
        if(itemData) {
            talentosEquipamentos = [...talentosEquipamentos, ...itemData.acoes.talentos]
        }
    })
    const talentosObtidas = [...evolucao.talentos, ...talentosEquipamentos]
    return talentosObtidas.filter((obj, index, self) =>index === self.findIndex(o => o.id === obj.id));
}

function _getAtaques(equipamentos, evolucao) {
    let ataquesEquipamentos = []
    Object.entries(_getEquipamentos(equipamentos)).map(item => {
        const [equipamentoNome, itemId] = item
        const itemData = EQUIPAMENTOS_DATA.find(data=> data.id==itemId)
        if(itemData) {
            if(equipamentoNome==="arma" && itemData.acoes.ataques.length===0) {
                ataquesEquipamentos = [...ataquesEquipamentos, {ataqueId: ATAQUES.GOLPE_DESARMADO.id, variantes: []}]
            }
            else {
                ataquesEquipamentos = [...ataquesEquipamentos, ...itemData.acoes.ataques]
            }
        }
    })
    const ataquesObtidos = [...evolucao.ataques, ...ataquesEquipamentos]
    const _ataques = ATAQUES_DATA
    .filter(ataqueData => ataquesObtidos.find(ataque=>ataque.ataqueId === ataqueData.id || ataque.ataqueId.id === ataqueData.id))
    .map(ataque=> {
        const variantesAtuais = ataquesObtidos.find(ataqueEvo=>ataqueEvo.ataqueId === ataque.id || ataqueEvo.ataqueId.id === ataque.id).variantes
        if(variantesAtuais.length>0) {
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
    return _ataques
}

function _getHabilidades(equipamentos, evolucao) {
    let habilidadesEquipamentos = []
    Object.values(_getEquipamentos(equipamentos)).map(itemId => {
        const itemData = EQUIPAMENTOS_DATA.find(data=> data.id==itemId)
        if(itemData) {
            habilidadesEquipamentos = [...habilidadesEquipamentos, ...itemData.acoes.habilidades]
        }
    })
    const habilidadesObtidas = [...evolucao.habilidades, ...habilidadesEquipamentos]
    const _habilidades = HABILIDADES_DATA
    .filter(habilidadeData => habilidadesObtidas.find(habilidade=>habilidade.habilidadeId === habilidadeData.id || habilidade.habilidadeId.id === habilidadeData.id))
    .map(habilidade=> {
        const variantesAtuais = habilidadesObtidas
        .find(habilidadeEvo=>habilidadeEvo.habilidadeId === habilidade.id || habilidadeEvo.habilidadeId.id === habilidade.id)
        .variantes

        if(variantesAtuais.length>0) {
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
    return _habilidades
}

function _getBonusDados(equipamentos) {
    const _equipamentos = _getEquipamentos(equipamentos)
    let novosBonus = []
    Object.values(_equipamentos).map(equipamentoId=> {
        const _equipamento = EQUIPAMENTOS_DATA.find(item=>item.id==equipamentoId)
        if(_equipamento) {
            const bonus = _equipamento.bonus
            bonus.map(_bonus=> {
                if(Object.values(BONUS_DADO).some(bonus=> bonus === _bonus.atributo)) {
                    const _novoBonus = {modificador: _bonus.valor, tipo: _bonus.atributo, atributo: _bonus.nome}
                    novosBonus = [...novosBonus, _novoBonus]
                }
            })

        }
        return
    })
    return novosBonus
}

function _getResistenciaDano(equipamentos) {
    const _equipamentos = _getEquipamentos(equipamentos)
    let novasResistencias = []
    Object.values(_equipamentos).map(equipamentoId=> {
        const _equipamento = EQUIPAMENTOS_DATA.find(item=>item.id==equipamentoId)
        if(_equipamento) {
            const bonus = _equipamento.bonus
            bonus.map(_bonus=> {
                if(Object.values(RESISTENCIA_DANO).some(bonus=> bonus === _bonus.atributo)) {
                    const elementoResistencia = _bonus.atributo.split("RESISTENCIA_")
                    const _novoBonus = {elemento: ELEMENTOS[elementoResistencia[1]], valor: _bonus.valor}
                    novasResistencias = [...novasResistencias, _novoBonus]
                }
            })

        }
        return
    })
    return novasResistencias
}

function _findBonusEquipamento(equipamentos, atributo) {
    const _equipamentos = _getEquipamentos(equipamentos)
    let novoBonus = 0
    Object.values(_equipamentos).map(equipamentoId=> {
        const _equipamento = EQUIPAMENTOS_DATA.find(item=>item.id==equipamentoId)
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
