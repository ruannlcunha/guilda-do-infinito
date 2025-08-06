import { EFFECTS } from "../../../constants/images";
import { BANNER_DURACAO } from "../../../constants";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { ACAO_EXECUCAO, ALVOS, ACAO_CATEGORIA, ACAO_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { getModificadoresDano } from "../../../utils/get-modificadores.util";
import { getDadosBonus } from "../../../utils/get-dados-bonus.util";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, gastarMana, causarDano, finalizarAcaoExtra, atacar, realizarEtapasAtaque } = useAcoesBase();

export const CHIFRADA = {
  id: 75,
  nome: "Chifrada",
  dadoDeDano: "1d6+FOR",
  descricao: "Realiza um ataque extra com seus chifres.",
  elemento: ELEMENTOS.FISICO,
  tipo: ACAO_TIPO.ATAQUE,
  categoria: ACAO_CATEGORIA.CORPO_A_CORPO,
  custo: 1,
  evento: chifradaEvento,
  alvos: ALVOS.INIMIGOS,
  execucao: ACAO_EXECUCAO.EXTRA,
  variantes: []
};

function chifradaEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });

  let personagemNovo = gastarMana(personagem, acao.custo, functions);

  const resultadoAtaque = atacar(personagem, alvo, acao, functions);
  personagemNovo = resultadoAtaque.personagem;
  const modificadores = getModificadoresDano(personagem, alvo, acao);
  const dadoDano = rolarDado(1, 6, modificadores, CHIFRADA.elemento, alvo.elemento);
  const danoTotal = getDadosBonus([dadoDano], personagem, alvo, rolarDado);

  realizarEtapasAtaque(
    () => {
      functions.ativarBannerRolagem([...danoTotal.dados], modificadores, danoTotal.total, personagem, resultadoAtaque, alvo);
    },
    () => {
      const novoAlvo = causarDano(resultadoAtaque.alvo, danoTotal.danos, resultadoAtaque, CHIFRADA, functions);
      const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.SOCO, ACOES_AUDIO.SOCO);
      finalizarAcaoExtra(personagemNovo, functions, novoAlvo, duracao);
    },
    () => {
      finalizarAcaoExtra(personagemNovo, functions, resultadoAtaque.alvo, 0);
    },
    resultadoAtaque,
    functions,
    personagem,
    alvo,
    CHIFRADA
  );
}
