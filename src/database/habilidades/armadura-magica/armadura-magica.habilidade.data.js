import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_EXECUCAO, ALVOS, HABILIDADE_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../hook/batalha";

const { iniciarEfeito, finalizarAcao, gastarMana, informarErro } = useAcoesBase();
const { causarArmaduraMagica } = useCausarCondicao();

export const ARMADURA_MAGICA = {
    id: 2,
    nome: "Armadura Mágica",
    elemento: ELEMENTOS.ESSENCIA,
    custo: 2,
    tipo: HABILIDADE_TIPO.BUFF,
    descricao: "Se o alvo não usar Armadura Pesada, ganha +5 de armadura.",
    evento: armaduraMagicaEvento,
    alvos: ALVOS.ALIADOS,
    execucao: ACAO_EXECUCAO.PADRAO,
    variantes: [],
}

function armaduraMagicaEvento(personagem, alvo, acao, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });
    try {
      const personagemNovo = gastarMana(personagem, acao.custo, functions);
      const alvoCorreto = personagem.idCombate===alvo.idCombate ? personagemNovo : alvo
      functions.adicionarLog(`${personagem.nome} usou ${ARMADURA_MAGICA.nome} em ${alvoCorreto.nome}.`)
      const novoAlvo =  causarArmaduraMagica(alvoCorreto, ARMADURA_MAGICA, functions)
      const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.ARMADURA_MAGICA, ACOES_AUDIO.MAGIA_1);
      finalizarAcao(functions, novoAlvo, duracao);

    } catch (error) {
      informarErro(error, functions)
      throw error
    }
  }