import { useAutomatizarPersonagem, usePularTurno, useRealizarCondicao } from "../";
import { useAcoesBase } from "../acoes/_base/use-acoes-base.hook";

export function useIniciarTurno() {
  const { pularTurno } = usePularTurno();
  const realizarCondicoes = useRealizarCondicao();
  const { automatizarPersonagem } = useAutomatizarPersonagem();
  const { alterarPersonagem } = useAcoesBase();

  function iniciarTurno(personagemAtivo, personagens, jogadores, jogadaAutomatica, functions) {
    let novoPersonagem = { ...personagemAtivo, usouAcaoExtra: false };
    realizarCondicoes.map((eventoCondicao) => {
      novoPersonagem = eventoCondicao(novoPersonagem, functions, personagens);
    });

    alterarPersonagem(functions, novoPersonagem);

    if ((novoPersonagem.isInimigo && !novoPersonagem.isMorto && (jogadores < 2 || !jogadores)) || (!novoPersonagem.isMorto && jogadores < 1) || jogadaAutomatica) {
      automatizarPersonagem(novoPersonagem, personagens, functions);
    }
    novoPersonagem.isMorto ? pularTurno(functions.setTurnos) : null;
  }

  return { iniciarTurno };
}
