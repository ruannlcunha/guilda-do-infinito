import { ALVOS } from "../../../../constants/acoes/acoes.constant";
import { getRandomInt } from "../../../../utils";
import { escolherAlvos, validarAcaoEscolhida, validarCustoMana } from "../../../../utils/comportamentos-base.util";

export function atacanteFerozComportamento(personagemAtivo, personagens) {
  const acoes = [...personagemAtivo.ataques];
  let indexAcao = null;
  let acaoEscolhida = { custo: null };
  let alvoEscolhido = null;
  validarCustoMana(acoes, personagemAtivo, true);
  while (acaoEscolhida.custo > personagemAtivo.pm.atual || acaoEscolhida.custo === null) {
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
  }
  const alvosPossiveis = escolherAlvos(personagens, personagemAtivo, acaoEscolhida);
  if (acaoEscolhida.alvos === ALVOS.INIMIGOS_AREA || acaoEscolhida.alvos === ALVOS.ALIADOS_AREA) {
    alvoEscolhido = alvosPossiveis;
  } else alvoEscolhido = alvosPossiveis[getRandomInt(0, alvosPossiveis.length - 1)];

  return { acaoEscolhida, alvoEscolhido };
}
