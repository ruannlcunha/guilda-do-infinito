import { useEffect, useState } from "react"
import { ICONS, PERFIL, SPRITES } from "../../../constants/images"
import { BackButton, BotaoPrimario, ContainerScreen, Personagem } from "../../components"
import "./perfil-personagens.style.css"
import useGlobalUser from "../../../context/global-user.context"
import { instanciarPersonagem } from "../../../utils"
import { useNavigate } from "react-router-dom"

export function PerfilPersonagensScreen() {
    const [personagemEscolhido, setPersonagemEscolhido] = useState({id: 0})
    const [personagens, setPersonagens] = useState([])
    const [user] = useGlobalUser()
    const navigate = useNavigate()

    useEffect(()=>{
        const _personagens = [...user.personagens]
        const personagensInstanciados = _personagens.map(item=> {
            return instanciarPersonagem(item)
        })
        setPersonagens(personagensInstanciados)
    },[])

    useEffect(()=>{
        if(personagemEscolhido.id !== 0) {
            document.documentElement.style.setProperty('--fundo-tema',
                `var(--${personagemEscolhido.corTema})`
            );
        }
        else {
        document.documentElement.style.setProperty('--fundo-tema',
            `var(--blue-grey)`
        );
        }
        
    },[personagemEscolhido])

    function handleEscolher(personagem) {
        if(personagem.id!==personagemEscolhido.id) {
            setPersonagemEscolhido(personagem)
        }
        else {
            setPersonagemEscolhido({id:0})
        }
    }

    function renderCardPersonagem(personagem) {
        return (
            <li
            onClick={()=>{handleEscolher(personagem)}}
            className={personagemEscolhido.id===personagem.id?"card-escolhido":null}
            style={{background: `url(${personagem.perfil}), var(--card-4-estrelas)`,
            backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                <header><img src={ICONS[`ELEMENTO_${personagem.elemento}`]} alt="Ícone do Elemento"/></header>
                <footer>{personagem.nome}</footer>
            </li>
        )

    }

    return (
        <ContainerScreen>
            <BackButton />
            <div className="perfil-personagens">
                <section className="lista-personagens">
                    <header>
                        <img src={ICONS.PESSOAS} alt="ícone de personagens" />
                        <h1>Personagens Obtidos</h1>
                    </header>
                    <section>
                        <ul>
                            {personagens.length>0 ?
                                personagens.map(item=>{
                                    return renderCardPersonagem(item)
                                })
                            :null}
                        </ul>
                    </section>
                </section>
                
                {personagemEscolhido.id!==0 ?
                <section className="personagem-selecionado">
                    <img src={personagemEscolhido.sprite} alt="Sprite do personagem" />
                    <h1>{personagemEscolhido.nome}</h1>
                    <BotaoPrimario
                    onClick={()=>{navigate(`/perfil/personagens/${personagemEscolhido.id}`)}}>
                        Visualizar
                    </BotaoPrimario>
                </section>
                :null} 
            </div>
        </ContainerScreen>
    )

}