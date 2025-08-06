import { ACAO_CATEGORIA } from "../constants/acoes/acoes.constant";
import { BONUS_DADO, CONDICOES } from "../constants/personagens/personagem.constant";
import { TALENTOS } from "../database/talentos";

export function getModificadoresAtaque(acao, modificadores, personagem) {
  const totalBonusDado = personagem.bonusDado.filter((bonus) => bonus.tipo === BONUS_DADO.ATAQUE).reduce((acc, obj) => acc + obj.modificador, 0);
  const modificadorAtributo = [];

  if (acao.categoria === ACAO_CATEGORIA.CORPO_A_CORPO && !personagem.condicoes.some(condicao=>condicao.nome===CONDICOES.ATAQUE_AGIL.nome)) {
    modificadorAtributo.push({
      valor: personagem.atributos.forca,
      atributo: "Força"
    });
  }
  if (acao.categoria === ACAO_CATEGORIA.DISTANCIA
    || (personagem.condicoes.some(condicao=>condicao.nome===CONDICOES.ATAQUE_AGIL.nome) && acao.categoria === ACAO_CATEGORIA.CORPO_A_CORPO)) {
    modificadorAtributo.push({
      valor: personagem.atributos.agilidade,
      atributo: "Agilidade"
    });
  }

  if (totalBonusDado !== 0) {
    return [...modificadores, ...modificadorAtributo, { valor: totalBonusDado, atributo: "Modificador" }];
  }
  return [...modificadores, ...modificadorAtributo];
}

export function getModificadoresConjuracao(acao, modificadores, personagem) {
  const totalBonusDado = personagem.bonusDado.filter((bonus) => bonus.tipo === BONUS_DADO.CONJURACAO).reduce((acc, obj) => acc + obj.modificador, 0);
  const modificadorAtributo = [];

  if (acao.categoria === ACAO_CATEGORIA.MAGICO) {
    modificadorAtributo.push({
      valor: personagem.atributos.magia,
      atributo: "Magia"
    });
  }

  if (totalBonusDado !== 0) {
    return [...modificadores, ...modificadorAtributo, { valor: totalBonusDado, atributo: "Modificador" }];
  }
  return [...modificadores, ...modificadorAtributo];
}

export function getModificadoresDano(personagem, alvo, acao, modificadores, impedeBonusAtributo) {
  const modificadoresExtras = modificadores ? [...modificadores] : [];
  const modificadorAtributo = [];
  if (!impedeBonusAtributo && acao.categoria === ACAO_CATEGORIA.CORPO_A_CORPO && !personagem.condicoes.some(condicao=>condicao.nome===CONDICOES.ATAQUE_AGIL.nome))
    modificadorAtributo.push({
      valor: personagem.atributos.forca,
      atributo: "Força"
    });
  if (!impedeBonusAtributo && (acao.categoria === ACAO_CATEGORIA.DISTANCIA || 
    (personagem.condicoes.some(condicao=>condicao.nome===CONDICOES.ATAQUE_AGIL.nome) && acao.categoria === ACAO_CATEGORIA.CORPO_A_CORPO)
  ))
    modificadorAtributo.push({
      valor: personagem.atributos.agilidade,
      atributo: "Agilidade"
    });
  if (!impedeBonusAtributo && acao.categoria === ACAO_CATEGORIA.MAGICO && personagem.talentos.some((talento) => talento.id === TALENTOS.MAGIA_OFENSIVA.id)) {
    modificadorAtributo.push({
      valor: personagem.atributos.magia,
      atributo: "Magia"
    });
  }

  const totalBonusDado = personagem.bonusDado.filter((bonus) => bonus.tipo === BONUS_DADO.DANO).reduce((acc, obj) => acc + obj.modificador, 0);

  if (totalBonusDado !== 0) {
    return [...modificadoresExtras, ...modificadorAtributo, { valor: totalBonusDado, atributo: "Modificador" }];
  }
  return [...modificadoresExtras, ...modificadorAtributo];
}

export function getModificadoresCura(modificadores, personagem) {
  const bonusDado = personagem.bonusDado
    .filter((bonus) => bonus.tipo === BONUS_DADO.CURA)
    .map((bonus) => {
      const atributo = bonus.atributo ? bonus.atributo : "Modificador";
      return { valor: bonus.modificador, atributo };
    });

  if (bonusDado.length !== 0) {
    return [...modificadores, ...bonusDado];
  }
  return [...modificadores];
}

export function getModificadoresResistencia(atributo, modificadores, personagem) {
  let bonusTipo = null;
  atributo === "Força"
    ? (bonusTipo = BONUS_DADO.RESISTENCIA_FORCA)
    : atributo === "Agilidade"
    ? (bonusTipo = BONUS_DADO.RESISTENCIA_AGILIDADE)
    : atributo === "Magia"
    ? (bonusTipo = BONUS_DADO.RESISTENCIA_MAGIA)
    : atributo === "Vigor"
    ? (bonusTipo = BONUS_DADO.RESISTENCIA_VIGOR)
    : null;

  if (bonusTipo) {
    const totalBonusDado = personagem.bonusDado.filter((bonus) => bonus.tipo === bonusTipo).reduce((acc, obj) => acc + obj.modificador, 0);

    if (totalBonusDado > 0) {
      return [...modificadores, { valor: totalBonusDado, atributo: "Modificador" }];
    }
  }
  return [...modificadores];
}
