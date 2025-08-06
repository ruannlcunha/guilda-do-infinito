import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_CATEGORIA, ACAO_EXECUCAO, ALVOS, ACAO_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../hook/batalha";

const { iniciarEfeito, finalizarAcaoExtra, gastarMana, informarErro } = useAcoesBase();
const { causarAtaqueEspecial } = useCausarCondicao();

export const ATAQUE_ESPECIAL = {
  id: 14,
  nome: "Ataque Especial",
  elemento: ELEMENTOS.FISICO,
  custo: 1,
  tipo: ACAO_TIPO.BUFF,
  categoria: ACAO_CATEGORIA.FISICO,
  descricao: "Fortalece seu físico e ganha +2 de bônus no próximo ataque.",
  evento: ataqueEspecialEvento,
  alvos: ALVOS.PESSOAL,
  execucao: ACAO_EXECUCAO.EXTRA,
  bonus: 2,
  variantes: []
};

async function ataqueEspecialEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });
  try {
    let personagemNovo = gastarMana(personagem, acao.custo, functions);
    const alvoCorreto = personagem.idCombate === alvo.idCombate ? personagemNovo : alvo;
    functions.adicionarLog(`${personagem.nome} usou ${acao.nome} em si mesmo.`);
    const novoAlvo = causarAtaqueEspecial(alvoCorreto, acao, functions);
    const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.ATAQUE_ESPECIAL, ACOES_AUDIO.CURA);
    finalizarAcaoExtra(personagemNovo, functions, novoAlvo, duracao);
    return duracao;
  } catch (error) {
    informarErro(error, functions);
    throw error;
  }
}
