import { EFFECTS } from "../../../constants/images";
import { BANNER_DURACAO } from "../../../constants";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { ACAO_EXECUCAO, ALVOS, ATAQUES_TIPO, CATEGORIAS_DE_DANO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { getModificadoresDano } from "../../../utils/get-modificadores.util";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, causarDano, finalizarAcao, atacar, realizarEtapasAtaque, gastarMana } = useAcoesBase();

export const RAIZES_CORTANTES = {
    id: 6,
    nome: "Raízes Cortantes",
    dadoDeDano: "3d4+2",
    tipo: ATAQUES_TIPO.ATAQUE_PURO,
    descricao: "Raízes afiadas surgem do chão e atacam o inimigo.",
    elemento: ELEMENTOS.FISICO,
    categoria: CATEGORIAS_DE_DANO.MAGICO,
    custo: 1,
    evento: raizesCortantesEvento,
    alvos: ALVOS.INIMIGOS,
    execucao: ACAO_EXECUCAO.PADRAO,
    variantes: [],
}

function raizesCortantesEvento(personagem, alvo, acao, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    const personagemNovo = gastarMana(personagem, acao.custo, functions);
    const modificadorPadrao = {valor: 2, atributo: "Modificador"}
    const modificadorMagia = {valor: personagem.atributos.magia, atributo: "Magia"}
    const resultadoAtaque = atacar(personagemNovo, alvo, modificadorMagia, acao, functions)
    const modificadores = getModificadoresDano([modificadorPadrao, modificadorMagia], personagem)
    const dadoDano = rolarDado(3, 4, modificadores, RAIZES_CORTANTES.elemento, alvo.elemento)
    
    realizarEtapasAtaque(
      ()=>{
        functions.ativarBannerRolagem([...dadoDano.dados], modificadores, dadoDano.total, personagem, resultadoAtaque, alvo)
      },
      ()=>{
        const novoAlvo = causarDano(resultadoAtaque.alvo, [dadoDano], resultadoAtaque, RAIZES_CORTANTES, functions);
        const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.RAIZES, ACOES_AUDIO.PLANTA_1);
        finalizarAcao(functions, novoAlvo, duracao);
      },
      ()=>{
        finalizarAcao(functions, resultadoAtaque.alvo, 0);
      }, resultadoAtaque, functions, personagem, alvo, RAIZES_CORTANTES,
    )
  }