import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_CATEGORIA, ACAO_EXECUCAO, ALVOS, ACAO_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../hook/batalha";

const { iniciarEfeito, finalizarAcaoExtra, informarErro } = useAcoesBase();
const { causarAtaqueAgil } = useCausarCondicao();

export const ATAQUE_AGIL = {
  id: 32,
  nome: "Ataque Ágil",
  elemento: ELEMENTOS.FISICO,
  custo: 0,
  tipo: ACAO_TIPO.BUFF,
  categoria: ACAO_CATEGORIA.FISICO,
  descricao: "Seus Ataques corpo-a-corpo passam a utilizar o atributo de Agilidade invés de Força.",
  evento: ataqueAgilEvento,
  alvos: ALVOS.PESSOAL,
  execucao: ACAO_EXECUCAO.EXTRA,
  variantes: []
};

async function ataqueAgilEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });
  try {
    let personagemNovo = { ...personagem };
    const alvoCorreto = personagem.idCombate === alvo.idCombate ? personagemNovo : alvo;
    functions.adicionarLog(`${personagem.nome} usou ${acao.nome} em si mesmo.`);
    const novoAlvo = causarAtaqueAgil(alvoCorreto, acao, functions);
    const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.ATAQUE_AGIL, ACOES_AUDIO.MAGIA_1);
    finalizarAcaoExtra(personagemNovo, functions, novoAlvo, duracao);
    return duracao;
  } catch (error) {
    informarErro(error, functions);
    throw error;
  }
}
