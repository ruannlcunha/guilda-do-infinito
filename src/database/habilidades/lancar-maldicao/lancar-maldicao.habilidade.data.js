import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_EXECUCAO, ALVOS, HABILIDADE_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../hook/batalha";

const { iniciarEfeito, finalizarAcao, gastarMana, realizarEtapasAtaqueSemDano, atacar } = useAcoesBase();
const { causarAmaldicoado } = useCausarCondicao();

export const LANCAR_MALDICAO = {
    id: 27,
    nome: "Lançar Maldição",
    elemento: ELEMENTOS.TREVAS,
    custo: 1,
    tipo: HABILIDADE_TIPO.DEBUFF,
    descricao: "Testes do alvo tem -1 na rolagem. Caso o alvo esteja Abençoado, retira essa condição.",
    evento: lancarMaldicaoEvento,
    alvos: ALVOS.INIMIGOS,
    execucao: ACAO_EXECUCAO.PADRAO,
    variantes: [],
}

function lancarMaldicaoEvento(personagem, alvo, acao, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    const personagemNovo = gastarMana(personagem, acao.custo, functions);
    const modificadorMagia = {valor: personagem.atributos.magia, atributo: "Magia"}
    const resultadoAtaque = atacar(personagemNovo, alvo, modificadorMagia, functions)
    
    realizarEtapasAtaqueSemDano(
      ()=>{
        const novoAlvo = causarAmaldicoado(alvo, (10+personagem.atributos.magia), LANCAR_MALDICAO, functions, resultadoAtaque)
        const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.TREVAS_2, ACOES_AUDIO.TREVAS_1);
        finalizarAcao(functions, novoAlvo, duracao);
      },
      ()=>{
        finalizarAcao(functions, alvo, 0);
      }, resultadoAtaque, functions, personagem, alvo, LANCAR_MALDICAO
  )
}