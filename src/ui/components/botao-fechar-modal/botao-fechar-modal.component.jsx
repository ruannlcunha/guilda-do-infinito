import { useSound } from "../../../hook";
import "./botao-fechar-modal.style.css";

export function BotaoFecharModal({ setIsOpen, style, children }) {
  const { playClick, playHover } = useSound();

  function handleFechar() {
    playClick(1);
    setIsOpen(false);
  }

  return (
    <button className="botao-fechar-modal" style={style} onMouseEnter={() => playHover(1)} onClick={handleFechar}>
      {children ? children : "X"}
    </button>
  );
}
