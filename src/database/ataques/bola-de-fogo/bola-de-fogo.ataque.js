import { EFFECTS } from "../../../constants/images";
import { BANNER_DURACAO } from "../../../constants";
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

export const BOLA_DE_FOGO = {
    id: 2,
    nome: "Bola de Fogo",
    dadoDeDano: "2d6",
    tipo: ATAQUES_TIPO.ATAQUE_PURO,
    descricao: "Uma esfera de chamas ardentes que queima o inimigo, causando 2d6 de dano de Fogo.",
    elemento: ELEMENTOS.FOGO,
    categoria: CATEGORIAS_DE_DANO.MAGICO,
    custo: 1,
    evento: bolaDeFogoEvento,
    alvos: ALVOS.INIMIGOS,
    execucao: ACAO_EXECUCAO.PADRAO,
    variantes: [
      {
        categoria: "Nível",
        lista: [
          {
            varianteId: "NIVEL_1",
            titulo: "1",
            descricao: "Uma esfera de chamas ardentes que queima o inimigo, causando 2d6 de dano de Fogo.",
            novaAcao: {
              nome: "Bola de Fogo",
              custo: 1,
              evento: bolaDeFogoEvento,
            }
          },
          {
            varianteId: "NIVEL_2",
            titulo: "2",
            descricao: "Uma esfera de chamas ardentes que queima o inimigo, causando 4d6 de dano de Fogo.\n Custo: +2PM",
            novaAcao: {
              nome: "Bola de Fogo (Nível 2)",
              custo: 3,
              evento: bolaDeFogoNivel2Evento,
            }
          },
          {
            varianteId: "NIVEL_3",
            titulo: "3",
            descricao: `Uma esfera de chamas ardentes que queima o inimigo, causando 6d6 de dano de Fogo.
                        Pode causar a condição Queimando no alvo.\n Custo: +4PM`,
            novaAcao: {
              nome: "Bola de Fogo (Nível 3)",
              custo: 5,
              evento: bolaDeFogoNivel3Evento,
            }
          },
        ],
      },
    ]
}


function bolaDeFogoEvento(personagem, alvo, acao, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    const personagemNovo = gastarMana(personagem, acao.custo, functions);
    const modificadorMagia = {valor: personagem.atributos.magia, atributo: "Magia"}
    const resultadoAtaque = atacar(personagemNovo, alvo, modificadorMagia, functions)
    const modificadores = getModificadoresDano([modificadorMagia], personagem)
    const dadoDano = rolarDado(2, 6, modificadores, acao.elemento, alvo.elemento)
    
    realizarEtapasAtaque(
      ()=>{
        functions.ativarBannerRolagem([...dadoDano.dados], modificadores, dadoDano.total, personagem, resultadoAtaque, alvo)
      },
      ()=>{
        const novoAlvo = causarDano(resultadoAtaque.alvo, [dadoDano], resultadoAtaque, acao, functions);
        const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.BOLA_DE_FOGO, ACOES_AUDIO.FOGO);
        finalizarAcao(functions, novoAlvo, duracao);
      },
      ()=>{
        finalizarAcao(functions, resultadoAtaque.alvo, 0);
      }, resultadoAtaque, functions, personagem, alvo, acao,
    )
}

function bolaDeFogoNivel2Evento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });

  const personagemNovo = gastarMana(personagem, acao.custo, functions);
  const modificadorMagia = {valor: personagem.atributos.magia, atributo: "Magia"}
  const resultadoAtaque = atacar(personagemNovo, alvo, modificadorMagia, functions)
  const modificadores = getModificadoresDano([modificadorMagia], personagem)
  const dadoDano = rolarDado(4, 6, modificadores, acao.elemento, alvo.elemento)
  
  realizarEtapasAtaque(
    ()=>{
      functions.ativarBannerRolagem([...dadoDano.dados], modificadores, dadoDano.total, personagem, resultadoAtaque, alvo)
    },
    ()=>{
      const novoAlvo = causarDano(resultadoAtaque.alvo, [dadoDano], resultadoAtaque, acao, functions);
      const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.BOLA_DE_FOGO, ACOES_AUDIO.FOGO);
      finalizarAcao(functions, novoAlvo, duracao);
    },
    ()=>{
      finalizarAcao(functions, resultadoAtaque.alvo, 0);
    }, resultadoAtaque, functions, personagem, alvo, acao,
  )
}

function bolaDeFogoNivel3Evento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });

  const personagemNovo = gastarMana(personagem, acao.custo, functions);
  const modificadorMagia = {valor: personagem.atributos.magia, atributo: "Magia"}
  const resultadoAtaque = atacar(personagemNovo, alvo, modificadorMagia, functions)
  const modificadores = getModificadoresDano([modificadorMagia], personagem)
  const dadoDano = rolarDado(4, 6, modificadores, acao.elemento, alvo.elemento)
  
  realizarEtapasAtaque(
    ()=>{
      functions.ativarBannerRolagem([...dadoDano.dados], modificadores, dadoDano.total, personagem, resultadoAtaque, alvo)
    },
    ()=>{
      const novoAlvo = causarDano(resultadoAtaque.alvo, [dadoDano], resultadoAtaque, acao, functions);
      const novoAlvo2 = causarQueimando(novoAlvo, (10+personagem.atributos.magia), BOLA_DE_FOGO, functions)
      const duracao = iniciarEfeito(novoAlvo2, functions, EFFECTS.BOLA_DE_FOGO, ACOES_AUDIO.FOGO);
      finalizarAcao(functions, novoAlvo2, duracao);
    },
    ()=>{
      finalizarAcao(functions, resultadoAtaque.alvo, 0);
    }, resultadoAtaque, functions, personagem, alvo, acao,
  )
}