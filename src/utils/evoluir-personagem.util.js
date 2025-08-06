import { PERSONAGENS_DATA } from "../database";

export function evoluirPersonagem(personagem) {
  const arrayData = Object.values(PERSONAGENS_DATA);
  const data = arrayData.find((item) => item.id === personagem.personagemId);
  let evolucao = data.evolucoes.find((item) => item.level === personagem.level);
  let personagemEvoluido = {
    ...personagem
  };

  while (personagem.experienciaAtual >= evolucao.experienciaNecessaria && personagemEvoluido.level < data.evolucoes.length) {
    const novoLevel = personagemEvoluido.level + 1;
    personagemEvoluido = {
      ...personagem,
      level: novoLevel,
      experienciaAtual: personagem.experienciaAtual - evolucao.experienciaNecessaria
    };
    evolucao = data.evolucoes.find((item) => item.level === novoLevel);
  }

  if (personagemEvoluido.level >= data.evolucoes.length && personagemEvoluido.experienciaAtual >= evolucao.experienciaNecessaria) {
    personagemEvoluido = {
      ...personagemEvoluido,
      experienciaAtual: evolucao.experienciaNecessaria
    };
  }

  return personagemEvoluido;
}
