import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { ACAO_EXECUCAO, ALVOS, ACAO_CATEGORIA, ACAO_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { getModificadoresDano } from "../../../utils/get-modificadores.util";
import { getDadosBonus } from "../../../utils/get-dados-bonus.util";
import { useCausarCondicao } from "../../../hook/batalha";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, causarDano, finalizarAcao, atacar, realizarEtapasAtaque, gastarMana } = useAcoesBase();
const { causarQueimando } = useCausarCondicao();

export const BOLA_DE_FOGO = {
  id: 2,
  nome: "Bola de Fogo",
  dadoDeDano: "2d6",
  descricao: "Uma esfera de chamas ardentes que queima o inimigo, causando 2d6 de dano de Fogo.",
  elemento: ELEMENTOS.FOGO,
  tipo: ACAO_TIPO.ATAQUE,
  categoria: ACAO_CATEGORIA.MAGICO,
  custo: 1,
  evento: bolaDeFogoEvento,
  alvos: ALVOS.INIMIGOS,
  execucao: ACAO_EXECUCAO.PADRAO,
  variantes: [
    {
      categoria: "Variante",
      lista: [
        {
          varianteId: "NORMAL",
          titulo: "Normal",
          descricao: "Uma esfera de chamas ardentes que queima o inimigo, causando 2d6 de dano de Fogo.",
          novaAcao: {
            nome: "Bola de Fogo",
            custo: 1,
            evento: bolaDeFogoEvento
          }
        },
        {
          varianteId: "APRIMORADO",
          titulo: "Aprimorado",
          descricao: "Uma esfera de chamas ardentes que queima o inimigo, causando 4d6 de dano de Fogo.\n Custo: +2PM",
          novaAcao: {
            nome: "Bola de Fogo (Aprimorado)",
            custo: 3,
            evento: bolaDeFogoAprimoradoEvento
          }
        },
      ]
    }
  ]
};

function bolaDeFogoEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });

  let personagemNovo = gastarMana(personagem, acao.custo, functions);
  const resultadoAtaque = atacar(personagem, alvo, acao, functions);
  personagemNovo = resultadoAtaque.personagem;
  const modificadores = getModificadoresDano(personagem, alvo, acao);
  const dadoDano = rolarDado(2, 6, modificadores, acao.elemento, alvo.elemento);
  const danoTotal = getDadosBonus([dadoDano], personagem, alvo, rolarDado);

  realizarEtapasAtaque(
    () => {
      functions.ativarBannerRolagem([...danoTotal.dados], modificadores, danoTotal.total, personagem, resultadoAtaque, alvo);
    },
    () => {
      const novoAlvo = causarDano(resultadoAtaque.alvo, danoTotal.danos, resultadoAtaque, acao, functions);
      const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.BOLA_DE_FOGO, ACOES_AUDIO.FOGO);
      finalizarAcao(personagemNovo, functions, novoAlvo, duracao);
    },
    () => {
      finalizarAcao(personagemNovo, functions, resultadoAtaque.alvo, 0);
    },
    resultadoAtaque,
    functions,
    personagem,
    alvo,
    acao
  );
}

function bolaDeFogoAprimoradoEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });

  let personagemNovo = gastarMana(personagem, acao.custo, functions);
  const resultadoAtaque = atacar(personagem, alvo, acao, functions);
  const modificadores = getModificadoresDano(personagem, alvo, acao);
  const dadoDano = rolarDado(4, 6, modificadores, acao.elemento, alvo.elemento);
  const danoTotal = getDadosBonus([dadoDano], personagem, alvo, rolarDado);

  realizarEtapasAtaque(
    () => {
      functions.ativarBannerRolagem([...danoTotal.dados], modificadores, danoTotal.total, personagem, resultadoAtaque, alvo);
    },
    () => {
      const novoAlvo = causarDano(resultadoAtaque.alvo, danoTotal.danos, resultadoAtaque, acao, functions);
      const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.BOLA_DE_FOGO, ACOES_AUDIO.FOGO);
      finalizarAcao(personagemNovo, functions, novoAlvo, duracao);
    },
    () => {
      finalizarAcao(personagemNovo, functions, resultadoAtaque.alvo, 0);
    },
    resultadoAtaque,
    functions,
    personagem,
    alvo,
    acao
  );
}

function bolaDeFogoNivel3Evento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });

  let personagemNovo = gastarMana(personagem, acao.custo, functions);
  const resultadoAtaque = atacar(personagem, alvo, acao, functions);
  const modificadores = getModificadoresDano(personagem, alvo, acao);
  const dadoDano = rolarDado(4, 6, modificadores, acao.elemento, alvo.elemento);
  const danoTotal = getDadosBonus([dadoDano], personagem, alvo, rolarDado);

  realizarEtapasAtaque(
    () => {
      functions.ativarBannerRolagem([...danoTotal.dados], modificadores, danoTotal.total, personagem, resultadoAtaque, alvo);
    },
    () => {
      const novoAlvo = causarDano(resultadoAtaque.alvo, danoTotal.danos, resultadoAtaque, acao, functions);
      const novoAlvo2 = causarQueimando(novoAlvo, 10 + personagem.atributos.magia, BOLA_DE_FOGO, functions);
      const duracao = iniciarEfeito(novoAlvo2, functions, EFFECTS.BOLA_DE_FOGO, ACOES_AUDIO.FOGO);
      finalizarAcao(personagemNovo, functions, novoAlvo2, duracao);
    },
    () => {
      finalizarAcao(personagemNovo, functions, resultadoAtaque.alvo, 0);
    },
    resultadoAtaque,
    functions,
    personagem,
    alvo,
    acao
  );
}
