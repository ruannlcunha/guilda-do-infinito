import { BONUS_DADO, CONDICOES, ELEMENTOS } from "../../../constants/personagens/personagem.constant"

export const SORTE_DIVINA = {
    id: 21,
    nome: "Sorte Divina",
    elemento: ELEMENTOS.LUZ,
    descricao: "Você foi abençoado com a sorte dos deuses. No início do combate recebe a condição Sortudo por 4 rodadas.",
    evento: sorteDivinaEvento,
}

function sorteDivinaEvento(personagem) {
    const novaCondicao = {...CONDICOES.SORTUDO, duracao: 4}
    const novaDefesa = (personagem.defesa)+1
    const novosBonus = [
        {modificador: 1, tipo: BONUS_DADO.ATAQUE, condicao: CONDICOES.SORTUDO.nome},
        {modificador: 1, tipo: BONUS_DADO.CONJURACAO, condicao: CONDICOES.SORTUDO.nome},
        {modificador: 1, tipo: BONUS_DADO.RESISTENCIA_FORCA, condicao: CONDICOES.SORTUDO.nome},
        {modificador: 1, tipo: BONUS_DADO.RESISTENCIA_AGILIDADE, condicao: CONDICOES.SORTUDO.nome},
        {modificador: 1, tipo: BONUS_DADO.RESISTENCIA_MAGIA, condicao: CONDICOES.SORTUDO.nome},
        {modificador: 1, tipo: BONUS_DADO.RESISTENCIA_VIGOR, condicao: CONDICOES.SORTUDO.nome},
    ]
    return {
        ...personagem,
        defesa: novaDefesa,
        bonusDado: [...personagem.bonusDado, ...novosBonus],
        condicoes: [...personagem.condicoes, novaCondicao],
    }
}