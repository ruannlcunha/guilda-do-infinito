import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_EXECUCAO, ALVOS, HABILIDADE_TIPO } from "../../../constants/acoes/acoes.constant";
import { CATEGORIA_CONDICAO, ELEMENTOS, TIPO_CONDICAO } from "../../../constants/personagens/personagem.constant";

const { iniciarEfeito, finalizarAcao, gastarMana, informarErro } = useAcoesBase();

export const PURIFICAR = {
    id: 25,
    nome: "Purificar",
    elemento: ELEMENTOS.LUZ,
    custo: 3,
    tipo: HABILIDADE_TIPO.BUFF,
    descricao: "Remove qualquer condição negativa física de um aliado.",
    evento: purificarEvento,
    alvos: ALVOS.ALIADOS,
    execucao: ACAO_EXECUCAO.PADRAO,
    variantes: [],
}

function purificarEvento(personagem, alvo, acao, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });
    try {
      const personagemNovo = gastarMana(personagem, acao.custo, functions);
      const alvoCorreto = personagem.idCombate===alvo.idCombate ? personagemNovo : alvo
      functions.adicionarLog(`${personagem.nome} usou ${PURIFICAR.nome} em ${alvoCorreto.nome}.`)

      if(alvoCorreto.condicoes.some(condicao=>condicao.tipo===TIPO_CONDICAO.DEBUFF && condicao.categoria === CATEGORIA_CONDICAO.FISICA)) {
        functions.adicionarLog(`${alvoCorreto.nome} teve suas condições negativas removidas pela habilidade ${PURIFICAR.nome}.`)
      }
      else {
        functions.adicionarLog(`AVISO: ${alvoCorreto.nome} não possui nenhuma condição negativa que possa ser removida pela habilidade ${PURIFICAR.nome}.`)
        throw { message: `${alvoCorreto.nome} não possui nenhuma condição negativa que possa ser removida pela habilidade ${PURIFICAR.nome}.` }
      }

      const novasCondicoes = [...alvoCorreto.condicoes].filter(condicao=>condicao.tipo!==TIPO_CONDICAO.DEBUFF && condicao.categoria !== CATEGORIA_CONDICAO.FISICA)
      const novoAlvo = {...alvoCorreto, condicoes: novasCondicoes}
      const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.LUZ_2, ACOES_AUDIO.MAGIA_1);
      finalizarAcao(functions, novoAlvo, duracao);

    } catch (error) {
      informarErro(error, functions)
      throw error
    }
  }