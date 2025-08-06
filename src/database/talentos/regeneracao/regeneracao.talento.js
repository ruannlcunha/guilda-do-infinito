import { CONDICOES, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const REGENERACAO = {
  id: 24,
  nome: "Regeneração",
  elemento: ELEMENTOS.FISICO,
  descricao: "Você recebe a condição Regeneração. Todo início de seu turno cura um valor de PV.",
  bonus: 1,
  evento: regeneracaoEvento
};

function regeneracaoEvento(personagem, talento) {
  const novaCondicao = {
    ...CONDICOES.REGENERACAO,
    bonus: talento.bonus,
    infinita: true,
  };
  return {
    ...personagem,
    condicoes: [...alvo.condicoes, novaCondicao]
  };
}
