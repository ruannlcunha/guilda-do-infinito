import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const RESISTENCIA_GELO = {
  id: 6,
  nome: "Resistência Elemental (Gelo)",
  elemento: ELEMENTOS.GELO,
  descricao: "Você recebe resistência 10 a dano de Gelo.",
  evento: resistenciaGeloEvento
};

function resistenciaGeloEvento(personagem) {
  const novoPersonagem = {
    ...personagem,
    resistenciaDano: [...personagem.resistenciaDano, { elemento: ELEMENTOS.GELO, valor: 10 }]
  };
  return novoPersonagem;
}
