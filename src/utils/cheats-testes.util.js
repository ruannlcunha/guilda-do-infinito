import { ITENS_CATEGORIA } from "../constants/itens/itens.constant"
import { ITENS_DATA, PERSONAGENS_DATA } from "../database"
import basePersonagem from "../database/personagens/_base/_base-pessoal.personagem.json"

export function cheatTodosPersonagens(userAntigo) {
    const novosPersonagens = []
    for(let i=0;i<PERSONAGENS_DATA.length;i++) {
        const _visuais = [...PERSONAGENS_DATA[i].visuais.map(visual=>{
            return visual.visualId
        })]
        const _personagem = {
            ...basePersonagem,
            nome: PERSONAGENS_DATA[i].id===1?"Aventureiro":null,
            titulo: PERSONAGENS_DATA[i].id===1?"Personagem Principal":null,
            personagemId: PERSONAGENS_DATA[i].id,
            visuais: _visuais,
        }
        novosPersonagens.push(_personagem)
    }

    const novoUser = {
        ...userAntigo,
        personagens: novosPersonagens
    }
    return novoUser
}


export function cheatTodosItens(userAntigo) {
    const novosItens = []
    for(let i=0;i<ITENS_DATA.length;i++) {
        const _item = {
            itemId: ITENS_DATA[i].id,
            quantidade: ITENS_DATA[i].categoria !== ITENS_CATEGORIA.EQUIPAMENTO ? 99 : 1,
        }
        novosItens.push(_item)
    }

    const novoUser = {
        ...userAntigo,
        inventario: novosItens
    }
    return novoUser
}