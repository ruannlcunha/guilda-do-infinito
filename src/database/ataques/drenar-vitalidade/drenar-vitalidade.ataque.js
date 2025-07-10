import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { ACAO_EXECUCAO, ALVOS, ATAQUES_TIPO, CATEGORIAS_DE_DANO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { getModificadoresDano } from "../../../utils/get-modificadores.util";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, causarDano, finalizarAcao, atacar,
   realizarEtapasAtaque, gastarMana, restaurarVida } = useAcoesBase();

export const DRENAR_VITALIDADE = {
    id: 78,
    nome: "Drenar Vitalidade",
    dadoDeDano: "3d6",
    tipo: ATAQUES_TIPO.ATAQUE_PURO,
    descricao: "Um ataque que machuca o inimigo e absorve parte de sua vitalidade.",
    elemento: ELEMENTOS.TREVAS,
    categoria: CATEGORIAS_DE_DANO.MAGICO,
    custo: 3,
    evento: drenarVitalidade,
    alvos: ALVOS.INIMIGOS,
    execucao: ACAO_EXECUCAO.PADRAO,
    variantes: [],
}

function drenarVitalidade(personagem, alvo, acao, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    const modificadorMagia = {valor: personagem.atributos.magia, atributo: "Magia"}
    const modificadores = getModificadoresDano([modificadorMagia], personagem)
    const dadoDano = rolarDado(3, 6, modificadores, DRENAR_VITALIDADE.elemento, alvo.elemento)
    const personagemNovo = gastarMana(personagem, acao.custo, functions);
    const resultadoAtaque = atacar(personagemNovo, alvo, modificadorMagia, functions)
    
    realizarEtapasAtaque(
      ()=>{
        functions.ativarBannerRolagem([...dadoDano.dados], modificadores, dadoDano.total, personagem, resultadoAtaque, alvo)
      },
      ()=>{
        restaurarVida(personagemNovo, (dadoDano.total/2), functions)
        const novoAlvo = causarDano(resultadoAtaque.alvo, [dadoDano], resultadoAtaque, DRENAR_VITALIDADE, functions);
        const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.TREVAS_1, ACOES_AUDIO.TREVAS_1);
        finalizarAcao(functions, novoAlvo, duracao);
      },
      ()=>{
        finalizarAcao(functions, resultadoAtaque.alvo, 0);
      }, resultadoAtaque, functions, personagem, alvo, DRENAR_VITALIDADE,
    )
  }