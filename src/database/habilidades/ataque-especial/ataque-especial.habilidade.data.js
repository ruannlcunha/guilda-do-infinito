import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_EXECUCAO, ALVOS, HABILIDADE_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../hook/batalha";

const { iniciarEfeito, finalizarAcaoLivre, gastarMana, informarErro } = useAcoesBase();
const { causarAtaqueEspecial } = useCausarCondicao();

export const ATAQUE_ESPECIAL = {
    id: 14,
    nome: "Ataque Especial",
    elemento: ELEMENTOS.FISICO,
    custo: 1,
    tipo: HABILIDADE_TIPO.BUFF,
    descricao: "Fortalece seu físico e ganha +2 de bônus no próximo ataque.",
    evento: ataqueEspecialEvento,
    alvos: ALVOS.PESSOAL,
    execucao: ACAO_EXECUCAO.LIVRE,
    variantes: [],
}

async function ataqueEspecialEvento(personagem, alvo, acao, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });
    try {
      const personagemNovo = gastarMana(personagem, acao.custo, functions);
      const alvoCorreto = personagem.idCombate===alvo.idCombate ? personagemNovo : alvo
      functions.adicionarLog(`${personagem.nome} usou ${ATAQUE_ESPECIAL.nome} em si mesmo.`)
      const novoAlvo =  causarAtaqueEspecial(alvoCorreto, ATAQUE_ESPECIAL, functions)
      const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.FUMACA_1, ACOES_AUDIO.FOLEGO);
      finalizarAcaoLivre(functions, novoAlvo, duracao);
      return duracao

    } catch (error) {
      informarErro(error, functions)
      throw error
    }
  }