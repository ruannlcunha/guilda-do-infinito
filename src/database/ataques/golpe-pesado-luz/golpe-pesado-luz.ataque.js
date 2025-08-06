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

export const GOLPE_PESADO_LUZ = {
  id: 44,
  nome: "Golpe Pesado (Luz)",
  dadoDeDano: "1d10+FOR+1d6(Luz)",
  descricao: "Um golpe de luz impactante causado por uma arma pesada.",
  elemento: ELEMENTOS.LUZ,
  tipo: ACAO_TIPO.ATAQUE,
  categoria: ACAO_CATEGORIA.CORPO_A_CORPO,
  custo: 0,
  evento: golpePesadoLuz,
  alvos: ALVOS.INIMIGOS,
  execucao: ACAO_EXECUCAO.PADRAO,
  variantes: []
};

function golpePesadoLuz(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });

  let personagemNovo = { ...personagem };

  const resultadoAtaque = atacar(personagem, alvo, acao, functions);
  personagemNovo = resultadoAtaque.personagem;
  const modificadores = getModificadoresDano(personagem, alvo, acao);
  const dado1d10 = rolarDado(1, 10, modificadores, ELEMENTOS.FISICO, alvo.elemento);
  const dado1d6Elemental = rolarDado(1, 6, [], GOLPE_PESADO_LUZ.elemento, alvo.elemento);
  const danoTotal = getDadosBonus([dado1d10, dado1d6Elemental], personagem, alvo, rolarDado);

  realizarEtapasAtaque(
    () => {
      functions.ativarBannerRolagem([...danoTotal.dados], modificadores, danoTotal.total, personagem, resultadoAtaque, alvo);
    },
    () => {
      const novoAlvo = causarDano(resultadoAtaque.alvo, danoTotal.danos, resultadoAtaque, GOLPE_PESADO_LUZ, functions);
      const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.GOLPE_PESADO_LUZ, ACOES_AUDIO.CORTE);
      finalizarAcao(personagemNovo, functions, novoAlvo, duracao);
    },
    () => {
      finalizarAcao(personagemNovo, functions, resultadoAtaque.alvo, 0);
    },
    resultadoAtaque,
    functions,
    personagem,
    alvo,
    GOLPE_PESADO_LUZ
  );
}
