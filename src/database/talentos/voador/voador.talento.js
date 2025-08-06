import { CONDICOES, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const VOADOR = {
  id: 23,
  nome: "Voador",
  elemento: ELEMENTOS.FISICO,
  descricao: "Você recebe a condição Voando até o fim do combate.",
  evento: voadorEvento
};

function voadorEvento(personagem) {
  const novaCondicao = { ...CONDICOES.VOANDO };
  const novaDefesa = personagem.defesa + 2;
  return {
    ...personagem,
    defesa: novaDefesa,
    condicoes: [...personagem.condicoes, novaCondicao]
  };
}
