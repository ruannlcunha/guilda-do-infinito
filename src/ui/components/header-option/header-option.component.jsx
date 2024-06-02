import { useNavigate } from "react-router-dom"
import { useSound } from "../../../hook"
import "./header-option.style.css"

export function HeaderOption({symbol, text, isSelected, navigateTo}) {
    const navigate = useNavigate()
    const { playHover,playClick } = useSound()

    function onClick() {
        playClick(1)
        navigate(navigateTo)
    }

    return (<li
            onMouseEnter={()=>playHover(1)}
            onClick={onClick}
            className={isSelected? "header-option-selected":null}>

                <section className="header-li-top">
                    <img src={symbol} alt={`Símbolo de ${text}`} />
                </section>
                <section className="header-li-bottom">{text}</section>
            </li>
            )

}