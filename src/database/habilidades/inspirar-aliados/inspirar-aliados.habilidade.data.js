import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_CATEGORIA, ACAO_EXECUCAO, ALVOS, ACAO_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../hook/batalha";

const { iniciarEfeito, finalizarAcaoArea, gastarMana, informarErro } = useAcoesBase();
const { causarInspirado } = useCausarCondicao();

export const INSPIRAR_ALIADOS = {
  id: 29,
  nome: "Inspirar Aliados",
  elemento: ELEMENTOS.ESSENCIA,
  custo: 2,
  tipo: ACAO_TIPO.BUFF,
  categoria: ACAO_CATEGORIA.MAGICO,
  descricao: "Inspira todos seus aliados em combate e fornece a eles +1 em testes de Ataque e Conjuração.",
  evento: inspirarAliadosEvento,
  alvos: ALVOS.ALIADOS_AREA,
  execucao: ACAO_EXECUCAO.PADRAO,
  bonus: 1,
  variantes: []
};

function inspirarAliadosEvento(personagem, alvos, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });
  try {
    let personagemNovo = gastarMana(personagem, acao.custo, functions);
    const novosAlvos = [];
    let duracao = 0;
    functions.adicionarLog(`${personagem.nome} usou ${acao.nome} em seus aliados.`);

    alvos.map((alvo) => {
      const alvoCorreto = personagem.idCombate === alvo.idCombate ? personagemNovo : alvo;
      const novoAlvo = causarInspirado(alvoCorreto, acao, functions);
      if (personagem.idCombate === alvo.idCombate) personagemNovo = novoAlvo;
      duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.MUSICAL_1, ACOES_AUDIO.MELODIA);
      novosAlvos.push(novoAlvo);
    });
    finalizarAcaoArea(personagemNovo, functions, novosAlvos, duracao);
  } catch (error) {
    informarErro(error, functions);
    throw error;
  }
}
