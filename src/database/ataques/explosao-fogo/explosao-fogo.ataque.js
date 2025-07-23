import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { ACAO_EXECUCAO, ALVOS, ATAQUES_TIPO, CATEGORIAS_DE_DANO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { getModificadoresDano, getModificadoresConjuracao } from "../../../utils/get-modificadores.util";
import { useCausarCondicao } from "../../../hook/batalha";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, causarDano, finalizarAcaoArea, atacar, realizarEtapasAtaqueArea, gastarMana } = useAcoesBase();
const { causarQueimando } = useCausarCondicao();

export const EXPLOSAO_FOGO = {
    id: 23,
    nome: "Explosão de Fogo",
    dadoDeDano: "1d10",
    tipo: ATAQUES_TIPO.ATAQUE_PURO,
    descricao: "",
    elemento: ELEMENTOS.FOGO,
    categoria: CATEGORIAS_DE_DANO.MAGICO,
    custo: 3,
    evento: explosaoFogoEvento,
    alvos: ALVOS.INIMIGOS_AREA,
    execucao: ACAO_EXECUCAO.PADRAO,
    variantes: [],
}

function explosaoFogoEvento(personagem, alvos, acao, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    //1. personagem gasta as coisinhas e prepara os atributos dele
    const personagemNovo = gastarMana(personagem, acao.custo, functions);
    const modificadorMagia = {valor: personagem.atributos.magia, atributo: "Magia"}
    //2. É feito um ataque basico com banner pra demonstrar o valor padrão do ataque
    const modificadoresAtaque = getModificadoresConjuracao([modificadorMagia], personagem)
    const dadoPadrao = rolarDado(1, 20, modificadoresAtaque);
    const ataquePadrao = {resultadoDado: dadoPadrao.dados[0].resultado, resultadoTotal: dadoPadrao.total, modificadores: modificadoresAtaque}
    functions.ativarBannerAtaque(ataquePadrao, null, personagem.corTema)
    //3.Usando o valor padrão de ataque, ataca cada um dos alvos, retornando se ele acertou ou não neles
    const ataques = []
    alvos.map(alvo=> {
      const resultadoAtaque = atacar(personagemNovo, alvo, modificadorMagia, acao, functions, ataquePadrao)
      ataques.push(resultadoAtaque)
    })
    const resultadoAtaques = {ataquePadrao, ataques}
    const novosAlvos = []
    resultadoAtaques.ataques.map(resultadoAtaque=> {
      novosAlvos.push(resultadoAtaque.alvo)
    })
    //4.Rola um dano padrão de dano
    const modificadores = getModificadoresDano([modificadorMagia], personagem)
    const danoPadrao = rolarDado(1, 8, modificadores)
    //5.Usando o valor padrão de dano, rola o dano dnv em cada um dos alvos, retornando o dano pensando nos elementos tbm.
    const danos = []
    resultadoAtaques.ataques.map(resultadoAtaque=> {
      const dadoDano = rolarDado(1, 8, modificadores, acao.elemento, resultadoAtaque.alvo.elemento, danoPadrao.dados)
      danos.push({alvo: resultadoAtaque.alvo, dano: dadoDano})
    })
    //6. Realiza as etapas de ataque, e na segundaEtapa
    
    realizarEtapasAtaqueArea(
      ()=>{
        functions.ativarBannerRolagem([...danoPadrao.dados], modificadores, danoPadrao.total, personagem, {dado: ataquePadrao.resultadoDado})
      },
      ()=>{
        const novosAlvos2 = []
        let duracao = 0
        resultadoAtaques.ataques.map(resultadoAtaque=> {
          if(resultadoAtaque.acerto) {
            const _dano = danos.find(dano=> dano.alvo.idCombate === resultadoAtaque.alvo.idCombate)
            const novoAlvo1 = causarDano(resultadoAtaque.alvo, [_dano.dano], resultadoAtaque, acao, functions);
            const novoAlvo2 = causarQueimando(novoAlvo1, (10+personagem.atributos.magia), EXPLOSAO_FOGO, functions)
            duracao = iniciarEfeito(novoAlvo2, functions, EFFECTS.EXPLOSAO_FOGO, ACOES_AUDIO.FOGO);
            novosAlvos.push(novoAlvo2)
          }
          else {
            novosAlvos.push(resultadoAtaque.alvo)
          }
        })

        finalizarAcaoArea(functions, novosAlvos2, duracao, 3100);
      },
      ()=>{
        finalizarAcaoArea(functions, novosAlvos, 0);
      }, resultadoAtaques, functions, personagem, acao,
    )
  }