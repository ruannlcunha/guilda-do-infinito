export function diminuirTurno(alvo, functions) {
  functions.setTurnos((old) => {
    const ordemIniciativa = [...old.ordemIniciativa];
    const alvoLento = ordemIniciativa.find((ordem) => ordem.idCombate === alvo.idCombate);
    if (alvoLento.ordemIniciativa < old.maximo - 1) {
      const outroPersonagemAfetado = ordemIniciativa.find((ordem) => ordem.ordemIniciativa === alvoLento.ordemIniciativa + 1);
      const novaOrdemIniciativa = ordemIniciativa.filter((ordem) => ordem.idCombate !== alvoLento.idCombate && ordem.idCombate !== outroPersonagemAfetado.idCombate);
      novaOrdemIniciativa.push({
        ...alvoLento,
        ordemIniciativa: alvoLento.ordemIniciativa + 1
      });
      novaOrdemIniciativa.push({
        ...outroPersonagemAfetado,
        ordemIniciativa: outroPersonagemAfetado.ordemIniciativa - 1
      });
      return {
        ...old,
        ordemIniciativa: novaOrdemIniciativa.sort(function (a, b) {
          return a.ordemIniciativa - b.ordemIniciativa;
        })
      };
    }
    return { ...old };
  });
}

export function aumentarTurno(alvo, functions) {
  functions.setTurnos((old) => {
    const ordemIniciativa = [...old.ordemIniciativa];
    const alvoLento = ordemIniciativa.find((ordem) => ordem.idCombate === alvo.idCombate);
    if (alvoLento.ordemIniciativa > 0) {
      const outroPersonagemAfetado = ordemIniciativa.find((ordem) => ordem.ordemIniciativa === alvoLento.ordemIniciativa - 1);
      const novaOrdemIniciativa = ordemIniciativa.filter((ordem) => ordem.idCombate !== alvoLento.idCombate && ordem.idCombate !== outroPersonagemAfetado.idCombate);
      novaOrdemIniciativa.push({
        ...alvoLento,
        ordemIniciativa: alvoLento.ordemIniciativa - 1
      });
      novaOrdemIniciativa.push({
        ...outroPersonagemAfetado,
        ordemIniciativa: outroPersonagemAfetado.ordemIniciativa + 1
      });
      return {
        ...old,
        ordemIniciativa: novaOrdemIniciativa.sort(function (a, b) {
          return a.ordemIniciativa - b.ordemIniciativa;
        })
      };
    }
    return { ...old };
  });
}
