import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_CATEGORIA, ACAO_EXECUCAO, ALVOS, ACAO_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../hook/batalha";

const { iniciarEfeito, finalizarAcao, atacar, realizarEtapasAtaqueSemDano, gastarMana } = useAcoesBase();
const { causarFatigado } = useCausarCondicao();

export const BOLHA_SUFOCANTE = {
  id: 20,
  nome: "Bolha Sufocante",
  elemento: ELEMENTOS.AGUA,
  custo: 1,
  tipo: ACAO_TIPO.DEBUFF,
  categoria: ACAO_CATEGORIA.MAGICO,
  descricao: "Invoca uma bolha de água que sufoca o inimigo, o deixando Fatigado por 1d4 rodadas.",
  efeito: "Deixa o alvo Fatigado por 1d4 rodadas.",
  evento: bolhaSufocanteEvento,
  alvos: ALVOS.INIMIGOS,
  execucao: ACAO_EXECUCAO.PADRAO,
  variantes: []
};

function bolhaSufocanteEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });

  let personagemNovo = gastarMana(personagem, acao.custo, functions);
  const resultadoAtaque = atacar(personagem, alvo, acao, functions);
  personagemNovo = resultadoAtaque.personagem;

  realizarEtapasAtaqueSemDano(
    () => {
      const novoAlvo = causarFatigado(alvo, 10 + personagem.atributos.magia, acao, functions, resultadoAtaque);
      const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.AGUA_2, ACOES_AUDIO.AGUA_1);
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
