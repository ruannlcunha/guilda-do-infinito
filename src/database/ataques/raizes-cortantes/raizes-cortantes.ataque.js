import { EFFECTS } from "../../../constants/images";
import { BANNER_DURACAO } from "../../../constants";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { ALVOS, CATEGORIAS_DE_DANO, TIPOS_DE_DANO } from "../../../constants/acoes/acoes.constant";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, causarDano, finalizarAcao, atacar, realizarEtapasAtaque, gastarMana } = useAcoesBase();

export const RAIZES_CORTANTES = {
    id: 6,
    nome: "Raízes Cortantes",
    dadoDeDano: "3d4+2",
    descricao: "Raízes afiadas surgem do chão e atacam o inimigo.",
    tipoDano: TIPOS_DE_DANO.FISICO,
    categoria: CATEGORIAS_DE_DANO.MAGICO,
    custo: 1,
    evento: raizesCortantesEvento,
    alvos: ALVOS.INIMIGOS,
}

function raizesCortantesEvento(personagem, alvo, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    const modificadorPadrao = {valor: 2, atributo: "Modificador"}
    const modificadorMagia = {valor: personagem.atributos.magia, atributo: "Magia"}
    const resultadoAtaque = atacar(personagem, alvo, modificadorMagia, functions)
    const modificadores = [modificadorPadrao, modificadorMagia]
    const {dados, total} = rolarDado(3, 4, modificadores)
    
    realizarEtapasAtaque(
      ()=>{
        functions.ativarBannerRolagem([...dados], modificadores, total, personagem.corTema)
      },
      ()=>{
        const novoAlvo = causarDano(alvo, total, functions);
        const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.RAIZES, ACOES_AUDIO.PLANTA_1);
        finalizarAcao(functions, novoAlvo, duracao);
      },
      ()=>{
        finalizarAcao(functions, alvo, 0);
      }, resultadoAtaque, functions
    )
  }