import { ARMADURA_TIPO } from "../../../constants/itens/itens.constant"
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant"
import { ITENS_DATA } from "../../itens"

export const ARMADURADO = {
    id: 13,
    nome: "Armadurado",
    elemento: ELEMENTOS.NULO,
    descricao: "Se estiver usando uma armadura pesada, você recebe +2 na Defesa.",
    evento: armaduradoEvento,
}

function armaduradoEvento(personagem) {
    const armaduraAtual = ITENS_DATA.find(item=>item.id===personagem.equipamentos.armadura)
    if(armaduraAtual) {
        if(armaduraAtual.tipo === ARMADURA_TIPO.PESADA) {    
            const novoPersonagem = {
                ...personagem,
                defesa: personagem.defesa+2,
            }
            return novoPersonagem
        }
    }
    return personagem
}