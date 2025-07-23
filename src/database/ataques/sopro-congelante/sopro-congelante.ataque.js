import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { ACAO_EXECUCAO, ALVOS, ATAQUES_TIPO, CATEGORIAS_DE_DANO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { getModificadoresDano } from "../../../utils/get-modificadores.util";
import { useCausarCondicao } from "../../../hook/batalha";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, causarDano, finalizarAcao, atacar, realizarEtapasAtaque, gastarMana } = useAcoesBase();
const { causarCongelado } = useCausarCondicao();

export const SOPRO_CONGELANTE = {
    id: 11,
    nome: "Sopro Congelante",
    dadoDeDano: "1d8",
    tipo: ATAQUES_TIPO.ATAQUE_PURO,
    descricao: "Uma rajada de ar frio que causa 1d8 de dano de Gelo e pode deixar o inimigo Congelado.",
    elemento: ELEMENTOS.GELO,
    categoria: CATEGORIAS_DE_DANO.MAGICO,
    custo: 1,
    evento: soproCongelanteEvento,
    alvos: ALVOS.INIMIGOS,
    execucao: ACAO_EXECUCAO.PADRAO,
    variantes: [],
}

function soproCongelanteEvento(personagem, alvo, acao, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    const personagemNovo = gastarMana(personagem, acao.custo, functions);
    const modificadorMagia = {valor: personagem.atributos.magia, atributo: "Magia"}
    const resultadoAtaque = atacar(personagemNovo, alvo, modificadorMagia, acao, functions)
    const modificadores = getModificadoresDano([modificadorMagia], personagem)
    const dadoDano = rolarDado(1, 8, modificadores, SOPRO_CONGELANTE.elemento, alvo.elemento)
    
    realizarEtapasAtaque(
      ()=>{
        functions.ativarBannerRolagem([...dadoDano.dados], modificadores, dadoDano.total, personagem, resultadoAtaque, alvo)
      },
      ()=>{
        const novoAlvo = causarDano(resultadoAtaque.alvo, [dadoDano], resultadoAtaque, SOPRO_CONGELANTE, functions);
        const novoAlvo2 = causarCongelado(novoAlvo, (10+personagem.atributos.magia), SOPRO_CONGELANTE, functions)
        const duracao = iniciarEfeito(novoAlvo2, functions, EFFECTS.GELO_1, ACOES_AUDIO.GELO_1);
        finalizarAcao(functions, novoAlvo2, duracao, 3100);
      },
      ()=>{
        finalizarAcao(functions, resultadoAtaque.alvo, 0);
      }, resultadoAtaque, functions, personagem, alvo, SOPRO_CONGELANTE,
    )
  }