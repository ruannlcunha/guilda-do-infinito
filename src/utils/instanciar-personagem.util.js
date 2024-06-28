import { CONSUMIVEIS_DATA, PERSONAGENS_DATA } from "../database"

export function instanciarPersonagem(personagem) {
    const arrayData = Object.values(PERSONAGENS_DATA)
    const data = arrayData.find(item => item.id === personagem.personagemId)
    const skin = data.skins.find(item => item.skinId === personagem.skinAtiva)
    const evolucao = data.evolucoes.find(item => item.level === personagem.level)
    
    const personagemInstanciado = {
        id: data.id,
        nome: `${data.nome? data.nome : personagem.nome}`,
        level: personagem.level,
        elemento: data.elemento,
        sprite: skin.sprite,
        perfil: skin.perfil,
        titulo: `${data.titulo? data.titulo : personagem.titulo}`,
        raridade: data.estrelas,
        santuario: skin.santuario,
        corTema: data.corTema,
        experiencia: {
            atual: personagem.experienciaAtual,
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
        ataques: evolucao.ataques,
        habilidades: evolucao.habilidades,
        equipamentos: personagem.equipamentos,
        inventario: {
            espaco: {
                atual: personagem.inventario.length,
                maximo: (evolucao.atributos.forca*5),
            },
            itens: personagem.inventario
            .map(item =>{
                const novoConsumivel = 
                Object.values(CONSUMIVEIS_DATA).find(consumivel => consumivel.id === item.id)
                return { 
                    ...novoConsumivel,
                    quantidade: item.quantidade
                }
            }),
        }
    }

    return personagemInstanciado
}