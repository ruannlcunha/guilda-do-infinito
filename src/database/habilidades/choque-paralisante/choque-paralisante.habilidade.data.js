import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_CATEGORIA, ACAO_EXECUCAO, ALVOS, ACAO_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../hook/batalha";

const { iniciarEfeito, finalizarAcao, atacar, realizarEtapasAtaqueSemDano, gastarMana } = useAcoesBase();
const { causarParalisado } = useCausarCondicao();

export const CHOQUE_PARALISANTE = {
  id: 16,
  nome: "Choque Paralisante",
  elemento: ELEMENTOS.ELETRICO,
  custo: 1,
  tipo: ACAO_TIPO.DEBUFF,
  categoria: ACAO_CATEGORIA.MAGICO,
  descricao: "Um choque que afeta o corpo inteiro do alvo, deixando ele Paralisado.",
  evento: choqueParalisanteEvento,
  alvos: ALVOS.INIMIGOS,
  execucao: ACAO_EXECUCAO.PADRAO,
  variantes: []
};

function choqueParalisanteEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });

  let personagemNovo = gastarMana(personagem, acao.custo, functions);
  const resultadoAtaque = atacar(personagem, alvo, acao, functions);
  personagemNovo = resultadoAtaque.personagem;

  realizarEtapasAtaqueSemDano(
    () => {
      const novoAlvo = causarParalisado(alvo, 10 + personagem.atributos.magia, CHOQUE_PARALISANTE, functions, resultadoAtaque);
      const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.ELETRICO_2, ACOES_AUDIO.ELETRICO_1);
      finalizarAcao(personagemNovo, functions, novoAlvo, duracao);
    },
    () => {
      finalizarAcao(personagemNovo, functions, alvo, 0);
    },
    resultadoAtaque,
    functions,
    personagem,
    alvo,
    CHOQUE_PARALISANTE
  );
}
