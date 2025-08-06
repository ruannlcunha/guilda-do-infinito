import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_CATEGORIA, ACAO_EXECUCAO, ALVOS, ACAO_TIPO } from "../../../constants/acoes/acoes.constant";
import { CONDICOES, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../hook/batalha";
import { BANNER_DURACAO } from "../../../constants";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, finalizarAcaoExtra, gastarMana, informarErro } = useAcoesBase();
const { causarEscondido } = useCausarCondicao();

export const ESCONDER_SE = {
  id: 23,
  nome: "Esconder-se",
  elemento: ELEMENTOS.FISICO,
  custo: 0,
  tipo: ACAO_TIPO.BUFF,
  categoria: ACAO_CATEGORIA.FISICO,
  descricao: `Se esconde dos inimigos, ganhando +5 de defesa e possibilitando que o próximo ataque seja furtivo e cause +1d6 de dano físico.
    A dificuldade é 15 + quantidade de inimigos em combate. O efeito só se encerra quando um ataque é realizado.`,
  efeito: "Se esconde dos inimigos, ganhando +5 de defesa e possibilitando que o próximo ataque cause +1d6 de dano.",
  evento: esconderSeEvento,
  alvos: ALVOS.PESSOAL,
  execucao: ACAO_EXECUCAO.EXTRA,
  bonus: "1d6",
  variantes: []
};

async function esconderSeEvento(personagem, alvo, acao, functions, personagens) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });

  try {
    let personagemNovo = gastarMana(personagem, acao.custo, functions);
    const alvoCorreto = personagem.idCombate === alvo.idCombate ? personagemNovo : alvo;

    if (alvoCorreto.condicoes.some((condicao) => condicao.nome === CONDICOES.ESCONDIDO.nome)) {
      functions.adicionarLog(`AVISO: ${alvo.nome} já está sob efeito de ${CONDICOES.ESCONDIDO.nome}.`);
      throw {
        message: `${alvo.nome} já está sob efeito de ${CONDICOES.ESCONDIDO.nome}.`
      };
    }

    const modificadorAgilidade = {
      valor: personagem.atributos.agilidade,
      atributo: "Agilidade"
    };
    const { dados, total } = rolarDado(1, 20, [modificadorAgilidade]);
    const teste = {
      resultadoDado: dados[0].resultado,
      resultadoTotal: total,
      modificadores: [modificadorAgilidade]
    };

    const inimigos = personagem.isInimigo ? personagens.filter((inimigo) => !inimigo.isInimigo) : personagens.filter((inimigo) => inimigo.isInimigo);
    const dificuldade = 15 + inimigos.length;

    functions.ativarBannerAtaque(teste, dificuldade, personagem.corTema);

    function etapas() {
      if (teste.resultadoTotal >= dificuldade || teste.resultadoDado === 20) {
        const novoAlvo = causarEscondido(alvoCorreto, acao, functions);
        functions.adicionarLog(`${personagem.nome} usou ${acao.nome} e conseguiu ficar furtiv${personagem.pronomes.minusculo_2} com ${teste.resultadoTotal}.`);
        const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.FUMACA_3, ACOES_AUDIO.FOLEGO);
        finalizarAcaoExtra(personagemNovo, functions, novoAlvo, duracao);
      } else {
        functions.adicionarLog(`${personagem.nome} usou ${acao.nome} mas não conseguiu passar no teste de Agilidade com ${teste.resultadoTotal}.`);
        finalizarAcaoExtra(personagemNovo, functions, alvoCorreto, 0);
      }
    }

    const timeout = setTimeout(() => {
      etapas();
    }, BANNER_DURACAO.ATAQUE);

    functions.setBanners((old) => {
      return {
        ...old,
        evento: () => {
          clearTimeout(timeout);
          etapas();
        }
      };
    });
  } catch (error) {
    informarErro(error, functions);
    throw error;
  }
}
