import { CONDICOES, ELEMENTOS, IMUNIDADE_TIPO } from "../../../constants/personagens/personagem.constant";

export const SANGUE_DE_COBRA = {
  id: 10,
  nome: "Sangue de Cobra",
  elemento: ELEMENTOS.ACIDO,
  descricao: "Você recebe resistência 5 a dano de Ácido e é imune à condição Envenenado",
  evento: sangueDeCobraEvento
};

function sangueDeCobraEvento(personagem) {
  const novoPersonagem = {
    ...personagem,
    resistenciaDano: [...personagem.resistenciaDano, { elemento: ELEMENTOS.ACIDO, valor: 5 }],
    imunidades: [...personagem.imunidades, { nome: CONDICOES.ENVENENADO.nome, tipo: IMUNIDADE_TIPO.CONDICAO }]
  };
  return novoPersonagem;
}
