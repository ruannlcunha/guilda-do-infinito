import { ACAO_CATEGORIA, ALVOS } from "../constants/acoes/acoes.constant";
import { CONDICOES } from "../constants/personagens/personagem.constant";

export function escolherAlvos(personagens, personagemAtivo, acaoEscolhida) {
  if (acaoEscolhida.alvos === ALVOS.INIMIGOS || acaoEscolhida.alvos === ALVOS.INIMIGOS_AREA) {
    const alvosPossiveis = personagens.filter((personagem) => (!personagem.isInimigo && personagemAtivo.isInimigo && !personagem.isMorto) || (personagem.isInimigo && !personagemAtivo.isInimigo && !personagem.isMorto));
    return alvosPossiveis;
  }
  if (acaoEscolhida.alvos === ALVOS.ALIADOS || acaoEscolhida.alvos === ALVOS.ALIADOS_AREA) {
    const alvosPossiveis = personagens.filter((personagem) => (personagem.isInimigo && personagemAtivo.isInimigo && !personagem.isMorto) || (!personagem.isInimigo && !personagemAtivo.isInimigo && !personagem.isMorto));
    return alvosPossiveis;
  }
  if (acaoEscolhida.alvos === ALVOS.ALIADOS_MORTOS) {
    const alvosPossiveis = personagens.filter((personagem) => (personagem.isInimigo && personagemAtivo.isInimigo && personagem.isMorto) || (!personagem.isInimigo && !personagemAtivo.isInimigo && personagem.isMorto));
    return alvosPossiveis;
  }
  if (acaoEscolhida.alvos === ALVOS.PESSOAL) {
    return personagemAtivo;
  }
}

export function validarCustoMana(acoes, personagemAtivo, isError) {
  if (!acoes.some((acao) => acao.custo <= personagemAtivo.pm.atual)) {
    if (isError)
      throw {
        message: "Personagem automático não possui mana suficiente para realizar nenhum de seus ataques."
      };
    return false;
  }
  return true;
}

export function validarAcaoEscolhida(acaoEscolhida, personagem) {
  if (acaoEscolhida.categoria === ACAO_CATEGORIA.MAGICO && personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.FURIA.nome)) {
    return false;
  }
  if (acaoEscolhida.categoria === ACAO_CATEGORIA.CORPO_A_CORPO && personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.VOANDO.nome)) {
    return false;
  }
  return true;
}
