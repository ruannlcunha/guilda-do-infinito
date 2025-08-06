import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { ACAO_EXECUCAO, ALVOS, ACAO_CATEGORIA, ACAO_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { getModificadoresDano } from "../../../utils/get-modificadores.util";
import { getDadosBonus } from "../../../utils/get-dados-bonus.util";
import { converterDados } from "../../../utils";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, causarDano, finalizarAcao, atacar, realizarEtapasAtaque, gastarMana } = useAcoesBase();

export const RAIO_ARCANO = {
  id: 82,
  nome: "Raio Arcano",
  dadoDeDano: "1d12",
  descricao: "Um poderoso raio de pura energia mágica do Elemento Arcano conjurado. ",
  elemento: ELEMENTOS.ESSENCIA,
  tipo: ACAO_TIPO.ATAQUE,
  categoria: ACAO_CATEGORIA.MAGICO,
  custo: 1,
  evento: raioArcanoEvento,
  alvos: ALVOS.INIMIGOS,
  execucao: ACAO_EXECUCAO.PADRAO,
  bonus: "1d12",
  variantes: [
    {
      categoria: "Variante",
      lista: [
        {
          varianteId: "NORMAL",
          titulo: "Normal",
          descricao: "O raio arcano causa 1d12 de dano do elemento escolhido.",
          novaAcao: {
            custo: 1,
            bonus: "1d12",
            evento: raioArcanoEvento
          }
        },
        {
          varianteId: "APRIMORADO",
          titulo: "Aprimorado",
          descricao: "O raio arcano causa 2d12 de dano do elemento escolhido.\n Custo: +2 PM",
          novaAcao: {
            custo: 3,
            bonus: "2d12",
            evento: raioArcanoEvento
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
          descricao: "O dano será do elemento Essência.",
          novaAcao: {
            nome: "Raio Arcano (Essência)",
            elemento: ELEMENTOS.ESSENCIA
          }
        },
        {
          varianteId: "ACIDO",
          titulo: "Ácido",
          descricao: "O dano será do elemento Ácido.",
          novaAcao: {
            nome: "Raio Arcano (Ácido)",
            elemento: ELEMENTOS.ACIDO
          }
        },
        {
          varianteId: "AGUA",
          titulo: "Água",
          descricao: "O dano será do elemento Água.",
          novaAcao: {
            nome: "Raio Arcano (Água)",
            elemento: ELEMENTOS.AGUA
          }
        },
        {
          varianteId: "AR",
          titulo: "Ar",
          descricao: "O dano será do elemento Ar.",
          novaAcao: {
            nome: "Raio Arcano (Ar)",
            elemento: ELEMENTOS.AR
          }
        },
        {
          varianteId: "ELETRICO",
          titulo: "Elétrico",
          descricao: "O dano será do elemento Elétrico.",
          novaAcao: {
            nome: "Raio Arcano (Elétrico)",
            elemento: ELEMENTOS.ELETRICO
          }
        },
        {
          varianteId: "FOGO",
          titulo: "Fogo",
          descricao: "O dano será do elemento Fogo.",
          novaAcao: {
            nome: "Raio Arcano (Fogo)",
            elemento: ELEMENTOS.FOGO
          }
        },
        {
          varianteId: "GELO",
          titulo: "Gelo",
          descricao: "O dano será do elemento Gelo.",
          novaAcao: {
            nome: "Raio Arcano (Gelo)",
            elemento: ELEMENTOS.GELO
          }
        },
        {
          varianteId: "TERRA",
          titulo: "Terra",
          descricao: "O dano será do elemento Terra.",
          novaAcao: {
            nome: "Raio Arcano (Terra)",
            elemento: ELEMENTOS.TERRA
          }
        }
      ]
    }
  ]
};

function raioArcanoEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });

  let personagemNovo = gastarMana(personagem, acao.custo, functions);
  const resultadoAtaque = atacar(personagem, alvo, acao, functions);
  personagemNovo = resultadoAtaque.personagem;
  const bonusAcao = converterDados(acao.bonus);
  const modificadores = getModificadoresDano(personagem, alvo, acao);
  const dadoDano = rolarDado(bonusAcao[0], bonusAcao[1], modificadores, acao.elemento, alvo.elemento);
  const danoTotal = getDadosBonus([dadoDano], personagem, alvo, rolarDado);

  realizarEtapasAtaque(
    () => {
      functions.ativarBannerRolagem([...danoTotal.dados], modificadores, danoTotal.total, personagem, resultadoAtaque, alvo);
    },
    () => {
      const novoAlvo = causarDano(resultadoAtaque.alvo, danoTotal.danos, resultadoAtaque, acao, functions);
      const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS[`RAIO_ARCANO_${acao.elemento}`], ACOES_AUDIO.RAIO_ARCANO);
      finalizarAcao(personagemNovo, functions, novoAlvo, duracao);
    },
    () => {
      finalizarAcao(personagemNovo, functions, resultadoAtaque.alvo, 0);
    },
    resultadoAtaque,
    functions,
    personagem,
    alvo,
    acao
  );
}
