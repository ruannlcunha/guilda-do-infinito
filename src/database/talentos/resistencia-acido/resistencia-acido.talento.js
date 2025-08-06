import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const RESISTENCIA_ACIDO = {
  id: 1,
  nome: "Resistência Elemental (Ácido)",
  elemento: ELEMENTOS.ACIDO,
  descricao: "Você recebe resistência 10 a dano de Ácido.",
  evento: resistenciaAcidoEvento
};

function resistenciaAcidoEvento(personagem) {
  const novoPersonagem = {
    ...personagem,
    resistenciaDano: [...personagem.resistenciaDano, { elemento: ELEMENTOS.ACIDO, valor: 10 }]
  };
  return novoPersonagem;
}
