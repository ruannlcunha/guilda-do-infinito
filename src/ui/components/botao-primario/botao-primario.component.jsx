import "./botao-primario.style.css"

export function BotaoPrimario({children, onClick, style, ativo}) {

    return (
        <button
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