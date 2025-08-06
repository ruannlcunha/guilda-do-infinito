import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const RESISTENCIA_AR = {
  id: 3,
  nome: "Resistência Elemental (Ar)",
  elemento: ELEMENTOS.AR,
  descricao: "Você recebe resistência 10 a dano de Ar.",
  evento: resistenciaArEvento
};

function resistenciaArEvento(personagem) {
  const novoPersonagem = {
    ...personagem,
    resistenciaDano: [...personagem.resistenciaDano, { elemento: ELEMENTOS.AR, valor: 10 }]
  };
  return novoPersonagem;
}
