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
const { iniciarEfeito, causarDano, finalizarAcaoExtra, atacar, realizarEtapasAtaque, gastarMana } = useAcoesBase();
const { causarAtordoado } = useCausarCondicao();

export const GOLPE_ESCUDO = {
  id: 81,
  nome: "Golpe Com Escudo",
  dadoDeDano: "1d4+FOR",
  descricao: "Um golpe extra utilizando um escudo, causa pouco dano mas pode deixar o inimigo atordoado por uma rodada.",
  elemento: ELEMENTOS.FISICO,
  tipo: ACAO_TIPO.ATAQUE,
  categoria: ACAO_CATEGORIA.CORPO_A_CORPO,
  custo: 1,
  evento: golpeEscudoEvento,
  alvos: ALVOS.INIMIGOS,
  execucao: ACAO_EXECUCAO.EXTRA,
  variantes: []
};

function golpeEscudoEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });

  let personagemNovo = gastarMana(personagem, acao.custo, functions);

  const resultadoAtaque = atacar(personagem, alvo, acao, functions);
  personagemNovo = resultadoAtaque.personagem;
  const modificadores = getModificadoresDano(personagem, alvo, acao);
  const dadoDano = rolarDado(1, 4, modificadores, GOLPE_ESCUDO.elemento, alvo.elemento);
  const danoTotal = getDadosBonus([dadoDano], personagem, alvo, rolarDado);

  realizarEtapasAtaque(
    () => {
      functions.ativarBannerRolagem([...danoTotal.dados], modificadores, danoTotal.total, personagem, resultadoAtaque, alvo);
    },
    () => {
      const novoAlvo = causarDano(resultadoAtaque.alvo, danoTotal.danos, resultadoAtaque, GOLPE_ESCUDO, functions);
      const novoAlvo2 = causarAtordoado(novoAlvo, "1d1", 10 + personagem.atributos.forca, GOLPE_ESCUDO, functions);
      const duracao = iniciarEfeito(novoAlvo2, functions, EFFECTS.SOCO, ACOES_AUDIO.SOCO);
      finalizarAcaoExtra(personagemNovo, functions, novoAlvo2, duracao, 3100);
    },
    () => {
      finalizarAcaoExtra(personagemNovo, functions, resultadoAtaque.alvo, 0);
    },
    resultadoAtaque,
    functions,
    personagem,
    alvo,
    GOLPE_ESCUDO
  );
}
