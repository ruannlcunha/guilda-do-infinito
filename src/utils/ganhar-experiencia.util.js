
import { PERSONAGENS_DATA } from "../database"
import { instanciarPersonagem } from "./instanciar-personagem.util"

export function ganharExperiencia(personagem, expGanho) {
    let novoPersonagem = {...personagem}
    const expInicial = personagem.experienciaAtual
    let experiencia = expGanho + expInicial
    let experienciaNecessaria = instanciarPersonagem(novoPersonagem).experiencia.maximo

    if(experiencia>experienciaNecessaria) {
        while(experiencia>experienciaNecessaria) {
            experiencia = experiencia-experienciaNecessaria
            novoPersonagem = {
                ...novoPersonagem,
                level: novoPersonagem.level+1,
                experienciaAtual: experiencia
            }

            experienciaNecessaria = PERSONAGENS_DATA.find(data => data.id === personagem.personagemId)
            .evolucoes.find(evolucao => evolucao.level === novoPersonagem.level)
            .experienciaNecessaria
        }
    }
    else {
        novoPersonagem = {
            ...novoPersonagem,
            experienciaAtual: experiencia
        }
    }
        
    return novoPersonagem
}

function _experienciaNecessaria(personagem) {
    const _experiencia = instanciarPersonagem(personagem).experiencia.maximo
    return _experiencia
}