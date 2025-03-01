import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { ALVOS, CATEGORIAS_DE_DANO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, causarDano, finalizarAcao, atacar, realizarEtapasAtaque, gastarMana } = useAcoesBase();

export const LAMINA_VENTO = {
    id: 10,
    nome: "Lâmina de Vento",
    dadoDeDano: "2d6",
    descricao: "Ventos tão fortes que cortam o inimigo como lâminas.",
    elemento: ELEMENTOS.AR,
    categoria: CATEGORIAS_DE_DANO.MAGICO,
    custo: 1,
    evento: laminaVentoEvento,
    alvos: ALVOS.INIMIGOS,
}

function laminaVentoEvento(personagem, alvo, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    const personagemNovo = gastarMana(personagem, 1, functions);
    const modificadorMagia = {valor: personagem.atributos.magia, atributo: "Magia"}
    const resultadoAtaque = atacar(personagemNovo, alvo, modificadorMagia, functions)
    const modificadores = [modificadorMagia]
    const {dados, total} = rolarDado(2, 6, modificadores, LAMINA_VENTO.elemento, alvo.elemento)
    
    realizarEtapasAtaque(
      ()=>{
        functions.ativarBannerRolagem([...dados], modificadores, total, personagem.corTema, resultadoAtaque.dado)
      },
      ()=>{
        const novoAlvo = causarDano(alvo, total, resultadoAtaque, functions);
        const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.AR_1, ACOES_AUDIO.AR);
        finalizarAcao(functions, novoAlvo, duracao);
      },
      ()=>{
        finalizarAcao(functions, alvo, 0);
      }, resultadoAtaque, functions, personagem, alvo, LAMINA_VENTO, total
    )
  }