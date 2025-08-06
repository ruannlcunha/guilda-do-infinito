import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_CATEGORIA, ACAO_EXECUCAO, ALVOS, ACAO_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../hook/batalha";

const { iniciarEfeito, finalizarAcao, gastarMana, informarErro } = useAcoesBase();
const { causarProtecaoArcana } = useCausarCondicao();

export const PROTECAO_ARCANA = {
  id: 18,
  nome: "Proteção Arcana",
  elemento: ELEMENTOS.ESSENCIA,
  custo: 1,
  tipo: ACAO_TIPO.BUFF,
  categoria: ACAO_CATEGORIA.MAGICO,
  descricao: "Recebe 5 de Resistência a Dano do Elemento Arcano escolhido.",
  evento: protecaoArcanaEvento,
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
          descricao: "Recebe 5 de Resistência a Dano do Elemento Arcano escolhido.",
          novaAcao: {
            custo: 1,
            bonus: 5
          }
        },
        {
          varianteId: "NIVEL_2",
          titulo: "Nível 2",
          descricao: "Recebe 10 de Resistência a Dano do Elemento Arcano escolhido.",
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
          varianteId: "ESSENCIA",
          titulo: "Essência",
          descricao: "A resistência recebida será do elemento Essência.",
          novaAcao: {
            nome: "Proteção Arcana (Essência)",
            elemento: ELEMENTOS.ESSENCIA
          }
        },
        {
          varianteId: "ACIDO",
          titulo: "Ácido",
          descricao: "A resistência recebida será do elemento Ácido.",
          novaAcao: {
            nome: "Proteção Arcana (Ácido)",
            elemento: ELEMENTOS.ACIDO
          }
        },
        {
          varianteId: "AGUA",
          titulo: "Água",
          descricao: "A resistência recebida será do elemento Água.",
          novaAcao: {
            nome: "Proteção Arcana (Água)",
            elemento: ELEMENTOS.AGUA
          }
        },
        {
          varianteId: "AR",
          titulo: "Ar",
          descricao: "A resistência recebida será do elemento Ar.",
          novaAcao: {
            nome: "Proteção Arcana (Ar)",
            elemento: ELEMENTOS.AR
          }
        },
        {
          varianteId: "ELETRICO",
          titulo: "Elétrico",
          descricao: "A resistência recebida será do elemento Elétrico.",
          novaAcao: {
            nome: "Proteção Arcana (Elétrico)",
            elemento: ELEMENTOS.ELETRICO
          }
        },
        {
          varianteId: "FOGO",
          titulo: "Fogo",
          descricao: "A resistência recebida será do elemento Fogo.",
          novaAcao: {
            nome: "Proteção Arcana (Fogo)",
            elemento: ELEMENTOS.FOGO
          }
        },
        {
          varianteId: "GELO",
          titulo: "Gelo",
          descricao: "A resistência recebida será do elemento Gelo.",
          novaAcao: {
            nome: "Proteção Arcana (Gelo)",
            elemento: ELEMENTOS.GELO
          }
        },
        {
          varianteId: "TERRA",
          titulo: "Terra",
          descricao: "A resistência recebida será do elemento Terra.",
          novaAcao: {
            nome: "Proteção Arcana (Terra)",
            elemento: ELEMENTOS.TERRA
          }
        }
      ]
    }
  ]
};

async function protecaoArcanaEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });
  try {
    let personagemNovo = gastarMana(personagem, acao.custo, functions);
    const alvoCorreto = personagem.idCombate === alvo.idCombate ? personagemNovo : alvo;
    functions.adicionarLog(`${personagem.nome} usou ${acao.nome} em ${alvoCorreto.nome}.`);
    const novoAlvo = causarProtecaoArcana(alvoCorreto, acao, functions);
    const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS[`ABSORVER_${acao.elemento}`], ACOES_AUDIO.MAGIA_1);
    finalizarAcao(personagemNovo, functions, novoAlvo, duracao);
    return duracao;
  } catch (error) {
    informarErro(error, functions);
    throw error;
  }
}
