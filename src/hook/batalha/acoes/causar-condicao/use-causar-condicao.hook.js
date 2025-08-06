import { ITEM_PROFICIENCIA } from "../../../../constants";
import { ICONS } from "../../../../constants/images";
import { BONUS_DADO, CONDICOES, ELEMENTOS, ELEMENTOS_NOMES, IMUNIDADE_TIPO } from "../../../../constants/personagens/personagem.constant";
import { ACOES_UNICAS, ACOES_UNICAS_DATA } from "../../../../database/acoes-unicas";
import { converterDados, diminuirTurno, getArmadura } from "../../../../utils";
import { aumentarTurno } from "../../../../utils/alterar-turnos.util";
import { useRolarDado } from "../../rolar-dado/use-rolar-dado.hook";
import { useAcoesBase } from "../_base/use-acoes-base.hook";
import { useEncerrarCondicao } from "../encerrar-condicao/use-encerrar-condicao.hook";
import { useCausarFormaAnimal } from "./condicoes/use-causar-forma-animal.hook";
import { useCausarFormaLupina } from "./condicoes/use-causar-forma-lupina.hook";
import { useCausarRegeneracao } from "./condicoes/use-causar-regeneracao.hook";

export function useCausarCondicao() {
  const { testarResistencia } = useAcoesBase();
  const { rolarDado } = useRolarDado();
  const { encerrarAbencoado, encerrarAmaldicoado } = useEncerrarCondicao();
  const { causarFormaAnimal } = useCausarFormaAnimal();
  const { causarFormaLupina } = useCausarFormaLupina();
  const { causarRegeneracao } = useCausarRegeneracao();

  function _validarImunidade(condicao, alvo, functions) {
    if (alvo.imunidades.some((imunidade) => imunidade.nome === condicao.nome && imunidade.tipo === IMUNIDADE_TIPO.CONDICAO)) {
      functions.adicionarLog(`${alvo.nome} é imune à condição ${condicao.nome}.`);
      return false;
    }
    return true;
  }

  function causarEnvenenado(alvo, dificuldade, acao, functions, testeAcerto) {
    if (!alvo.condicoes.find((condicao) => condicao.nome === CONDICOES.ENVENENADO.nome)) {
      if (!_validarImunidade(CONDICOES.ENVENENADO, alvo, functions)) return alvo;

      const modificadorVigor = {
        valor: alvo.atributos.vigor,
        atributo: "Vigor"
      };
      const alvoResistencia = testarResistencia(alvo, dificuldade, modificadorVigor, functions);
      const { dados } = rolarDado(1, 4, []);
      const turnos = dados[0].resultado;

      if (testeAcerto) {
        if (testeAcerto.acerto) {
          functions.adicionarLog(`${alvo.nome} está ${CONDICOES.ENVENENADO.nome} por ${turnos} turnos.`);
          const novaCondicao = {
            ...CONDICOES.ENVENENADO,
            duracao: turnos,
            acaoOrigem: acao.nome
          };

          return {
            ...alvo,
            condicoes: [...alvo.condicoes, novaCondicao]
          };
        }
        return alvo;
      } else if (!alvoResistencia.acerto) {
        functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar ${CONDICOES.ENVENENADO.nome} mas falhou com ${alvoResistencia.total}.`);
        functions.adicionarLog(`${alvo.nome} está ${CONDICOES.ENVENENADO.nome} por ${turnos} turnos.`);
        const novaCondicao = {
          ...CONDICOES.ENVENENADO,
          duracao: turnos,
          acaoOrigem: acao.nome
        };
        return {
          ...alvoResistencia.personagem,
          condicoes: [...alvoResistencia.personagem.condicoes, novaCondicao]
        };
      } else {
        functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar ${CONDICOES.ENVENENADO.nome} e teve um sucesso com ${alvoResistencia.total}.`);
        return alvoResistencia.personagem;
      }
    } else {
      functions.adicionarLog(`${alvo.nome} já está ${CONDICOES.ENVENENADO.nome}.`);
      return alvo;
    }
  }

  function causarQueimando(alvo, dificuldade, acao, functions, testeAcerto) {
    if (!alvo.condicoes.find((condicao) => condicao.nome === CONDICOES.QUEIMANDO.nome)) {
      if (!_validarImunidade(CONDICOES.QUEIMANDO, alvo, functions)) return alvo;

      const modificadorAgilidade = {
        valor: alvo.atributos.agilidade,
        atributo: "Agilidade"
      };
      const alvoResistencia = testarResistencia(alvo, dificuldade, modificadorAgilidade, functions);

      if (testeAcerto) {
        if (testeAcerto.acerto) {
          functions.adicionarLog(`${alvo.nome} está ${CONDICOES.QUEIMANDO.nome}`);
          const novaCondicao = {
            ...CONDICOES.QUEIMANDO,
            dificuldade,
            acaoOrigem: acao.nome
          };
          const novaAcaoExtra = ACOES_UNICAS_DATA.find((acao) => acao.id === ACOES_UNICAS.APAGAR_CHAMAS.id);

          return {
            ...alvo,
            condicoes: [...alvo.condicoes, novaCondicao],
            acoesExtras: [...alvo.acoesExtras, novaAcaoExtra]
          };
        }
        return alvo;
      } else if (!alvoResistencia.acerto) {
        functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar Queimando mas falhou com ${alvoResistencia.total}.`);
        functions.adicionarLog(`${alvo.nome} está Queimando`);
        const novaCondicao = { ...CONDICOES.QUEIMANDO, acaoOrigem: acao.nome };
        const novaAcaoExtra = ACOES_UNICAS_DATA.find((acao) => acao.id === ACOES_UNICAS.APAGAR_CHAMAS.id);

        return {
          ...alvoResistencia.personagem,
          condicoes: [...alvoResistencia.personagem.condicoes, novaCondicao],
          acoesExtras: [...alvoResistencia.personagem.acoesExtras, novaAcaoExtra]
        };
      } else {
        functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar Queimando e teve um sucesso com ${alvoResistencia.total}.`);
        return alvoResistencia.personagem;
      }
    } else {
      functions.adicionarLog(`${alvo.nome} já está Queimando.`);
      return alvo;
    }
  }

  function causarCongelado(alvo, dificuldade, acao, functions, testeAcerto) {
    if (!alvo.condicoes.find((condicao) => condicao.nome === CONDICOES.CONGELADO.nome)) {
      if (!_validarImunidade(CONDICOES.CONGELADO, alvo, functions)) return alvo;

      const modificadorVigor = {
        valor: alvo.atributos.vigor,
        atributo: "Vigor"
      };
      const alvoResistencia = testarResistencia(alvo, dificuldade, modificadorVigor, functions);

      if (testeAcerto) {
        if (testeAcerto.acerto) {
          functions.adicionarLog(`${alvo.nome} está Congelado`);
          const novaCondicao = {
            ...CONDICOES.CONGELADO,
            dificuldade,
            acaoOrigem: acao.nome
          };
          const QUEBRAR_GELO_ID = 2;
          const novaAcaoExtra = ACOES_UNICAS_DATA.find((acao) => acao.id === QUEBRAR_GELO_ID);

          return {
            ...alvo,
            condicoes: [...alvo.condicoes, novaCondicao],
            acoesExtras: [...alvo.acoesExtras, novaAcaoExtra]
          };
        }
        return alvo;
      } else if (!alvoResistencia.acerto) {
        functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar Congelado mas falhou com ${alvoResistencia.total}.`);
        functions.adicionarLog(`${alvo.nome} está Congelado`);
        const novaCondicao = {
          ...CONDICOES.CONGELADO,
          dificuldade,
          acaoOrigem: acao.nome
        };
        const QUEBRAR_GELO_ID = 2;
        const novaAcaoExtra = ACOES_UNICAS_DATA.find((acao) => acao.id === QUEBRAR_GELO_ID);

        return {
          ...alvoResistencia.personagem,
          condicoes: [...alvoResistencia.personagem.condicoes, novaCondicao],
          acoesExtras: [...alvoResistencia.personagem.acoesExtras, novaAcaoExtra]
        };
      } else {
        functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar Congelado e teve um sucesso com ${alvoResistencia.total}.`);
        return alvoResistencia.personagem;
      }
    } else {
      functions.adicionarLog(`${alvo.nome} já está Congelado.`);
      return alvo;
    }
  }

  function causarParalisado(alvo, dificuldade, acao, functions, testeAcerto) {
    if (!alvo.condicoes.find((condicao) => condicao.nome === CONDICOES.PARALISADO.nome)) {
      if (!_validarImunidade(CONDICOES.PARALISADO, alvo, functions)) return alvo;

      const modificadorVigor = {
        valor: alvo.atributos.vigor,
        atributo: "Vigor"
      };
      const alvoResistencia = testarResistencia(alvo, dificuldade, modificadorVigor, functions);
      const turnos = 1;

      if (testeAcerto) {
        if (testeAcerto.acerto) {
          functions.adicionarLog(`${alvo.nome} está Paralisado pelo próximo turno.`);
          const novaCondicao = {
            ...CONDICOES.PARALISADO,
            duracao: turnos,
            acaoOrigem: acao.nome
          };
          const novaDefesa = alvo.defesa - 5;

          return {
            ...alvo,
            defesa: novaDefesa,
            condicoes: [...alvo.condicoes, novaCondicao]
          };
        }
        return alvo;
      } else if (!alvoResistencia.acerto) {
        functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar Paralisado mas falhou com ${alvoResistencia.total}.`);
        functions.adicionarLog(`${alvo.nome} está Paralisado pelo próximo turno.`);
        const novaCondicao = {
          ...CONDICOES.PARALISADO,
          duracao: turnos,
          acaoOrigem: acao.nome
        };
        const novaDefesa = alvo.defesa - 5;
        return {
          ...alvoResistencia.personagem,
          defesa: novaDefesa,
          condicoes: [...alvoResistencia.personagem.condicoes, novaCondicao]
        };
      } else {
        functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar Paralisado e teve um sucesso com ${alvoResistencia.total}.`);
        return alvoResistencia.personagem;
      }
    } else {
      functions.adicionarLog(`${alvo.nome} já está Paralisado.`);
      return alvo;
    }
  }

  function causarDormindo(alvo, dificuldade, acao, functions, testeAcerto) {
    if (!alvo.condicoes.find((condicao) => condicao.nome === CONDICOES.DORMINDO.nome)) {
      if (!_validarImunidade(CONDICOES.DORMINDO, alvo, functions)) return alvo;

      const modificadorVigor = {
        valor: alvo.atributos.vigor,
        atributo: "Vigor"
      };
      const alvoResistencia = testarResistencia(alvo, dificuldade, modificadorVigor, functions);
      const { dados } = rolarDado(1, 4, []);
      const turnos = dados[0].resultado;

      if (testeAcerto) {
        if (testeAcerto.acerto) {
          functions.adicionarLog(`${alvo.nome} está Dormindo por ${turnos} turnos.`);
          const novaCondicao = {
            ...CONDICOES.DORMINDO,
            duracao: turnos,
            acaoOrigem: acao.nome
          };
          const novaDefesa = alvo.defesa - 5;

          return {
            ...alvo,
            defesa: novaDefesa,
            condicoes: [...alvo.condicoes, novaCondicao]
          };
        }
        return alvo;
      } else if (!alvoResistencia.acerto) {
        functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar Dormindo mas falhou com ${alvoResistencia.total}.`);
        functions.adicionarLog(`${alvo.nome} está Dormindo por ${turnos} turnos.`);
        const novaCondicao = {
          ...CONDICOES.DORMINDO,
          duracao: turnos,
          acaoOrigem: acao.nome
        };
        const novaDefesa = alvo.defesa - 5;
        return {
          ...alvoResistencia.personagem,
          defesa: novaDefesa,
          condicoes: [...alvoResistencia.personagem.condicoes, novaCondicao]
        };
      } else {
        functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar Dormindo e teve um sucesso com ${alvoResistencia.total}.`);
        return alvoResistencia.personagem;
      }
    } else {
      functions.adicionarLog(`${alvo.nome} já está Dormindo.`);
      return alvo;
    }
  }

  function causarAtordoado(alvo, duracao, dificuldade, acao, functions, testeAcerto) {
    if (!alvo.condicoes.find((condicao) => condicao.nome === CONDICOES.ATORDOADO.nome)) {
      if (!_validarImunidade(CONDICOES.ATORDOADO, alvo, functions)) return alvo;

      const bonusAcao = duracao.split("d");
      const modificadorVigor = {
        valor: alvo.atributos.vigor,
        atributo: "Vigor"
      };
      const alvoResistencia = testarResistencia(alvo, dificuldade, modificadorVigor, functions);
      const { dados } = rolarDado(bonusAcao[0], bonusAcao[1], []);
      const turnos = dados[0].resultado;

      if (testeAcerto) {
        if (testeAcerto.acerto) {
          functions.adicionarLog(`${alvo.nome} está Atordoado por ${turnos} turnos.`);
          const novaCondicao = {
            ...CONDICOES.ATORDOADO,
            duracao: turnos,
            acaoOrigem: acao.nome
          };
          const novaDefesa = alvo.defesa - 2;

          return {
            ...alvo,
            defesa: novaDefesa,
            condicoes: [...alvo.condicoes, novaCondicao]
          };
        }
        return alvo;
      } else if (!alvoResistencia.acerto) {
        functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar Atordoado mas falhou com ${alvoResistencia.total}.`);
        functions.adicionarLog(`${alvo.nome} está Atordoado por ${turnos} turnos.`);
        const novaCondicao = {
          ...CONDICOES.ATORDOADO,
          duracao: turnos,
          acaoOrigem: acao.nome
        };
        const novaDefesa = alvoResistencia.personagem.defesa - 2;
        return {
          ...alvoResistencia.personagem,
          defesa: novaDefesa,
          condicoes: [...alvoResistencia.personagem.condicoes, novaCondicao]
        };
      } else {
        functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar Atordoado e teve um sucesso com ${alvoResistencia.total}.`);
        return alvoResistencia.personagem;
      }
    } else {
      functions.adicionarLog(`${alvo.nome} já está Atordoado.`);
      return alvo;
    }
  }

  function causarLento(alvo, dificuldade, acao, functions, testeAcerto) {
    if (!alvo.condicoes.find((condicao) => condicao.nome === CONDICOES.LENTO.nome)) {
      if (!_validarImunidade(CONDICOES.LENTO, alvo, functions)) return alvo;

      const modificadorAgilidade = {
        valor: alvo.atributos.agilidade,
        atributo: "Agilidade"
      };
      const alvoResistencia = testarResistencia(alvo, dificuldade, modificadorAgilidade, functions);
      const { dados } = rolarDado(1, 4, []);
      const turnos = dados[0].resultado;

      if (testeAcerto) {
        if (testeAcerto.acerto) {
          functions.adicionarLog(`${alvo.nome} está ${CONDICOES.LENTO.nome} por ${turnos} turnos.`);
          const novaCondicao = {
            ...CONDICOES.LENTO,
            duracao: turnos,
            acaoOrigem: acao.nome
          };
          const novosAtributos = {
            ...alvo.atributos,
            agilidade: alvo.atributos.agilidade - 1
          };
          diminuirTurno(alvo, functions);
          return {
            ...alvo,
            atributos: novosAtributos,
            condicoes: [...alvo.condicoes, novaCondicao]
          };
        }
        return alvo;
      } else if (!alvoResistencia.acerto) {
        functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar ${CONDICOES.LENTO.nome} mas falhou com ${alvoResistencia.total}.`);
        functions.adicionarLog(`${alvo.nome} está ${CONDICOES.LENTO.nome} por ${turnos} turnos.`);
        const novaCondicao = {
          ...CONDICOES.LENTO,
          duracao: turnos,
          acaoOrigem: acao.nome
        };
        const novosAtributos = {
          ...alvoResistencia.personagem.atributos,
          agilidade: alvoResistencia.personagem.atributos.agilidade - 1
        };
        diminuirTurno(alvoResistencia.personagem, functions);
        return {
          ...alvoResistencia.personagem,
          atributos: novosAtributos,
          condicoes: [...alvoResistencia.personagem.condicoes, novaCondicao]
        };
      } else {
        functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar ${CONDICOES.LENTO.nome} e teve um sucesso com ${alvoResistencia.total}.`);
        return alvoResistencia.personagem;
      }
    } else {
      functions.adicionarLog(`${alvo.nome} já está ${CONDICOES.LENTO.nome}.`);
      return alvo;
    }
  }

  function causarAbalado(alvo, duracao, dificuldade, acao, functions, testeAcerto) {
    if (!alvo.condicoes.find((condicao) => condicao.nome === CONDICOES.ABALADO.nome)) {
      if (!_validarImunidade(CONDICOES.ABALADO, alvo, functions)) return alvo;

      const bonusAcao = duracao.split("d");
      const modificadorMagia = {
        valor: alvo.atributos.magia,
        atributo: "Magia"
      };
      const alvoResistencia = testarResistencia(alvo, dificuldade, modificadorMagia, functions);
      const { dados } = rolarDado(bonusAcao[0], bonusAcao[1], []);
      const turnos = dados[0].resultado;

      if (testeAcerto) {
        if (testeAcerto.acerto) {
          functions.adicionarLog(`${alvo.nome} está ${CONDICOES.ABALADO.nome} por ${turnos} turnos.`);
          const novaCondicao = {
            ...CONDICOES.ABALADO,
            duracao: turnos,
            acaoOrigem: acao.nome
          };
          const novosAtributos = {
            ...alvo.atributos,
            magia: alvo.atributos.magia - 1
          };
          return {
            ...alvo,
            atributos: novosAtributos,
            condicoes: [...alvo.condicoes, novaCondicao]
          };
        }
        return alvo;
      } else if (!alvoResistencia.acerto) {
        functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar ${CONDICOES.ABALADO.nome} mas falhou com ${alvoResistencia.total}.`);
        functions.adicionarLog(`${alvo.nome} está ${CONDICOES.ABALADO.nome} por ${turnos} turnos.`);
        const novaCondicao = {
          ...CONDICOES.ABALADO,
          duracao: turnos,
          acaoOrigem: acao.nome
        };
        const novosAtributos = {
          ...alvoResistencia.personagem.atributos,
          magia: alvoResistencia.personagem.atributos.magia - 1
        };
        return {
          ...alvoResistencia.personagem,
          atributos: novosAtributos,
          condicoes: [...alvoResistencia.personagem.condicoes, novaCondicao]
        };
      } else {
        functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar ${CONDICOES.ABALADO.nome} e teve um sucesso com ${alvoResistencia.total}.`);
        return alvoResistencia.personagem;
      }
    } else {
      functions.adicionarLog(`${alvo.nome} já está ${CONDICOES.ABALADO.nome}.`);
      return alvo;
    }
  }

  function causarFraco(alvo, dificuldade, acao, functions, testeAcerto) {
    if (!alvo.condicoes.find((condicao) => condicao.nome === CONDICOES.FRACO.nome)) {
      if (!_validarImunidade(CONDICOES.FRACO, alvo, functions)) return alvo;

      const modificadorForca = {
        valor: alvo.atributos.forca,
        atributo: "Forca"
      };
      const alvoResistencia = testarResistencia(alvo, dificuldade, modificadorForca, functions);
      const { dados } = rolarDado(1, 4, []);
      const turnos = dados[0].resultado;

      if (testeAcerto) {
        if (testeAcerto.acerto) {
          functions.adicionarLog(`${alvo.nome} está ${CONDICOES.FRACO.nome} por ${turnos} turnos.`);
          const novaCondicao = {
            ...CONDICOES.FRACO,
            duracao: turnos,
            acaoOrigem: acao.nome
          };
          const novosAtributos = {
            ...alvo.atributos,
            forca: alvo.atributos.forca - 1
          };
          return {
            ...alvo,
            atributos: novosAtributos,
            condicoes: [...alvo.condicoes, novaCondicao]
          };
        }
        return alvo;
      } else if (!alvoResistencia.acerto) {
        functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar ${CONDICOES.FRACO.nome} mas falhou com ${alvoResistencia.total}.`);
        functions.adicionarLog(`${alvo.nome} está ${CONDICOES.FRACO.nome} por ${turnos} turnos.`);
        const novaCondicao = {
          ...CONDICOES.FRACO,
          duracao: turnos,
          acaoOrigem: acao.nome
        };
        const novosAtributos = {
          ...alvoResistencia.personagem.atributos,
          forca: alvoResistencia.personagem.atributos.forca - 1
        };
        return {
          ...alvoResistencia.personagem,
          atributos: novosAtributos,
          condicoes: [...alvoResistencia.personagem.condicoes, novaCondicao]
        };
      } else {
        functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar ${CONDICOES.FRACO.nome} e teve um sucesso com ${alvoResistencia.total}.`);
        return alvoResistencia.personagem;
      }
    } else {
      functions.adicionarLog(`${alvo.nome} já está ${CONDICOES.FRACO.nome}.`);
      return alvo;
    }
  }

  function causarFatigado(alvo, dificuldade, acao, functions, testeAcerto) {
    if (!alvo.condicoes.find((condicao) => condicao.nome === CONDICOES.FATIGADO.nome)) {
      if (!_validarImunidade(CONDICOES.FATIGADO, alvo, functions)) return alvo;

      const modificadorVigor = {
        valor: alvo.atributos.vigor,
        atributo: "Vigor"
      };
      const alvoResistencia = testarResistencia(alvo, dificuldade, modificadorVigor, functions);
      const { dados } = rolarDado(1, 4, []);
      const turnos = dados[0].resultado;

      if (testeAcerto) {
        if (testeAcerto.acerto) {
          functions.adicionarLog(`${alvo.nome} está ${CONDICOES.FATIGADO.nome} por ${turnos} turnos.`);
          const novaCondicao = {
            ...CONDICOES.FATIGADO,
            duracao: turnos,
            acaoOrigem: acao.nome
          };
          const novosAtributos = {
            ...alvo.atributos,
            vigor: alvo.atributos.vigor - 1
          };
          return {
            ...alvo,
            atributos: novosAtributos,
            condicoes: [...alvo.condicoes, novaCondicao]
          };
        }
        return alvo;
      } else if (!alvoResistencia.acerto) {
        functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar ${CONDICOES.FATIGADO.nome} mas falhou com ${alvoResistencia.total}.`);
        functions.adicionarLog(`${alvo.nome} está ${CONDICOES.FATIGADO.nome} por ${turnos} turnos.`);
        const novaCondicao = {
          ...CONDICOES.FATIGADO,
          duracao: turnos,
          acaoOrigem: acao.nome
        };
        const novosAtributos = {
          ...alvoResistencia.personagem.atributos,
          vigor: alvoResistencia.personagem.atributos.vigor - 1
        };
        return {
          ...alvoResistencia.personagem,
          atributos: novosAtributos,
          condicoes: [...alvoResistencia.personagem.condicoes, novaCondicao]
        };
      } else {
        functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar ${CONDICOES.FATIGADO.nome} e teve um sucesso com ${alvoResistencia.total}.`);
        return alvoResistencia.personagem;
      }
    } else {
      functions.adicionarLog(`${alvo.nome} já está ${CONDICOES.FATIGADO.nome}.`);
      return alvo;
    }
  }

  function causarVeloz(alvo, turnos, acao, functions) {
    if (!alvo.condicoes.find((condicao) => condicao.nome === CONDICOES.VELOZ.nome)) {
      functions.adicionarLog(`${alvo.nome} está ${CONDICOES.VELOZ.nome} por ${turnos} turnos.`);
      const novaCondicao = {
        ...CONDICOES.VELOZ,
        duracao: turnos,
        acaoOrigem: acao.nome
      };
      const novosAtributos = {
        ...alvo.atributos,
        agilidade: alvo.atributos.agilidade + 1
      };
      aumentarTurno(alvo, functions);
      return {
        ...alvo,
        atributos: novosAtributos,
        condicoes: [...alvo.condicoes, novaCondicao]
      };
    } else {
      functions.adicionarLog(`AVISO: ${alvo.nome} já está sob efeito de ${CONDICOES.VELOZ.nome}.`);
      throw {
        message: `${alvo.nome} já está sob efeito de ${CONDICOES.VELOZ.nome}.`
      };
    }
  }

  function causarArmaduraMagica(alvo, acao, functions) {
    if (!alvo.condicoes.find((condicao) => condicao.nome === CONDICOES.ARMADURA_MAGICA.nome)) {
      if (alvo.equipamentos.armadura) {
        const armadura = getArmadura(alvo);
        if (armadura.proficiencia === ITEM_PROFICIENCIA.PESADA) {
          functions.adicionarLog(`AVISO: ${alvo.nome} está usando Armadura Pesada e não pode receber os efeitos de ${CONDICOES.ARMADURA_MAGICA.nome}.`);
          throw {
            message: `${alvo.nome} está usando Armadura Pesada e não pode receber os efeitos de ${CONDICOES.ARMADURA_MAGICA.nome}.`
          };
        }
      }
      functions.adicionarLog(`${alvo.nome} recebeu os efeitos de ${CONDICOES.ARMADURA_MAGICA.nome} e ganhou +2 de Defesa.`);
      const novaCondicao = {
        ...CONDICOES.ARMADURA_MAGICA,
        acaoOrigem: acao.nome
      };
      const novaDefesa = alvo.defesa + 2;
      return {
        ...alvo,
        defesa: novaDefesa,
        condicoes: [...alvo.condicoes, novaCondicao]
      };
    } else {
      functions.adicionarLog(`AVISO: ${alvo.nome} já está sob efeito de ${CONDICOES.ARMADURA_MAGICA.nome}.`);
      throw {
        message: `${alvo.nome} já está sob efeito de ${CONDICOES.ARMADURA_MAGICA.nome}.`
      };
    }
  }

  function causarDuplicatas(alvo, acao, functions) {
    if (!alvo.condicoes.find((condicao) => condicao.nome === CONDICOES.DUPLICATAS.nome)) {
      functions.adicionarLog(`${alvo.nome} recebeu 3 clones ilusórios e ganhou +6 de Defesa.`);
      const novaCondicao = { ...CONDICOES.DUPLICATAS, acaoOrigem: acao.nome };
      const novaDefesa = alvo.defesa + 6;
      return {
        ...alvo,
        defesa: novaDefesa,
        condicoes: [...alvo.condicoes, novaCondicao]
      };
    } else {
      functions.adicionarLog(`AVISO: ${alvo.nome} já está sob efeito de ${CONDICOES.DUPLICATAS.nome}.`);
      throw {
        message: `${alvo.nome} já está sob efeito de ${CONDICOES.DUPLICATAS.nome}.`
      };
    }
  }

  function causarAbencoado(alvo, acao, functions) {
    if (!alvo.condicoes.find((condicao) => condicao.nome === CONDICOES.ABENCOADO.nome)) {
      functions.adicionarLog(`${alvo.nome} foi abençoad${alvo.pronomes.minusculo_2} e recebeu +1 de bônus em Ataque, Conjuração e Dano.`);
      const novaCondicao = { ...CONDICOES.ABENCOADO, acaoOrigem: acao.nome };
      const novosBonus = [
        {
          modificador: 1,
          tipo: BONUS_DADO.ATAQUE,
          condicao: CONDICOES.ABENCOADO.nome
        },
        {
          modificador: 1,
          tipo: BONUS_DADO.DANO,
          condicao: CONDICOES.ABENCOADO.nome
        },
        {
          modificador: 1,
          tipo: BONUS_DADO.CONJURACAO,
          condicao: CONDICOES.ABENCOADO.nome
        }
      ];
      if (alvo.condicoes.some((condicao) => condicao.nome === CONDICOES.AMALDICOADO.nome)) {
        functions.adicionarLog(`A condição ${CONDICOES.AMALDICOADO.nome} de ${alvo.nome} foi anulada pela condição ${CONDICOES.ABENCOADO.nome}.`);
        const novoAlvo = encerrarAmaldicoado(alvo, functions);
        return {
          ...novoAlvo,
          bonusDado: [...novoAlvo.bonusDado, ...novosBonus],
          condicoes: [...novoAlvo.condicoes, novaCondicao]
        };
      }
      return {
        ...alvo,
        bonusDado: [...alvo.bonusDado, ...novosBonus],
        condicoes: [...alvo.condicoes, novaCondicao]
      };
    } else {
      functions.adicionarLog(`AVISO: ${alvo.nome} já está sob efeito de ${CONDICOES.ABENCOADO.nome}.`);
      throw {
        message: `${alvo.nome} já está sob efeito de ${CONDICOES.ABENCOADO.nome}.`
      };
    }
  }

  function causarAmaldicoado(alvo, dificuldade, acao, functions, testeAcerto) {
    if (!alvo.condicoes.find((condicao) => condicao.nome === CONDICOES.AMALDICOADO.nome)) {
      if (!_validarImunidade(CONDICOES.AMALDICOADO, alvo, functions)) return alvo;

      const modificadorMagia = {
        valor: alvo.atributos.magia,
        atributo: "Magia"
      };
      const alvoResistencia = testarResistencia(alvo, dificuldade, modificadorMagia, functions);
      const bonusAcao = converterDados(acao.bonus);
      const { dados } = rolarDado(bonusAcao[0], bonusAcao[1], []);
      const turnos = dados[0].resultado;
      const novosBonus = [
        {
          modificador: Number(`-${bonusAcao[0]}`),
          tipo: BONUS_DADO.ATAQUE,
          condicao: CONDICOES.AMALDICOADO.nome
        },
        {
          modificador: Number(`-${bonusAcao[0]}`),
          tipo: BONUS_DADO.DANO,
          condicao: CONDICOES.AMALDICOADO.nome
        },
        {
          modificador: Number(`-${bonusAcao[0]}`),
          tipo: BONUS_DADO.CONJURACAO,
          condicao: CONDICOES.AMALDICOADO.nome
        }
      ];

      if (testeAcerto) {
        if (testeAcerto.acerto) {
          functions.adicionarLog(`${alvo.nome} foi amaldiçoad${alvo.pronomes.minusculo_2} e recebeu -${bonusAcao[0]} de bônus em Ataque, Conjuração e Dano por ${turnos} turnos.`);
          const novaCondicao = {
            ...CONDICOES.AMALDICOADO,
            duracao: turnos,
            acaoOrigem: acao.nome
          };
          if (alvo.condicoes.some((condicao) => condicao.nome === CONDICOES.ABENCOADO.nome)) {
            functions.adicionarLog(`A condição ${CONDICOES.ABENCOADO.nome} de ${alvo.nome} foi anulada pela condição ${CONDICOES.AMALDICOADO.nome}.`);
            const novoAlvo = encerrarAbencoado(alvo, functions);
            return {
              ...novoAlvo,
              bonusDado: [...novoAlvo.bonusDado, ...novosBonus],
              condicoes: [...novoAlvo.condicoes, novaCondicao]
            };
          }
          return {
            ...alvo,
            bonusDado: [...alvo.bonusDado, ...novosBonus],
            condicoes: [...alvo.condicoes, novaCondicao]
          };
        }
        return alvo;
      } else if (!alvoResistencia.acerto) {
        functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar ${CONDICOES.AMALDICOADO.nome} mas falhou com ${alvoResistencia.total}.`);
        functions.adicionarLog(`${alvo.nome} foi amaldiçoad${alvo.pronomes.minusculo_2} e recebeu -${bonusAcao[0]} de bônus em Ataque, Conjuração e Dano por ${turnos} turnos.`);
        const novaCondicao = {
          ...CONDICOES.AMALDICOADO,
          acaoOrigem: acao.nome
        };
        if (alvo.condicoes.some((condicao) => condicao.nome === CONDICOES.ABENCOADO.nome)) {
          functions.adicionarLog(`A condição ${CONDICOES.ABENCOADO.nome} de ${alvo.nome} foi anulada pela condição ${CONDICOES.AMALDICOADO.nome}.`);
          const novoAlvo = encerrarAbencoado(alvo, functions);
          return {
            ...novoAlvo,
            bonusDado: [...novoAlvo.bonusDado, ...novosBonus],
            condicoes: [...novoAlvo.condicoes, novaCondicao]
          };
        }
        return {
          ...alvo,
          bonusDado: [...alvo.bonusDado, ...novosBonus],
          condicoes: [...alvo.condicoes, novaCondicao]
        };
      } else {
        functions.adicionarLog(`${alvo.nome} fez um teste de resistência para evitar ficar ${CONDICOES.AMALDICOADO.nome} e teve um sucesso com ${alvoResistencia.total}.`);
        return alvoResistencia.personagem;
      }
    } else {
      functions.adicionarLog(`${alvo.nome} já está ${CONDICOES.AMALDICOADO.nome}.`);
      return alvo;
    }
  }

  function causarAtaqueEspecial(alvo, acao, functions) {
    if (!alvo.condicoes.find((condicao) => condicao.nome === CONDICOES.ATAQUE_ESPECIAL.nome)) {
      functions.adicionarLog(`${alvo.nome} melhorou seu físico e recebeu +${acao.bonus} de bônus de ataque até seu próximo turno.`);
      const novaCondicao = {
        ...CONDICOES.ATAQUE_ESPECIAL,
        bonus: acao.bonus,
        acaoOrigem: acao.nome
      };
      const novoBonus = {
        modificador: acao.bonus,
        tipo: BONUS_DADO.ATAQUE,
        condicao: CONDICOES.ATAQUE_ESPECIAL.nome
      };
      return {
        ...alvo,
        bonusDado: [...alvo.bonusDado, novoBonus],
        condicoes: [...alvo.condicoes, novaCondicao]
      };
    } else {
      functions.adicionarLog(`AVISO: ${alvo.nome} já está sob efeito de ${CONDICOES.ATAQUE_ESPECIAL.nome}.`);
      throw {
        message: `${alvo.nome} já está sob efeito de ${CONDICOES.ATAQUE_ESPECIAL.nome}.`
      };
    }
  }

  function causarSortudo(alvo, duracao, acao, functions) {
    if (!alvo.condicoes.find((condicao) => condicao.nome === CONDICOES.SORTUDO.nome)) {
      functions.adicionarLog(`A sorte está à favor de ${alvo.nome}, que está ${CONDICOES.SORTUDO.nome} por ${duracao} rodadas.`);
      const novaCondicao = {
        ...CONDICOES.SORTUDO,
        duracao: duracao,
        acaoOrigem: acao.nome
      };
      const novaDefesa = alvo.defesa + 1;
      const novosBonus = [
        {
          modificador: 1,
          tipo: BONUS_DADO.ATAQUE,
          condicao: CONDICOES.SORTUDO.nome
        },
        {
          modificador: 1,
          tipo: BONUS_DADO.CONJURACAO,
          condicao: CONDICOES.SORTUDO.nome
        },
        {
          modificador: 1,
          tipo: BONUS_DADO.RESISTENCIA_FORCA,
          condicao: CONDICOES.SORTUDO.nome
        },
        {
          modificador: 1,
          tipo: BONUS_DADO.RESISTENCIA_AGILIDADE,
          condicao: CONDICOES.SORTUDO.nome
        },
        {
          modificador: 1,
          tipo: BONUS_DADO.RESISTENCIA_MAGIA,
          condicao: CONDICOES.SORTUDO.nome
        },
        {
          modificador: 1,
          tipo: BONUS_DADO.RESISTENCIA_VIGOR,
          condicao: CONDICOES.SORTUDO.nome
        }
      ];
      return {
        ...alvo,
        defesa: novaDefesa,
        bonusDado: [...alvo.bonusDado, ...novosBonus],
        condicoes: [...alvo.condicoes, novaCondicao]
      };
    } else {
      functions.adicionarLog(`AVISO: ${alvo.nome} já está sob efeito de ${CONDICOES.SORTUDO.nome}.`);
      throw {
        message: `${alvo.nome} já está sob efeito de ${CONDICOES.SORTUDO.nome}.`
      };
    }
  }

  function causarProtegido(alvo, protetor, acao, functions) {
    if (!alvo.condicoes.find((condicao) => condicao.nome === CONDICOES.PROTEGIDO.nome)) {
      const condicaoProtegido = {
        ...CONDICOES.PROTEGIDO,
        personagemId: protetor.idCombate,
        acaoOrigem: acao.nome
      };

      if (alvo.idCombate === protetor.idCombate) {
        functions.adicionarLog(`${protetor.nome} decidiu se defender, el${protetor.pronomes.minusculo_1} agora está com a condição ${CONDICOES.PROTEGIDO.nome}.`);
        const novoProtegido = {
          ...protetor,
          defesa: protetor.defesa + 2,
          condicoes: [...protetor.condicoes, condicaoProtegido]
        };
        return { protegido: novoProtegido, protetor: novoProtegido };
      } else {
        functions.adicionarLog(`${protetor.nome} está protegendo ${alvo.nome}, que agora está com a condição ${CONDICOES.PROTEGIDO.nome}.`);
        const condicaoProtetor = {
          ...CONDICOES.PROTEGENDO,
          personagemId: alvo.idCombate,
          acaoOrigem: acao.nome
        };
        const novoProtetor = {
          ...protetor,
          defesa: protetor.defesa - 2,
          condicoes: [...protetor.condicoes, condicaoProtetor]
        };

        const novoProtegido = {
          ...alvo,
          defesa: alvo.defesa + 2,
          condicoes: [...alvo.condicoes, condicaoProtegido]
        };
        return { protegido: novoProtegido, protetor: novoProtetor };
      }
    } else {
      functions.adicionarLog(`AVISO: ${alvo.nome} já está sob efeito de ${CONDICOES.PROTEGIDO.nome}.`);
      throw {
        message: `${alvo.nome} já está sob efeito de ${CONDICOES.PROTEGIDO.nome}.`
      };
    }
  }

  function causarEscondido(alvo, acao, functions) {
    if (!alvo.condicoes.find((condicao) => condicao.nome === CONDICOES.ESCONDIDO.nome)) {
      functions.adicionarLog(`${alvo.nome} está escondid${alvo.pronomes.minusculo_2}.`);
      const novaCondicao = {
        ...CONDICOES.ESCONDIDO,
        bonus: acao.bonus,
        acaoOrigem: acao.nome
      };
      const novoBonus = {
        modificador: { dado: acao.bonus, elemento: ELEMENTOS.FISICO },
        tipo: BONUS_DADO.DADO_DANO,
        condicao: CONDICOES.ESCONDIDO.nome
      };
      return {
        ...alvo,
        defesa: alvo.defesa + 5,
        bonusDado: [...alvo.bonusDado, novoBonus],
        condicoes: [...alvo.condicoes, novaCondicao]
      };
    } else {
      functions.adicionarLog(`AVISO: ${alvo.nome} já está sob efeito de ${CONDICOES.ESCONDIDO.nome}.`);
      throw {
        message: `${alvo.nome} já está sob efeito de ${CONDICOES.ESCONDIDO.nome}.`
      };
    }
  }

  function causarAtaqueDivino(alvo, acao, functions) {
    if (!alvo.condicoes.find((condicao) => condicao.nome === CONDICOES.ATAQUE_DIVINO.nome)) {
      functions.adicionarLog(`${alvo.nome} orou por sua divindade e recebeu os efeitos de ${CONDICOES.ATAQUE_DIVINO.nome}.`);
      const novaCondicao = {
        ...CONDICOES.ATAQUE_DIVINO,
        bonus: acao.bonus,
        bonusTitulo: `Bônus de dano (${ELEMENTOS_NOMES[acao.elemento]}):`,
        icon: ICONS[`CONDICAO_ATAQUE_DIVINO_${acao.elemento}`],
        acaoOrigem: acao.nome
      };
      const novoBonusAtaque = {
        modificador: alvo.atributos.magia,
        tipo: BONUS_DADO.ATAQUE,
        condicao: CONDICOES.ATAQUE_DIVINO.nome
      };
      const novoBonusDano = {
        modificador: { dado: acao.bonus, elemento: acao.elemento },
        tipo: BONUS_DADO.DADO_DANO,
        condicao: CONDICOES.ATAQUE_DIVINO.nome
      };
      return {
        ...alvo,
        bonusDado: [...alvo.bonusDado, novoBonusAtaque, novoBonusDano],
        condicoes: [...alvo.condicoes, novaCondicao]
      };
    } else {
      functions.adicionarLog(`AVISO: ${alvo.nome} já está sob efeito de ${CONDICOES.ATAQUE_DIVINO.nome}.`);
      throw {
        message: `${alvo.nome} já está sob efeito de ${CONDICOES.ATAQUE_DIVINO.nome}.`
      };
    }
  }

  function causarArmaEncantada(alvo, acao, functions) {
    if (!alvo.condicoes.find((condicao) => condicao.nome === CONDICOES.ARMA_ENCANTADA.nome)) {
      functions.adicionarLog(`${alvo.nome} teve sua arma encantada e recebeu +1 de bônus em Ataque e Dano.`);
      const novaCondicao = {
        ...CONDICOES.ARMA_ENCANTADA,
        acaoOrigem: acao.nome
      };
      const novosBonus = [
        {
          modificador: 1,
          tipo: BONUS_DADO.ATAQUE,
          condicao: CONDICOES.ARMA_ENCANTADA.nome
        },
        {
          modificador: 1,
          tipo: BONUS_DADO.DANO,
          condicao: CONDICOES.ARMA_ENCANTADA.nome
        }
      ];
      return {
        ...alvo,
        bonusDado: [...alvo.bonusDado, ...novosBonus],
        condicoes: [...alvo.condicoes, novaCondicao]
      };
    } else {
      functions.adicionarLog(`AVISO: ${alvo.nome} já está sob efeito de ${CONDICOES.ARMA_ENCANTADA.nome}.`);
      throw {
        message: `${alvo.nome} já está sob efeito de ${CONDICOES.ARMA_ENCANTADA.nome}.`
      };
    }
  }

  function causarArmaEncantadaElemental(alvo, acao, functions) {
    if (!alvo.condicoes.find((condicao) => condicao.nome === CONDICOES.ARMA_ENCANTADA.nome)) {
      const bonusAcao = acao.bonus.split("d");

      functions.adicionarLog(`${alvo.nome} teve sua arma encantada e recebeu 
                +${bonusAcao[0]} de bônus em Ataque e Dano e +${acao.bonus} de dano de ${ELEMENTOS_NOMES[acao.elemento]}.`);
      const novaCondicao = {
        ...CONDICOES.ARMA_ENCANTADA,
        bonus: acao.bonus,
        bonusTitulo: `Bônus de dano (${ELEMENTOS_NOMES[acao.elemento]})`,
        descricao: `Sob efeito da habilidade ${acao.nome}. 
                Recebe +${bonusAcao[0]} de Ataque e Dano e +${acao.bonus} de dano de ${ELEMENTOS_NOMES[acao.elemento]}.`,
        acaoOrigem: acao.nome
      };
      const novosBonus = [
        {
          modificador: Number(bonusAcao[0]),
          tipo: BONUS_DADO.ATAQUE,
          condicao: CONDICOES.ARMA_ENCANTADA.nome
        },
        {
          modificador: Number(bonusAcao[0]),
          tipo: BONUS_DADO.DANO,
          condicao: CONDICOES.ARMA_ENCANTADA.nome
        },
        {
          modificador: { dado: acao.bonus, elemento: acao.elemento },
          tipo: BONUS_DADO.DADO_DANO,
          condicao: CONDICOES.ARMA_ENCANTADA.nome
        }
      ];
      return {
        ...alvo,
        bonusDado: [...alvo.bonusDado, ...novosBonus],
        condicoes: [...alvo.condicoes, novaCondicao]
      };
    } else {
      functions.adicionarLog(`AVISO: ${alvo.nome} já está sob efeito de ${CONDICOES.ARMA_ENCANTADA.nome}.`);
      throw {
        message: `${alvo.nome} já está sob efeito de ${CONDICOES.ARMA_ENCANTADA.nome}.`
      };
    }
  }

  function causarArmaAbencoada(alvo, acao, functions) {
    if (!alvo.condicoes.find((condicao) => condicao.nome === CONDICOES.ARMA_ABENCOADA.nome)) {
      const bonusAcao = acao.bonus.split("d");

      functions.adicionarLog(`${alvo.nome} teve sua arma abençoada pela sua divindade e recebeu 
                +${bonusAcao[0]} de bônus em Ataque e Dano e +${acao.bonus} de dano de ${ELEMENTOS_NOMES[acao.elemento]}.`);
      const novaCondicao = {
        ...CONDICOES.ARMA_ABENCOADA,
        bonus: acao.bonus,
        bonusTitulo: `Bônus de dano (${ELEMENTOS_NOMES[acao.elemento]})`,
        descricao: `Sob efeito da habilidade ${acao.nome}. 
                Recebe +${bonusAcao[0]} de Ataque e Dano e +${acao.bonus} de dano de ${ELEMENTOS_NOMES[acao.elemento]}.`,
        acaoOrigem: acao.nome
      };
      const novosBonus = [
        {
          modificador: Number(bonusAcao[0]),
          tipo: BONUS_DADO.ATAQUE,
          condicao: CONDICOES.ARMA_ABENCOADA.nome
        },
        {
          modificador: Number(bonusAcao[0]),
          tipo: BONUS_DADO.DANO,
          condicao: CONDICOES.ARMA_ABENCOADA.nome
        },
        {
          modificador: { dado: acao.bonus, elemento: acao.elemento },
          tipo: BONUS_DADO.DADO_DANO,
          condicao: CONDICOES.ARMA_ABENCOADA.nome
        }
      ];
      return {
        ...alvo,
        bonusDado: [...alvo.bonusDado, ...novosBonus],
        condicoes: [...alvo.condicoes, novaCondicao]
      };
    } else {
      functions.adicionarLog(`AVISO: ${alvo.nome} já está sob efeito de ${CONDICOES.ARMA_ABENCOADA.nome}.`);
      throw {
        message: `${alvo.nome} já está sob efeito de ${CONDICOES.ARMA_ABENCOADA.nome}.`
      };
    }
  }

  function causarProtecaoArcana(alvo, acao, functions) {
    if (!alvo.condicoes.some((condicao) => condicao.nome === acao.nome)) {
      functions.adicionarLog(`Se tornou resistente a magia arcana e recebeu ${acao.bonus} de Resistência a Dano de ${ELEMENTOS_NOMES[acao.elemento]}.`);
      const novaCondicao = {
        ...CONDICOES.PROTECAO_ARCANA,
        nome: `Proteção Arcana (${ELEMENTOS_NOMES[acao.elemento]})`,
        bonus: acao.bonus,
        bonusTitulo: `Resistência a Dano (${ELEMENTOS_NOMES[acao.elemento]})`,
        descricao: `Sob efeito da habilidade ${acao.nome}. Recebe ${acao.bonus} de Resistência a Dano de ${ELEMENTOS_NOMES[acao.elemento]}.`,
        acaoOrigem: acao.nome
      };
      const novaResistencia = { elemento: acao.elemento, valor: acao.bonus, origem: CONDICOES.PROTECAO_ARCANA.nome};

      return {
        ...alvo,
        resistenciaDano: [...alvo.resistenciaDano, novaResistencia],
        condicoes: [...alvo.condicoes, novaCondicao]
      };
    } else {
      functions.adicionarLog(`AVISO: ${alvo.nome} já está sob efeito de ${acao.nome}.`);
      throw { message: `${alvo.nome} já está sob efeito de ${acao.nome}.` };
    }
  }

  function causarProtecaoDivina(alvo, acao, functions) {
    if (!alvo.condicoes.some((condicao) => condicao.nome === acao.nome)) {
      functions.adicionarLog(`Se tornou resistente a magia divina e recebeu ${acao.bonus} de Resistência a Dano de ${ELEMENTOS_NOMES[acao.elemento]}.`);
      const novaCondicao = {
        ...CONDICOES.PROTECAO_DIVINA,
        nome: `Proteção Divina (${ELEMENTOS_NOMES[acao.elemento]})`,
        bonus: acao.bonus,
        bonusTitulo: `Resistência a Dano (${ELEMENTOS_NOMES[acao.elemento]})`,
        descricao: `Sob efeito da habilidade ${acao.nome}. Recebe ${acao.bonus} de Resistência a Dano de ${ELEMENTOS_NOMES[acao.elemento]}.`,
        acaoOrigem: acao.nome
      };
      const novaResistencia = { elemento: acao.elemento, valor: acao.bonus, origem: CONDICOES.PROTECAO_DIVINA.nome };

      return {
        ...alvo,
        resistenciaDano: [...alvo.resistenciaDano, novaResistencia],
        condicoes: [...alvo.condicoes, novaCondicao]
      };
    } else {
      functions.adicionarLog(`AVISO: ${alvo.nome} já está sob efeito de ${acao.nome}.`);
      throw { message: `${alvo.nome} já está sob efeito de ${acao.nome}.` };
    }
  }

  function causarInspirado(alvo, acao, functions) {
    if (!alvo.condicoes.find((condicao) => condicao.nome === CONDICOES.INSPIRADO.nome)) {
      functions.adicionarLog(`${alvo.nome} foi inspirad${alvo.pronomes.minusculo_2} e recebeu +${acao.bonus} de bônus em Ataque e Conjuração.`);
      const novaCondicao = {
        ...CONDICOES.INSPIRADO,
        bonus: acao.bonus,
        acaoOrigem: acao.nome
      };
      const novosBonus = [
        {
          modificador: 1,
          tipo: BONUS_DADO.ATAQUE,
          condicao: CONDICOES.INSPIRADO.nome
        },
        {
          modificador: 1,
          tipo: BONUS_DADO.CONJURACAO,
          condicao: CONDICOES.INSPIRADO.nome
        }
      ];
      return {
        ...alvo,
        bonusDado: [...alvo.bonusDado, ...novosBonus],
        condicoes: [...alvo.condicoes, novaCondicao]
      };
    } else {
      functions.adicionarLog(`AVISO: ${alvo.nome} já está sob efeito de ${CONDICOES.INSPIRADO.nome}.`);
    }
  }

  function causarAtaquePoderoso(alvo, acao, functions) {
    if (!alvo.condicoes.find((condicao) => condicao.nome === CONDICOES.ATAQUE_PODEROSO.nome)) {
      functions.adicionarLog(`${alvo.nome} priorizou a força invés da precisão. Seu próximo Ataque irá sofrer -2, mas receberá +5 no Dano.`);
      const novaCondicao = {
        ...CONDICOES.ATAQUE_PODEROSO,
        bonus: acao.bonus,
        acaoOrigem: acao.nome
      };
      const novoAtaque = {
        modificador: -2,
        tipo: BONUS_DADO.ATAQUE,
        condicao: CONDICOES.ATAQUE_PODEROSO.nome
      };
      const novoDano = {
        modificador: 5,
        tipo: BONUS_DADO.DANO,
        condicao: CONDICOES.ATAQUE_PODEROSO.nome
      };
      return {
        ...alvo,
        bonusDado: [...alvo.bonusDado, novoAtaque, novoDano],
        condicoes: [...alvo.condicoes, novaCondicao]
      };
    } else {
      functions.adicionarLog(`AVISO: ${alvo.nome} já está sob efeito de ${CONDICOES.ATAQUE_PODEROSO.nome}.`);
      throw {
        message: `${alvo.nome} já está sob efeito de ${CONDICOES.ATAQUE_PODEROSO.nome}.`
      };
    }
  }

  function causarMarcaCacador(alvo, cacador, acao, functions) {
    if (!alvo.condicoes.find((condicao) => condicao.nome === CONDICOES.MARCA_CACADOR.nome && condicao.personagemId === cacador.idCombate)) {
      const condicaoPresa = {
        ...CONDICOES.MARCA_CACADOR,
        bonus: acao.bonus,
        personagemId: cacador.idCombate,
        acaoOrigem: acao.nome
      };

      functions.adicionarLog(`${cacador.nome} está caçando ${alvo.nome}, e irá causar +${acao.bonus} de Dano até o fim do combate.`);
      const condicaoCacador = {
        ...CONDICOES.CACADOR,
        bonus: acao.bonus,
        personagemId: alvo.idCombate,
        acaoOrigem: acao.nome
      };
      const novoCacador = {
        ...cacador,
        condicoes: [...cacador.condicoes, condicaoCacador]
      };

      const novaPresa = {
        ...alvo,
        condicoes: [...alvo.condicoes, condicaoPresa]
      };
      return { presa: novaPresa, cacador: novoCacador };
    } else {
      functions.adicionarLog(`AVISO: ${alvo.nome} já está sendo caçado por ${cacador.nome}.`);
      throw {
        message: `${alvo.nome} já está sendo caçado por ${cacador.nome}.`
      };
    }
  }

  function causarEmFuria(alvo, acao, functions) {
    if (!alvo.condicoes.find((condicao) => condicao.nome === CONDICOES.FURIA.nome)) {
      const novaCondicao = {
        ...CONDICOES.FURIA,
        bonus: acao.bonus,
        acaoOrigem: acao.nome
      };
      const novoAtaque = {
        modificador: acao.bonus,
        tipo: BONUS_DADO.ATAQUE,
        condicao: CONDICOES.FURIA.nome
      };
      const novoDano = {
        modificador: acao.bonus,
        tipo: BONUS_DADO.DANO,
        condicao: CONDICOES.FURIA.nome
      };
      return {
        ...alvo,
        bonusDado: [...alvo.bonusDado, novoAtaque, novoDano],
        condicoes: [...alvo.condicoes, novaCondicao]
      };
    } else {
      functions.adicionarLog(`AVISO: ${alvo.nome} já está sob efeito de ${CONDICOES.FURIA.nome}.`);
      throw {
        message: `${alvo.nome} já está sob efeito de ${CONDICOES.FURIA.nome}.`
      };
    }
  }

  function causarAtaqueAgil(alvo, acao, functions) {
    if (!alvo.condicoes.find((condicao) => condicao.nome === CONDICOES.ATAQUE_AGIL.nome)) {
      const novaCondicao = {
        ...CONDICOES.ATAQUE_AGIL,
        acaoOrigem: acao.nome
      };
      const novaAcaoExtra = {...ACOES_UNICAS.DESFAZER_ATAQUE_AGIL};
            
      return {
        ...alvo,
        acoesExtras: [...alvo.acoesExtras, novaAcaoExtra],
        condicoes: [...alvo.condicoes, novaCondicao]
      };
    } else {
      functions.adicionarLog(`AVISO: ${alvo.nome} já está sob efeito de ${CONDICOES.ATAQUE_AGIL.nome}.`);
      throw {
        message: `${alvo.nome} já está sob efeito de ${CONDICOES.ATAQUE_AGIL.nome}.`
      };
    }
  }

  function causarVoando(alvo, acao, functions) {
    if (!alvo.condicoes.find((condicao) => condicao.nome === CONDICOES.VOANDO.nome)) {
      const novaCondicao = {
        ...CONDICOES.VOANDO,
        acaoOrigem: acao.nome
      };
      const novaAcaoExtra = {...ACOES_UNICAS.DESFAZER_VOANDO};
            
      return {
        ...alvo,
        defesa: alvo.defesa + 2,
        acoesExtras: [...alvo.acoesExtras, novaAcaoExtra],
        condicoes: [...alvo.condicoes, novaCondicao]
      };
    } else {
      functions.adicionarLog(`AVISO: ${alvo.nome} já está sob efeito de ${CONDICOES.VOANDO.nome}.`);
      throw {
        message: `${alvo.nome} já está sob efeito de ${CONDICOES.VOANDO.nome}.`
      };
    }
  }

  return {
    causarEnvenenado,
    causarQueimando,
    causarCongelado,
    causarParalisado,
    causarDormindo,
    causarAtordoado,
    causarLento,
    causarAbalado,
    causarFraco,
    causarFatigado,
    causarVeloz,
    causarArmaduraMagica,
    causarDuplicatas,
    causarAbencoado,
    causarAmaldicoado,
    causarAtaqueEspecial,
    causarSortudo,
    causarProtegido,
    causarEscondido,
    causarAtaqueDivino,
    causarArmaEncantada,
    causarArmaEncantadaElemental,
    causarArmaAbencoada,
    causarProtecaoArcana,
    causarProtecaoDivina,
    causarInspirado,
    causarAtaquePoderoso,
    causarMarcaCacador,
    causarEmFuria,
    causarAtaqueAgil,
    causarVoando,
    causarFormaAnimal,
    causarFormaLupina,
    causarRegeneracao,
  };
}
