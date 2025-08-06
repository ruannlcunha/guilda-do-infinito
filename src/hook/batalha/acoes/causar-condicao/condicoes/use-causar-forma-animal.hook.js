import { BONUS_DADO, CONDICOES, ELEMENTOS, TRANSFORMACOES } from "../../../../../constants/personagens/personagem.constant";
import { ACOES_UNICAS } from "../../../../../database/acoes-unicas";
import { ATAQUES } from "../../../../../database/ataques";
import { HABILIDADES } from "../../../../../database/habilidades";
import { FORMAS_ANIMAIS_DATA } from "../../../../../database/transformacoes/forma-animal";
import { getTransformacao } from "../../../../../utils/get-transformacao.util";
import { instanciarAtaque, instanciarHabilidade } from "../../../../../utils/instanciar-acao.util";

export function useCausarFormaAnimal() {

  function causarFormaAnimal(personagem, acao, functions) {
    if (!personagem.condicoes.find((condicao) => condicao.nome === CONDICOES.FORMA_ANIMAL.nome)) {
      const novaAcaoExtra = { ...ACOES_UNICAS.DESFAZER_FORMA_ANIMAL };
      const personagemOriginal = {
        sprite: personagem.sprite,
        perfil: personagem.perfil,
        ataques: personagem.ataques,
        habilidades: personagem.habilidades,
      }

      if (acao.bonus === TRANSFORMACOES.LOBO) {
        const transformacaoLobo = getTransformacao(TRANSFORMACOES.LOBO, personagem, FORMAS_ANIMAIS_DATA)
        const personagemLobo = {
          ...personagem,
          sprite: transformacaoLobo.sprite,
          perfil: transformacaoLobo.perfil,
          ataques: [instanciarAtaque(ATAQUES.GOLPE_PRECISO.id, [])],
          habilidades: [instanciarHabilidade(HABILIDADES.FURIA.id, [])],
          bonusDado: [
            ...personagem.bonusDado,
            { modificador: 2, tipo: BONUS_DADO.ATAQUE, condicao: CONDICOES.FORMA_ANIMAL.nome },
            { modificador: 2, tipo: BONUS_DADO.DANO, condicao: CONDICOES.FORMA_ANIMAL.nome }
          ],
          atributos: { ...personagem.atributos, forca: personagem.atributos.forca + 1 },
        }
        const condicaoLobo = {
          ...CONDICOES.FORMA_ANIMAL,
          descricao: `Personagem está transformado em um Lobo. Recebe +1 de Força e +2 em Ataque e Dano.`,
          bonus: TRANSFORMACOES.LOBO,
          personagemOriginal: {
            ...personagemOriginal,
          },
          acaoOrigem: acao.nome,
        };
        return {
          ...personagemLobo,
          acoesExtras: [...personagem.acoesExtras, novaAcaoExtra],
          condicoes: [...personagem.condicoes, condicaoLobo]
        };
      }

      if (acao.bonus === TRANSFORMACOES.URSO) {
        const transformacaoUrso = getTransformacao(TRANSFORMACOES.URSO, personagem, FORMAS_ANIMAIS_DATA)
        const personagemUrso = {
          ...personagem,
          sprite: transformacaoUrso.sprite,
          perfil: transformacaoUrso.perfil,
          ataques: [instanciarAtaque(ATAQUES.GOLPE_PESADO.id, [])],
          habilidades: [],
          bonusDado: [...personagem.bonusDado, { modificador: 2, tipo: BONUS_DADO.DANO, condicao: CONDICOES.FORMA_ANIMAL.nome }],
          pv: { ...personagem.pv, atual: personagem.pv.atual + 15, maximo: personagem.pv.maximo + 15 },
          atributos: { ...personagem.atributos, vigor: personagem.atributos.vigor + 1 },
          defesa: personagem.defesa + 3,
          resistenciaDano: [...personagem.resistenciaDano, { elemento: ELEMENTOS.FISICO, valor: 5, origem: CONDICOES.FORMA_ANIMAL.nome }],
        }
        const condicaoUrso = {
          ...CONDICOES.FORMA_ANIMAL,
          descricao: `Personagem está transformado em um Urso. Recebe +1 de Vigor, +3 de Defesa, +2 em Dano, Resistência a Dano (Físico) 5 e +15 PV.`,
          bonus: TRANSFORMACOES.URSO,
          personagemOriginal: {
            ...personagemOriginal,
          },
          acaoOrigem: acao.nome,
        };
        return {
          ...personagemUrso,
          acoesExtras: [...personagem.acoesExtras, novaAcaoExtra],
          condicoes: [...personagem.condicoes, condicaoUrso]
        };
      }

      if (acao.bonus === TRANSFORMACOES.AGUIA) {
        const transformacaoAguia = getTransformacao(TRANSFORMACOES.AGUIA, personagem, FORMAS_ANIMAIS_DATA)
        const personagemAguia = {
          ...personagem,
          sprite: transformacaoAguia.sprite,
          perfil: transformacaoAguia.perfil,
          ataques: [instanciarAtaque(ATAQUES.GOLPE_AEREO.id, [])],
          habilidades: [instanciarHabilidade(HABILIDADES.VOAR.id, [])],
          bonusDado: [
            ...personagem.bonusDado,
            { modificador: 1, tipo: BONUS_DADO.ATAQUE, condicao: CONDICOES.FORMA_ANIMAL.nome },
            { modificador: 1, tipo: BONUS_DADO.DANO, condicao: CONDICOES.FORMA_ANIMAL.nome },
          ],
          atributos: { ...personagem.atributos, agilidade: personagem.atributos.agilidade + 1 },
        }
        const condicaoAguia = {
          ...CONDICOES.FORMA_ANIMAL,
          descricao: `Personagem está transformado em uma Águia. Recebe +1 de Agilidade e +1 em Ataque e Dano.`,
          bonus: TRANSFORMACOES.AGUIA,
          personagemOriginal: {
            ...personagemOriginal,
          },
          acaoOrigem: acao.nome,
        };
        return {
          ...personagemAguia,
          acoesExtras: [...personagem.acoesExtras, novaAcaoExtra],
          condicoes: [...personagem.condicoes, condicaoAguia]
        };
      }

      if (acao.bonus === TRANSFORMACOES.ARANHA) {
        const transformacaoAranha = getTransformacao(TRANSFORMACOES.ARANHA, personagem, FORMAS_ANIMAIS_DATA)
        const personagemAranha = {
          ...personagem,
          sprite: transformacaoAranha.sprite,
          perfil: transformacaoAranha.perfil,
          ataques: [instanciarAtaque(ATAQUES.GOLPE_RAPIDO.id, [])],
          habilidades: [instanciarHabilidade(HABILIDADES.ESCONDER_SE.id, []), instanciarHabilidade(HABILIDADES.ATAQUE_AGIL.id, [])],
          bonusDado: [...personagem.bonusDado, { modificador: 2, tipo: BONUS_DADO.ATAQUE, condicao: CONDICOES.FORMA_ANIMAL.nome }],
          atributos: { ...personagem.atributos, agilidade: personagem.atributos.agilidade + 1 },
        }
        const condicaoAranha = {
          ...CONDICOES.FORMA_ANIMAL,
          descricao: `Personagem está transformado em uma Aranha. Recebe +1 de Agilidade e +2 em Ataque.`,
          bonus: TRANSFORMACOES.ARANHA,
          personagemOriginal: {
            ...personagemOriginal,
          },
          acaoOrigem: acao.nome,
        };
        return {
          ...personagemAranha,
          acoesExtras: [...personagem.acoesExtras, novaAcaoExtra],
          condicoes: [...personagem.condicoes, condicaoAranha]
        };
      }

      return { ...personagem };
    } else {
      functions.adicionarLog(`AVISO: ${personagem.nome} já está sob efeito de ${CONDICOES.FORMA_ANIMAL.nome}.`);
      throw {
        message: `${personagem.nome} já está sob efeito de ${CONDICOES.FORMA_ANIMAL.nome}.`
      };
    }
  }

  return { causarFormaAnimal }
}