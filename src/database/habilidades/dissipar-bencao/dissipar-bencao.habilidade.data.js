import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_CATEGORIA, ACAO_EXECUCAO, ALVOS, ACAO_TIPO } from "../../../constants/acoes/acoes.constant";
import { CATEGORIA_CONDICAO, ELEMENTOS, TIPO_CONDICAO } from "../../../constants/personagens/personagem.constant";
import { useEncerrarCondicao } from "../../../hook/batalha";

const { iniciarEfeito, finalizarAcao, gastarMana, realizarEtapasAtaqueSemDano, atacar, informarErro } = useAcoesBase();
const encerrarCondicoes = useEncerrarCondicao();

export const DISSIPAR_BENCAO = {
  id: 26,
  nome: "Dissipar Benção",
  elemento: ELEMENTOS.TREVAS,
  custo: 3,
  tipo: ACAO_TIPO.DEBUFF,
  categoria: ACAO_CATEGORIA.MAGICO,
  descricao: "Remove qualquer condição positiva física de um inimigo.",
  evento: dissiparBencao,
  alvos: ALVOS.INIMIGOS,
  execucao: ACAO_EXECUCAO.PADRAO,
  variantes: []
};

function dissiparBencao(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });

  try {
    if (alvo.condicoes.some((condicao) => condicao.tipo === TIPO_CONDICAO.BUFF && condicao.categoria === CATEGORIA_CONDICAO.FISICA)) {
      let personagemNovo = gastarMana(personagem, acao.custo, functions);
      const resultadoAtaque = atacar(personagem, alvo, acao, functions);
      realizarEtapasAtaqueSemDano(
        () => {
          let novoAlvo = { ...alvo};
          const condicoesPositivas = novoAlvo.condicoes.filter(condicao=> condicao.tipo === TIPO_CONDICAO.BUFF && condicao.categoria === CATEGORIA_CONDICAO.FISICA)
          for(let i=0; i<condicoesPositivas.length;i++) {
            const condicaoAtual = condicoesPositivas[i]
            for (const [funcaoNome, funcaoEncerrarCondicao] of Object.entries(encerrarCondicoes)) {
              if(funcaoNome===`encerrar${condicaoAtual.pascalCase}`) {
                novoAlvo = funcaoEncerrarCondicao(novoAlvo, functions)
              }
            }
          }
          functions.adicionarLog(`${alvo.nome} teve suas condições positivas removidas pela habilidade ${DISSIPAR_BENCAO.nome}.`);
          const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.TREVAS_2, ACOES_AUDIO.TREVAS_1);
          finalizarAcao(personagemNovo, functions, novoAlvo, duracao);
        },
        () => {
          finalizarAcao(personagemNovo, functions, alvo, 0);
        },
        resultadoAtaque,
        functions,
        personagem,
        alvo,
        DISSIPAR_BENCAO
      );
    } else {
      functions.adicionarLog(`AVISO: ${alvo.nome} não possui nenhuma condição negativa que possa ser removida pela habilidade ${DISSIPAR_BENCAO.nome}.`);
      throw {
        message: `${alvo.nome} não possui nenhuma condição negativa que possa ser removida pela habilidade ${DISSIPAR_BENCAO.nome}.`
      };
    }
  } catch (error) {
    informarErro(error, functions);
    throw error;
  }
}
