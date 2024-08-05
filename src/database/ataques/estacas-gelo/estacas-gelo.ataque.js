import { EFFECTS } from "../../../constants/images";
import { BANNER_DURACAO } from "../../../constants";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { ALVOS, CATEGORIAS_DE_DANO, TIPOS_DE_DANO } from "../../../constants/acoes/acoes.constant";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, causarDano, finalizarAcao, atacar, realizarEtapasAtaque, gastarMana } = useAcoesBase();

export const ESTACAS_GELO = {
    id: 21,
    nome: "Estacas de Gelo",
    dadoDeDano: "2d6",
    descricao: "Conjura estacas de gelo que perfuram o inimigo.",
    tipoDano: TIPOS_DE_DANO.GELO,
    categoria: CATEGORIAS_DE_DANO.MAGICO,
    custo: 1,
    evento: estacasGeloEvento,
    alvos: ALVOS.INIMIGOS,
}

function estacasGeloEvento(personagem, alvo, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    const personagemNovo = gastarMana(personagem, 1, functions);
    const modificadorMagia = {valor: personagem.atributos.magia, atributo: "Magia"}
    const resultadoAtaque = atacar(personagemNovo, alvo, modificadorMagia, functions)
    const modificadores = [modificadorMagia]
    const {dados, total} = rolarDado(2, 6, modificadores)
    
    realizarEtapasAtaque(
      ()=>{
        functions.ativarBannerRolagem([...dados], modificadores, total, personagem.corTema)
      },
      ()=>{
        const novoAlvo = causarDano(alvo, total, functions);
        const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.GELO_1, ACOES_AUDIO.GELO_1);
        finalizarAcao(functions, novoAlvo, duracao);
      },
      ()=>{
        finalizarAcao(functions, alvo, 0);
      }, resultadoAtaque, functions
    )
  }