import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_CATEGORIA, ACAO_EXECUCAO, ALVOS, ACAO_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../hook/batalha";

const { iniciarEfeito, finalizarAcao, gastarMana, informarErro } = useAcoesBase();
const { causarProtecaoDivina } = useCausarCondicao();

export const PROTECAO_DIVINA = {
  id: 19,
  nome: "Proteção Divina",
  elemento: ELEMENTOS.LUZ,
  custo: 1,
  tipo: ACAO_TIPO.BUFF,
  categoria: ACAO_CATEGORIA.MAGICO,
  descricao: "Recebe 5 de Resistência a Dano do Elemento Divino escolhido.",
  evento: protecaoDivinaEvento,
  alvos: ALVOS.ALIADOS,
  execucao: ACAO_EXECUCAO.PADRAO,
  bonus: 5,
  variantes: [
    {
      categoria: "Bônus",
      lista: [
        {
          varianteId: "NIVEL_1",
          titulo: "Nível 1",
          descricao: "Recebe 5 de Resistência a Dano do Elemento Divino escolhido.",
          novaAcao: {
            custo: 1,
            bonus: 5
          }
        },
        {
          varianteId: "NIVEL_2",
          titulo: "Nível 2",
          descricao: "Recebe 10 de Resistência a Dano do Elemento Divino escolhido.",
          novaAcao: {
            custo: 3,
            bonus: 10
          }
        }
      ]
    },
    {
      categoria: "Elemento",
      lista: [
        {
          varianteId: "LUZ",
          titulo: "Luz",
          descricao: "A resistência recebida será do elemento Luz.",
          novaAcao: {
            nome: "Proteção Divina (Luz)",
            elemento: ELEMENTOS.LUZ
          }
        },
        {
          varianteId: "TREVAS",
          titulo: "Trevas",
          descricao: "A resistência recebida será do elemento Trevas.",
          novaAcao: {
            nome: "Proteção Divina (Trevas)",
            elemento: ELEMENTOS.TREVAS
          }
        }
      ]
    }
  ]
};

async function protecaoDivinaEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });
  try {
    let personagemNovo = gastarMana(personagem, acao.custo, functions);
    const alvoCorreto = personagem.idCombate === alvo.idCombate ? personagemNovo : alvo;
    functions.adicionarLog(`${personagem.nome} usou ${acao.nome} em ${alvoCorreto.nome}.`);
    const novoAlvo = causarProtecaoDivina(alvoCorreto, acao, functions);
    const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS[`ABSORVER_${acao.elemento}`], ACOES_AUDIO[`${acao.elemento}_1`]);
    finalizarAcao(personagemNovo, functions, novoAlvo, duracao);
    return duracao;
  } catch (error) {
    informarErro(error, functions);
    throw error;
  }
}
