import "./modal-personagem-detalhes.style.css"
import { Modal } from "../"
import { useState } from "react"
import { PersonagemDetalhadoScreen } from "../../screens/personagem-detalhado/personagem-detalhado.screen"
import { PersonagemEquipamentosScreen } from "../../screens/personagem-equipamentos/personagem-equipamentos.screen"
import { PersonagemConsumiveisScreen } from "../../screens/personagem-consumiveis/personagem-consumiveis.screen"
import { PersonagemAcoesScreen } from "../../screens/personagem-acoes/personagem-acoes.screen"
import { PersonagemTalentosScreen } from "../../screens/personagem-talentos/personagem-talentos.screen"

export function ModalPersonagemDetalhes({ personagem, isOpen, setIsOpen }) {
    const TELAS = {
        DETALHES: "DETALHES",
        EQUIPAMENTOS: "EQUIPAMENTOS",
        INVENTARIO: "INVENTARIO",
        ACOES: "ACOES",
        TALENTOS: "TALENTOS",
    }
    const [telaAtual, setTelaAtual] = useState(TELAS.DETALHES)

    return personagem?(
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            {telaAtual===TELAS.DETALHES ?
                <PersonagemDetalhadoScreen personagemBatalha={personagem} onBack={()=>{setIsOpen(false)}} setTela={setTelaAtual}/>
            : null}
            {telaAtual===TELAS.EQUIPAMENTOS ?
                <PersonagemEquipamentosScreen personagemBatalha={personagem} onBack={()=>{setTelaAtual(TELAS.DETALHES)}}/>
            : null}
            {telaAtual===TELAS.INVENTARIO ?
                <PersonagemConsumiveisScreen personagemBatalha={personagem} onBack={()=>{setTelaAtual(TELAS.DETALHES)}}/>
            : null}
            {telaAtual===TELAS.ACOES ?
                <PersonagemAcoesScreen personagemBatalha={personagem} onBack={()=>{setTelaAtual(TELAS.DETALHES)}}/>
            : null}
            {telaAtual===TELAS.TALENTOS ?
                <PersonagemTalentosScreen personagemBatalha={personagem} onBack={()=>{setTelaAtual(TELAS.DETALHES)}}/>
            : null}
        </Modal>
    ) :null

}