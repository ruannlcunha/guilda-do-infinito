import { BONUS_DADO, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const ESQUIVA_APRIMORADA = {
  id: 14,
  nome: "Esquiva Aprimorada",
  elemento: ELEMENTOS.NULO,
  descricao: "Você recebe +2 na Defesa e em testes de resistência de Agilidade.",
  evento: esquivaAprimoradaEvento
};

function esquivaAprimoradaEvento(personagem) {
  const novoPersonagem = {
    ...personagem,
    defesa: personagem.defesa + 2,
    bonusDado: [...personagem.bonusDado, { modificador: 2, tipo: BONUS_DADO.RESISTENCIA_AGILIDADE }]
  };
  return novoPersonagem;
}
