import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_CATEGORIA, ACAO_EXECUCAO, ALVOS, ACAO_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../hook/batalha";

const { iniciarEfeito, finalizarAcao, gastarMana, informarErro } = useAcoesBase();
const { causarMarcaCacador } = useCausarCondicao();

export const MARCA_CACADOR = {
  id: 37,
  nome: "Marca do Caçador",
  elemento: ELEMENTOS.FISICO,
  custo: 1,
  tipo: ACAO_TIPO.DEBUFF,
  categoria: ACAO_CATEGORIA.FISICO,
  descricao: "Causa no inimigo a Marca do Caçador. Até o fim do combate você causa +1d4 de dano neste inimigo.",
  evento: marcaCacadorEvento,
  alvos: ALVOS.INIMIGOS,
  execucao: ACAO_EXECUCAO.PADRAO,
  bonus: "1d4",
  variantes: []
};

function marcaCacadorEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });
  try {
    let personagemNovo = gastarMana(personagem, acao.custo, functions);
    const alvoCorreto = personagem.idCombate === alvo.idCombate ? personagem : alvo;
    const novosPersonagens = causarMarcaCacador(alvoCorreto, personagem, acao, functions);
    const novoAlvo = novosPersonagens.presa;
    personagemNovo = novosPersonagens.cacador;
    const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.MARCA_CACADOR, ACOES_AUDIO.MAGIA_3);
    finalizarAcao(personagemNovo, functions, novoAlvo, duracao);
  } catch (error) {
    informarErro(error, functions);
    throw error;
  }
}
