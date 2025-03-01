import { useEffect, useState } from "react"
import { ContainerScreen, LogsFinais, ResultadoExperiencia, ResultadoRecompensas } from "../"
import "./fim-de-batalha.style.css"
import { MUSICS } from "../../../constants/audios/musics.constant"

export function FimDeBatalha({ personagens, resultado, setMusica, handleConcluirEpisodio, logs }) {
    const [isLogsOpen, setLogsOpen] = useState(false)

    useEffect(()=>{
        setMusica({src: MUSICS.VICTORY, loop: false})
    },[])

    const containerStyle = {
        position:"absolute", zIndex: 1000, top: 0, left: 0,
        backgroundColor: "var(--black-transparent)",
        animation: "fade-in 1.5s"
    }

    return (
        <ContainerScreen style={containerStyle}>
        <LogsFinais logs={logs} isOpen={isLogsOpen} setIsOpen={setLogsOpen}/>

        <h1 className="resultado-batalha">{resultado}</h1>
        <div className="fim-de-batalha">
            <ResultadoExperiencia personagens={personagens} experienciaMaximo={0}/>
            <ResultadoRecompensas
            recompensas={[]}
            handleConcluirEpisodio={handleConcluirEpisodio}
            setLogsOpen={setLogsOpen}
            />
        </div>
        </ContainerScreen>
    )

}