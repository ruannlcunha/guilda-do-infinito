import { ELEMENTOS_REACOES } from "../../../constants/personagens/personagem.constant";
import { getRandomInt } from "../../../utils";

export function useRolarDado() {
  function rolarDado(quantidade, tipo, modificadores, elementoDado, elementoAlvo, dadosPadrao) {
    const tipoDado = tipo ? Number(tipo) : 1;
    let dados = [];
    const multiplicador = !elementoDado || !elementoAlvo ? 1 : elementoAlvo === ELEMENTOS_REACOES[elementoDado].vantagem ? 1.5 : elementoAlvo === ELEMENTOS_REACOES[elementoDado].desvantagem ? 0.5 : 1;

    for (let i = 0; i < Number(quantidade); i++) {
      const resultadoDado = getRandomInt(1, tipoDado);
      dados.push({
        resultado: resultadoDado,
        tipo: `d${tipoDado}`,
        elemento: elementoDado,
        multiplicador
      });
    }

    dados = dadosPadrao ? dadosPadrao : dados;

    const resultadoTotalDados = dados.reduce((acc, obj) => acc + Math.round(obj.resultado * multiplicador), 0);

    const resultadoTotalModificadores = modificadores ? modificadores.reduce((acc, obj) => acc + obj.valor, 0) : 0;

    const total = resultadoTotalDados + resultadoTotalModificadores;

    return { dados, total, elemento: elementoDado };
  }

  return { rolarDado };
}
