import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_CATEGORIA, ACAO_EXECUCAO, ALVOS, ACAO_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../hook/batalha";

const { iniciarEfeito, finalizarAcaoExtra, gastarMana, informarErro } = useAcoesBase();
const { causarAtaqueDivino } = useCausarCondicao();

export const ATAQUE_DIVINO_TREVAS = {
  id: 41,
  nome: "Ataque Divino (Trevas)",
  elemento: ELEMENTOS.TREVAS,
  custo: 2,
  tipo: ACAO_TIPO.BUFF,
  categoria: ACAO_CATEGORIA.MAGICO,
  descricao: "Você recebe um bônus de Ataque igual a seu atributo de Magia e +1d8 de dano de Trevas no seu próximo ataque.",
  evento: ataqueDivinoTrevasEvento,
  alvos: ALVOS.PESSOAL,
  execucao: ACAO_EXECUCAO.EXTRA,
  bonus: "1d8",
  variantes: []
};

async function ataqueDivinoTrevasEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });
  try {
    let personagemNovo = gastarMana(personagem, acao.custo, functions);
    const alvoCorreto = personagem.idCombate === alvo.idCombate ? personagemNovo : alvo;
    functions.adicionarLog(`${personagem.nome} usou ${acao.nome} em si mesmo.`);
    const novoAlvo = causarAtaqueDivino(alvoCorreto, acao, functions);
    const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.ATAQUE_DIVINO_TREVAS, ACOES_AUDIO.TREVAS_1);
    finalizarAcaoExtra(personagemNovo, functions, novoAlvo, duracao);
    return duracao;
  } catch (error) {
    informarErro(error, functions);
    throw error;
  }
}
