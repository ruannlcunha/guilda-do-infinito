import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { ALVOS, CATEGORIAS_DE_DANO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, causarDano, finalizarAcao, atacar, realizarEtapasAtaque } = useAcoesBase();

export const TIRO_PRECISO_ACIDO = {
    id: 69,
    nome: "Tiro Preciso (Ácido)",
    dadoDeDano: "1d8+AGI+1d6(Ácido)",
    descricao: "Um tiro de projétil de ácido mirando com precisão no alvo.",
    elemento: ELEMENTOS.ACIDO,
    categoria: CATEGORIAS_DE_DANO.DISTANCIA,
    custo: 0,
    evento: tiroPrecisoAcido,
    alvos: ALVOS.INIMIGOS,
}

function tiroPrecisoAcido(personagem, alvo, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    const modificadorAgilidade = {valor: personagem.atributos.agilidade, atributo: "Agilidade"}
    const resultadoAtaque = atacar(personagem, alvo, modificadorAgilidade, functions)
    const modificadores = [modificadorAgilidade]
    const dado1d8 = rolarDado(1, 8, modificadores, ELEMENTOS.FISICO, alvo.elemento)
    const dado1d6Elemental = rolarDado(1, 6, [], TIRO_PRECISO_ACIDO.elemento, alvo.elemento)
    const total = dado1d8.total + dado1d6Elemental.total
    
    realizarEtapasAtaque(
      ()=>{
        functions.ativarBannerRolagem([...dado1d8.dados,...dado1d6Elemental.dados], modificadores, total, personagem.corTema)
      },
      ()=>{
        const novoAlvo = causarDano(alvo, total, resultadoAtaque, functions);
        const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.JATOS_ACIDO, ACOES_AUDIO.FLECHA);
        finalizarAcao(functions, novoAlvo, duracao);
      },
      ()=>{
        finalizarAcao(functions, alvo, 0);
      }, resultadoAtaque, functions, personagem, alvo, TIRO_PRECISO_ACIDO, total
    )
  }