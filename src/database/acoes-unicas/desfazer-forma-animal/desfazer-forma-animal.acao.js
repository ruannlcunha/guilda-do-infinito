import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_EXECUCAO, ALVOS } from "../../../constants/acoes/acoes.constant";
import { useEncerrarCondicao } from "../../../hook/batalha";
import { CONDICOES, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

const { iniciarEfeito, finalizarAcaoExtra, informarErro } = useAcoesBase();
const { encerrarFormaAnimal } = useEncerrarCondicao();

export const DESFAZER_FORMA_ANIMAL = {
  id: 6,
  nome: "Desfazer Forma Animal",
  elemento: ELEMENTOS.ESSENCIA,
  descricao: "Desfaz os efeitos da habilidade Forma Animal.",
  evento: desfazerFormaAnimalEvento,
  alvos: ALVOS.PESSOAL,
  execucao: ACAO_EXECUCAO.EXTRA,
  variantes: []
};

function desfazerFormaAnimalEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });

  try {
    let personagemNovo = { ...personagem };
    const alvoCorreto = personagem.idCombate === alvo.idCombate ? personagemNovo : alvo;
    const novoAlvo = encerrarFormaAnimal(alvoCorreto, functions);

    const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.FORMA_ANIMAL, ACOES_AUDIO.MAGIA_1);
    functions.adicionarLog(`${personagem.nome} usou ${acao.nome} e encerrou a condição ${CONDICOES.FORMA_ANIMAL.nome}.`);
    finalizarAcaoExtra(personagemNovo, functions, novoAlvo, duracao);
  } catch (error) {
    informarErro(error, functions);
    throw error;
  }
}
