import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_CATEGORIA, ACAO_EXECUCAO, ALVOS, ACAO_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../hook/batalha";

const { iniciarEfeito, finalizarAcao, gastarMana, informarErro } = useAcoesBase();
const { causarDuplicatas } = useCausarCondicao();

export const DUPLICATA_ILUSORIA = {
  id: 3,
  nome: "Duplicata Ilusória",
  elemento: ELEMENTOS.ESSENCIA,
  custo: 1,
  tipo: ACAO_TIPO.BUFF,
  categoria: ACAO_CATEGORIA.MAGICO,
  descricao: "Cria 3 clones ilusórios que distraem o inimigo. Fornece +6 de defesa, porém perde 2 a cada tentativa de golpe sofrido.",
  evento: duplicataIlusoriaEvento,
  alvos: ALVOS.PESSOAL,
  execucao: ACAO_EXECUCAO.PADRAO,
  variantes: []
};

function duplicataIlusoriaEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });
  try {
    let personagemNovo = gastarMana(personagem, acao.custo, functions);
    const alvoCorreto = personagem.idCombate === alvo.idCombate ? personagemNovo : alvo;
    functions.adicionarLog(`${personagem.nome} usou ${DUPLICATA_ILUSORIA.nome} em ${alvoCorreto.nome}.`);
    const novoAlvo = causarDuplicatas(alvoCorreto, DUPLICATA_ILUSORIA, functions);
    const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.DUPLICATA_ILUSORIA, ACOES_AUDIO.MAGIA_1);
    finalizarAcao(personagemNovo, functions, novoAlvo, duracao);
  } catch (error) {
    informarErro(error, functions);
    throw error;
  }
}
