import { ELEMENTOS_REACOES } from "../../../constants/personagens/personagem.constant";
import { getRandomInt } from "../../../utils";

export function useRolarDado() {

  function rolarDado(quantidade, tipo, modificadores, elementoDado, elementoAlvo) {
    const dados = [];
    const multiplicador = !elementoDado||!elementoAlvo ? 1 :
    elementoAlvo === ELEMENTOS_REACOES[elementoDado].vantagem ? 1.5 :
    elementoAlvo === ELEMENTOS_REACOES[elementoDado].desvantagem ? 0.5 : 1;

    for(let i=0;i<quantidade;i++) {
      const resultadoDado = getRandomInt(1, tipo);
      dados.push({resultado: resultadoDado, tipo: `d${tipo}`, elemento: elementoDado, multiplicador })
    }
    
    const resultadoTotalDados = dados.reduce((acc, obj) => acc + Math.round(obj.resultado*multiplicador), 0);
    
    const resultadoTotalModificadores = modificadores ?
    modificadores.reduce((acc, obj) => acc + obj.valor, 0) : 0

    const total = resultadoTotalDados + resultadoTotalModificadores
    
    return {dados, total};
  }

  return { rolarDado };
}
