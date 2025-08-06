import { CONDICOES } from "../../../../constants/personagens/personagem.constant";
import { ACOES_UNICAS } from "../../../../database/acoes-unicas";
import { useEncerrarFormaAnimal } from "./condicoes/use-encerrar-forma-animal.hook";
import { aumentarTurno, diminuirTurno } from "../../../../utils/alterar-turnos.util";
import { useEncerrarFormaLupina } from "./condicoes/use-encerrar-forma-lupina.hook";
import { useEncerrarRegeneracao } from "./condicoes/use-encerrar-regeneracao.hook";

export function useEncerrarCondicao() {
  const { encerrarFormaAnimal } = useEncerrarFormaAnimal()
  const { encerrarFormaLupina } = useEncerrarFormaLupina()
  const { encerrarRegeneracao } = useEncerrarRegeneracao()

  function encerrarEnvenenado(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.ENVENENADO.nome)) {
      functions.adicionarLog(`${personagem.nome} não está mais ${CONDICOES.ENVENENADO.nome}`);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.ENVENENADO.nome)];
      const novoPersonagem = {
        ...personagem,
        condicoes: novasCondicoes
      };
      return novoPersonagem;
    }
    return personagem;
  }

  function encerrarQueimando(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.QUEIMANDO.nome)) {
      functions.adicionarLog(`${personagem.nome} não está mais ${CONDICOES.QUEIMANDO.nome}`);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.QUEIMANDO.nome)];
      const novasAcoesExtras = [...personagem.acoesExtras.filter((acao) => acao.id !== ACOES_UNICAS.APAGAR_CHAMAS.id)];
      const novoPersonagem = {
        ...personagem,
        condicoes: novasCondicoes,
        acoesExtras: novasAcoesExtras
      };
      return novoPersonagem;
    }
    return personagem;
  }

  function encerrarCongelado(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.CONGELADO.nome)) {
      functions.adicionarLog(`${personagem.nome} não está mais ${CONDICOES.CONGELADO.nome}.`);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.CONGELADO.nome)];
      const novasAcoesExtras = [...personagem.acoesExtras.filter((acao) => acao.id !== ACOES_UNICAS.QUEBRAR_GELO.id)];
      const novoPersonagem = {
        ...personagem,
        condicoes: novasCondicoes,
        acoesExtras: novasAcoesExtras
      };
      return novoPersonagem;
    }
    return personagem;
  }

  function encerrarDormindo(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.DORMINDO.nome)) {
      functions.adicionarLog(`${personagem.nome} acordou e não está mais ${CONDICOES.DORMINDO.nome}.`);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.DORMINDO.nome)];
      const novaDefesa = personagem.defesa + 5;
      const novoPersonagem = {
        ...personagem,
        defesa: novaDefesa,
        condicoes: novasCondicoes
      };
      return novoPersonagem;
    }
    return personagem;
  }

  function encerrarParalisado(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.PARALISADO.nome)) {
      functions.adicionarLog(`${personagem.nome} não está mais sob efeito de ${CONDICOES.PARALISADO.nome}.`);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.PARALISADO.nome)];
      const novaDefesa = personagem.defesa + 5;
      const novoPersonagem = {
        ...personagem,
        defesa: novaDefesa,
        condicoes: novasCondicoes
      };
      return novoPersonagem;
    }
    return personagem;
  }

  function encerrarAtordoado(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.ATORDOADO.nome)) {
      functions.adicionarLog(`${personagem.nome} não está mais ${CONDICOES.ATORDOADO.nome}.`);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.ATORDOADO.nome)];
      const novaDefesa = personagem.defesa + 2;
      const novoPersonagem = {
        ...personagem,
        defesa: novaDefesa,
        condicoes: novasCondicoes
      };
      return novoPersonagem;
    }
    return personagem;
  }

  function encerrarAbencoado(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.ABENCOADO.nome)) {
      functions.adicionarLog(`${personagem.nome} não está mais ${CONDICOES.ABENCOADO.nome}.`);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.ABENCOADO.nome)];
      const novoBonusDado = [...personagem.bonusDado.filter((bonus) => bonus.condicao !== CONDICOES.ABENCOADO.nome)];
      const novoPersonagem = {
        ...personagem,
        bonusDado: novoBonusDado,
        condicoes: novasCondicoes
      };
      return novoPersonagem;
    }
    return personagem;
  }

  function encerrarAmaldicoado(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.AMALDICOADO.nome)) {
      functions.adicionarLog(`${personagem.nome} não está mais ${CONDICOES.AMALDICOADO.nome}.`);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.AMALDICOADO.nome)];
      const novoBonusDado = [...personagem.bonusDado.filter((bonus) => bonus.condicao !== CONDICOES.AMALDICOADO.nome)];
      const novoPersonagem = {
        ...personagem,
        bonusDado: novoBonusDado,
        condicoes: novasCondicoes
      };
      return novoPersonagem;
    }
    return personagem;
  }

  function encerrarAtaqueEspecial(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.ATAQUE_ESPECIAL.nome)) {
      functions.adicionarLog(`${personagem.nome} não está mais sob efeito de ${CONDICOES.ATAQUE_ESPECIAL.nome}.`);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.ATAQUE_ESPECIAL.nome)];
      const novoBonusDado = [...personagem.bonusDado.filter((bonus) => bonus.condicao !== CONDICOES.ATAQUE_ESPECIAL.nome)];
      const novoPersonagem = {
        ...personagem,
        bonusDado: novoBonusDado,
        condicoes: novasCondicoes
      };
      return novoPersonagem;
    }
    return personagem;
  }

  function encerrarEscondido(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.ESCONDIDO.nome)) {
      functions.adicionarLog(`${personagem.nome} não está mais ${CONDICOES.ESCONDIDO.nome}.`);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.ESCONDIDO.nome)];
      const novoBonusDado = [...personagem.bonusDado.filter((bonus) => bonus.condicao !== CONDICOES.ESCONDIDO.nome)];
      const novoPersonagem = {
        ...personagem,
        defesa: personagem.defesa - 5,
        bonusDado: novoBonusDado,
        condicoes: novasCondicoes
      };
      return novoPersonagem;
    }
    return personagem;
  }

  function encerrarAtaqueDivino(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.ATAQUE_DIVINO.nome)) {
      functions.adicionarLog(`${personagem.nome} não está mais sob efeito de ${CONDICOES.ATAQUE_DIVINO.nome}.`);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.ATAQUE_DIVINO.nome)];
      const novoBonusDado = [...personagem.bonusDado.filter((bonus) => bonus.condicao !== CONDICOES.ATAQUE_DIVINO.nome)];
      const novoPersonagem = {
        ...personagem,
        bonusDado: novoBonusDado,
        condicoes: novasCondicoes
      };
      return novoPersonagem;
    }
    return personagem;
  }

  function encerrarAtaquePoderoso(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.ATAQUE_PODEROSO.nome)) {
      functions.adicionarLog(`${personagem.nome} não está mais sob efeito de ${CONDICOES.ATAQUE_PODEROSO.nome}.`);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.ATAQUE_PODEROSO.nome)];
      const novoBonusDado = [...personagem.bonusDado.filter((bonus) => bonus.condicao !== CONDICOES.ATAQUE_PODEROSO.nome)];
      const novoPersonagem = {
        ...personagem,
        bonusDado: novoBonusDado,
        condicoes: novasCondicoes
      };
      return novoPersonagem;
    }
    return personagem;
  }

  function encerrarAtaqueAgil(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.ATAQUE_AGIL.nome)) {
      functions.adicionarLog(`${personagem.nome} não está mais sob efeito de ${CONDICOES.ATAQUE_AGIL.nome}.`);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.ATAQUE_AGIL.nome)];
      const novasAcoesExtras = [...personagem.acoesExtras.filter((acao) => acao.id !== ACOES_UNICAS.DESFAZER_ATAQUE_AGIL.id)];
      const novoPersonagem = {
        ...personagem,
        condicoes: novasCondicoes,
        acoesExtras: novasAcoesExtras
      };
      return novoPersonagem;
    }
    return personagem;
  }

  function encerrarVoando(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.VOANDO.nome)) {
      functions.adicionarLog(`${personagem.nome} não está mais sob efeito de ${CONDICOES.VOANDO.nome}.`);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.VOANDO.nome)];
      const novasAcoesExtras = [...personagem.acoesExtras.filter((acao) => acao.id !== ACOES_UNICAS.DESFAZER_VOANDO.id)];
      const novoPersonagem = {
        ...personagem,
        condicoes: novasCondicoes,
        defesa: personagem.defesa - 2,
        acoesExtras: novasAcoesExtras
      };
      return novoPersonagem;
    }
    return personagem;
  }

  function encerrarVeloz(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.VELOZ.nome)) {
      functions.adicionarLog(`${personagem.nome} não está mais sob efeito de ${CONDICOES.VELOZ.nome}.`);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.VELOZ.nome)];
      const novoPersonagem = {
        ...personagem,
        atributos: {...personagem.atributos, agilidade: personagem.atributos.agilidade - 1},
        condicoes: novasCondicoes
      };
      diminuirTurno(novoPersonagem, functions);
      return novoPersonagem;
    }
    return personagem;
  }

  function encerrarLento(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.LENTO.nome)) {
      functions.adicionarLog(`${personagem.nome} não está mais sob efeito de ${CONDICOES.LENTO.nome}.`);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.LENTO.nome)];
      const novoPersonagem = {
        ...personagem,
        atributos: {...personagem.atributos, agilidade: personagem.atributos.agilidade + 1},
        condicoes: novasCondicoes
      };
      aumentarTurno(novoPersonagem, functions);
      return novoPersonagem;
    }
    return personagem;
  }

  function encerrarAbalado(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.ABALADO.nome)) {
      functions.adicionarLog(`${personagem.nome} não está mais sob efeito de ${CONDICOES.ABALADO.nome}.`);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.ABALADO.nome)];
      const novoPersonagem = {
        ...personagem,
        atributos: {...personagem.atributos, magia: personagem.atributos.magia + 1},
        condicoes: novasCondicoes
      };
      return novoPersonagem;
    }
    return personagem;
  }

  function encerrarFraco(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.FRACO.nome)) {
      functions.adicionarLog(`${personagem.nome} não está mais sob efeito de ${CONDICOES.FRACO.nome}.`);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.FRACO.nome)];
      const novoPersonagem = {
        ...personagem,
        atributos: {...personagem.atributos, forca: personagem.atributos.forca + 1},
        condicoes: novasCondicoes
      };
      return novoPersonagem;
    }
    return personagem;
  }

  function encerrarFatigado(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.FATIGADO.nome)) {
      functions.adicionarLog(`${personagem.nome} não está mais sob efeito de ${CONDICOES.FATIGADO.nome}.`);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.FATIGADO.nome)];
      const novoPersonagem = {
        ...personagem,
        atributos: {...personagem.atributos, vigor: personagem.atributos.vigor + 1},
        condicoes: novasCondicoes
      };
      return novoPersonagem;
    }
    return personagem;
  }

  function encerrarArmaduraMagica(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.ARMADURA_MAGICA.nome)) {
      functions.adicionarLog(`${personagem.nome} não está mais sob efeito de ${CONDICOES.ARMADURA_MAGICA.nome}.`);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.ARMADURA_MAGICA.nome)];
      const novaDefesa = personagem.defesa - 2;
      const novoPersonagem = {
        ...personagem,
        defesa: novaDefesa,
        condicoes: novasCondicoes
      };
      return novoPersonagem;
    }
    return personagem;
  }

  function encerrarSortudo(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.SORTUDO.nome)) {
      functions.adicionarLog(`${personagem.nome} não está mais sob efeito de ${CONDICOES.SORTUDO.nome}.`);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.SORTUDO.nome)];
      const novoBonusDado = [...personagem.bonusDado.filter((bonus) => bonus.condicao !== CONDICOES.SORTUDO.nome)];
      const novaDefesa = personagem.defesa - 1;
      const novoPersonagem = {
        ...personagem,
        defesa: novaDefesa,
        bonusDado: novoBonusDado,
        condicoes: novasCondicoes
      };
      return novoPersonagem;
    }
    return personagem;
  }

  function encerrarArmaEncantada(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome.includes(CONDICOES.ARMA_ENCANTADA.nome))) {
      functions.adicionarLog(`${personagem.nome} não está mais sob efeito de ${CONDICOES.ARMA_ENCANTADA.nome}.`);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.ARMA_ENCANTADA.nome)];
      const novoBonusDado = [...personagem.bonusDado.filter((bonus) => bonus.condicao !== CONDICOES.ARMA_ENCANTADA.nome)];
      const novoPersonagem = {
        ...personagem,
        bonusDado: novoBonusDado,
        condicoes: novasCondicoes
      };
      return novoPersonagem;
    }
    return personagem;
  }

  function encerrarArmaAbencoada(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome.includes(CONDICOES.ARMA_ABENCOADA.nome))) {
      functions.adicionarLog(`${personagem.nome} não está mais sob efeito de ${CONDICOES.ARMA_ABENCOADA.nome}.`);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.ARMA_ABENCOADA.nome)];
      const novoBonusDado = [...personagem.bonusDado.filter((bonus) => bonus.condicao !== CONDICOES.ARMA_ABENCOADA.nome)];
      const novoPersonagem = {
        ...personagem,
        bonusDado: novoBonusDado,
        condicoes: novasCondicoes
      };
      return novoPersonagem;
    }
    return personagem;
  }

  function encerrarProtecaoArcana(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome.includes(CONDICOES.PROTECAO_ARCANA.nome))) {
      functions.adicionarLog(`${personagem.nome} não está mais sob efeito de ${CONDICOES.PROTECAO_ARCANA.nome}.`);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.PROTECAO_ARCANA.nome)];
      const novoBonusDado = [...personagem.bonusDado.filter((bonus) => bonus.condicao !== CONDICOES.PROTECAO_ARCANA.nome)];
      const novasResistencias = [...personagem.resistenciaDano.filter((resistencia) => resistencia.origem !== CONDICOES.PROTECAO_ARCANA.nome)];
      const novoPersonagem = {
        ...personagem,
        bonusDado: novoBonusDado,
        condicoes: novasCondicoes,
        resistenciaDano: novasResistencias,
      };
      return novoPersonagem;
    }
    return personagem;
  }

  function encerrarProtecaoDivina(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome.includes(CONDICOES.PROTECAO_DIVINA.nome))) {
      functions.adicionarLog(`${personagem.nome} não está mais sob efeito de ${CONDICOES.PROTECAO_DIVINA.nome}.`);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.PROTECAO_DIVINA.nome)];
      const novoBonusDado = [...personagem.bonusDado.filter((bonus) => bonus.condicao !== CONDICOES.PROTECAO_DIVINA.nome)];
      const novasResistencias = [...personagem.resistenciaDano.filter((resistencia) => resistencia.origem !== CONDICOES.PROTECAO_DIVINA.nome)];
      const novoPersonagem = {
        ...personagem,
        bonusDado: novoBonusDado,
        condicoes: novasCondicoes,
        resistenciaDano: novasResistencias,
      };
      return novoPersonagem;
    }
    return personagem;
  }

  function encerrarInspirado(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.INSPIRADO.nome)) {
      functions.adicionarLog(`${personagem.nome} não está mais sob efeito de ${CONDICOES.INSPIRADO.nome}.`);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.INSPIRADO.nome)];
      const novoBonusDado = [...personagem.bonusDado.filter((bonus) => bonus.condicao !== CONDICOES.INSPIRADO.nome)];
      const novoPersonagem = {
        ...personagem,
        bonusDado: novoBonusDado,
        condicoes: novasCondicoes
      };
      return novoPersonagem;
    }
    return personagem;
  }

  function encerrarEmFuria(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.FURIA.nome)) {
      functions.adicionarLog(`${personagem.nome} não está mais sob efeito de ${CONDICOES.FURIA.nome}.`);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.FURIA.nome)];
      const novoBonusDado = [...personagem.bonusDado.filter((bonus) => bonus.condicao !== CONDICOES.FURIA.nome)];
      const novoPersonagem = {
        ...personagem,
        bonusDado: novoBonusDado,
        condicoes: novasCondicoes
      };
      return novoPersonagem;
    }
    return personagem;
  }

  function encerrarDuplicatas(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.ARMADURA_MAGICA.nome)) {
      const condicaoDuplicata = personagem.condicoes.find((condicao) => condicao.nome === CONDICOES.ARMADURA_MAGICA.nome)
      functions.adicionarLog(`${personagem.nome} não está mais sob efeito de ${CONDICOES.ARMADURA_MAGICA.nome}.`);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.ARMADURA_MAGICA.nome)];
      const novaDefesa = personagem.defesa - (condicaoDuplicata.duracao * 2);
      const novoPersonagem = {
        ...personagem,
        defesa: novaDefesa,
        condicoes: novasCondicoes
      };
      return novoPersonagem;
    }
    return personagem;
  }

  function encerrarProtegido(personagem, functions) {
    const condicaoProtegido = personagem.condicoes.find((condicao) => condicao.nome === CONDICOES.PROTEGIDO.nome);
    if (condicaoProtegido) {
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.PROTEGIDO.nome)];
      const novaDefesa = personagem.defesa - 2;
      const novoPersonagem = {
        ...personagem,
        defesa: novaDefesa,
        condicoes: novasCondicoes
      };
      return novoPersonagem;
    }
    return personagem;
  }
  
  function encerrarProtegendo(personagem, functions) {
    const condicaoProtegendo = personagem.condicoes.find((condicao) => condicao.nome === CONDICOES.PROTEGENDO.nome);
    if (condicaoProtegendo) {
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.PROTEGENDO.nome)];
      const novaDefesa = personagem.defesa + 2;
      const novoPersonagem = {
        ...personagem,
        defesa: novaDefesa,
        condicoes: novasCondicoes
      };
      return novoPersonagem;
    }
    return personagem;
  }

  function encerrarMarcaCacador(personagem, functions) {
    const condicaoMarcaCacador = personagem.condicoes.find((condicao) => condicao.nome === CONDICOES.MARCA_CACADOR.nome);
    if (condicaoMarcaCacador) {
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.MARCA_CACADOR.nome)];
      const novoPersonagem = {
        ...personagem,
        condicoes: novasCondicoes
      };
      return novoPersonagem;
    }
    return personagem;
  }
  
  function encerrarCacador(personagem, functions) {
    const condicaoCacador = personagem.condicoes.find((condicao) => condicao.nome === CONDICOES.CACADOR.nome);
    if (condicaoCacador) {
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.CACADOR.nome)];
      const novoPersonagem = {
        ...personagem,
        condicoes: novasCondicoes
      };
      return novoPersonagem;
    }
    return personagem;
  }

  return {
    encerrarEnvenenado,
    encerrarQueimando,
    encerrarCongelado,
    encerrarDormindo,
    encerrarAtordoado,
    encerrarAbencoado,
    encerrarAmaldicoado,
    encerrarAtaqueEspecial,
    encerrarEscondido,
    encerrarAtaqueDivino,
    encerrarAtaquePoderoso,
    encerrarAtaqueAgil,
    encerrarVoando,
    encerrarFormaAnimal,
    encerrarParalisado,
    encerrarVeloz,
    encerrarLento,
    encerrarAbalado,
    encerrarFraco,
    encerrarFatigado,
    encerrarArmaduraMagica,
    encerrarDuplicatas,
    encerrarSortudo,
    encerrarArmaEncantada,
    encerrarArmaAbencoada,
    encerrarProtecaoArcana,
    encerrarProtecaoDivina,
    encerrarInspirado,
    encerrarMarcaCacador,
    encerrarCacador,
    encerrarProtegido,
    encerrarProtegendo,
    encerrarEmFuria,
    encerrarFormaLupina,
    encerrarRegeneracao,
  };
}
