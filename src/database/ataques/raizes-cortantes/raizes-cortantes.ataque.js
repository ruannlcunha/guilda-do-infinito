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
const { iniciarEfeito, causarDano, finalizarAcao, atacar, realizarEtapasAtaque, gastarMana } = useAcoesBase();

export const RAIZES_CORTANTES = {
  id: 6,
  nome: "Raízes Cortantes",
  dadoDeDano: "3d4+1",
  descricao: "Raízes afiadas surgem do chão e atacam o inimigo.",
  elemento: ELEMENTOS.FISICO,
  tipo: ACAO_TIPO.ATAQUE,
  categoria: ACAO_CATEGORIA.MAGICO,
  custo: 1,
  evento: raizesCortantesEvento,
  alvos: ALVOS.INIMIGOS,
  execucao: ACAO_EXECUCAO.PADRAO,
  variantes: []
};

function raizesCortantesEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });

  let personagemNovo = gastarMana(personagem, acao.custo, functions);
  const modificadorDano = { valor: 1, atributo: "Modificador" };
  const resultadoAtaque = atacar(personagem, alvo, acao, functions);
  personagemNovo = resultadoAtaque.personagem;
  const modificadores = getModificadoresDano(personagem, alvo, acao, [modificadorDano]);
  const dadoDano = rolarDado(3, 4, modificadores, RAIZES_CORTANTES.elemento, alvo.elemento);
  const danoTotal = getDadosBonus([dadoDano], personagem, alvo, rolarDado);

  realizarEtapasAtaque(
    () => {
      functions.ativarBannerRolagem([...danoTotal.dados], modificadores, danoTotal.total, personagem, resultadoAtaque, alvo);
    },
    () => {
      const novoAlvo = causarDano(resultadoAtaque.alvo, danoTotal.danos, resultadoAtaque, RAIZES_CORTANTES, functions);
      const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.RAIZES, ACOES_AUDIO.PLANTA_1);
      finalizarAcao(personagemNovo, functions, novoAlvo, duracao);
    },
    () => {
      finalizarAcao(personagemNovo, functions, resultadoAtaque.alvo, 0);
    },
    resultadoAtaque,
    functions,
    personagem,
    alvo,
    RAIZES_CORTANTES
  );
}
