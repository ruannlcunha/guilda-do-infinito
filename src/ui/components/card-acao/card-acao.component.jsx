import { ICONS } from "../../../constants/images"
import "./card-acao.style.css"

export function CardAcao({ acao, onClick}) {
    const isConsumivel = acao.quantidade
    console.log(acao)

    return (
        <div className="card-acao" onClick={onClick}>
            <div className="acao-elemento">
                <img 
                src={isConsumivel ? acao.sprite : ICONS[`ELEMENTO_${acao.elemento}`]}
                alt={isConsumivel ? `Ícone do item ${acao.nome}`: `Elemento ${acao.elemento}`} 
                style={{background: `var(--fundo-${isConsumivel ? "FISICO" : acao.elemento})`}}
                />
            </div>
            <section className="card-detalhes">
                <header className="card-header">
                    <h1>{acao.nome}</h1>

                    {acao.custo && !isConsumivel ?
                        <div className="acao-custo">
                        <h2>Custo: </h2>
                        <h3>{acao.custo} PM</h3>
                    </div>
                    :null}

                    {isConsumivel?
                        <div className="acao-custo">
                        <h2 style={{fontSize: "1rem"}}>Quantidade: </h2>
                        <h3 style={{width: "2vw"}}>x{acao.quantidade}</h3>
                    </div>

                    :null}
                </header>
                <div className="acao-descricao">
                    <p>
                        {isConsumivel && acao.efeito?
                        acao.efeito
                        : acao.descricao
                        }
                    </p>
                </div>
            </section>
        </div>
    )
}