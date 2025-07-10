import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_EXECUCAO, ALVOS, HABILIDADE_TIPO } from "../../../constants/acoes/acoes.constant";
import { CATEGORIA_CONDICAO, ELEMENTOS, TIPO_CONDICAO } from "../../../constants/personagens/personagem.constant";

const { iniciarEfeito, finalizarAcao, gastarMana, realizarEtapasAtaqueSemDano, atacar, informarErro } = useAcoesBase();

export const DISSIPAR_BENCAO = {
    id: 26,
    nome: "Dissipar Benção",
    elemento: ELEMENTOS.TREVAS,
    custo: 3,
    tipo: HABILIDADE_TIPO.DEBUFF,
    descricao: "Remove qualquer condição positiva física de um inimigo.",
    evento: dissiparBencao,
    alvos: ALVOS.INIMIGOS,
    execucao: ACAO_EXECUCAO.PADRAO,
    variantes: [],
}

function dissiparBencao(personagem, alvo, acao, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    try {
      if(alvo.condicoes.some(condicao=>condicao.tipo===TIPO_CONDICAO.BUFF && condicao.categoria === CATEGORIA_CONDICAO.FISICA)) {
        const personagemNovo = gastarMana(personagem, acao.custo, functions);
        const modificadorMagia = {valor: personagem.atributos.magia, atributo: "Magia"}
        const resultadoAtaque = atacar(personagemNovo, alvo, modificadorMagia, functions)
        realizarEtapasAtaqueSemDano(
          ()=>{
            functions.adicionarLog(`${alvo.nome} teve suas condições positivas removidas pela habilidade ${DISSIPAR_BENCAO.nome}.`)
            const novasCondicoes = [...alvo.condicoes].filter(condicao=>condicao.tipo!==TIPO_CONDICAO.BUFF && condicao.categoria !== CATEGORIA_CONDICAO.FISICA)
            const novoAlvo = {...alvo, condicoes: novasCondicoes}
            const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.TREVAS_3, ACOES_AUDIO.TREVAS_1);
            finalizarAcao(functions, novoAlvo, duracao);
          },
          ()=>{
            finalizarAcao(functions, alvo, 0);
          }, resultadoAtaque, functions, personagem, alvo, DISSIPAR_BENCAO
        )
      }
      else {
        functions.adicionarLog(`AVISO: ${alvo.nome} não possui nenhuma condição negativa que possa ser removida pela habilidade ${DISSIPAR_BENCAO.nome}.`)
        throw { message: `${alvo.nome} não possui nenhuma condição negativa que possa ser removida pela habilidade ${DISSIPAR_BENCAO.nome}.` }
      }
    } catch (error) {
      informarErro(error, functions)
      throw error
    }
    
}