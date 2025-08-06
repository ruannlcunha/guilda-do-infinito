import { CONDICOES } from "../../../../constants/personagens/personagem.constant";
import { getRandomInt } from "../../../../utils";
import { aumentarTurno, diminuirTurno } from "../../../../utils/alterar-turnos.util";
import { useRolarDado } from "../../rolar-dado/use-rolar-dado.hook";
import { useAcoesBase } from "../_base/use-acoes-base.hook";
import { useRealizarRegeneracao } from "./condicoes/use-realizar-regeneracao.hook";

export function useRealizarCondicao() {
  const { rolarDado } = useRolarDado();
  const { alterarPersonagem } = useAcoesBase();
  const { realizarRegeneracao } = useRealizarRegeneracao()

  function realizarEnvenenado(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.ENVENENADO.nome)) {
      const { dados } = rolarDado(1, 4, []);

      functions.adicionarLog(`${personagem.nome} sofreu ${dados[0].resultado} de dano por estar ${CONDICOES.ENVENENADO.nome}.`);

      const novoPv = personagem.pv.atual - dados[0].resultado;
      const condicaoEnvenenado = personagem.condicoes.find((condicao) => condicao.nome === CONDICOES.ENVENENADO.nome);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.ENVENENADO.nome)];
      if (condicaoEnvenenado.duracao - 1 > 0) {
        novasCondicoes.push({
          ...condicaoEnvenenado,
          duracao: condicaoEnvenenado.duracao - 1
        });
      } else {
        functions.adicionarLog(`${personagem.nome} não está mais ${CONDICOES.ENVENENADO.nome}.`);
      }

      const novoPersonagem = {
        ...personagem,
        pv: { ...personagem.pv, atual: novoPv },
        condicoes: novasCondicoes
      };
      return novoPersonagem;
    }
    return personagem;
  }

  function realizarQueimando(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.QUEIMANDO.nome)) {
      const { dados } = rolarDado(1, 6, []);
      functions.adicionarLog(`${personagem.nome} sofreu ${dados[0].resultado} de dano por estar ${CONDICOES.QUEIMANDO.nome}.`);
      const novoPv = personagem.pv.atual - dados[0].resultado;
      const novoPersonagem = {
        ...personagem,
        pv: { ...personagem.pv, atual: novoPv }
      };
      return novoPersonagem;
    }
    return personagem;
  }

  function realizarParalisado(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.PARALISADO.nome)) {
      const condicaoParalisado = personagem.condicoes.find((condicao) => condicao.nome === CONDICOES.PARALISADO.nome);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.PARALISADO.nome)];

      if (condicaoParalisado.duracao > 0) {
        functions.adicionarLog(`${personagem.nome} está paralisado e não pode agir, no seu próximo turno a paralisia acaba.`);
        novasCondicoes.push({
          ...condicaoParalisado,
          duracao: condicaoParalisado.duracao - 1
        });
        const novoPersonagem = {
          ...personagem,
          condicoes: novasCondicoes
        };
        return novoPersonagem;
      } else {
        functions.adicionarLog(`${personagem.nome} não está mais paralisado.`);
        const novaDefesa = personagem.defesa + 5;
        const novoPersonagem = {
          ...personagem,
          defesa: novaDefesa,
          condicoes: novasCondicoes
        };
        return novoPersonagem;
      }
    }
    return personagem;
  }

  function realizarDormindo(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.DORMINDO.nome)) {
      const condicaoDormindo = personagem.condicoes.find((condicao) => condicao.nome === CONDICOES.DORMINDO.nome);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.DORMINDO.nome)];
      if (condicaoDormindo.duracao > 0) {
        functions.adicionarLog(`${personagem.nome} está Dormindo e não pode agir.`);
        novasCondicoes.push({
          ...condicaoDormindo,
          duracao: condicaoDormindo.duracao - 1
        });
        const novoPersonagem = {
          ...personagem,
          condicoes: novasCondicoes
        };
        return novoPersonagem;
      } else {
        functions.adicionarLog(`${personagem.nome} acordou e não está mais Dormindo.`);
        const novaDefesa = personagem.defesa + 5;
        const novoPersonagem = {
          ...personagem,
          defesa: novaDefesa,
          condicoes: novasCondicoes
        };
        return novoPersonagem;
      }
    }
    return personagem;
  }

  function realizarAtordoado(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.ATORDOADO.nome)) {
      const condicaoAtordoado = personagem.condicoes.find((condicao) => condicao.nome === CONDICOES.ATORDOADO.nome);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.ATORDOADO.nome)];

      if (condicaoAtordoado.duracao > 0) {
        const probabilidade = getRandomInt(1, 4);
        const acaoBloqueada = probabilidade === 1;
        acaoBloqueada ? functions.adicionarLog(`${personagem.nome} está Atordoado e não pode agir.`) : functions.adicionarLog(`${personagem.nome} está Atordoado, mas pode agir.`);

        novasCondicoes.push({
          ...condicaoAtordoado,
          duracao: condicaoAtordoado.duracao - 1,
          acaoBloqueada
        });
        const novoPersonagem = {
          ...personagem,
          condicoes: novasCondicoes
        };
        return novoPersonagem;
      } else {
        functions.adicionarLog(`${personagem.nome} não está mais Atordoado.`);
        const novaDefesa = personagem.defesa + 2;
        const novoPersonagem = {
          ...personagem,
          defesa: novaDefesa,
          condicoes: novasCondicoes
        };
        return novoPersonagem;
      }
    }
    return personagem;
  }

  function realizarLento(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.LENTO.nome)) {
      const condicaoLento = personagem.condicoes.find((condicao) => condicao.nome === CONDICOES.LENTO.nome);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.LENTO.nome)];
      if (condicaoLento.duracao > 0) {
        novasCondicoes.push({
          ...condicaoLento,
          duracao: condicaoLento.duracao - 1
        });
        const novoPersonagem = {
          ...personagem,
          condicoes: novasCondicoes
        };
        return novoPersonagem;
      } else {
        aumentarTurno(personagem, functions);
        const novosAtributos = {
          ...personagem.atributos,
          agilidade: personagem.atributos.agilidade + 1
        };
        functions.adicionarLog(`${personagem.nome} não está mais ${CONDICOES.LENTO.nome}.`);
        const novoPersonagem = {
          ...personagem,
          atributos: novosAtributos,
          condicoes: novasCondicoes
        };
        return novoPersonagem;
      }
    }
    return personagem;
  }

  function realizarAmaldicoado(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.AMALDICOADO.nome)) {
      const condicao = personagem.condicoes.find((condicao) => condicao.nome === CONDICOES.AMALDICOADO.nome);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.AMALDICOADO.nome)];
      if (condicao.duracao > 0) {
        novasCondicoes.push({ ...condicao, duracao: condicao.duracao - 1 });
        const novoPersonagem = {
          ...personagem,
          condicoes: novasCondicoes
        };
        return novoPersonagem;
      } else {
        const novoBonusDado = [...personagem.bonusDado.filter((bonus) => bonus.condicao !== CONDICOES.AMALDICOADO.nome)];
        functions.adicionarLog(`${personagem.nome} não está mais ${CONDICOES.AMALDICOADO.nome}.`);
        const novoPersonagem = {
          ...personagem,
          bonusDado: novoBonusDado,
          condicoes: novasCondicoes
        };
        return novoPersonagem;
      }
    }
    return personagem;
  }

  function realizarAbalado(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.ABALADO.nome)) {
      const condicao = personagem.condicoes.find((condicao) => condicao.nome === CONDICOES.ABALADO.nome);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.ABALADO.nome)];
      if (condicao.duracao > 0) {
        novasCondicoes.push({ ...condicao, duracao: condicao.duracao - 1 });
        const novoPersonagem = {
          ...personagem,
          condicoes: novasCondicoes
        };
        return novoPersonagem;
      } else {
        const novosAtributos = {
          ...personagem.atributos,
          magia: personagem.atributos.magia + 1
        };
        functions.adicionarLog(`${personagem.nome} não está mais ${CONDICOES.ABALADO.nome}.`);
        const novoPersonagem = {
          ...personagem,
          atributos: novosAtributos,
          condicoes: novasCondicoes
        };
        return novoPersonagem;
      }
    }
    return personagem;
  }

  function realizarFraco(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.FRACO.nome)) {
      const condicao = personagem.condicoes.find((condicao) => condicao.nome === CONDICOES.FRACO.nome);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.FRACO.nome)];
      if (condicao.duracao > 0) {
        novasCondicoes.push({ ...condicao, duracao: condicao.duracao - 1 });
        const novoPersonagem = {
          ...personagem,
          condicoes: novasCondicoes
        };
        return novoPersonagem;
      } else {
        const novosAtributos = {
          ...personagem.atributos,
          forca: personagem.atributos.forca + 1
        };
        functions.adicionarLog(`${personagem.nome} não está mais ${CONDICOES.FRACO.nome}.`);
        const novoPersonagem = {
          ...personagem,
          atributos: novosAtributos,
          condicoes: novasCondicoes
        };
        return novoPersonagem;
      }
    }
    return personagem;
  }

  function realizarFatigado(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.FATIGADO.nome)) {
      const condicao = personagem.condicoes.find((condicao) => condicao.nome === CONDICOES.FATIGADO.nome);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.FATIGADO.nome)];
      if (condicao.duracao > 0) {
        novasCondicoes.push({ ...condicao, duracao: condicao.duracao - 1 });
        const novoPersonagem = {
          ...personagem,
          condicoes: novasCondicoes
        };
        return novoPersonagem;
      } else {
        const novosAtributos = {
          ...personagem.atributos,
          vigor: personagem.atributos.vigor + 1
        };
        functions.adicionarLog(`${personagem.nome} não está mais ${CONDICOES.FATIGADO.nome}.`);
        const novoPersonagem = {
          ...personagem,
          atributos: novosAtributos,
          condicoes: novasCondicoes
        };
        return novoPersonagem;
      }
    }
    return personagem;
  }

  function realizarVeloz(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.VELOZ.nome)) {
      const condicaoVeloz = personagem.condicoes.find((condicao) => condicao.nome === CONDICOES.VELOZ.nome);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.VELOZ.nome)];
      if (condicaoVeloz.duracao > 0) {
        novasCondicoes.push({
          ...condicaoVeloz,
          duracao: condicaoVeloz.duracao - 1
        });
        const novoPersonagem = {
          ...personagem,
          condicoes: novasCondicoes
        };
        return novoPersonagem;
      } else {
        diminuirTurno(personagem, functions);
        const novosAtributos = {
          ...personagem.atributos,
          agilidade: personagem.atributos.agilidade - 1
        };
        functions.adicionarLog(`${personagem.nome} não está mais ${CONDICOES.VELOZ.nome}.`);
        const novoPersonagem = {
          ...personagem,
          atributos: novosAtributos,
          condicoes: novasCondicoes
        };
        return novoPersonagem;
      }
    }
    return personagem;
  }

  function realizarSortudo(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.SORTUDO.nome)) {
      const condicaoSortudo = personagem.condicoes.find((condicao) => condicao.nome === CONDICOES.SORTUDO.nome);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.SORTUDO.nome)];
      if (condicaoSortudo.duracao > 0) {
        novasCondicoes.push({
          ...condicaoSortudo,
          duracao: condicaoSortudo.duracao - 1
        });
        const novoPersonagem = {
          ...personagem,
          condicoes: novasCondicoes
        };
        return novoPersonagem;
      } else {
        functions.adicionarLog(`A sorte de ${personagem.nome} passou. 
                    El${personagem.pronomes.minusculo_1} já não está mais se sentindo sortud${personagem.pronomes.minusculo_2}.`);
        const novaDefesa = personagem.defesa - 1;
        const novoBonusDado = [...personagem.bonusDado.filter((bonus) => bonus.condicao !== CONDICOES.SORTUDO.nome)];
        const novoPersonagem = {
          ...personagem,
          defesa: novaDefesa,
          bonusDado: novoBonusDado,
          condicoes: novasCondicoes
        };
        return novoPersonagem;
      }
    }
    return personagem;
  }

  function realizarProtegido(personagem, functions, personagens) {
    const condicao = personagem.condicoes.find((condicao) => condicao.nome === CONDICOES.PROTEGIDO.nome);
    if (condicao) {
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.PROTEGIDO.nome)];

      if (condicao.personagemId === personagem.idCombate) {
        functions.adicionarLog(`${personagem.nome} deixou de se defender.`);
        const novaDefesa = personagem.defesa - 2;
        const novoPersonagem = {
          ...personagem,
          defesa: novaDefesa,
          condicoes: novasCondicoes
        };
        return novoPersonagem;
      }
      else {
        const protetor = personagens.find(_personagem=> _personagem.idCombate === condicao.personagemId)
        if(!protetor.condicoes.some(_condicao=> _condicao.nome === CONDICOES.PROTEGENDO.nome)) {
          return {
            ...personagem,
            defesa: personagem.defesa - 2,
            condicoes: novasCondicoes
          };
        }
      }
    }
    return personagem;
  }

  function realizarProtegendo(personagem, functions, personagens) {
    const condicao = personagem.condicoes.find((condicao) => condicao.nome === CONDICOES.PROTEGENDO.nome);
    if (condicao) {
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.PROTEGENDO.nome)];
      const protegido = personagens.find((_personagem) => _personagem.idCombate === condicao.personagemId);
      if (protegido) {
        functions.adicionarLog(`${personagem.nome} não está mais defendendo ${protegido.nome}.`);
        const novasCondicoesProtegido = [...protegido.condicoes.filter((condicao) => condicao.nome !== CONDICOES.PROTEGIDO.nome && condicao.personagemId === personagem.idCombate)];
        const novoProtegido = {
          ...protegido,
          defesa: protegido.defesa - 2,
          condicoes: novasCondicoesProtegido
        };
        alterarPersonagem(functions, novoProtegido);
      }
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

  function realizarEmFuria(personagem, functions) {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.FURIA.nome)) {
      const condicao = personagem.condicoes.find((condicao) => condicao.nome === CONDICOES.FURIA.nome);
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.FURIA.nome)];
      if (condicao.duracao > 0) {
        novasCondicoes.push({ ...condicao, duracao: condicao.duracao - 1 });
        const novoPersonagem = {
          ...personagem,
          condicoes: novasCondicoes
        };
        return novoPersonagem;
      } else {
        const novoBonusDado = [...personagem.bonusDado.filter((bonus) => bonus.condicao !== CONDICOES.FURIA.nome)];
        functions.adicionarLog(`${personagem.nome} não está mais ${CONDICOES.FURIA.nome}.`);
        const novoPersonagem = {
          ...personagem,
          bonusDado: novoBonusDado,
          condicoes: novasCondicoes
        };
        return novoPersonagem;
      }
    }
    return personagem;
  }

  function realizarMarcaCacador(personagem, functions, personagens) {
    const condicao = personagem.condicoes.find((condicao) => condicao.nome === CONDICOES.MARCA_CACADOR.nome)
    if (condicao) {
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.MARCA_CACADOR.nome)];
      const cacador = personagens.find(_personagem=> _personagem.idCombate === condicao.personagemId)
      if(!cacador.condicoes.some(_condicao=> _condicao.nome === CONDICOES.CACADOR.nome)) {
        return {
          ...personagem,
          condicoes: novasCondicoes
        };
      }
    }
    return personagem
  }

  function realizarCacador(personagem, functions, personagens) {
    const condicao = personagem.condicoes.find((condicao) => condicao.nome === CONDICOES.CACADOR.nome)
    if (condicao) {
      const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.CACADOR.nome)];
      const presa = personagens.find(_personagem=> _personagem.idCombate === condicao.personagemId)
      if(!presa.condicoes.some(_condicao=> _condicao.nome === CONDICOES.MARCA_CACADOR.nome)) {
        return {
          ...personagem,
          condicoes: novasCondicoes
        };
      }
    }
      return personagem
  }

  return [
    realizarEnvenenado,
    realizarQueimando,
    realizarParalisado,
    realizarDormindo,
    realizarAtordoado,
    realizarLento,
    realizarAmaldicoado,
    realizarAbalado,
    realizarFraco,
    realizarFatigado,
    realizarVeloz,
    realizarSortudo,
    realizarProtegido,
    realizarProtegendo,
    realizarEmFuria,
    realizarMarcaCacador,
    realizarCacador,
    realizarRegeneracao,
  ];
}
