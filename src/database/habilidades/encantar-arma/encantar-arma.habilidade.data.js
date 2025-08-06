import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_CATEGORIA, ACAO_EXECUCAO, ALVOS, ACAO_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../hook/batalha";

const { iniciarEfeito, finalizarAcao, gastarMana, informarErro } = useAcoesBase();
const { causarArmaEncantada, causarArmaEncantadaElemental } = useCausarCondicao();

export const ENCANTAR_ARMA = {
  id: 5,
  nome: "Encantar Arma",
  elemento: ELEMENTOS.ESSENCIA,
  custo: 1,
  tipo: ACAO_TIPO.BUFF,
  categoria: ACAO_CATEGORIA.MAGICO,
  descricao: "Alvo recebe +1 de bônus de Ataque e Dano.",
  evento: encantarArmaEvento,
  alvos: ALVOS.ALIADOS,
  execucao: ACAO_EXECUCAO.PADRAO,
  bonus: "1d6",
  variantes: [
    {
      categoria: "Variante",
      lista: [
        {
          varianteId: "NORMAL",
          titulo: "Normal",
          descricao: "Alvo recebe +1 de bônus de Ataque e Dano.",
          novaAcao: {
            nome: "Encantar Arma",
            custo: 1,
            bonus: "1d6",
            evento: encantarArmaEvento
          }
        },
        {
          varianteId: "ELEMENTAL",
          titulo: "Elemental",
          descricao: "Alvo recebe +1 de bônus de Ataque e Dano e +1d6 de dano do elemento escolhido.\n Custo: +2 PM",
          novaAcao: {
            custo: 3,
            bonus: "1d6",
            evento: encantarArmaElementalEvento
          }
        },
        {
          varianteId: "ELEMENTAL_APRIMORADO",
          titulo: "Elemental (Aprimorado)",
          descricao: "Alvo recebe +2 de bônus de Ataque e Dano e +2d6 de dano do elemento escolhido.\n Custo: +4 PM",
          novaAcao: {
            custo: 5,
            bonus: "2d6",
            evento: encantarArmaElementalEvento
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
          descricao: "O dano bônus será do elemento Essência.",
          novaAcao: {
            nome: "Encantar Arma (Essência)",
            elemento: ELEMENTOS.ESSENCIA
          }
        },
        {
          varianteId: "ACIDO",
          titulo: "Ácido",
          descricao: "O dano bônus será do elemento Ácido.",
          novaAcao: {
            nome: "Encantar Arma (Ácido)",
            elemento: ELEMENTOS.ACIDO
          }
        },
        {
          varianteId: "AGUA",
          titulo: "Água",
          descricao: "O dano bônus será do elemento Água.",
          novaAcao: {
            nome: "Encantar Arma (Água)",
            elemento: ELEMENTOS.AGUA
          }
        },
        {
          varianteId: "AR",
          titulo: "Ar",
          descricao: "O dano bônus será do elemento Ar.",
          novaAcao: {
            nome: "Encantar Arma (Ar)",
            elemento: ELEMENTOS.AR
          }
        },
        {
          varianteId: "ELETRICO",
          titulo: "Elétrico",
          descricao: "O dano bônus será do elemento Elétrico.",
          novaAcao: {
            nome: "Encantar Arma (Elétrico)",
            elemento: ELEMENTOS.ELETRICO
          }
        },
        {
          varianteId: "FOGO",
          titulo: "Fogo",
          descricao: "O dano bônus será do elemento Fogo.",
          novaAcao: {
            nome: "Encantar Arma (Fogo)",
            elemento: ELEMENTOS.FOGO
          }
        },
        {
          varianteId: "GELO",
          titulo: "Gelo",
          descricao: "O dano bônus será do elemento Gelo.",
          novaAcao: {
            nome: "Encantar Arma (Gelo)",
            elemento: ELEMENTOS.GELO
          }
        },
        {
          varianteId: "TERRA",
          titulo: "Terra",
          descricao: "O dano bônus será do elemento Terra.",
          novaAcao: {
            nome: "Encantar Arma (Terra)",
            elemento: ELEMENTOS.TERRA
          }
        }
      ]
    }
  ]
};

async function encantarArmaEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });
  try {
    let personagemNovo = gastarMana(personagem, acao.custo, functions);
    const alvoCorreto = personagem.idCombate === alvo.idCombate ? personagemNovo : alvo;
    functions.adicionarLog(`${personagem.nome} usou ${acao.nome} em ${alvoCorreto.nome}.`);
    const novoAlvo = causarArmaEncantada(alvoCorreto, acao, functions);
    const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.ABSORVER_ESSENCIA, ACOES_AUDIO.MAGIA_1);
    finalizarAcao(personagemNovo, functions, novoAlvo, duracao);
    return duracao;
  } catch (error) {
    informarErro(error, functions);
    throw error;
  }
}

async function encantarArmaElementalEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });
  try {
    let personagemNovo = gastarMana(personagem, acao.custo, functions);
    const alvoCorreto = personagem.idCombate === alvo.idCombate ? personagemNovo : alvo;
    functions.adicionarLog(`${personagem.nome} usou ${acao.nome} em ${alvoCorreto.nome}.`);
    const novoAlvo = causarArmaEncantadaElemental(alvoCorreto, acao, functions);
    const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS[`ABSORVER_${acao.elemento}`], ACOES_AUDIO.MAGIA_1);
    finalizarAcao(personagemNovo, functions, novoAlvo, duracao);
    return duracao;
  } catch (error) {
    informarErro(error, functions);
    throw error;
  }
}
