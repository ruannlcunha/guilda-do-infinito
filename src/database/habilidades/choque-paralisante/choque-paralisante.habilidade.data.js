import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ALVOS } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../hook/batalha";

const { iniciarEfeito, finalizarAcao, atacar, realizarEtapasAtaqueSemDano, gastarMana } = useAcoesBase();
const { causarParalisado } = useCausarCondicao();

export const CHOQUE_PARALISANTE = {
    id: 16,
    nome: "Choque Paralisante",
    elemento: ELEMENTOS.ELETRICO,
    custo: 1,
    efeito: "Um choque que afeta o corpo inteiro do alvo, deixando ele Paralisado.",
    evento: choqueParalisanteEvento,
    alvos: ALVOS.INIMIGOS,
}

function choqueParalisanteEvento(personagem, alvo, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    const personagemNovo = gastarMana(personagem, 1, functions);
    const modificadorMagia = {valor: personagem.atributos.magia, atributo: "Magia"}
    const resultadoAtaque = atacar(personagemNovo, alvo, modificadorMagia, functions)
    
    realizarEtapasAtaqueSemDano(
      ()=>{
        const novoAlvo = causarParalisado(alvo, (10+personagem.atributos.magia), functions, resultadoAtaque)
        const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.ELETRICO_2, ACOES_AUDIO.ELETRICO_1);
        finalizarAcao(functions, novoAlvo, duracao, 3100);
      },
      ()=>{
        finalizarAcao(functions, alvo, 0);
      }, resultadoAtaque, functions, personagem, alvo, CHOQUE_PARALISANTE
    )
  }