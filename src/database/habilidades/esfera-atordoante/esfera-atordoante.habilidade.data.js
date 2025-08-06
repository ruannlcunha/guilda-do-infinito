import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_CATEGORIA, ACAO_EXECUCAO, ALVOS, ACAO_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../hook/batalha";

const { iniciarEfeito, finalizarAcao, atacar, realizarEtapasAtaqueSemDano, gastarMana } = useAcoesBase();
const { causarAtordoado } = useCausarCondicao();

export const ESFERA_ATORDOANTE = {
  id: 10,
  nome: "Esfera Atordoante",
  elemento: ELEMENTOS.ELETRICO,
  custo: 1,
  tipo: ACAO_TIPO.DEBUFF,
  categoria: ACAO_CATEGORIA.MAGICO,
  descricao: "Uma esfera de energia elétrica que explode deixando o inimigo atordoado por 1d6 rodadas.",
  evento: esferaAtordoanteEvento,
  alvos: ALVOS.INIMIGOS,
  execucao: ACAO_EXECUCAO.PADRAO,
  variantes: []
};

function esferaAtordoanteEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });

  let personagemNovo = gastarMana(personagem, acao.custo, functions);
  const resultadoAtaque = atacar(personagem, alvo, acao, functions);
  personagemNovo = resultadoAtaque.personagem;

  realizarEtapasAtaqueSemDano(
    () => {
      const novoAlvo = causarAtordoado(alvo, "1d6", 10 + personagem.atributos.magia, ESFERA_ATORDOANTE, functions, resultadoAtaque);
      const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.ELETRICO_3, ACOES_AUDIO.ELETRICO_1);
      finalizarAcao(personagemNovo, functions, novoAlvo, duracao);
    },
    () => {
      finalizarAcao(personagemNovo, functions, alvo, 0);
    },
    resultadoAtaque,
    functions,
    personagem,
    alvo,
    ESFERA_ATORDOANTE
  );
}
