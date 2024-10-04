import { useEffect, useState } from "react"
import { ICONS, PERFIL, SPRITES } from "../../../constants/images"
import { BackButton, BotaoPrimario, ContainerScreen, Personagem } from "../../components"
import "./perfil-personagens.style.css"
import useGlobalUser from "../../../context/global-user.context"
import { instanciarPersonagem } from "../../../utils"
import { useNavigate } from "react-router-dom"
import { useSound } from "../../../hook"
import { cheatTodosPersonagens } from "../../../utils/cheats-testes.util"

export function PerfilPersonagensScreen() {
    const [personagemEscolhido, setPersonagemEscolhido] = useState({id: 0})
    const [personagens, setPersonagens] = useState([])
    const [_user] = useGlobalUser()
    const [user,setUser] = useState(null)
    const {playHover, playClick} = useSound()
    const navigate = useNavigate()

    useEffect(()=>{
        setUser(cheatTodosPersonagens(_user))
    },[])

    useEffect(()=>{
        if(user) {
            const _personagens = [...user.personagens]
            const personagensInstanciados = _personagens.map(item=> {
                return instanciarPersonagem(item)
            })
            .sort(function (a, b) {
                return b.raridade-a.raridade;;
            });
            setPersonagens(personagensInstanciados)
        }

    },[user])

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
        playClick(1)
        if(personagem.id!==personagemEscolhido.id) {
            setPersonagemEscolhido(personagem)
        }
        else {
            setPersonagemEscolhido({id:0})
        }
    }

    function handleVisualizar() {
        playClick(2)
        navigate(`/perfil/personagens/${personagemEscolhido.id}`)
    }

    function renderCardPersonagem(personagem) {
        return (
            <li
            onMouseEnter={()=>playHover(1)}
            onClick={()=>{handleEscolher(personagem)}}
            className={personagemEscolhido.id===personagem.id?"card-escolhido":null}
            style={{background: `url(${personagem.perfil}), var(--card-${personagem.raridade}-estrelas)`,
            backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                <header>
                    {personagem.elemento?
                        <img src={ICONS[`ELEMENTO_${personagem.elemento}`]} alt="Ícone do Elemento"/>
                    :null}
                </header>
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
                    onClick={handleVisualizar}>
                        Visualizar
                    </BotaoPrimario>
                </section>
                :null} 
            </div>
        </ContainerScreen>
    )

}