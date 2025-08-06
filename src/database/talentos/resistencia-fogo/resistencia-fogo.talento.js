import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const RESISTENCIA_FOGO = {
  id: 5,
  nome: "Resistência Elemental (Fogo)",
  elemento: ELEMENTOS.FOGO,
  descricao: "Você recebe resistência 10 a dano de Fogo.",
  evento: resistenciaFogoEvento
};

function resistenciaFogoEvento(personagem) {
  const novoPersonagem = {
    ...personagem,
    resistenciaDano: [...personagem.resistenciaDano, { elemento: ELEMENTOS.FOGO, valor: 10 }]
  };
  return novoPersonagem;
}
