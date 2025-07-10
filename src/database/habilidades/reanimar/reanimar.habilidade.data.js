import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_EXECUCAO, ALVOS, HABILIDADE_TIPO } from "../../../constants/acoes/acoes.constant";
import { CATEGORIA_CONDICAO, ELEMENTOS, TIPO_CONDICAO } from "../../../constants/personagens/personagem.constant";

const { iniciarEfeito, finalizarAcao, gastarMana, informarErro } = useAcoesBase();

export const REANIMAR = {
    id: 28,
    nome: "Reanimar",
    elemento: ELEMENTOS.LUZ,
    custo: 3,
    tipo: HABILIDADE_TIPO.REANIMACAO,
    descricao: "Traz de volta ao combate um aliado derrotado com 10% de vida.",
    evento: reanimarEvento,
    alvos: ALVOS.ALIADOS_MORTOS,
    execucao: ACAO_EXECUCAO.PADRAO,
    variantes: [],
}

function reanimarEvento(personagem, alvo, acao, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });
    try {
      const personagemNovo = gastarMana(personagem, acao.custo, functions);
      const alvoCorreto = personagem.idCombate===alvo.idCombate ? personagemNovo : alvo
      functions.adicionarLog(`${personagem.nome} usou ${REANIMAR.nome} em ${alvoCorreto.nome}.`)

      
      functions.adicionarLog(`${alvoCorreto.nome} foi reanimad${alvoCorreto.pronomes.minusculo_2} e voltou ao combate.`)
      const novaVidaAtual = Math.round((alvoCorreto.pv.maximo)*0.10)
      const novoPV = {...alvoCorreto.pv, atual: novaVidaAtual}
      const novoAlvo = {...alvoCorreto, pv: novoPV, isMorto: false}
      const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.LUZ_3, ACOES_AUDIO.MAGIA_1);
      finalizarAcao(functions, novoAlvo, duracao);

    } catch (error) {
      informarErro(error, functions)
      throw error
    }
  }