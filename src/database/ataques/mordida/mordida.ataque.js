import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { ACAO_EXECUCAO, ALVOS, ACAO_CATEGORIA, ACAO_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { getModificadoresDano } from "../../../utils/get-modificadores.util";
import { getDadosBonus } from "../../../utils/get-dados-bonus.util";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, causarDano, finalizarAcao, finalizarAcaoExtra, gastarMana, atacar, realizarEtapasAtaque } = useAcoesBase();

export const MORDIDA = {
  id: 77,
  nome: "Mordida",
  dadoDeDano: "1d6",
  descricao: "Atinge o inimigo com uma mordida.",
  elemento: ELEMENTOS.FISICO,
  tipo: ACAO_TIPO.ATAQUE,
  categoria: ACAO_CATEGORIA.CORPO_A_CORPO,
  custo: 0,
  evento: mordidaEvento,
  alvos: ALVOS.INIMIGOS,
  execucao: ACAO_EXECUCAO.PADRAO,
  bonus: "1d6",
  variantes: [
    {
      categoria: "Execução",
      lista: [
        {
          varianteId: "PADRAO",
          titulo: "Padrão",
          descricao: "A execução do ataque é uma ação Padrão.",
          novaAcao: {
            custo: 0,
            execucao: ACAO_EXECUCAO.PADRAO,
            evento: mordidaEvento
          }
        },
        {
          varianteId: "EXTRA",
          titulo: "Extra",
          descricao: "A execução do ataque é uma ação Extra.\n Custo: +1PM",
          novaAcao: {
            custo: 1,
            execucao: ACAO_EXECUCAO.EXTRA,
            evento: mordidaExtraEvento
          }
        },
      ]
    }
  ]
};

function mordidaEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });

  let personagemNovo = gastarMana(personagem, acao.custo, functions);

  const resultadoAtaque = atacar(personagem, alvo, acao, functions);
  personagemNovo = resultadoAtaque.personagem;
  const modificadores = getModificadoresDano(personagem, alvo, acao);
  const dadoDano = rolarDado(1, 6, modificadores, acao.elemento, alvo.elemento);
  const danoTotal = getDadosBonus([dadoDano], personagem, alvo, rolarDado);

  realizarEtapasAtaque(
    () => {
      functions.ativarBannerRolagem([...danoTotal.dados], modificadores, danoTotal.total, personagem, resultadoAtaque, alvo);
    },
    () => {
      const novoAlvo = causarDano(resultadoAtaque.alvo, danoTotal.danos, resultadoAtaque, acao, functions);
      const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.MORDIDA, ACOES_AUDIO.MORDIDA);
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

function mordidaExtraEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });

  let personagemNovo = gastarMana(personagem, acao.custo, functions);

  const resultadoAtaque = atacar(personagem, alvo, acao, functions);
  personagemNovo = resultadoAtaque.personagem;
  const modificadores = getModificadoresDano(personagem, alvo, acao);
  const dadoDano = rolarDado(1, 6, modificadores, acao.elemento, alvo.elemento);
  const danoTotal = getDadosBonus([dadoDano], personagem, alvo, rolarDado);

  realizarEtapasAtaque(
    () => {
      functions.ativarBannerRolagem([...danoTotal.dados], modificadores, danoTotal.total, personagem, resultadoAtaque, alvo);
    },
    () => {
      const novoAlvo = causarDano(resultadoAtaque.alvo, danoTotal.danos, resultadoAtaque, acao, functions);
      const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.MORDIDA, ACOES_AUDIO.MORDIDA);
      finalizarAcaoExtra(personagemNovo, functions, novoAlvo, duracao);
    },
    () => {
      finalizarAcaoExtra(personagemNovo, functions, resultadoAtaque.alvo, 0);
    },
    resultadoAtaque,
    functions,
    personagem,
    alvo,
    acao
  );
}
