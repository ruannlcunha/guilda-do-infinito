import { ITENS_DATA } from "../database/itens"
import { instanciarPersonagem } from "./"
import personagemBase from "../database/personagens/_base/_base-pessoal.personagem.json"

export function findGachaItem(itemId) {
    return ITENS_DATA.find(item=> item.id === itemId)
}

export function findGachaPersonagem(personagemId, visualId) {
    const _visualId = visualId ? visualId: 1
    return instanciarPersonagem({
        ...personagemBase,
        personagemId: personagemId,
        visualAtivo: _visualId,
        visuais: [_visualId]
    })
}