import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { ALVOS, CATEGORIAS_DE_DANO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, causarDano, finalizarAcao, atacar, realizarEtapasAtaque } = useAcoesBase();

export const GOLPE_PESADO = {
    id: 15,
    nome: "Golpe Pesado",
    dadoDeDano: "1d10+FOR",
    descricao: "Um golpe impactante causado por uma arma pesada.",
    elemento: ELEMENTOS.FISICO,
    categoria: CATEGORIAS_DE_DANO.CORPO_A_CORPO,
    custo: 0,
    evento: golpePesadoEvento,
    alvos: ALVOS.INIMIGOS,
}

function golpePesadoEvento(personagem, alvo, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    const modificadorForca = {valor: personagem.atributos.forca, atributo: "Força"}
    const resultadoAtaque = atacar(personagem, alvo, modificadorForca, functions)
    const modificadores = [modificadorForca]
    const {dados, total} = rolarDado(1, 10, modificadores, GOLPE_PESADO.elemento, alvo.elemento)
    
    realizarEtapasAtaque(
      ()=>{
        functions.ativarBannerRolagem([...dados], modificadores, total, personagem.corTema, resultadoAtaque.dado)
      },
      ()=>{
        const novoAlvo = causarDano(alvo, total, resultadoAtaque, functions);
        const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.GOLPE_PESADO, ACOES_AUDIO.CORTE);
        finalizarAcao(functions, novoAlvo, duracao);
      },
      ()=>{
        finalizarAcao(functions, alvo, 0);
      }, resultadoAtaque, functions, personagem, alvo, GOLPE_PESADO, total
    )
  }