import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const RESISTENCIA_LUZ = {
  id: 8,
  nome: "Resistência Elemental (Luz)",
  elemento: ELEMENTOS.LUZ,
  descricao: "Você recebe resistência 10 a dano de Luz.",
  evento: resistenciaLuzEvento
};

function resistenciaLuzEvento(personagem) {
  const novoPersonagem = {
    ...personagem,
    resistenciaDano: [...personagem.resistenciaDano, { elemento: ELEMENTOS.LUZ, valor: 10 }]
  };
  return novoPersonagem;
}
