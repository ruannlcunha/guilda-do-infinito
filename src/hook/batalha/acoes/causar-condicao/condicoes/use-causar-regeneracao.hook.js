import { CONDICOES } from "../../../../../constants/personagens/personagem.constant";

export function useCausarRegeneracao() {

  function causarRegeneracao(alvo, acao, functions) {
    if (!alvo.condicoes.find((condicao) => condicao.nome === CONDICOES.REGENERACAO.nome)) {
      const novaCondicao = {
        ...CONDICOES.REGENERACAO,
        bonus: acao.bonus ? acao.bonus : 1,
        acaoOrigem: acao.nome
      };
            
      return {
        ...alvo,
        acoesExtras: [...alvo.acoesExtras, novaAcaoExtra],
        condicoes: [...alvo.condicoes, novaCondicao]
      };
    } else {
      functions.adicionarLog(`AVISO: ${alvo.nome} já está sob efeito de ${CONDICOES.REGENERACAO.nome}.`);
      throw {
        message: `${alvo.nome} já está sob efeito de ${CONDICOES.REGENERACAO.nome}.`
      };
    }
  }

    return { causarRegeneracao }

}