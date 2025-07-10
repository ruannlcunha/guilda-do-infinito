import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_EXECUCAO, ALVOS, HABILIDADE_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../hook/batalha";

const { iniciarEfeito, finalizarAcao, gastarMana, informarErro } = useAcoesBase();
const { causarAbencoado } = useCausarCondicao();

export const BENCAO_DIVINA = {
    id: 6,
    nome: "Benção Divina",
    elemento: ELEMENTOS.LUZ,
    custo: 1,
    tipo: HABILIDADE_TIPO.BUFF,
    descricao: "Testes do alvo tem +1 na rolagem. Caso o alvo esteja Amaldiçoado, retira essa condição.",
    evento: bencaoDivinaEvento,
    alvos: ALVOS.ALIADOS,
    execucao: ACAO_EXECUCAO.PADRAO,
    variantes: [],
}

function bencaoDivinaEvento(personagem, alvo, acao, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });
    try {
      const personagemNovo = gastarMana(personagem, acao.custo, functions);
      const alvoCorreto = personagem.idCombate===alvo.idCombate ? personagemNovo : alvo
      functions.adicionarLog(`${personagem.nome} usou ${BENCAO_DIVINA.nome} em ${alvoCorreto.nome}.`)
      const novoAlvo =  causarAbencoado(alvoCorreto, BENCAO_DIVINA, functions)
      const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.LUZ_2, ACOES_AUDIO.MAGIA_1);
      finalizarAcao(functions, novoAlvo, duracao);

    } catch (error) {
      informarErro(error, functions)
      throw error
    }
  }