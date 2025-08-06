import { BONUS_DADO, CONDICOES, ELEMENTOS } from "../constants/personagens/personagem.constant";
import { converterDados } from "./converter-dados.util";

export function getDadosBonus(danosRolados, personagem, alvo, rolarDado) {
  let todosDados = [...danosRolados];
  let novosDados = [];
  let novoTotal = 0;

  const dadosBonus = personagem.bonusDado
    .filter((bonus) => bonus.tipo === BONUS_DADO.DADO_DANO)
    .map((bonus) => {
      const dadosSeparados = bonus.modificador.dado.split("d");
      return rolarDado(dadosSeparados[0], dadosSeparados[1], [], bonus.modificador.elemento, alvo.elemento);
    });
  todosDados = [...todosDados, ...dadosBonus];

  const condicaoCacador = alvo.condicoes.find((condicao) => condicao.nome === CONDICOES.MARCA_CACADOR.nome && condicao.personagemId === personagem.idCombate);
  if (condicaoCacador) {
    const bonusCacador = converterDados(condicaoCacador.bonus);
    const dadoCacador = rolarDado(bonusCacador[0], bonusCacador[1], [], ELEMENTOS.FISICO, alvo.elemento);
    todosDados = [...todosDados, dadoCacador];
  }

  todosDados.map((dado) => {
    novosDados = [...novosDados, ...dado.dados];
  });
  todosDados.map((dado) => {
    novoTotal = novoTotal + dado.total;
  });

  return {
    danos: [...danosRolados],
    dados: novosDados,
    total: novoTotal
  };
}
