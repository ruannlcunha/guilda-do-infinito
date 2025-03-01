import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { ALVOS, CATEGORIAS_DE_DANO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, causarDano, finalizarAcao, atacar, realizarEtapasAtaque } = useAcoesBase();

export const TIRO_PRECISO_FLECHA = {
    id: 18,
    nome: "Tiro Preciso (Flecha)",
    dadoDeDano: "1d8+AGI",
    descricao: "Um tiro de flecha mirando com precisão no alvo.",
    elemento: ELEMENTOS.FISICO,
    categoria: CATEGORIAS_DE_DANO.DISTANCIA,
    custo: 0,
    evento: tiroPrecisoFlechaEvento,
    alvos: ALVOS.INIMIGOS,
}

function tiroPrecisoFlechaEvento(personagem, alvo, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    const modificadorAgilidade = {valor: personagem.atributos.agilidade, atributo: "Agilidade"}
    const resultadoAtaque = atacar(personagem, alvo, modificadorAgilidade, functions)
    const modificadores = [modificadorAgilidade]
    const {dados, total} = rolarDado(1, 8, modificadores, TIRO_PRECISO_FLECHA.elemento, alvo.elemento)
    
    realizarEtapasAtaque(
      ()=>{
        functions.ativarBannerRolagem([...dados], modificadores, total, personagem.corTema, resultadoAtaque.dado)
      },
      ()=>{
        const novoAlvo = causarDano(alvo, total, resultadoAtaque, functions);
        const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.TIRO, ACOES_AUDIO.FLECHA);
        finalizarAcao(functions, novoAlvo, duracao);
      },
      ()=>{
        finalizarAcao(functions, alvo, 0);
      }, resultadoAtaque, functions, personagem, alvo, TIRO_PRECISO_FLECHA, total
    )
  }