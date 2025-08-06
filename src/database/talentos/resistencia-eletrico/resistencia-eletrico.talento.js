import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const RESISTENCIA_ELETRICO = {
  id: 4,
  nome: "Resistência Elemental (Elétrico)",
  elemento: ELEMENTOS.ELETRICO,
  descricao: "Você recebe resistência 10 a dano de Elétrico.",
  evento: resistenciaEletricoEvento
};

function resistenciaEletricoEvento(personagem) {
  const novoPersonagem = {
    ...personagem,
    resistenciaDano: [...personagem.resistenciaDano, { elemento: ELEMENTOS.ELETRICO, valor: 10 }]
  };
  return novoPersonagem;
}
