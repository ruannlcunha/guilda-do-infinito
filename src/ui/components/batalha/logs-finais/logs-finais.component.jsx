import { useEffect, useState } from "react";
import "./logs-finais.style.css"
import { Modal } from "../../modal/modal.component";
import { BotaoPrimario } from "../../botao-primario/botao-primario.component";

export function LogsFinais({ logs, isOpen, setIsOpen }) {
    
    useEffect(()=>{
        var logsBatalhaElement = document.getElementById("logs-batalha");
        logsBatalhaElement ? logsBatalhaElement.scrollTop = logsBatalhaElement.scrollHeight : null
    },[logs])

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} style={{zIndex: "1001"}} >
        <div className="logs-finais-container">
            <header><h1>Logs de Combate</h1></header>
            <div className="logs-batalha" id="logs-batalha">
                {logs.length>0?
                logs.map(log=> {
                    return <p>{log}</p>
                })
                :null}
            </div>
            <BotaoPrimario onClick={()=>setIsOpen(false)}>Fechar</BotaoPrimario>
        </div>
        </Modal>
    )

}