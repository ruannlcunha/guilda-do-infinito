import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_CATEGORIA, ACAO_EXECUCAO, ALVOS, ACAO_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../hook/batalha";

const { iniciarEfeito, finalizarAcao, gastarMana, informarErro } = useAcoesBase();
const { causarArmaAbencoada } = useCausarCondicao();

export const ABENCOAR_ARMA_TREVAS = {
  id: 39,
  nome: "Abençoar Arma (Trevas)",
  elemento: ELEMENTOS.TREVAS,
  custo: 3,
  tipo: ACAO_TIPO.BUFF,
  categoria: ACAO_CATEGORIA.MAGICO,
  descricao: "Alvo recebe +1 de bônus de Ataque e Dano e +1d6 de dano de Trevas.",
  evento: abencoarArmaTrevasEvento,
  alvos: ALVOS.ALIADOS,
  execucao: ACAO_EXECUCAO.PADRAO,
  bonus: "1d6",
  variantes: [
    {
      categoria: "Bônus",
      lista: [
        {
          varianteId: "NIVEL_1",
          titulo: "Nível 1",
          descricao: "Alvo recebe +1 de bônus de Ataque e Dano e +1d6 de dano de Trevas.",
          novaAcao: {
            custo: 3,
            bonus: "1d6"
          }
        },
        {
          varianteId: "NIVEL_2",
          titulo: "Nível 2",
          descricao: "Alvo recebe +2 de bônus de Ataque e Dano e +2d6 de dano de Trevas.",
          novaAcao: {
            custo: 5,
            bonus: "2d6"
          }
        }
      ]
    }
  ]
};

async function abencoarArmaTrevasEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });
  try {
    let personagemNovo = gastarMana(personagem, acao.custo, functions);
    const alvoCorreto = personagem.idCombate === alvo.idCombate ? personagemNovo : alvo;
    functions.adicionarLog(`${personagem.nome} usou ${acao.nome} em ${alvoCorreto.nome}.`);
    const novoAlvo = causarArmaAbencoada(alvoCorreto, acao, functions);
    const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.ABSORVER_TREVAS, ACOES_AUDIO.TREVAS_1);
    finalizarAcao(personagemNovo, functions, novoAlvo, duracao);
    return duracao;
  } catch (error) {
    informarErro(error, functions);
    throw error;
  }
}
