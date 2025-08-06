import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const RESISTENCIA_TERRA = {
  id: 7,
  nome: "Resistência Elemental (Terra)",
  elemento: ELEMENTOS.TERRA,
  descricao: "Você recebe resistência 10 a dano de Terra.",
  evento: resistenciaTerraEvento
};

function resistenciaTerraEvento(personagem) {
  const novoPersonagem = {
    ...personagem,
    resistenciaDano: [...personagem.resistenciaDano, { elemento: ELEMENTOS.TERRA, valor: 10 }]
  };
  return novoPersonagem;
}
