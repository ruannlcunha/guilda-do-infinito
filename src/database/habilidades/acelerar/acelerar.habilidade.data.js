import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_CATEGORIA, ACAO_EXECUCAO, ALVOS, ACAO_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../hook/batalha";
import { BANNER_DURACAO } from "../../../constants";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";

const { iniciarEfeito, finalizarAcao, gastarMana, informarErro } = useAcoesBase();
const { causarVeloz } = useCausarCondicao();
const { rolarDado } = useRolarDado();

export const ACELERAR = {
  id: 24,
  nome: "Acelerar",
  elemento: ELEMENTOS.ELETRICO,
  custo: 1,
  tipo: ACAO_TIPO.BUFF,
  categoria: ACAO_CATEGORIA.MAGICO,
  descricao: "Acelera a sua velocidade de movimento, recebendo a condição Veloz por 1d6 rodadas.",
  evento: acelerarEvento,
  alvos: ALVOS.PESSOAL,
  execucao: ACAO_EXECUCAO.PADRAO,
  variantes: [
    {
      categoria: "Nível",
      lista: [
        {
          varianteId: "NIVEL_1",
          titulo: "1",
          descricao: "Acelera a sua velocidade de movimento, recebendo a condição Veloz por 1d6 rodadas.",
          novaAcao: {
            nome: "Acelerar",
            custo: 1,
            evento: acelerarEvento
          }
        },
        {
          varianteId: "NIVEL_2",
          titulo: "2",
          descricao: "Acelera a velocidade de movimento de um aliado, recebendo a condição Veloz por 2d4 rodadas.",
          novaAcao: {
            nome: "Acelerar (Nível 2)",
            custo: 3,
            alvos: ALVOS.ALIADOS,
            evento: acelerarNivel2Evento
          }
        }
      ]
    }
  ]
};

function acelerarEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });
  try {
    let personagemNovo = gastarMana(personagem, acao.custo, functions);
    const alvoCorreto = personagem.idCombate === alvo.idCombate ? personagemNovo : alvo;
    const { dados, total } = rolarDado(1, 6, []);
    functions.ativarBannerRolagem([...dados], [], total, personagem.corTema);

    function _etapas() {
      functions.adicionarLog(`${personagem.nome} usou ${ACELERAR.nome} em ${alvoCorreto.nome}.`);
      const novoAlvo = causarVeloz(alvoCorreto, total, ACELERAR, functions);
      const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.ELETRICO_2, ACOES_AUDIO.ELETRICO_1);
      finalizarAcao(personagemNovo, functions, novoAlvo, duracao);
    }

    const timeout = setTimeout(() => {
      _etapas();
    }, BANNER_DURACAO.ROLAGEM);

    functions.setBanners((old) => {
      return {
        ...old,
        evento: () => {
          clearTimeout(timeout);
          _etapas();
        }
      };
    });
  } catch (error) {
    informarErro(error, functions);
    throw error;
  }
}

function acelerarNivel2Evento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });
  try {
    let personagemNovo = gastarMana(personagem, acao.custo, functions);
    const alvoCorreto = personagem.idCombate === alvo.idCombate ? personagemNovo : alvo;
    const { dados, total } = rolarDado(2, 4, []);
    functions.ativarBannerRolagem([...dados], [], total, personagem.corTema);

    function _etapas() {
      functions.adicionarLog(`${personagem.nome} usou ${ACELERAR.nome} em ${alvoCorreto.nome}.`);
      const novoAlvo = causarVeloz(alvoCorreto, total, ACELERAR, functions);
      const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.ELETRICO_2, ACOES_AUDIO.ELETRICO_1);
      finalizarAcao(personagemNovo, functions, novoAlvo, duracao);
    }

    const timeout = setTimeout(() => {
      _etapas();
    }, BANNER_DURACAO.ROLAGEM);

    functions.setBanners((old) => {
      return {
        ...old,
        evento: () => {
          clearTimeout(timeout);
          _etapas();
        }
      };
    });
  } catch (error) {
    informarErro(error, functions);
    throw error;
  }
}
