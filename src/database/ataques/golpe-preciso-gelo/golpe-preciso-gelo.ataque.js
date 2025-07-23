import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { ACAO_EXECUCAO, ALVOS, ATAQUES_TIPO, CATEGORIAS_DE_DANO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { getModificadoresDano } from "../../../utils/get-modificadores.util";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, causarDano, finalizarAcao, atacar, realizarEtapasAtaque } = useAcoesBase();

export const GOLPE_PRECISO_GELO = {
    id: 32,
    nome: "Golpe Preciso (Gelo)",
    dadoDeDano: "1d8+FOR+1d6(Gelo)",
    tipo: ATAQUES_TIPO.ATAQUE_PURO,
    descricao: "Um golpe de gelo feito com precisão para acertar o inimigo.",
    elemento: ELEMENTOS.GELO,
    categoria: CATEGORIAS_DE_DANO.CORPO_A_CORPO,
    custo: 0,
    evento: golpePrecisoGelo,
    alvos: ALVOS.INIMIGOS,
    execucao: ACAO_EXECUCAO.PADRAO,
    variantes: [],
}

function golpePrecisoGelo(personagem, alvo, acao, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    const modificadorForca = {valor: personagem.atributos.forca, atributo: "Força"}
    const resultadoAtaque = atacar(personagem, alvo, modificadorForca, acao, functions)
    const modificadores = getModificadoresDano([modificadorForca], personagem)
    const dado1d8 = rolarDado(1, 8, modificadores, ELEMENTOS.FISICO, alvo.elemento)
    const dado1d6Elemental = rolarDado(1, 6, [], GOLPE_PRECISO_GELO.elemento, alvo.elemento)
    const total = (dado1d8.total + dado1d6Elemental.total)
    const danos = [dado1d8, dado1d6Elemental]
    
    realizarEtapasAtaque(
      ()=>{
        functions.ativarBannerRolagem([...dado1d8.dados,...dado1d6Elemental.dados], modificadores, total, personagem, resultadoAtaque, alvo)
      },
      ()=>{
        const novoAlvo = causarDano(resultadoAtaque.alvo, danos, resultadoAtaque, GOLPE_PRECISO_GELO, functions);
        const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.GOLPE_PRECISO_GELO, ACOES_AUDIO.CORTE);
        finalizarAcao(functions, novoAlvo, duracao);
      },
      ()=>{
        finalizarAcao(functions, resultadoAtaque.alvo, 0);
      }, resultadoAtaque, functions, personagem, alvo, GOLPE_PRECISO_GELO,
    )
  }