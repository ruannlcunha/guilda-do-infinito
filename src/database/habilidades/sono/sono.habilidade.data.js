import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ALVOS } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../hook/batalha";

const { iniciarEfeito, finalizarAcao, atacar, realizarEtapasAtaqueSemDano, gastarMana } = useAcoesBase();
const { causarDormindo } = useCausarCondicao();

export const SONO = {
    id: 17,
    nome: "Sono",
    elemento: ELEMENTOS.ESSENCIA,
    custo: 3,
    efeito: "Uma magia que faz o alvo adormecer e pode deixá-lo Dormindo.",
    evento: sonoEvento,
    alvos: ALVOS.INIMIGOS,
}

function sonoEvento(personagem, alvo, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    const personagemNovo = gastarMana(personagem, 3, functions);
    const modificadorMagia = {valor: personagem.atributos.magia, atributo: "Magia"}
    const resultadoAtaque = atacar(personagemNovo, alvo, modificadorMagia, functions)
    
    realizarEtapasAtaqueSemDano(
      ()=>{
        const novoAlvo = causarDormindo(alvo, (10+personagem.atributos.magia), functions, resultadoAtaque)
        const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.SONO, ACOES_AUDIO.MAGIA_1);
        finalizarAcao(functions, novoAlvo, duracao, 3100);
      },
      ()=>{
        finalizarAcao(functions, alvo, 0);
      }, resultadoAtaque, functions, personagem, alvo, SONO
    )
  }