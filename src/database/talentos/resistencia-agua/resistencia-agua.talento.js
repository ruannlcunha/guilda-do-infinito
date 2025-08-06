import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const RESISTENCIA_AGUA = {
  id: 2,
  nome: "Resistência Elemental (Água)",
  elemento: ELEMENTOS.AGUA,
  descricao: "Você recebe resistência 10 a dano de Água.",
  evento: resistenciaAguaEvento
};

function resistenciaAguaEvento(personagem) {
  const novoPersonagem = {
    ...personagem,
    resistenciaDano: [...personagem.resistenciaDano, { elemento: ELEMENTOS.AGUA, valor: 10 }]
  };
  return novoPersonagem;
}
