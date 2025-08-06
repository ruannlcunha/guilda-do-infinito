import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { ACAO_EXECUCAO, ALVOS, ACAO_CATEGORIA, ACAO_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { getModificadoresDano } from "../../../utils/get-modificadores.util";
import { getDadosBonus } from "../../../utils/get-dados-bonus.util";
import { useCausarCondicao } from "../../../hook/batalha";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, causarDano, finalizarAcao, atacar, realizarEtapasAtaque, gastarMana } = useAcoesBase();
const { causarQueimando } = useCausarCondicao();

export const TOQUE_FLAMEJANTE = {
  id: 80,
  nome: "Toque Flamejante",
  dadoDeDano: "1d8",
  descricao: "Ao tocar no inimigo o envolve em chamas causando 1d8 de dano de Fogo e podendo causar a condição Queimando.",
  elemento: ELEMENTOS.FOGO,
  tipo: ACAO_TIPO.ATAQUE,
  categoria: ACAO_CATEGORIA.MAGICO,
  custo: 1,
  evento: toqueFlamejanteEvento,
  alvos: ALVOS.INIMIGOS,
  execucao: ACAO_EXECUCAO.PADRAO,
  variantes: []
};

function toqueFlamejanteEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });

  let personagemNovo = gastarMana(personagem, acao.custo, functions);
  const resultadoAtaque = atacar(personagem, alvo, acao, functions);
  personagemNovo = resultadoAtaque.personagem;
  const modificadores = getModificadoresDano(personagem, alvo, acao);
  const dadoDano = rolarDado(1, 8, modificadores, TOQUE_FLAMEJANTE.elemento, alvo.elemento);
  const danoTotal = getDadosBonus([dadoDano], personagem, alvo, rolarDado);

  realizarEtapasAtaque(
    () => {
      functions.ativarBannerRolagem([...danoTotal.dados], modificadores, danoTotal.total, personagem, resultadoAtaque, alvo);
    },
    () => {
      const novoAlvo = causarDano(resultadoAtaque.alvo, danoTotal.danos, resultadoAtaque, TOQUE_FLAMEJANTE, functions);
      const novoAlvo2 = causarQueimando(novoAlvo, 10 + personagem.atributos.magia, TOQUE_FLAMEJANTE, functions);
      const duracao = iniciarEfeito(novoAlvo2, functions, EFFECTS.BOLA_DE_FOGO, ACOES_AUDIO.FOGO);
      finalizarAcao(personagemNovo, functions, novoAlvo2, duracao, 3100);
    },
    () => {
      finalizarAcao(personagemNovo, functions, resultadoAtaque.alvo, 0);
    },
    resultadoAtaque,
    functions,
    personagem,
    alvo,
    TOQUE_FLAMEJANTE
  );
}
