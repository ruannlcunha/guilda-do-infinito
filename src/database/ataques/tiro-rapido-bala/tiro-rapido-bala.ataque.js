import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { ALVOS, CATEGORIAS_DE_DANO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, causarDano, finalizarAcao, atacar, realizarEtapasAtaque } = useAcoesBase();

export const TIRO_RAPIDO_BALA = {
    id: 19,
    nome: "Tiro Rápido (Bala)",
    dadoDeDano: "2d6+AGI",
    descricao: "Um tiro rápido de arma de fogo vindo à distância.",
    elemento: ELEMENTOS.FISICO,
    categoria: CATEGORIAS_DE_DANO.DISTANCIA,
    custo: 0,
    evento: tiroRapidoBalaEvento,
    alvos: ALVOS.INIMIGOS,
}

function tiroRapidoBalaEvento(personagem, alvo, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    const modificadorAgilidade = {valor: personagem.atributos.agilidade, atributo: "Agilidade"}
    const resultadoAtaque = atacar(personagem, alvo, modificadorAgilidade, functions)
    const modificadores = [modificadorAgilidade]
    const {dados, total} = rolarDado(2, 6, modificadores, TIRO_RAPIDO_BALA.elemento, alvo.elemento)
    
    realizarEtapasAtaque(
      ()=>{
        functions.ativarBannerRolagem([...dados], modificadores, total, personagem.corTema, resultadoAtaque.dado)
      },
      ()=>{
        const novoAlvo = causarDano(alvo, total, resultadoAtaque, functions);
        const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.TIRO, ACOES_AUDIO.TIRO);
        finalizarAcao(functions, novoAlvo, duracao);
      },
      ()=>{
        finalizarAcao(functions, alvo, 0);
      }, resultadoAtaque, functions, personagem, alvo, TIRO_RAPIDO_BALA, total
    )
  }