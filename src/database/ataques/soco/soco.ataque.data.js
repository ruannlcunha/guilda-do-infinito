import { EFFECTS } from "../../../constants/images";
import { BANNER_DURACAO } from "../../../constants";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { ALVOS, CATEGORIAS_DE_DANO, TIPOS_DE_DANO } from "../../../constants/acoes/acoes.constant";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, causarDano, finalizarAcao, atacar } = useAcoesBase();

export const SOCO = {
    id: 1,
    nome: "Soco",
    dadoDeDano: "1d4",
    tipoDano: TIPOS_DE_DANO.FISICO,
    categoria: CATEGORIAS_DE_DANO.CORPO_A_CORPO,
    custo: 0,
    evento: socoEvento,
    alvos: ALVOS.INIMIGOS,
}

function socoEvento(personagem, alvo, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    const modificadorForca = {valor: personagem.atributos.forca, atributo: "Força"}
    const resultadoAtaque = atacar(personagem, alvo, modificadorForca, functions)

    if(resultadoAtaque) {
      setTimeout(() => {
        const modificadores = [modificadorForca]
        const {dados, total} = rolarDado(1, 4, modificadores)
        functions.ativarBannerRolagem([...dados], modificadores, total, personagem.corTema)

        setTimeout(()=>{
          
          const novoAlvo = causarDano(alvo, total, functions);
          const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.SOCO_EFFECT, ACOES_AUDIO.SOCO);
          finalizarAcao(functions, novoAlvo, duracao);
        }, BANNER_DURACAO.ROLAGEM+100)
        
      }, (BANNER_DURACAO.ATAQUE)+100);
    } else {
      setTimeout(() => {
        finalizarAcao(functions, alvo, 0);
      }, (BANNER_DURACAO.ATAQUE)+100);
    }
    
  }