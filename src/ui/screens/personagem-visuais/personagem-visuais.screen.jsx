import "./personagem-visuais.style.css"
import { BackButton, ContainerScreen } from "../../components"
import { useParams } from "react-router-dom"
import useGlobalUser from "../../../context/global-user.context"
import { useEffect, useState } from "react"
import { instanciarPersonagem } from "../../../utils"

export function PersonagemVisuaisScreen() {
    const { personagemId } = useParams()
    const [user] = useGlobalUser()
    const [personagem, setPersonagem] = useState(null)

    useEffect(()=>{
        const personagem = user.personagens.find(item=>item.personagemId == personagemId)
        const personagemInstanciado = instanciarPersonagem(personagem)
        setPersonagem(personagemInstanciado)
        document.documentElement.style.setProperty('--fundo-tema',
            `var(--${personagemInstanciado.corTema})`
        );
    },[])


    return (
        <ContainerScreen>
            <BackButton />
            <div className="personagem-visuais">
                <section className="personagem">
                {personagem?
                <>
                    <h1>{personagem.nome}</h1>
                    <img src={personagem.sprite} alt="Sprite do personagem" />
                </>
                :null}
                 </section>
            </div>

        </ContainerScreen>
    )

}