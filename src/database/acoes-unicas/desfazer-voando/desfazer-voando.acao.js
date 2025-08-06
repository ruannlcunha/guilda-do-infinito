import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_EXECUCAO, ALVOS } from "../../../constants/acoes/acoes.constant";
import { useEncerrarCondicao } from "../../../hook/batalha";
import { CONDICOES, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

const { iniciarEfeito, finalizarAcaoExtra, informarErro } = useAcoesBase();
const { encerrarVoando } = useEncerrarCondicao();

export const DESFAZER_VOANDO = {
  id: 5,
  nome: "Desfazer Voando",
  elemento: ELEMENTOS.FISICO,
  descricao: "Desfaz os efeitos da habilidade Voar. Seu personagem perde o bônus de Defesa, mas volta a poder usar Ataques Corpo-a-corpo.",
  evento: desfazerVoandoEvento,
  alvos: ALVOS.PESSOAL,
  execucao: ACAO_EXECUCAO.EXTRA,
  variantes: []
};

function desfazerVoandoEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });

  try {
    let personagemNovo = { ...personagem };
    const alvoCorreto = personagem.idCombate === alvo.idCombate ? personagemNovo : alvo;
    const novoAlvo = encerrarVoando(alvoCorreto, functions);

    const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.VOAR, ACOES_AUDIO.VOAR);
    functions.adicionarLog(`${personagem.nome} usou ${acao.nome} e encerrou a condição ${CONDICOES.VOANDO.nome}.`);
    finalizarAcaoExtra(personagemNovo, functions, novoAlvo, duracao);
  } catch (error) {
    informarErro(error, functions);
    throw error;
  }
}
