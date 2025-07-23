import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_EXECUCAO, ALVOS, HABILIDADE_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../hook/batalha";

const { iniciarEfeito, finalizarAcao, atacar, realizarEtapasAtaqueSemDano, gastarMana } = useAcoesBase();
const { causarAtordoado } = useCausarCondicao();

export const ESFERA_ATORDOANTE = {
    id: 10,
    nome: "Esfera Atordoante",
    elemento: ELEMENTOS.ELETRICO,
    custo: 1,
    tipo: HABILIDADE_TIPO.DEBUFF,
    descricao: "Uma esfera de energia elétrica que explode deixando o inimigo atordoado por 1d6 rodadas.",
    evento: esferaAtordoanteEvento,
    alvos: ALVOS.INIMIGOS,
    execucao: ACAO_EXECUCAO.PADRAO,
    variantes: [],
}

function esferaAtordoanteEvento(personagem, alvo, acao, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    const personagemNovo = gastarMana(personagem, acao.custo, functions);
    const modificadorMagia = {valor: personagem.atributos.magia, atributo: "Magia"}
    const resultadoAtaque = atacar(personagemNovo, alvo, modificadorMagia, acao, functions)
    
    realizarEtapasAtaqueSemDano(
      ()=>{
        const novoAlvo = causarAtordoado(alvo, (10+personagem.atributos.magia), ESFERA_ATORDOANTE, functions, resultadoAtaque)
        const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.ELETRICO_3, ACOES_AUDIO.ELETRICO_1);
        finalizarAcao(functions, novoAlvo, duracao);
      },
      ()=>{
        finalizarAcao(functions, alvo, 0);
      }, resultadoAtaque, functions, personagem, alvo, ESFERA_ATORDOANTE
    )
  }