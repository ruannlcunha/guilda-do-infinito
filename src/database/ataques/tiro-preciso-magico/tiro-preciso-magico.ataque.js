import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { ALVOS, CATEGORIAS_DE_DANO, TIPOS_DE_DANO } from "../../../constants/acoes/acoes.constant";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, causarDano, finalizarAcao, atacar, realizarEtapasAtaque } = useAcoesBase();

export const TIRO_PRECISO_MAGICO = {
    id: 65,
    nome: "Tiro Preciso (Mágico)",
    dadoDeDano: "1d8+AGI+1d6(Essência)",
    descricao: "Um tiro de projétil mágico mirando com precisão no alvo.",
    tipoDano: TIPOS_DE_DANO.ESSENCIA,
    categoria: CATEGORIAS_DE_DANO.DISTANCIA,
    custo: 0,
    evento: tiroPrecisoMagico,
    alvos: ALVOS.INIMIGOS,
}

function tiroPrecisoMagico(personagem, alvo, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    const modificadorAgilidade = {valor: personagem.atributos.agilidade, atributo: "Agilidade"}
    const resultadoAtaque = atacar(personagem, alvo, modificadorAgilidade, functions)
    const modificadores = [modificadorAgilidade]
    const dado1d8 = rolarDado(1, 8, modificadores)
    const dado1d6Elemental = rolarDado(1, 6)
    const total = dado1d8.total + dado1d6Elemental.total
    
    realizarEtapasAtaque(
      ()=>{
        functions.ativarBannerRolagem([...dado1d8.dados,...dado1d6Elemental.dados], modificadores, total, personagem.corTema)
      },
      ()=>{
        const novoAlvo = causarDano(alvo, total, functions);
        const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.TIRO_MAGICO, ACOES_AUDIO.FLECHA);
        finalizarAcao(functions, novoAlvo, duracao);
      },
      ()=>{
        finalizarAcao(functions, alvo, 0);
      }, resultadoAtaque, functions
    )
  }