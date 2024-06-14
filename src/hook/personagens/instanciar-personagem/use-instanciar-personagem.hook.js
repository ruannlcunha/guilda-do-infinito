import useGlobalUser from "../../../context/global-user.context"
import { CONSUMIVEIS_DATA, PERSONAGENS_DATA } from "../../../database"

export function useInstanciarPersonagem() {
    const [user] = useGlobalUser()

    function instanciarPersonagem(personagem) {
        const personagemAtual = personagem.personagemId !== 1 ? personagem :
        user.personagens.find(item => item.personagemId === 1)

        const arrayData = Object.values(PERSONAGENS_DATA)
        const data = arrayData.find(item => item.id === personagemAtual.personagemId)
        const skin = data.skins.find(item => item.skinId === personagemAtual.skinAtiva)
        const evolucao = data.evolucoes.find(item => item.level === personagemAtual.level)
        
        const personagemInstanciado = {
            id: data.id,
            nome: `${data.nome? data.nome : personagemAtual.nome}`,
            level: personagemAtual.level,
            sprite: skin.sprite,
            perfil: skin.perfil,
            corTema: data.corTema,
            experiencia: {
                atual: personagemAtual.expAtual,
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
            inventario: {
                espaco: {
                    atual: personagemAtual.inventario.consumiveis.length,
                    maximo: (evolucao.atributos.forca*5),
                },
                equipamentos: personagemAtual.inventario.equipamentos,
                consumiveis: personagemAtual.inventario.consumiveis
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

    return { instanciarPersonagem }

}