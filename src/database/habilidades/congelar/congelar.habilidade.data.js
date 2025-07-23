import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_EXECUCAO, ALVOS, HABILIDADE_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../hook/batalha";

const { iniciarEfeito, finalizarAcao, atacar, realizarEtapasAtaqueSemDano, gastarMana } = useAcoesBase();
const { causarCongelado } = useCausarCondicao();

export const CONGELAR = {
    id: 9,
    nome: "Congelar",
    elemento: ELEMENTOS.GELO,
    custo: 1,
    tipo: HABILIDADE_TIPO.DEBUFF,
    descricao: "Invoca um frio extremo que deixa o alvo Congelado.",
    evento: congelarEvento,
    alvos: ALVOS.INIMIGOS,
    execucao: ACAO_EXECUCAO.PADRAO,
    variantes: [],
}

function congelarEvento(personagem, alvo, acao, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    const personagemNovo = gastarMana(personagem, acao.custo, functions);
    const modificadorMagia = {valor: personagem.atributos.magia, atributo: "Magia"}
    const resultadoAtaque = atacar(personagemNovo, alvo, modificadorMagia, acao, functions)
    
    realizarEtapasAtaqueSemDano(
      ()=>{
        const novoAlvo = causarCongelado(alvo, (10+personagem.atributos.magia), CONGELAR, functions, resultadoAtaque)
        const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.GELO_1, ACOES_AUDIO.GELO_1);
        finalizarAcao(functions, novoAlvo, duracao);
      },
      ()=>{
        finalizarAcao(functions, alvo, 0);
      }, resultadoAtaque, functions, personagem, alvo, CONGELAR
    )
  }