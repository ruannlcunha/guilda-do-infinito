import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { ACAO_EXECUCAO, ALVOS, ACAO_CATEGORIA, ACAO_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { getModificadoresDano } from "../../../utils/get-modificadores.util";
import { getDadosBonus } from "../../../utils/get-dados-bonus.util";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, causarDano, finalizarAcao, atacar, realizarEtapasAtaque } = useAcoesBase();

export const TIRO_PRECISO_TREVAS = {
  id: 73,
  nome: "Tiro Preciso (Trevas)",
  dadoDeDano: "1d8+AGI+1d6(Trevas)",
  descricao: "Um tiro de projétil de trevas mirando com precisão no alvo.",
  elemento: ELEMENTOS.TREVAS,
  tipo: ACAO_TIPO.ATAQUE,
  categoria: ACAO_CATEGORIA.DISTANCIA,
  custo: 0,
  evento: tiroPrecisoTrevas,
  alvos: ALVOS.INIMIGOS,
  execucao: ACAO_EXECUCAO.PADRAO,
  variantes: []
};

function tiroPrecisoTrevas(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });

  let personagemNovo = { ...personagem };

  const resultadoAtaque = atacar(personagem, alvo, acao, functions);
  personagemNovo = resultadoAtaque.personagem;
  const modificadores = getModificadoresDano(personagem, alvo, acao);
  const dado1d8 = rolarDado(1, 8, modificadores, ELEMENTOS.FISICO, alvo.elemento);
  const dado1d6Elemental = rolarDado(1, 6, [], TIRO_PRECISO_TREVAS.elemento, alvo.elemento);
  const danoTotal = getDadosBonus([dado1d8, dado1d6Elemental], personagem, alvo, rolarDado);

  realizarEtapasAtaque(
    () => {
      functions.ativarBannerRolagem([...danoTotal.dados], modificadores, danoTotal.total, personagem, resultadoAtaque, alvo);
    },
    () => {
      const novoAlvo = causarDano(resultadoAtaque.alvo, danoTotal.danos, resultadoAtaque, TIRO_PRECISO_TREVAS, functions);
      const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.TIRO_TREVAS, ACOES_AUDIO.FLECHA);
      finalizarAcao(personagemNovo, functions, novoAlvo, duracao);
    },
    () => {
      finalizarAcao(personagemNovo, functions, resultadoAtaque.alvo, 0);
    },
    resultadoAtaque,
    functions,
    personagem,
    alvo,
    TIRO_PRECISO_TREVAS
  );
}
