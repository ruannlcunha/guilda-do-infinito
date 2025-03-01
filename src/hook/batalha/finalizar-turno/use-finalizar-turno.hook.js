import { useParams } from "react-router-dom";

export function useFinalizarTurno() {
  const { jogadores } = useParams()

  function _encerrarCombate(texto, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, hudAtivo: false, batalhaTerminou: true, };
    });
    setTimeout(()=>{
      functions.handleFinalizarBatalha(texto)
    }, 1000)
  }

  function finalizarTurno(personagens, turnos, functions) {
    const quantidadeDeJogadores = Number(jogadores)
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
        quantidadeDeJogadores===2 ? _encerrarCombate("VITORIA DO JOGADOR 2", functions) : _encerrarCombate("DERROTA", functions);
      }

      if (
        personagens
          .filter((item) => item.isInimigo === true)
          .every((item) => item.isMorto)
      ) {
        quantidadeDeJogadores===2 ? _encerrarCombate("VITORIA DO JOGADOR 1", functions) : _encerrarCombate("VITORIA", functions);
      }
    }
  }

  return { finalizarTurno };
}
