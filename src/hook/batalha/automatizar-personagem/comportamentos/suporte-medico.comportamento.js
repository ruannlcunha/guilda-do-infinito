import { getAliados, getInimigos, getRandomInt } from "../../../../utils";
import { escolherAlvos, validarAcaoEscolhida, validarCustoMana } from "../../../../utils/comportamentos-base.util";
import { ALVOS, ACAO_TIPO } from "../../../../constants/acoes/acoes.constant";

export function suporteMedicoComportamento(personagemAtivo, personagens) {
  let habilidadesBuffs = [...personagemAtivo.habilidades].filter((habilidade) => habilidade.tipo === ACAO_TIPO.BUFF);
  let habilidadesDebuffs = [...personagemAtivo.habilidades].filter((habilidade) => habilidade.tipo === ACAO_TIPO.DEBUFF);
  const acoesCurativas = [...personagemAtivo.habilidades].filter((habilidade) => habilidade.tipo === ACAO_TIPO.CURA);
  const acoesOfensivas = [...personagemAtivo.ataques];
  const aliados = getAliados(personagemAtivo, personagens);
  let acoes = null;
  let alvoEscolhido = null;
  let indexAcao = null;
  let acaoEscolhida = { custo: null };

  //Se o personagem estiver com pouca vida, escolhe ações curativas e o alvo a si mesmo.
  if (personagemAtivo.pv.atual <= personagemAtivo.pv.maximo / 5 && acoesCurativas.length > 0 && validarCustoMana(acoesCurativas, personagemAtivo)) {
    acoes = acoesCurativas;
    alvoEscolhido = personagemAtivo;
  } else if (aliados.length === 0 || aliados.filter((aliado) => !aliado.isMorto).length === 0) {
    acoes = [...acoesOfensivas, ...habilidadesDebuffs];
  }
  //Caso aliado com menos da metade da vida, cura ele.
  else if (aliados.filter((aliado) => aliado.pv.atual <= aliado.pv.maximo / 2).length > 0) {
    const aliadosFeridos = aliados.filter((aliado) => aliado.pv.atual <= aliado.pv.maximo / 2);
    const indexFerido = getRandomInt(1, aliadosFeridos.length);
    alvoEscolhido = aliadosFeridos.find((aliado, i) => i + 1 === indexFerido);
    acoes = [...acoesCurativas];
  } else if (validarCustoMana([...habilidadesBuffs, ...acoesCurativas], personagemAtivo)) {
    acoes = [...habilidadesBuffs, ...acoesCurativas];
  } else {
    acoes = [...acoesOfensivas];
  }

  validarCustoMana(acoes, personagemAtivo, true);

  while (acaoEscolhida.custo > personagemAtivo.pm.atual || acaoEscolhida.custo === null || !alvoEscolhido || !acoes) {
    indexAcao = getRandomInt(1, acoes.length);
    acaoEscolhida = acoes.find((acao, i) => i + 1 === indexAcao);

    if (!validarAcaoEscolhida(acaoEscolhida, personagemAtivo)) continue;

    if (acaoEscolhida.variantes.length > 0) {
      acaoEscolhida.variantes.map((varianteCategoria) => {
        const indexVariante = getRandomInt(1, varianteCategoria.lista.length);
        const varianteEscolhida = varianteCategoria.lista.find((_variante, i) => i + 1 === indexVariante);
        acaoEscolhida = { ...acaoEscolhida, ...varianteEscolhida.novaAcao };
      });
    }

    if (!alvoEscolhido) {
      const alvosPossiveis = escolherAlvos(personagens, personagemAtivo, acaoEscolhida);

      if (acaoEscolhida.alvos === ALVOS.INIMIGOS_AREA || acaoEscolhida.alvos === ALVOS.ALIADOS_AREA) {
        alvoEscolhido = alvosPossiveis;
      } else {
        if (acaoEscolhida.tipo.includes("ATAQUE")) {
          const menorVida = Math.min(...alvosPossiveis.map((alvo) => alvo.pv.atual));
          alvoEscolhido = alvosPossiveis.find((alvo) => alvo.pv.atual === menorVida);
        } else {
          const indexAlvo = getRandomInt(0, alvosPossiveis.length - 1);
          alvoEscolhido = alvosPossiveis[indexAlvo];
          if (acaoEscolhida.tipo === ACAO_TIPO.CURA && alvoEscolhido.pv.atual == alvoEscolhido.pv.maximo) {
            alvoEscolhido = null;
          }
          if (acaoEscolhida.tipo === ACAO_TIPO.BUFF || acaoEscolhida.tipo === ACAO_TIPO.DEBUFF) {
            const possuiCondicao = alvoEscolhido.condicoes.some((condicao) => condicao.acaoOrigem === acaoEscolhida.nome);
            if (possuiCondicao) {
              alvoEscolhido = alvosPossiveis.find((alvo) => alvo.condicoes.some((condicao) => condicao.acaoOrigem !== acaoEscolhida.nome));
              if (!alvoEscolhido) {
                acoes = acoes.filter((acao) => acao.nome !== acaoEscolhida.nome);
                if (acoes.length === 0) {
                  acoes = acoesOfensivas;
                }
              }
            }
          }
        }
      }
    }
  }

  return { acaoEscolhida, alvoEscolhido };
}
