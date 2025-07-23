import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { ACAO_EXECUCAO, ALVOS, ATAQUES_TIPO, CATEGORIAS_DE_DANO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { getModificadoresDano } from "../../../utils/get-modificadores.util";
import { useCausarCondicao } from "../../../hook/batalha";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, causarDano, finalizarAcao, atacar, realizarEtapasAtaque, gastarMana } = useAcoesBase();
const { causarQueimando } = useCausarCondicao();

export const TOQUE_FLAMEJANTE = {
    id: 80,
    nome: "Toque Flamejante",
    dadoDeDano: "1d8",
    tipo: ATAQUES_TIPO.ATAQUE_PURO,
    descricao: "Ao tocar no inimigo o envolve em chamas causando 1d8 de dano de Fogo e podendo causar a condição Queimando.",
    elemento: ELEMENTOS.FOGO,
    categoria: CATEGORIAS_DE_DANO.MAGICO,
    custo: 1,
    evento: toqueFlamejanteEvento,
    alvos: ALVOS.INIMIGOS,
    execucao: ACAO_EXECUCAO.PADRAO,
    variantes: [],
}

function toqueFlamejanteEvento(personagem, alvo, acao, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    const personagemNovo = gastarMana(personagem, acao.custo, functions);
    const modificadorMagia = {valor: personagem.atributos.magia, atributo: "Magia"}
    const resultadoAtaque = atacar(personagemNovo, alvo, modificadorMagia, acao, functions)
    const modificadores = getModificadoresDano([modificadorMagia], personagem)
    const dadoDano = rolarDado(1, 8, modificadores, TOQUE_FLAMEJANTE.elemento, alvo.elemento)
    
    realizarEtapasAtaque(
      ()=>{
        functions.ativarBannerRolagem([...dadoDano.dados], modificadores, dadoDano.total, personagem, resultadoAtaque, alvo)
      },
      ()=>{
        const novoAlvo = causarDano(resultadoAtaque.alvo, [dadoDano], resultadoAtaque, TOQUE_FLAMEJANTE, functions);
        const novoAlvo2 = causarQueimando(novoAlvo, (10+personagem.atributos.magia), TOQUE_FLAMEJANTE, functions)
        const duracao = iniciarEfeito(novoAlvo2, functions, EFFECTS.BOLA_DE_FOGO, ACOES_AUDIO.FOGO);
        finalizarAcao(functions, novoAlvo2, duracao, 3100);
      },
      ()=>{
        finalizarAcao(functions, resultadoAtaque.alvo, 0);
      }, resultadoAtaque, functions, personagem, alvo, TOQUE_FLAMEJANTE,
    )
  }