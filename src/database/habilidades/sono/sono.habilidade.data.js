import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_CATEGORIA, ACAO_EXECUCAO, ALVOS, ACAO_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../hook/batalha";

const { iniciarEfeito, finalizarAcao, atacar, realizarEtapasAtaqueSemDano, gastarMana } = useAcoesBase();
const { causarDormindo } = useCausarCondicao();

export const SONO = {
  id: 17,
  nome: "Sono",
  elemento: ELEMENTOS.ESSENCIA,
  custo: 3,
  tipo: ACAO_TIPO.DEBUFF,
  categoria: ACAO_CATEGORIA.MAGICO,
  descricao: "Uma magia que faz o alvo adormecer e pode deixá-lo Dormindo.",
  evento: sonoEvento,
  alvos: ALVOS.INIMIGOS,
  execucao: ACAO_EXECUCAO.PADRAO,
  variantes: []
};

function sonoEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });

  let personagemNovo = gastarMana(personagem, acao.custo, functions);
  const resultadoAtaque = atacar(personagem, alvo, acao, functions);
  personagemNovo = resultadoAtaque.personagem;

  realizarEtapasAtaqueSemDano(
    () => {
      const novoAlvo = causarDormindo(alvo, 10 + personagem.atributos.magia, acao, functions, resultadoAtaque);
      const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.SONO, ACOES_AUDIO.MAGIA_3);
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
