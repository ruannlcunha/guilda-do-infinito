
import { ITEM_PROFICIENCIA } from "../../../constants"
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant"
import { getArmadura } from "../../../utils"

export const ARMADURADO = {
    id: 13,
    nome: "Armadurado",
    elemento: ELEMENTOS.NULO,
    descricao: "Se estiver usando uma armadura pesada, você recebe +2 na Defesa.",
    evento: armaduradoEvento,
}

function armaduradoEvento(personagem) {
    const armaduraAtual = getArmadura(personagem)
    if(armaduraAtual) {
        if(armaduraAtual.proficiencia === ITEM_PROFICIENCIA.PESADA) {    
            const novoPersonagem = {
                ...personagem,
                defesa: personagem.defesa+2,
            }
            return novoPersonagem
        }
    }
    return personagem
}