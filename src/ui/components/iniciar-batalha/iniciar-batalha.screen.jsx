import { ICONS } from "../../../constants/images"
import { useSound } from "../../../hook"
import { BackButton, CardBatalha, ContainerScreen, ModalPersonagemLista } from ".."
import "./iniciar-batalha.style.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export function IniciarBatalhaScreen({batalha, aliados, inimigos, functions, modo}) {
    const { playHover, playClick } = useSound()
    const [trocarModal, setTrocarModal] = useState(false)
    const [personagemTrocado, setPersonagemTrocado] = useState({id:0})
    const [aliadosExtras, setAliadosExtras] = useState([])
    const { jogadores } = useParams()

    function handleIniciar() {
        playClick(2)
        functions.handleIniciar()
    }

    function handleTrocarModal(personagem) {
        setPersonagemTrocado(personagem)
        setTrocarModal(true)
    }

    useEffect(()=>{
        batalha.aliadosExtras? setAliadosExtras([...batalha.aliadosExtras]) : null
    },[])

    useEffect(()=>{
        document.documentElement.style.setProperty('--iniciar-batalha-fundo', `url(${batalha.mapa})`);
    },[batalha])
    
    return (
        <ContainerScreen>
            <BackButton navigateTo={`/versus/${jogadores}/mapas`}/>
            <ModalPersonagemLista
            modalIsOpen={trocarModal}
            setModalIsOpen={setTrocarModal}
            aliadosExtras={aliadosExtras}
            personagemTrocado={personagemTrocado}
            aliados={aliados}
            functions={{
                setPersonagensInstanciados: functions.setPersonagensInstanciados,
                setAliadosExtras
            }}
            />

            <div className="iniciar-batalha-screen">
                <header>BATALHA</header>
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
                            return <CardBatalha
                            key={i}
                            modo={modo}
                            personagem={aliado}
                            handleTrocarModal={handleTrocarModal}
                            />
                        })}
                    </section>
                </section>
            <footer></footer>
            </div>
        </ContainerScreen>
    )

}