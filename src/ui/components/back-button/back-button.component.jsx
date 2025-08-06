import "./back-button.style.css";
import { useSound } from "../../../hook";
import { useNavigate } from "react-router-dom";

export function BackButton({ navigateTo, onClick }) {
  const navigate = useNavigate();
  const { playHover, playClick } = useSound();

  function handleClick() {
    playClick(2);
    navigateTo ? navigate(navigateTo) : navigate(-1);
  }

  return (
    <button className={"back-button"} onClick={onClick ? onClick : handleClick} onMouseEnter={() => playHover(1)}>
      Voltar
    </button>
  );
}
