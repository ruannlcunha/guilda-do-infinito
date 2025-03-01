import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { ALVOS, CATEGORIAS_DE_DANO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, causarDano, finalizarAcao, atacar,
   realizarEtapasAtaque, gastarMana, restaurarVida } = useAcoesBase();

export const DRENAR_VITALIDADE = {
    id: 78,
    nome: "Drenar Vitalidade",
    dadoDeDano: "3d6",
    descricao: "Um ataque que machuca o inimigo e absorve parte de sua vitalidade.",
    elemento: ELEMENTOS.TREVAS,
    categoria: CATEGORIAS_DE_DANO.MAGICO,
    custo: 3,
    evento: drenarVitalidade,
    alvos: ALVOS.INIMIGOS,
}

function drenarVitalidade(personagem, alvo, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    const modificadorMagia = {valor: personagem.atributos.magia, atributo: "Magia"}
    const modificadores = [modificadorMagia]
    const {dados, total} = rolarDado(3, 6, modificadores, DRENAR_VITALIDADE.elemento, alvo.elemento)
    const personagemNovo = gastarMana(personagem, 3, functions);
    const resultadoAtaque = atacar(personagemNovo, alvo, modificadorMagia, functions)
    
    realizarEtapasAtaque(
      ()=>{
        functions.ativarBannerRolagem([...dados], modificadores, total, personagem.corTema, resultadoAtaque.dado)
      },
      ()=>{
        restaurarVida(personagemNovo, (total/2), functions)
        const novoAlvo = causarDano(alvo, total, resultadoAtaque, functions);
        const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.TREVAS_1, ACOES_AUDIO.TREVAS_1);
        finalizarAcao(functions, novoAlvo, duracao);
      },
      ()=>{
        finalizarAcao(functions, alvo, 0);
      }, resultadoAtaque, functions, personagem, alvo, DRENAR_VITALIDADE, total
    )
  }