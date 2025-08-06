import { BONUS_DADO, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const MISTICA_APRIMORADA = {
  id: 17,
  nome: "Mística Aprimorada",
  elemento: ELEMENTOS.ESSENCIA,
  descricao: "Você recebe +1 de PM em cada nível ímpar e +2 em testes de resistência de Magia.",
  evento: misticaAprimoradaEvento
};

function misticaAprimoradaEvento(personagem) {
  let manaAdicional = 0;
  for (let i = 1; i <= personagem.level; i++) {
    if (i % 2 !== 0) {
      manaAdicional++;
    }
  }
  const novoPersonagem = {
    ...personagem,
    pm: {
      ...personagem.pm,
      atual: personagem.pm.atual + manaAdicional,
      maximo: personagem.pm.maximo + manaAdicional
    },
    bonusDado: [...personagem.bonusDado, { modificador: 2, tipo: BONUS_DADO.RESISTENCIA_MAGIA }]
  };
  return novoPersonagem;
}
