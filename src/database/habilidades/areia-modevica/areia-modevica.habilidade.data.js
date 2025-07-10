import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_EXECUCAO, ALVOS, HABILIDADE_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../hook/batalha";

const { iniciarEfeito, finalizarAcao, atacar, realizarEtapasAtaqueSemDano, gastarMana } = useAcoesBase();
const { causarLento } = useCausarCondicao();

export const AREIA_MOVEDICA = {
    id: 11,
    nome: "Areia Modeviça",
    elemento: ELEMENTOS.TERRA,
    custo: 1,
    tipo: HABILIDADE_TIPO.DEBUFF,
    descricao: "Amolece o chão abaixo do alvo e o deixa Lento por 1d4 rodadas.",
    evento: areiaMovedicaEvento,
    alvos: ALVOS.INIMIGOS,
    execucao: ACAO_EXECUCAO.PADRAO,
    variantes: [],
}

function areiaMovedicaEvento(personagem, alvo, acao, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    const personagemNovo = gastarMana(personagem, acao.custo, functions);
    const modificadorMagia = {valor: personagem.atributos.magia, atributo: "Magia"}
    const resultadoAtaque = atacar(personagemNovo, alvo, modificadorMagia, functions)
    
    realizarEtapasAtaqueSemDano(
      ()=>{
        const novoAlvo = causarLento(alvo, (10+personagem.atributos.magia), AREIA_MOVEDICA, functions, resultadoAtaque)
        const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.TERRA_2, ACOES_AUDIO.TERRA);
        finalizarAcao(functions, novoAlvo, duracao);
      },
      ()=>{
        finalizarAcao(functions, alvo, 0);
      }, resultadoAtaque, functions, personagem, alvo, AREIA_MOVEDICA
  )
}