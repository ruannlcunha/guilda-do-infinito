import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_EXECUCAO, ALVOS } from "../../../constants/acoes/acoes.constant";
import { useEncerrarCondicao } from "../../../hook/batalha";
import { CONDICOES, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

const { iniciarEfeito, finalizarAcaoExtra, informarErro } = useAcoesBase();
const { encerrarAtaqueAgil } = useEncerrarCondicao();

export const DESFAZER_ATAQUE_AGIL = {
  id: 3,
  nome: "Desfazer Ataque Ágil",
  elemento: ELEMENTOS.FISICO,
  descricao: "Desfaz os efeitos da habilidade Ataque Ágil. Seu personagem volta a utilizar Força nos Ataques Corpo-a-Corpo.",
  evento: desfazerAtaqueAgilEvento,
  alvos: ALVOS.PESSOAL,
  execucao: ACAO_EXECUCAO.EXTRA,
  variantes: []
};

function desfazerAtaqueAgilEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });

  try {
    let personagemNovo = { ...personagem };
    const alvoCorreto = personagem.idCombate === alvo.idCombate ? personagemNovo : alvo;
    const novoAlvo = encerrarAtaqueAgil(alvoCorreto, functions);

    const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.ATAQUE_AGIL, ACOES_AUDIO.MAGIA_1);
    functions.adicionarLog(`${personagem.nome} usou ${acao.nome} e encerrou a condição ${CONDICOES.ATAQUE_AGIL.nome}.`);
    finalizarAcaoExtra(personagemNovo, functions, novoAlvo, duracao);
  } catch (error) {
    informarErro(error, functions);
    throw error;
  }
}
