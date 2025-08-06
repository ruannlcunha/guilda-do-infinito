import { BONUS_DADO, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const VITALIDADE_APRIMORADA = {
  id: 16,
  nome: "Vitalidade Aprimorada",
  elemento: ELEMENTOS.FISICO,
  descricao: "Você recebe +2 PV por nível e +2 em testes de resistência de Vigor.",
  evento: vitalidadeAprimoradaEvento
};

function vitalidadeAprimoradaEvento(personagem) {
  const vidaAdicional = Number(personagem.level) * 2;
  const novoPersonagem = {
    ...personagem,
    pv: {
      ...personagem.pv,
      atual: personagem.pv.atual + vidaAdicional,
      maximo: personagem.pv.maximo + vidaAdicional
    },
    bonusDado: [...personagem.bonusDado, { modificador: 2, tipo: BONUS_DADO.RESISTENCIA_VIGOR }]
  };
  return novoPersonagem;
}
