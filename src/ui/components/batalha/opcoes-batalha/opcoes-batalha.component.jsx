import { useState } from "react";
import { ICONS } from "../../../../constants/images";
import { ModalConfig } from "../../"
import "./opcoes-batalha.style.css";
import { useSound } from "../../../../hook";
import { useNavigate, useParams } from "react-router-dom";

export function OpcoesBatalha({ animacoes, zoom, jogadaAutomatica, personagemAtivo, acaoEmAndamento, functions }) {
  const [configIsOpen, setConfigIsOpen] = useState(false)
  const navigate = useNavigate()
  const { playHover, playClick } = useSound()
  const { jogadores } = useParams()

  function handleConfig() {
    playClick(2)
    setConfigIsOpen(true)
  }

  function handleHUD() {
    playClick(2)
    animacoes.hudAtivo
      ? functions.setAnimacoes({ ...animacoes, hudAtivo: false })
      : functions.setAnimacoes({ ...animacoes, hudAtivo: true });
  }

  function handleAutomatico() {
    playClick(2)
    jogadaAutomatica
      ? functions.setJogadaAutomatica(false)
      : functions.setJogadaAutomatica(true);
  }

  function handleEscape() {
    playClick(2)
    navigate(0)
  }

  function handleDiminuirZoom() {
    playClick(2)
    functions.diminuirZoom()
  }

  function handleAumentarZoom() {
    playClick(2)
    functions.aumentarZoom()
  }
  console.log(personagemAtivo)

  return animacoes.iniciativaTerminou ? (
    <div className="opcoes-batalha">
      <ModalConfig isOpen={configIsOpen} setIsOpen={setConfigIsOpen}/>

      <button
      onMouseEnter={()=>playHover(1)} 
      onClick={handleEscape}
      style={{ backgroundImage: `url(${ICONS.ESCAPE})` }}>
      </button>

      <button
      onMouseEnter={()=>playHover(1)}
      onClick={handleConfig}
      style={{ backgroundImage: `url(${ICONS.CONFIG})` }}>
      </button>

      <button
      onMouseEnter={()=>playHover(1)}
        onClick={handleHUD}
        style={{
          backgroundImage: `url(${
            animacoes.hudAtivo ? ICONS.HUD : ICONS.HUD_OFF
          })`,
        }}
      ></button>

      {jogadores === "1" ?
      <button
      onMouseEnter={()=>playHover(1)}
        style={{
          backgroundImage: `url(${
            jogadaAutomatica ? ICONS.ROBO_ATIVADO : ICONS.ROBO_DESATIVADO
          })`,
          opacity: `${acaoEmAndamento && !personagemAtivo.isInimigo? "50%" : "100%"}`,
          cursor: `var(--${acaoEmAndamento && !personagemAtivo.isInimigo? "cursor-not-allowed" : "cursor-pointer"})`
        }}
        onClick={acaoEmAndamento && !personagemAtivo.isInimigo ? null : handleAutomatico}
      ></button>
      :null}

      <button
      onMouseEnter={()=>playHover(1)}
        style={{ backgroundImage: `url(${ICONS.ZOOM_OUT})` }}
        onClick={zoom > 50 ? handleDiminuirZoom : null}
        className={zoom <= 50 ? "opcao-bloqueada" : null}
      ></button>

      <h3>{zoom}%</h3>

      <button
      onMouseEnter={()=>playHover(1)}
        style={{ backgroundImage: `url(${ICONS.ZOOM_IN})` }}
        onClick={zoom < 100 ? handleAumentarZoom : null}
        className={zoom >= 100 ? "opcao-bloqueada" : null}
      ></button>
    </div>
  ) : null;
}
