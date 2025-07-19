import { useSound } from "../../../hook"
import "./botao-fechar-modal.style.css"

export function BotaoFecharModal({ setIsOpen }) {
    const { playClick, playHover } = useSound()

    function handleFechar() {
        playClick(1)
        setIsOpen(false)
    }

    return (
        <button className="botao-fechar-modal" onMouseEnter={()=>playHover(1)} onClick={handleFechar}>X</button>
    )

}