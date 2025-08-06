import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_CATEGORIA, ACAO_EXECUCAO, ALVOS, ACAO_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../hook/batalha";

const { iniciarEfeito, finalizarAcao, gastarMana, realizarEtapasAtaqueSemDano, atacar } = useAcoesBase();
const { causarAmaldicoado } = useCausarCondicao();

export const LANCAR_MALDICAO = {
  id: 27,
  nome: "Lançar Maldição",
  elemento: ELEMENTOS.TREVAS,
  custo: 1,
  tipo: ACAO_TIPO.DEBUFF,
  categoria: ACAO_CATEGORIA.MAGICO,
  descricao: "Amaldiçoa o alvo, que recebe -1 em Ataque, Conjuração e Dano por 1d6 rodadas. Caso o alvo esteja Abençoado, retira essa condição.",
  evento: lancarMaldicaoEvento,
  alvos: ALVOS.INIMIGOS,
  execucao: ACAO_EXECUCAO.PADRAO,
  bonus: "1d6",
  variantes: []
};

function lancarMaldicaoEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });

  let personagemNovo = gastarMana(personagem, acao.custo, functions);
  const resultadoAtaque = atacar(personagem, alvo, acao, functions);
  personagemNovo = resultadoAtaque.personagem;

  realizarEtapasAtaqueSemDano(
    () => {
      const novoAlvo = causarAmaldicoado(alvo, 10 + personagem.atributos.magia, acao, functions, resultadoAtaque);
      const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.TREVAS_2, ACOES_AUDIO.TREVAS_1);
      finalizarAcao(personagemNovo, functions, novoAlvo, duracao);
    },
    () => {
      finalizarAcao(personagemNovo, functions, alvo, 0);
    },
    resultadoAtaque,
    functions,
    personagem,
    alvo,
    acao
  );
}
