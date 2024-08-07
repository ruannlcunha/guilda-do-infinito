import { useNavigate } from "react-router-dom"
import { ICONS } from "../../../../constants/images"
import { useSound } from "../../../../hook"
import "./resultado-recompensas.style.css"

export function ResultadoRecompensas() {
    const { playHover, playClick } = useSound()
    const navigate = useNavigate()

    function handleContinuar() {
        playClick(2)
        navigate(-1)
    }

    return (
    <section className="recompensas-section">
        <header>
            <h1>Recompensas</h1>
        </header>
        <section>
            <div className="recompensa">
                <div>
                    <img src={ICONS.CRISTAL_AZUL} alt="Imagem do item" />
                    <h2>Nome do Item</h2>
                </div>
                <h3>x{1}</h3>
            </div>
            <div className="recompensa">
                <div>
                    <img src={ICONS.CRISTAL_AZUL} alt="Imagem do item" />
                    <h2>Nome do Item</h2>
                </div>
                <h3>x{1}</h3>
            </div>
        </section>
        <button onClick={handleContinuar} onMouseEnter={()=>playHover(1)}>Continuar</button>
    </section>
    )

}