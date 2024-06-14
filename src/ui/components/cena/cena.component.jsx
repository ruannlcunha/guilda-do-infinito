import { useEffect, useState } from "react"
import { CENAS_TIPO } from "../../../constants"
import { ICONS } from "../../../constants/images"
import { useMusic, useSound } from "../../../hook"
import { Imagem } from "../imagem/imagem.component"
import { OpcoesCena } from "../opcoes-cena/opcoes-cena.component"
import "./cena.style.css"
import { AudioContainer } from "../audio-container/audio-container.component"

export function Cena({dialogosArray, dialogo, setDialogo}) {
    const [dialogoAtivo, setDialogoAtivo] = useState(true)
    const [audioAtual, setAudioAtual] = useState(null)
    const { startMusic } = useMusic()
    const { playClick } = useSound()

    useEffect(()=>{
        if(dialogosArray[dialogo].onEnter) {
            dialogosArray[dialogo].onEnter()
        }
        if(dialogosArray[dialogo].musica) {
            setAudioAtual(dialogosArray[dialogo].musica)
        }
    },[dialogo])

    useEffect(()=>{
        startMusic(audioAtual, true)
    },[audioAtual])

    function handleProximo() {
        playClick(1)
        if((dialogo+1)<dialogosArray.length) {
            setDialogo(dialogo+1)
        }
        if((dialogo+1)===dialogosArray.length && dialogosArray[dialogo].onClick) {
            dialogosArray[dialogo].onClick() 
        }
    }

    function handlePular() {
        playClick(2)
        let pulou = false
        dialogosArray.map((item, index)=>{
            if(index>dialogo && !pulou && (item.onClick || item.onEnter)) {
                setDialogo(index)
                pulou = true
            }
        })
    }

    return (
        <>
        <AudioContainer audio={audioAtual}/>
        <OpcoesCena dialogoAtivo={dialogoAtivo} functions={{setDialogoAtivo}}/>
        <button onClick={handlePular} className="pular-button">
                Pular cena
                <img src={ICONS.SETA_DIREITA} alt="Seta para direita" />
            </button>
            <div className="cena-screen" style={{backgroundImage: `url(${dialogosArray[dialogo].fundo})`}}>
                {dialogosArray[dialogo].tipo === CENAS_TIPO.DIALOGO && dialogoAtivo? 
                <section className="cena-dialogo">
                    <div>
                        {dialogosArray[dialogo].perfil?
                        <Imagem src={dialogosArray[dialogo].perfil} alt={`Foto de ${dialogosArray[dialogo].nome}`}/>
                        :null}
                        {dialogosArray[dialogo].nome?
                        <h1 style={dialogosArray[dialogo].perfil?{right: "35%"}:{right: "-5%"}}>
                        {dialogosArray[dialogo].nome}
                        </h1>
                        :null}
                    </div>
                    <p onClick={handleProximo} > {dialogosArray[dialogo].texto}
                    <img src={ICONS.SETA_DIREITA} alt="Seta para direita" />
                    </p>
                </section>
                :null}

                {dialogosArray[dialogo].tipo === CENAS_TIPO.IMAGEM && dialogoAtivo?
                <button onClick={handleProximo} className="continuar-button">
                    Continuar
                    <img src={ICONS.SETA_DIREITA} alt="Seta para direita" />
                </button>
                : null}

            </div>
        </>
    )

}