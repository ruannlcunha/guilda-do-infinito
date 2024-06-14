import "./opcoes-cena.style.css";
import { useState } from "react";
import { ICONS } from "../../../constants/images";
import { ModalConfig } from "../"
import { useSound } from "../../../hook";
import { useNavigate } from "react-router-dom";

export function OpcoesCena({ dialogoAtivo, functions }) {
  const [configIsOpen, setConfigIsOpen] = useState(false)
  const navigate = useNavigate()
  const { playHover, playClick } = useSound()

  function handleConfig() {
    playClick(2)
    setConfigIsOpen(true)
  }

  function handleHUD() {
    playClick(2)
    dialogoAtivo
      ? functions.setDialogoAtivo(false)
      : functions.setDialogoAtivo(true);
  }

  function handleEscape() {
    playClick(2)
    navigate(-1)
  }

  return (
    <div className="opcoes-cena">
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
            dialogoAtivo ? ICONS.HUD : ICONS.HUD_OFF
          })`,
        }}
      ></button>
    </div>
  )
}
