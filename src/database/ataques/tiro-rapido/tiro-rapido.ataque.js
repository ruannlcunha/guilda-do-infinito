import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { ACAO_EXECUCAO, ALVOS, ATAQUES_TIPO, CATEGORIAS_DE_DANO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { getModificadoresDano } from "../../../utils/get-modificadores.util";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, causarDano, finalizarAcao, atacar, realizarEtapasAtaque } = useAcoesBase();

export const TIRO_RAPIDO = {
    id: 17,
    nome: "Tiro Rápido",
    dadoDeDano: "1d6+AGI",
    tipo: ATAQUES_TIPO.ATAQUE_PURO,
    descricao: "Um tiro rápido de flecha vindo à distância.",
    elemento: ELEMENTOS.FISICO,
    categoria: CATEGORIAS_DE_DANO.DISTANCIA,
    custo: 0,
    evento: tiroRapidoFlechaEvento,
    alvos: ALVOS.INIMIGOS,
    execucao: ACAO_EXECUCAO.PADRAO,
    variantes: [],
}

function tiroRapidoFlechaEvento(personagem, alvo, acao, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    const modificadorAgilidade = {valor: personagem.atributos.agilidade, atributo: "Agilidade"}
    const resultadoAtaque = atacar(personagem, alvo, modificadorAgilidade, acao, functions)
    const modificadores = getModificadoresDano([modificadorAgilidade], personagem)
    const dadoDano = rolarDado(1, 6, modificadores, TIRO_RAPIDO.elemento, alvo.elemento)
    
    realizarEtapasAtaque(
      ()=>{
        functions.ativarBannerRolagem([...dadoDano.dados], modificadores, dadoDano.total, personagem, resultadoAtaque, alvo)
      },
      ()=>{
        const novoAlvo = causarDano(resultadoAtaque.alvo, [dadoDano], resultadoAtaque, TIRO_RAPIDO, functions);
        const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.TIRO, ACOES_AUDIO.FLECHA);
        finalizarAcao(functions, novoAlvo, duracao);
      },
      ()=>{
        finalizarAcao(functions, resultadoAtaque.alvo, 0);
      }, resultadoAtaque, functions, personagem, alvo, TIRO_RAPIDO,
    )
  }