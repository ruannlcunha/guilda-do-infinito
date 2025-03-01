import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { ALVOS, CATEGORIAS_DE_DANO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../hook/batalha";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, causarDano, finalizarAcao, atacar, realizarEtapasAtaque, gastarMana } = useAcoesBase();
const { causarCongelado } = useCausarCondicao();

export const SOPRO_CONGELANTE = {
    id: 1,
    nome: "Sopro Congelante",
    dadoDeDano: "1d8",
    descricao: "Uma rajada de ar frio que causa 1d8 de dano de Gelo e pode tornar o inimigo Congelado.",
    elemento: ELEMENTOS.GELO,
    categoria: CATEGORIAS_DE_DANO.MAGICO,
    custo: 1,
    evento: soproCongelanteEvento,
    alvos: ALVOS.INIMIGOS,
}

function soproCongelanteEvento(personagem, alvo, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    const personagemNovo = gastarMana(personagem, 1, functions);
    const modificadorMagia = {valor: personagem.atributos.magia, atributo: "Magia"}
    const resultadoAtaque = atacar(personagemNovo, alvo, modificadorMagia, functions)
    const modificadores = [modificadorMagia]
    const {dados, total} = rolarDado(1, 8, modificadores, SOPRO_CONGELANTE.elemento, alvo.elemento)
    
    realizarEtapasAtaque(
      ()=>{
        functions.ativarBannerRolagem([...dados], modificadores, total, personagem.corTema, resultadoAtaque.dado)
      },
      ()=>{
        const novoAlvo = causarDano(alvo, total, resultadoAtaque, functions);
        const novoAlvo2 = causarCongelado(novoAlvo, (10+personagem.atributos.magia), functions)
        const duracao = iniciarEfeito(novoAlvo2, functions, EFFECTS.GELO_1, ACOES_AUDIO.GELO_1);
        finalizarAcao(functions, novoAlvo2, duracao, 3100);
      },
      ()=>{
        finalizarAcao(functions, alvo, 0);
      }, resultadoAtaque, functions, personagem, alvo, SOPRO_CONGELANTE, total
    )
  }