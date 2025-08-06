import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_CATEGORIA, ACAO_EXECUCAO, ALVOS, ACAO_TIPO } from "../../../constants/acoes/acoes.constant";
import { CATEGORIA_CONDICAO, ELEMENTOS, TIPO_CONDICAO } from "../../../constants/personagens/personagem.constant";
import { useEncerrarCondicao } from "../../../hook/batalha";

const { iniciarEfeito, finalizarAcao, gastarMana, informarErro } = useAcoesBase();
const encerrarCondicoes = useEncerrarCondicao();

export const PURIFICAR = {
  id: 25,
  nome: "Purificar",
  elemento: ELEMENTOS.LUZ,
  custo: 3,
  tipo: ACAO_TIPO.BUFF,
  categoria: ACAO_CATEGORIA.MAGICO,
  descricao: "Remove qualquer condição negativa física de um aliado.",
  evento: purificarEvento,
  alvos: ALVOS.ALIADOS,
  execucao: ACAO_EXECUCAO.PADRAO,
  variantes: []
};

function purificarEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });
  try {
    let personagemNovo = gastarMana(personagem, acao.custo, functions);
    const alvoCorreto = personagem.idCombate === alvo.idCombate ? personagemNovo : alvo;
    functions.adicionarLog(`${personagem.nome} usou ${PURIFICAR.nome} em ${alvoCorreto.nome}.`);

    if (alvoCorreto.condicoes.some((condicao) => condicao.tipo === TIPO_CONDICAO.DEBUFF && condicao.categoria === CATEGORIA_CONDICAO.FISICA)) {
      functions.adicionarLog(`${alvoCorreto.nome} teve suas condições negativas removidas pela habilidade ${PURIFICAR.nome}.`);
    } else {
      functions.adicionarLog(`AVISO: ${alvoCorreto.nome} não possui nenhuma condição negativa que possa ser removida pela habilidade ${PURIFICAR.nome}.`);
      throw {
        message: `${alvoCorreto.nome} não possui nenhuma condição negativa que possa ser removida pela habilidade ${PURIFICAR.nome}.`
      };
    }

    let novoAlvo = { ...alvoCorreto};
    const condicoesNegativas = novoAlvo.condicoes.filter(condicao=> condicao.tipo === TIPO_CONDICAO.DEBUFF && condicao.categoria === CATEGORIA_CONDICAO.FISICA)
    for(let i=0; i<condicoesNegativas.length;i++) {
      const condicaoAtual = condicoesNegativas[i]
      for (const [funcaoNome, funcaoEncerrarCondicao] of Object.entries(encerrarCondicoes)) {
        if(funcaoNome===`encerrar${condicaoAtual.pascalCase}`) {
          novoAlvo = funcaoEncerrarCondicao(novoAlvo, functions)
        }
      }
    }

    const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.LUZ_2, ACOES_AUDIO.MAGIA_1);
    finalizarAcao(personagemNovo, functions, novoAlvo, duracao);
  } catch (error) {
    informarErro(error, functions);
    throw error;
  }
}
