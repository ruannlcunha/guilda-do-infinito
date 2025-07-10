import { CONDICOES } from "../constants/personagens/personagem.constant"

export function realizarEspecialDuplicata(personagem, functions) {
    if(personagem.condicoes.some(condicao=>condicao.nome===CONDICOES.DUPLICATAS.nome)) {
        const condicaoDuplicata = personagem.condicoes.find(condicao=>condicao.nome === CONDICOES.DUPLICATAS.nome)
        const novasCondicoes = [...personagem.condicoes.filter(condicao=>condicao.nome !== CONDICOES.DUPLICATAS.nome)]
        if((condicaoDuplicata.clones-1)>0) {
            const isVariosClones = (condicaoDuplicata.clones-1)>1
            functions.adicionarLog(`${personagem.nome} perdeu um clone do efeito ${CONDICOES.DUPLICATAS.nome}.
                Resta${isVariosClones?"m":""} ${(condicaoDuplicata.clones)-1} clone${isVariosClones?"s":""}.`)
                
            novasCondicoes.push({...condicaoDuplicata, clones: (condicaoDuplicata.clones)-1})
            const novaDefesa = (personagem.defesa)-2
            const novoPersonagem = {
                ...personagem,
                defesa: novaDefesa,
                condicoes: novasCondicoes,
            }
            return novoPersonagem
        }
        else {
            const novaDefesa = (personagem.defesa)-2
            functions.adicionarLog(`${personagem.nome} não possui mais clones e perdeu o efeito de ${CONDICOES.DUPLICATAS.nome}.`)
            const novoPersonagem = {
                ...personagem,
                defesa: novaDefesa,
                condicoes: novasCondicoes,
            }
            return novoPersonagem
        }
    }
    return personagem
}