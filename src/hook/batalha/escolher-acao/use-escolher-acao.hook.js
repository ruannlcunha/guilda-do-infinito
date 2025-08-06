import { ACAO_EXECUCAO, ALVOS } from "../../../constants/acoes/acoes.constant";

export function useEscolherAcao() {
  function escolherAcao(personagem, personagens, acao, tipoAcao, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, hudAtivo: false, escolhendoAlvo: true };
    });

    functions.setAcaoAtiva((old) => {
      const aliados = personagens.filter((item) => (personagem.isInimigo ? item.isInimigo : !item.isInimigo));
      const inimigos = personagens.filter((item) => (personagem.isInimigo ? !item.isInimigo : item.isInimigo));
      const alvos =
        acao.alvos === ALVOS.ALIADOS || acao.alvos === ALVOS.ALIADOS_AREA
          ? [...aliados]
          : acao.alvos === ALVOS.INIMIGOS || acao.alvos === ALVOS.INIMIGOS_AREA
          ? [...inimigos]
          : acao.alvos === ALVOS.ALIADOS_MORTOS
          ? [...aliados].filter((aliado) => aliado.isMorto)
          : acao.alvos === ALVOS.PESSOAL
          ? [personagem]
          : null;
      return { personagem: personagem, acao, alvos, tipoAcao };
    });
  }

  return { escolherAcao };
}
