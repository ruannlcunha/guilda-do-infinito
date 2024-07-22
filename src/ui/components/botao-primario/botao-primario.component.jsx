import { useSound } from "../../../hook";
import "./botao-primario.style.css"

export function BotaoPrimario({children, onClick, style, ativo}) {
    const {playHover} = useSound()

    function handleHover() {
        ativo?playHover(1):null
    }

    return (
        <button
        onMouseEnter={handleHover}
        onClick={ativo?onClick:null}
        style={style}
        className={ativo?"botao-primario": "botao-primario-desativado"}
        >
            {children}
        </button>
    )

}

BotaoPrimario.defaultProps = {
    ativo: true
};