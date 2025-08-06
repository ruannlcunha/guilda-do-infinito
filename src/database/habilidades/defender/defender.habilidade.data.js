import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_CATEGORIA, ACAO_EXECUCAO, ALVOS, ACAO_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../hook/batalha";

const { iniciarEfeito, finalizarAcao, informarErro } = useAcoesBase();
const { causarProtegido } = useCausarCondicao();

export const DEFENDER = {
  id: 34,
  nome: "Defender",
  elemento: ELEMENTOS.FISICO,
  custo: 0,
  tipo: ACAO_TIPO.BUFF,
  categoria: ACAO_CATEGORIA.FISICO,
  descricao: "Protege alguém com seu escudo, concedendo +2 de Defesa até seu próximo turno. Caso o alvo não seja você mesmo, você sofre -2 em sua Defesa.",
  evento: defenderEvento,
  alvos: ALVOS.ALIADOS,
  execucao: ACAO_EXECUCAO.PADRAO,
  variantes: []
};

function defenderEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });
  try {
    let personagemNovo = { ...personagem };
    const alvoCorreto = personagem.idCombate === alvo.idCombate ? personagem : alvo;
    const novosPersonagens = causarProtegido(alvoCorreto, personagem, acao, functions);
    const novoAlvo = novosPersonagens.protegido;
    personagemNovo = novosPersonagens.protetor;
    const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.DEFENDER, ACOES_AUDIO.MAGIA_1);
    finalizarAcao(personagemNovo, functions, novoAlvo, duracao);
  } catch (error) {
    informarErro(error, functions);
    throw error;
  }
}
