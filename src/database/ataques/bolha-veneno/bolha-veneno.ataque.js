import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { ALVOS, CATEGORIAS_DE_DANO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../hook/batalha";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, causarDano, finalizarAcao, atacar, realizarEtapasAtaque, gastarMana } = useAcoesBase();
const { causarEnvenenado } = useCausarCondicao();

export const BOLHA_VENENO = {
    id: 79,
    nome: "Bolha de Veneno",
    dadoDeDano: "1d8",
    descricao: "Uma bolha de veneno que explode no inimigo e pode envenená-lo.",
    elemento: ELEMENTOS.ACIDO,
    categoria: CATEGORIAS_DE_DANO.MAGICO,
    custo: 1,
    evento: bolhaVenenoEvento,
    alvos: ALVOS.INIMIGOS,
}

function bolhaVenenoEvento(personagem, alvo, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    const personagemNovo = gastarMana(personagem, 1, functions);
    const modificadorMagia = {valor: personagem.atributos.magia, atributo: "Magia"}
    const resultadoAtaque = atacar(personagemNovo, alvo, modificadorMagia, functions)
    const modificadores = [modificadorMagia]
    const {dados, total} = rolarDado(1, 8, modificadores, BOLHA_VENENO.elemento, alvo.elemento)
    
    realizarEtapasAtaque(
      ()=>{
        functions.ativarBannerRolagem([...dados], modificadores, total, personagem.corTema, resultadoAtaque.dado)
      },
      ()=>{
        const novoAlvo = causarDano(alvo, total, resultadoAtaque, functions);
        const novoAlvo2 = causarEnvenenado(novoAlvo, (10+personagem.atributos.magia), functions)
        const duracao = iniciarEfeito(novoAlvo2, functions, EFFECTS.ACIDO_1, ACOES_AUDIO.ACIDO);
        finalizarAcao(functions, novoAlvo2, duracao, 3100);
      },
      ()=>{
        finalizarAcao(functions, alvo, 0);
      }, resultadoAtaque, functions, personagem, alvo, BOLHA_VENENO, total
    )
  }