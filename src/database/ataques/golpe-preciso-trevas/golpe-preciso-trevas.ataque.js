import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { ALVOS, CATEGORIAS_DE_DANO, TIPOS_DE_DANO } from "../../../constants/acoes/acoes.constant";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, causarDano, finalizarAcao, atacar, realizarEtapasAtaque } = useAcoesBase();

export const GOLPE_PRECISO_TREVAS = {
    id: 33,
    nome: "Golpe Preciso (Trevas)",
    dadoDeDano: "1d8+FOR+1d6(Trevas)",
    descricao: "Um golpe de trevas feito com precisão para acertar o inimigo.",
    tipoDano: TIPOS_DE_DANO.TREVAS,
    categoria: CATEGORIAS_DE_DANO.CORPO_A_CORPO,
    custo: 0,
    evento: golpePrecisoTrevas,
    alvos: ALVOS.INIMIGOS,
}

function golpePrecisoTrevas(personagem, alvo, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    const modificadorForca = {valor: personagem.atributos.forca, atributo: "Força"}
    const resultadoAtaque = atacar(personagem, alvo, modificadorForca, functions)
    const modificadores = [modificadorForca]
    const dado1d8 = rolarDado(1, 8, modificadores)
    const dado1d6 = rolarDado(1, 6)
    const total = dado1d8.total + dado1d6.total
    
    realizarEtapasAtaque(
      ()=>{
        functions.ativarBannerRolagem([...dado1d8.dados,...dado1d6.dados], modificadores, total, personagem.corTema)
      },
      ()=>{
        const novoAlvo = causarDano(alvo, total, functions);
        const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.GOLPE_PRECISO_TREVAS, ACOES_AUDIO.CORTE);
        finalizarAcao(functions, novoAlvo, duracao);
      },
      ()=>{
        finalizarAcao(functions, alvo, 0);
      }, resultadoAtaque, functions
    )
  }