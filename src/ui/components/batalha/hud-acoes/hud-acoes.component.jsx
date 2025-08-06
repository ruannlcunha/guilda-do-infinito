import "./hud-acoes.style.css";
import { useEffect, useState } from "react";
import { useSound } from "../../../../hook";
import { HUDSubAcoes } from "../hud-sub-acoes/hud-sub-acoes.component";
import { CONDICOES } from "../../../../constants/personagens/personagem.constant";

export function HUDAcoes({ personagem, personagens, jogadores, jogadaAutomatica, functions }) {
  const { playHover, playClick } = useSound();
  const [acoesBloqueadas, setAcoesBloqueadas] = useState({
    ataque: false,
    habilidades: false,
    itens: false,
    extras: false
  });
  const [subAcoes, setSubAcoes] = useState({
    ativo: false,
    titulo: "",
    acoesAtuais: null
  });

  useEffect(() => {
    validarAcoesBloqueadas();
  }, [personagem.condicoes]);

  function validarAcoesBloqueadas() {
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.CONGELADO.nome)) {
      setAcoesBloqueadas({
        ataque: true,
        habilidades: true,
        itens: true,
        extras: false
      });
    }
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.PARALISADO.nome)) {
      setAcoesBloqueadas({
        ataque: true,
        habilidades: true,
        itens: true,
        extras: true
      });
    }
    if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.DORMINDO.nome)) {
      setAcoesBloqueadas({
        ataque: true,
        habilidades: true,
        itens: true,
        extras: true
      });
    }
    const condicaoAtordoado = personagem.condicoes.find((condicao) => condicao.nome === CONDICOES.ATORDOADO.nome);
    if (condicaoAtordoado) {
      condicaoAtordoado.acaoBloqueada
        ? setAcoesBloqueadas({
            ataque: true,
            habilidades: true,
            itens: true,
            extras: true
          })
        : null;
    }
  }

  function handleHoverSound(isBloqueado) {
    if (!isBloqueado) playHover(1);
  }

  function selectAcao(novoTitulo, novasAcoes, isBloqueado) {
    if (!isBloqueado) {
      playClick(1);
      const novasSubsAcoes = {
        ...subAcoes,
        titulo: novoTitulo,
        acoesAtuais: novasAcoes
      };

      setSubAcoes(novasSubsAcoes);

      if (subAcoes.ativo) {
        novoTitulo === subAcoes.titulo ? setSubAcoes({ ...novasSubsAcoes, ativo: false }) : null;
      } else {
        setSubAcoes({ ...novasSubsAcoes, ativo: true });
      }
    }
  }

  function handlePularTurno() {
    functions.adicionarLog(`${personagem.nome} pulou o turno.`);
    functions.setTurnos((old) => {
      if (old.atual >= old.maximo - 1) {
        return { ...old, atual: 0 };
      }
      return { ...old, atual: old.atual + 1 };
    });
  }

  return (jogadores == 2 && !jogadaAutomatica) || (jogadores == 1 && !personagem.isInimigo && !jogadaAutomatica) || (!jogadores && !personagem.isInimigo) ? (
    <>
      <ul className="hud-acoes">
        {personagem.acoesExtras.length > 0 ? (
          <li onMouseEnter={() => handleHoverSound(acoesBloqueadas.extras)} className={acoesBloqueadas.extras ? "acao-bloqueada" : null} onClick={() => selectAcao("Ações Únicas", personagem.acoesExtras, acoesBloqueadas.extras)}>
            Ações Únicas
          </li>
        ) : null}

        <li onMouseEnter={() => handleHoverSound(acoesBloqueadas.ataque)} className={acoesBloqueadas.ataque ? "acao-bloqueada" : null} onClick={() => selectAcao("Ataques", personagem.ataques, acoesBloqueadas.ataque)}>
          Atacar
        </li>

        <li onMouseEnter={() => handleHoverSound(acoesBloqueadas.habilidades)} className={acoesBloqueadas.habilidades ? "acao-bloqueada" : null} onClick={() => selectAcao("Habilidades", personagem.habilidades, acoesBloqueadas.habilidades)}>
          Habilidades
        </li>

        <li onMouseEnter={() => handleHoverSound(acoesBloqueadas.itens)} className={acoesBloqueadas.ataque ? "acao-bloqueada" : null} onClick={() => selectAcao("Itens", personagem.inventario.itens, acoesBloqueadas.itens)}>
          Itens
        </li>

        <li onMouseEnter={() => playHover(1)} onClick={handlePularTurno}>
          Pular Turno
        </li>
      </ul>

      <HUDSubAcoes subAcoes={subAcoes} personagem={personagem} personagens={personagens} functions={functions} />
    </>
  ) : null;
}
