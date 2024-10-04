
export function useFinalizarTurno() {

  function _encerrarCombate(texto, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, hudAtivo: false, batalhaTerminou: true, };
    });
    setTimeout(()=>{
      functions.handleFinalizarBatalha(texto)
    }, 1000)
  }

  function finalizarTurno(personagens, turnos, functions) {
    const _idCombate = turnos.ordemIniciativa.find(ordem=>ordem.ordemIniciativa===turnos.atual).idCombate
    functions.setPersonagemAtivo(
      personagens.find(personagem=>personagem.idCombate===_idCombate)
    );

    if (personagens.length > 0) {
      if (
        personagens
          .filter((item) => item.isInimigo === false)
          .every((item) => item.isMorto)
      ) {
        _encerrarCombate("DERROTA", functions);
      }

      if (
        personagens
          .filter((item) => item.isInimigo === true)
          .every((item) => item.isMorto)
      ) {
        _encerrarCombate("VITORIA", functions);
      }
    }
  }

  return { finalizarTurno };
}
