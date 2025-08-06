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
const { causarEnvenenado } = useCausarCondicao();

export const BOLHA_VENENO = {
  id: 79,
  nome: "Bolha de Veneno",
  dadoDeDano: "1d8",
  descricao: "Uma bolha de veneno que explode no inimigo e pode envenená-lo.",
  elemento: ELEMENTOS.ACIDO,
  tipo: ACAO_TIPO.ATAQUE,
  categoria: ACAO_CATEGORIA.MAGICO,
  custo: 1,
  evento: bolhaVenenoEvento,
  alvos: ALVOS.INIMIGOS,
  execucao: ACAO_EXECUCAO.PADRAO,
  variantes: []
};

function bolhaVenenoEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });

  let personagemNovo = gastarMana(personagem, acao.custo, functions);
  const resultadoAtaque = atacar(personagem, alvo, acao, functions);
  personagemNovo = resultadoAtaque.personagem;
  const modificadores = getModificadoresDano(personagem, alvo, acao);
  const dadoDano = rolarDado(1, 8, modificadores, BOLHA_VENENO.elemento, alvo.elemento);
  const danoTotal = getDadosBonus([dadoDano], personagem, alvo, rolarDado);

  realizarEtapasAtaque(
    () => {
      functions.ativarBannerRolagem([...danoTotal.dados], modificadores, danoTotal.total, personagem, resultadoAtaque, alvo);
    },
    () => {
      const novoAlvo = causarDano(resultadoAtaque.alvo, danoTotal.danos, resultadoAtaque, BOLHA_VENENO, functions);
      const novoAlvo2 = causarEnvenenado(novoAlvo, 10 + personagem.atributos.magia, BOLHA_VENENO, functions);
      const duracao = iniciarEfeito(novoAlvo2, functions, EFFECTS.ACIDO_1, ACOES_AUDIO.ACIDO);
      finalizarAcao(personagemNovo, functions, novoAlvo2, duracao, 3100);
    },
    () => {
      finalizarAcao(personagemNovo, functions, resultadoAtaque.alvo, 0);
    },
    resultadoAtaque,
    functions,
    personagem,
    alvo,
    BOLHA_VENENO
  );
}
