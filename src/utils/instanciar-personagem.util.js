import { ATAQUES_DATA, HABILIDADES_DATA, ITENS_DATA, PERSONAGENS_DATA } from "../database"
import { evoluirPersonagem } from "./evoluir-personagem.util"

export function instanciarPersonagem(personagem) {
    const data = PERSONAGENS_DATA.find(item => item.id === personagem.personagemId)
    const skin = data.visuais.find(item => item.skinId === personagem.visualAtivo)
    const personagemEvoluido = evoluirPersonagem(personagem)
    const evolucao = data.evolucoes.find(item => item.level === personagemEvoluido.level)
    const novosAtaques = ATAQUES_DATA.filter(item => evolucao.ataques.find(id=>id === item.id))
    const novasHabilidades = HABILIDADES_DATA.filter(item => evolucao.habilidades.find(id=>id === item.id))
    const novosTalentos = null
    
    const personagemInstanciado = {
        id: data.id,
        nome: `${data.nome? data.nome : personagem.nome}`,
        level: personagemEvoluido.level,
        elemento: data.elemento,
        visualId: personagem.visualAtivo,
        sprite: skin.sprite,
        perfil: skin.perfil,
        titulo: `${data.titulo? data.titulo : personagem.titulo}`,
        raridade: data.raridade,
        santuario: skin.santuario,
        corTema: data.corTema,
        experiencia: {
            atual: personagemEvoluido.experienciaAtual,
            maximo: evolucao.experienciaNecessaria,
        },
        pv: {
            atual: evolucao.pv,
            maximo: evolucao.pv,
        },
        pm: {
            atual: evolucao.pm,
            maximo: evolucao.pm,
        },
        defesa: (10 + evolucao.atributos.agilidade),
        atributos: evolucao.atributos,
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