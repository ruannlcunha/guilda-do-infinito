import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_CATEGORIA, ACAO_EXECUCAO, ALVOS, ACAO_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../hook/batalha";

const { iniciarEfeito, finalizarAcao, informarErro } = useAcoesBase();
const { causarVoando } = useCausarCondicao();

export const VOAR = {
  id: 46,
  nome: "Voar",
  elemento: ELEMENTOS.FISICO,
  custo: 0,
  tipo: ACAO_TIPO.BUFF,
  categoria: ACAO_CATEGORIA.FISICO,
  descricao: "Você começa a voar pelos céus recebendo +2 de Defesa, mas não pode usar Ataques Corpo-a-corpo.",
  evento: voarEvento,
  alvos: ALVOS.PESSOAL,
  execucao: ACAO_EXECUCAO.PADRAO,
  variantes: []
};

async function voarEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });
  try {
    let personagemNovo = { ...personagem };
    const alvoCorreto = personagem.idCombate === alvo.idCombate ? personagemNovo : alvo;
    functions.adicionarLog(`${personagem.nome} usou ${acao.nome} em si mesmo.`);
    const novoAlvo = causarVoando(alvoCorreto, acao, functions);
    const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.VOAR, ACOES_AUDIO.VOAR);
    finalizarAcao(personagemNovo, functions, novoAlvo, duracao);
    return duracao;
  } catch (error) {
    informarErro(error, functions);
    throw error;
  }
}
