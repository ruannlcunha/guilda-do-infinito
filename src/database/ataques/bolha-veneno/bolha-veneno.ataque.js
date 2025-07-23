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
const { causarEnvenenado } = useCausarCondicao();

export const BOLHA_VENENO = {
    id: 79,
    nome: "Bolha de Veneno",
    dadoDeDano: "1d8",
    tipo: ATAQUES_TIPO.ATAQUE_PURO,
    descricao: "Uma bolha de veneno que explode no inimigo e pode envenená-lo.",
    elemento: ELEMENTOS.ACIDO,
    categoria: CATEGORIAS_DE_DANO.MAGICO,
    custo: 1,
    evento: bolhaVenenoEvento,
    alvos: ALVOS.INIMIGOS,
    execucao: ACAO_EXECUCAO.PADRAO,
    variantes: [],
}

function bolhaVenenoEvento(personagem, alvo, acao, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    const personagemNovo = gastarMana(personagem, acao.custo, functions);
    const modificadorMagia = {valor: personagem.atributos.magia, atributo: "Magia"}
    const resultadoAtaque = atacar(personagemNovo, alvo, modificadorMagia, acao, functions)
    const modificadores = getModificadoresDano([modificadorMagia], personagem)
    const dadoDano = rolarDado(1, 8, modificadores, BOLHA_VENENO.elemento, alvo.elemento)
    
    realizarEtapasAtaque(
      ()=>{
        functions.ativarBannerRolagem([...dadoDano.dados], modificadores, dadoDano.total, personagem, resultadoAtaque, alvo)
      },
      ()=>{
        const novoAlvo = causarDano(resultadoAtaque.alvo, [dadoDano], resultadoAtaque, BOLHA_VENENO, functions);
        const novoAlvo2 = causarEnvenenado(novoAlvo, (10+personagem.atributos.magia), BOLHA_VENENO, functions)
        const duracao = iniciarEfeito(novoAlvo2, functions, EFFECTS.ACIDO_1, ACOES_AUDIO.ACIDO);
        finalizarAcao(functions, novoAlvo2, duracao, 3100);
      },
      ()=>{
        finalizarAcao(functions, resultadoAtaque.alvo, 0);
      }, resultadoAtaque, functions, personagem, alvo, BOLHA_VENENO,
    )
  }