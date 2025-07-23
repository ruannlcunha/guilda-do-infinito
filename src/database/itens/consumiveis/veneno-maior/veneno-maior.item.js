import { ALVOS } from "../../../../constants/acoes/acoes.constant";
import { ACOES_AUDIO } from "../../../../constants/audios/acoes.constant";
import { EFFECTS } from "../../../../constants/images";
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { ELEMENTOS } from "../../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../../hook/batalha";
import { useAcoesBase } from "../../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../../hook/batalha/rolar-dado/use-rolar-dado.hook";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, causarDano, finalizarAcao, atacar, realizarEtapasAtaque, consumirItem } = useAcoesBase();
const { causarEnvenenado } = useCausarCondicao();

export const VENENO_MAIOR = {
    id: 12,
    nome: "Frasco de Veneno Maior",
    descricao: `Um grande frasco contendo um líquido corrosivo que pode ser arremessado em um inimigo causando 2d8+4 de dano de Ácido e podendo deixá-lo Envenenado.
    A dificuldade para o inimigo resistir à condição Envenenado é 10+AGI+2.`,
    efeito: "Causa 2d8+4 de dano de Ácido e pode deixar o alvo Envenenado.",
    evento: venenoMaiorEvento,
    alvos: ALVOS.INIMIGOS,
    sprite: "/guilda-do-infinito/src/database/itens/consumiveis/veneno-maior/VENENO_MAIOR.png",
    raridade: 4,
    itemTipo: ITEM_TIPO.CONSUMIVEL,
}

function venenoMaiorEvento(personagem, alvo, acao, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    const personagemNovo = consumirItem(personagem, acao.id, functions)
    const modificadorAgilidade = {valor: personagem.atributos.agilidade, atributo: "Agilidade"}
    const resultadoAtaque = atacar(personagemNovo, alvo, modificadorAgilidade, acao, functions)
    const modificadores = [{valor: 4, atributo: "Modificador"}]
    const dadoDano = rolarDado(2, 8, modificadores, ELEMENTOS.ACIDO, alvo.elemento)
    
    realizarEtapasAtaque(
      ()=>{
        functions.ativarBannerRolagem([...dadoDano.dados], modificadores, dadoDano.total, personagem, resultadoAtaque, alvo)
      },
      ()=>{
        const novoAlvo = causarDano(resultadoAtaque.alvo, [dadoDano], resultadoAtaque, acao, functions);
        const novoAlvo2 = causarEnvenenado(novoAlvo, (20+personagem.atributos.agilidade+2), acao, functions)
        const duracao = iniciarEfeito(novoAlvo2, functions, EFFECTS.ACIDO_1, ACOES_AUDIO.ACIDO);
        finalizarAcao(functions, novoAlvo2, duracao);
      },
      ()=>{
        finalizarAcao(functions, resultadoAtaque.alvo, 0);
      }, resultadoAtaque, functions, personagem, alvo, acao,
    )
}

