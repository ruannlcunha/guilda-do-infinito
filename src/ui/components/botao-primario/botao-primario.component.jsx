import "./botao-primario.style.css"

export function BotaoPrimario({children, onClick, style}) {

    return (
        <button
        onClick={onClick}
        style={style}
        className="botao-primario"
        >
            {children}
        </button>
    )

}