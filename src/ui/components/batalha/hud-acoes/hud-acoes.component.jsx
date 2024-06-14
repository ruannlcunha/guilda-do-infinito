import "./hud-acoes.style.css";
import { useState } from "react";
import { ATAQUES_DATA, HABILIDADES_DATA, CONSUMIVEIS_DATA } from "../../../../database";
import { useSound } from "../../../../hook";
import { HUDSubAcoes } from "../hud-sub-acoes/hud-sub-acoes.component";

export function HUDAcoes({ personagem, personagens, functions }) {
  const { playHover, playClick } = useSound()
  const [subAcoes, setSubAcoes] = useState({
    ativo: false,
    titulo: "",
    acoesAtuais: null,
  });

  function selectAcao(novoTitulo, novasAcoes) {
    playClick(1)
    const novasSubsAcoes = {
      ...subAcoes,
      titulo: novoTitulo,
      acoesAtuais: novasAcoes,
    };

    setSubAcoes(novasSubsAcoes);

    if (subAcoes.ativo) {
      novoTitulo === subAcoes.titulo
        ? setSubAcoes({ ...novasSubsAcoes, ativo: false })
        : null;
    } else {
      setSubAcoes({ ...novasSubsAcoes, ativo: true });
    }
  }

  function handlePularTurno() {
    functions.setTurno((old) => {
      if (old.atual >= old.maximo - 1) {
        return { ...old, atual: 0 };
      }
      return { ...old, atual: old.atual + 1 };
    });
  }

  return !personagem.isInimigo ? (
    <>
      <ul className="hud-acoes">
        <li onMouseEnter={()=>playHover(1)}
          onClick={() =>
            selectAcao("Ataques", personagem.ataques)
          }
        >
          Atacar
        </li>

        <li onMouseEnter={()=>playHover(1)}
          onClick={() =>
            selectAcao(
              "Habilidades",
              personagem.habilidades
            )
          }
        >
          Habilidades
        </li>

        <li onMouseEnter={()=>playHover(1)}
          onClick={() =>
            selectAcao(
              "Itens",
              personagem.inventario.consumiveis
            )
          }
        >
          Itens
        </li>

        <li  onMouseEnter={()=>playHover(1)} onClick={handlePularTurno}>Pular Turno</li>
      </ul>

      <HUDSubAcoes subAcoes={subAcoes} personagem={personagem} personagens={personagens} functions={functions} />
    </>
  ) : null;
}
