import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { ACAO_EXECUCAO, ALVOS, ACAO_CATEGORIA, ACAO_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { getModificadoresDano } from "../../../utils/get-modificadores.util";
import { getDadosBonus } from "../../../utils/get-dados-bonus.util";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, causarDano, finalizarAcaoExtra, atacar, realizarEtapasAtaque, gastarMana } = useAcoesBase();

export const GOLPE_PARCEIRO_MAGICO = {
  id: 85,
  nome: "Golpe de Parceiro (Mágico)",
  dadoDeDano: "1d6+1",
  descricao: "Um companheiro seu realiza um ataque mágico adicional ao inimigo. Este ataque não soma o atributo no dano.",
  elemento: ELEMENTOS.ESSENCIA,
  tipo: ACAO_TIPO.ATAQUE,
  categoria: ACAO_CATEGORIA.MAGICO,
  custo: 1,
  evento: golpeAliadoMagicoEvento,
  alvos: ALVOS.INIMIGOS,
  execucao: ACAO_EXECUCAO.EXTRA,
  variantes: []
};

function golpeAliadoMagicoEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });

  let personagemNovo = gastarMana(personagem, acao.custo, functions);
  const modificadorDano = { valor: 1, atributo: "Modificador" };
  const resultadoAtaque = atacar(personagem, alvo, acao, functions);
  personagemNovo = resultadoAtaque.personagem;
  const modificadores = getModificadoresDano(personagem, alvo, acao, [modificadorDano], true);
  const dadoDano = rolarDado(1, 6, modificadores, acao.elemento, alvo.elemento);
  const danoTotal = getDadosBonus([dadoDano], personagem, alvo, rolarDado);

  realizarEtapasAtaque(
    () => {
      functions.ativarBannerRolagem([...danoTotal.dados], modificadores, danoTotal.total, personagem, resultadoAtaque, alvo);
    },
    () => {
      const novoAlvo = causarDano(resultadoAtaque.alvo, danoTotal.danos, resultadoAtaque, acao, functions);
      const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.TIRO_MAGICO, ACOES_AUDIO.MAGIA_2);
      finalizarAcaoExtra(personagemNovo, functions, novoAlvo, duracao);
    },
    () => {
      finalizarAcaoExtra(personagemNovo, functions, resultadoAtaque.alvo, 0);
    },
    resultadoAtaque,
    functions,
    personagem,
    alvo,
    acao
  );
}
