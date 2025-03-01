import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ALVOS } from "../../../constants/acoes/acoes.constant";
import { useEncerrarCondicao } from "../../../hook/batalha";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";

const { iniciarEfeito, finalizarAcao } = useAcoesBase();
const { encerrarQueimando } = useEncerrarCondicao();

export const APAGAR_CHAMAS = {
    id: 1,
    nome: "Apagar Chamas",
    elemento: ELEMENTOS.FISICO,
    descricao: "Apaga as chamas de si próprio para encerrar a condição Queimando.",
    evento: apagarChamasEvento,
    alvos: ALVOS.PESSOAL,
}

function apagarChamasEvento(personagem, alvo, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    try {
      const novoAlvo = personagem.idCombate===alvo.idCombate ? personagem : alvo
      const alvoCurado = encerrarQueimando(novoAlvo);

      const duracao = iniciarEfeito(alvoCurado, functions, EFFECTS.FUMACA_2, ACOES_AUDIO.APAGAR_CHAMAS);
      functions.adicionarLog(`${personagem.nome} usou ${APAGAR_CHAMAS.nome} e encerrou a condição Queimando.`)
      finalizarAcao(functions, alvoCurado, duracao);
      
    } catch (error) {
      informarErro(error, functions)
    }
  }