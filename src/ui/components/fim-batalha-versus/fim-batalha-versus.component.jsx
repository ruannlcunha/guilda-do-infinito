import { useEffect } from "react"
import { BotaoPrimario, ContainerScreen } from ".."
import "./fim-batalha-versus.style.css"
import { MUSICS } from "../../../constants/audios/musics.constant"
import { useNavigate } from "react-router-dom"

export function FimBatalhaVersus({ resultado, setMusica }) {
    const navigate = useNavigate()

    useEffect(()=>{
        setMusica({src: MUSICS.VICTORY, loop: false})
    },[])

    const containerStyle = {
        position:"absolute", zIndex: 1000, top: 0, left: 0,
        backgroundColor: "var(--black-transparent)",
        animation: "fade-in 1.5s",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }

    return (
        <ContainerScreen style={containerStyle}>
        <h1 className="resultado-batalha">{resultado}</h1>
        <div className="fim-batalha-versus">
            <BotaoPrimario onClick={()=>{navigate(0)}}>
                Reiniciar Batalha
            </BotaoPrimario>
            <BotaoPrimario onClick={()=>{navigate("/versus/personagens")}}>
                Escolher Personagens
            </BotaoPrimario>
            <BotaoPrimario onClick={()=>{navigate("/versus")}}>
                Voltar para o menu
            </BotaoPrimario>
        </div>
        </ContainerScreen>
    )

}