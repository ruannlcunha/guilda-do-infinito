import { ICONS } from "../../../constants/images"
import { useSound } from "../../../hook"
import { BackButton, CardBatalha, ContainerScreen } from ".."
import "./iniciar-batalha.style.css"
import { useEffect } from "react"

export function IniciarBatalhaScreen({batalha, aliados, inimigos, iniciarFunction}) {
    const { playHover, playClick } = useSound()

    function handleIniciar() {
        playClick(2)
        iniciarFunction()
    }

    useEffect(()=>{
        document.documentElement.style.setProperty('--iniciar-batalha-fundo', `url(${batalha.mapa})`);
    },[batalha])

    return (
        <ContainerScreen>
            <BackButton />

            <div className="iniciar-batalha-screen">
                <header>COMBATE</header>
                <section className="iniciar-batalha-section">
                    <section className="party-cards">
                        {inimigos.map((inimigo,i)=>{
                            return <CardBatalha key={i} personagem={inimigo} reverse={true}/>
                        })}
                    </section>

                    <section className="iniciar-info">
                        <div>
                            <h1>{batalha.titulo}</h1>
                            <h2>{batalha.subtitulo}</h2>
                        </div>
                        <img src={ICONS.CROSS_SWORD} alt="" />
                        <button onClick={handleIniciar} onMouseEnter={()=>playHover(1)}>
                            Iniciar
                        </button>
                    </section>

                    <section className="party-cards">
                    {aliados.map((aliado, i)=>{
                            return <CardBatalha key={i} personagem={aliado}/>
                        })}
                    </section>
                </section>
            <footer></footer>
            </div>
        </ContainerScreen>
    )

}