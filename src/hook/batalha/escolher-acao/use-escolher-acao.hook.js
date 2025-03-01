import { ALVOS } from "../../../constants/acoes/acoes.constant";

export function useEscolherAcao() {
  function escolherAcao(personagem, personagens, acao, functions) {

    functions.setAnimacoes((old) => {
      return { ...old, hudAtivo: false, escolhendoAlvo: true };
    });

    functions.setAcaoAtiva((old) => {
      const aliados = personagens.filter(item => personagem.isInimigo ? item.isInimigo : !item.isInimigo)
      const inimigos = personagens.filter(item => personagem.isInimigo ? !item.isInimigo : item.isInimigo)
      const alvos = (
        acao.alvos===ALVOS.ALIADOS ? [...aliados] 
      : acao.alvos===ALVOS.INIMIGOS ? [...inimigos]
      : acao.alvos===ALVOS.PESSOAL ? [personagem] : null
      )
      return { personagem: personagem, acao: acao,  alvos };
    });

  }

  return { escolherAcao };
}
