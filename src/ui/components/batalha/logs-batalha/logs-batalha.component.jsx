import { useEffect, useState } from "react";
import "./logs-batalha.style.css"
import { ICONS } from "../../../../constants/images";

export function LogsBatalha({ logs }) {
    const [ativo, setAtivo] = useState(true)
    const [isMaximizado, setMaximizado] = useState(false)
    
    useEffect(()=>{
        var logsBatalhaElement = document.getElementById("logs-batalha");
        logsBatalhaElement ? logsBatalhaElement.scrollTop = logsBatalhaElement.scrollHeight : null
    },[logs])

    function botaoLog() {
        ativo ? setAtivo(false) : setAtivo(true)
    }

    function botaoMaximizar() {
        isMaximizado ? setMaximizado(false) : setMaximizado(true)
    }

    return (
        <div className="logs-container" style={isMaximizado?{height: "90%"}:null}>
            <header style={isMaximizado?{height: "5%"}:null}>
                <button onClick={botaoMaximizar}><img src={isMaximizado ? ICONS.MINIMIZAR : ICONS.MAXIMIZAR} alt="ícone de maximizar" /></button>
                <h1>Logs da batalha</h1>
                <button onClick={botaoLog}><img src={ativo ? ICONS.LOGS_ATIVO : ICONS.LOGS_INATIVO} alt="ícone de maximizar" /></button>
            </header>
            {ativo ?
                <div className="logs-batalha" id="logs-batalha" style={isMaximizado?{height: "95%" , backgroundColor: "var(--black-transparent)"}:null}>
                    {logs.length>0?
                        logs.map(log=> {
                            return <p>{log}</p>
                        })
                    :null}
                </div>
            : null}
        </div>
    )

}