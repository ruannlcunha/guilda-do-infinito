import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_EXECUCAO, ALVOS } from "../../../constants/acoes/acoes.constant";
import { useEncerrarCondicao } from "../../../hook/batalha";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { BANNER_DURACAO } from "../../../constants";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";

const { iniciarEfeito, finalizarAcao, informarErro } = useAcoesBase();
const { encerrarFormaLupina } = useEncerrarCondicao();
const { rolarDado } = useRolarDado();

export const DESFAZER_FORMA_LUPINA = {
  id: 7,
  nome: "Desfazer Forma Lupina",
  elemento: ELEMENTOS.ESSENCIA,
  descricao: "Tenta lutar contra os instintos selvagens para desfazer os efeitos da habilidade Forma Lupina. Deve passar num teste de Magia dificuldade 15.",
  evento: desfazerFormaLupinaEvento,
  alvos: ALVOS.PESSOAL,
  execucao: ACAO_EXECUCAO.PADRAO,
  variantes: []
};

function desfazerFormaLupinaEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });

  try {
    let personagemNovo = { ...personagem };
    const modificadorMagia = {
      valor: personagem.atributos.magia,
      atributo: "Magia"
    };
    const { dados, total } = rolarDado(1, 20, [modificadorMagia]);
    const teste = {
      resultadoDado: dados[0].resultado,
      resultadoTotal: total,
      modificadores: [modificadorMagia]
    };
    const dificuldade = 15;
    functions.ativarBannerAtaque(teste, dificuldade, personagem.corTema);

    function etapas() {
      const alvoCorreto = personagem.idCombate === alvo.idCombate ? personagem : alvo;
      if (teste.resultadoTotal >= dificuldade || teste.resultadoDado === 20) {
        functions.adicionarLog(`${personagem.nome} usou ${acao.nome} e conseguiu lutar contra seus instintos selvagens, voltando a sua forma original.`);
        const novoAlvo = encerrarFormaLupina(alvoCorreto, functions);
        const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.LUAR, ACOES_AUDIO.MAGIA_1);
        finalizarAcao(personagemNovo, functions, novoAlvo, duracao);
      } else {
        functions.adicionarLog(`${personagem.nome} usou ${acao.nome} mas não conseguiu passar no teste de Magia com ${teste.resultadoTotal}.`);
        finalizarAcao(personagemNovo, functions, alvoCorreto, 0);
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
