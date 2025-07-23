import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { ACAO_EXECUCAO, ALVOS, ATAQUES_TIPO, CATEGORIAS_DE_DANO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { getModificadoresDano } from "../../../utils/get-modificadores.util";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, causarDano, finalizarAcao, atacar, realizarEtapasAtaque, gastarMana } = useAcoesBase();

export const JATOS_ACIDO = {
    id: 8,
    nome: "Jatos de Ácido",
    dadoDeDano: "2d6",
    tipo: ATAQUES_TIPO.ATAQUE_PURO,
    descricao: "Atira pequenas quantidades de ácido no inimigo.",
    elemento: ELEMENTOS.ACIDO,
    categoria: CATEGORIAS_DE_DANO.MAGICO,
    custo: 1,
    evento: tiroAcidoEvento,
    alvos: ALVOS.INIMIGOS,
    execucao: ACAO_EXECUCAO.PADRAO,
    variantes: [],
}

function tiroAcidoEvento(personagem, alvo, acao, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    const personagemNovo = gastarMana(personagem, acao.custo, functions);
    const modificadorMagia = {valor: personagem.atributos.magia, atributo: "Magia"}
    const resultadoAtaque = atacar(personagemNovo, alvo, modificadorMagia, acao, functions)
    const modificadores = getModificadoresDano([modificadorMagia], personagem)
    const dadoDano = rolarDado(2, 6, modificadores, JATOS_ACIDO.elemento, alvo.elemento)
    
    realizarEtapasAtaque(
      ()=>{
        functions.ativarBannerRolagem([...dadoDano.dados], modificadores, dadoDano.total, personagem, resultadoAtaque, alvo)
      },
      ()=>{
        const novoAlvo = causarDano(resultadoAtaque.alvo, [dadoDano], resultadoAtaque, JATOS_ACIDO, functions);
        const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.ACIDO_1, ACOES_AUDIO.ACIDO);
        finalizarAcao(functions, novoAlvo, duracao);
      },
      ()=>{
        finalizarAcao(functions, resultadoAtaque.alvo, 0);
      }, resultadoAtaque, functions, personagem, alvo, JATOS_ACIDO,
    )
  }