import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const RESISTENCIA_TREVAS = {
  id: 9,
  nome: "Resistência Elemental (Trevas)",
  elemento: ELEMENTOS.TREVAS,
  descricao: "Você recebe resistência 10 a dano de Trevas.",
  evento: resistenciaTrevasEvento
};

function resistenciaTrevasEvento(personagem) {
  const novoPersonagem = {
    ...personagem,
    resistenciaDano: [...personagem.resistenciaDano, { elemento: ELEMENTOS.TREVAS, valor: 10 }]
  };
  return novoPersonagem;
}
