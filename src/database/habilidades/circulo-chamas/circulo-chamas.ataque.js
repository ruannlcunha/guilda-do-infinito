import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { ACAO_EXECUCAO, ALVOS, ACAO_CATEGORIA, ACAO_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { getModificadoresConjuracao } from "../../../utils/get-modificadores.util";
import { useCausarCondicao } from "../../../hook/batalha";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, causarDano, finalizarAcaoArea, atacar, realizarEtapasAtaqueArea, gastarMana } = useAcoesBase();
const { causarQueimando } = useCausarCondicao();

export const CIRCULO_CHAMAS = {
  id: 8,
  nome: "Círculo de Chamas",
  descricao: "Invoca chamas dentro de um círculo que atinge todos os inimigos em campo, podendo deixar todos Queimando.",
  elemento: ELEMENTOS.FOGO,
  custo: 3,
  categoria: ACAO_CATEGORIA.MAGICO,
  evento: circuloChamasEvento,
  alvos: ALVOS.INIMIGOS_AREA,
  execucao: ACAO_EXECUCAO.PADRAO,
  variantes: []
};

function circuloChamasEvento(personagem, alvos, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });

  let personagemNovo = gastarMana(personagem, acao.custo, functions);
  const modificadorMagia = {
    valor: personagem.atributos.magia,
    atributo: "Magia"
  };

  const modificadoresAtaque = getModificadoresConjuracao(acao, [modificadorMagia], personagem);
  const dadoPadrao = rolarDado(1, 20, modificadoresAtaque);
  const ataquePadrao = {
    resultadoDado: dadoPadrao.dados[0].resultado,
    resultadoTotal: dadoPadrao.total,
    modificadores: modificadoresAtaque
  };
  functions.ativarBannerAtaque(ataquePadrao, null, personagem.corTema);

  const ataques = [];
  alvos.map((alvo) => {
    const resultadoAtaque = atacar(personagem, alvo, acao, functions, ataquePadrao);
    personagemNovo = resultadoAtaque.personagem;
    ataques.push(resultadoAtaque);
  });
  const resultadoAtaques = { ataquePadrao, ataques };
  const novosAlvos = [];
  resultadoAtaques.ataques.map((resultadoAtaque) => {
    novosAlvos.push(resultadoAtaque.alvo);
  });

  realizarEtapasAtaqueArea(
    () => {
      const novosAlvos2 = [];
      let duracao = 0;
      resultadoAtaques.ataques.map((resultadoAtaque) => {
        if (resultadoAtaque.acerto) {
          const novoAlvo = causarQueimando(resultadoAtaque.alvo, 10 + personagem.atributos.magia, acao, functions, resultadoAtaque);
          duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.FOGO_1, ACOES_AUDIO.FOGO);
          novosAlvos.push(novoAlvo);
        } else {
          novosAlvos.push(resultadoAtaque.alvo);
        }
      });

      finalizarAcaoArea(personagemNovo, functions, novosAlvos2, duracao, 3100);
    },
    null,
    () => {
      finalizarAcaoArea(personagemNovo, functions, novosAlvos, 0);
    },
    resultadoAtaques,
    functions,
    personagem,
    acao
  );
}
