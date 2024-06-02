import "./start.style.css"
import { useState } from "react"
import { AudioContainer, ContainerScreen, ModalConfigSom } from "../../components"
import { useMusic, useSound } from "../../../hook"
import { MUSICS } from "../../../constants/audios/musics.constant"
import { ICONS } from "../../../constants/images"
import { useNavigate } from "react-router-dom"

export function StartScreen() {
    const { playHover, playClick } = useSound()
    const { startMusic } = useMusic()
    const navigate = useNavigate()
    const [aviso, setAviso] = useState(true)
    const [configIsOpen, setConfigIsOpen] = useState(false)

    function handleAviso() {
        playClick(2)
        setAviso(false)
        startMusic(false)
    }

    function handleNovoJogo() {
        playClick(2)
        navigate("/home")
    }

    function handleCarregarJogo() {
        playClick(2)
        navigate("/home")
    }

    function handleConfig() {
        playClick(2)
        setConfigIsOpen(true)
    }

    function renderTelaAviso() {
        return (
            <div className="start-aviso">
                <p>
                    <span>AVISO:</span>
                    Este é um projeto pessoal apenas para fins de diversão entre amigos.
                    Nenhuma imagem ou som é de minha autoria.
                    <br />
                    <span>Continuar?</span>
                </p>
                <button onMouseEnter={()=>playHover(1)} onClick={handleAviso}>Sim</button>
            </div>
        )
    }

    return (
        <ContainerScreen>
            <AudioContainer audio={MUSICS.START}/>
            {aviso? renderTelaAviso() :
            <div className="start-screen">
                <img src={ICONS.TITULO} alt="Logo de Guilda do Infinito" />
                <div>
                    <button onMouseEnter={()=>playHover(1)} onClick={handleNovoJogo}>
                        Novo Jogo
                    </button>
                    <button onMouseEnter={()=>playHover(1)} onClick={handleCarregarJogo}>
                        Carregar Jogo
                    </button>
                    <button onMouseEnter={()=>playHover(1)} onClick={handleConfig}>
                        Configuracoes
                    </button>
                </div>
            </div>
            }
            <ModalConfigSom isOpen={configIsOpen} setIsOpen={setConfigIsOpen}/>
        </ContainerScreen>
    )

}