import "./personagem-visuais.style.css"
import { BackButton, BotaoPrimario, ContainerScreen } from "../../components"
import { useParams } from "react-router-dom"
import useGlobalUser from "../../../context/global-user.context"
import { useEffect, useState } from "react"
import { instanciarPersonagem } from "../../../utils"
import { ICONS } from "../../../constants/images"
import { PERSONAGENS_DATA } from "../../../database"
import { useSound } from "../../../hook"
import { cheatTodosPersonagens } from "../../../utils/cheats-testes.util"

export function PersonagemVisuaisScreen() {
    const { personagemId } = useParams()
    const [_user, _setUser] = useGlobalUser()
    const [personagem, setPersonagem] = useState(null)
    const [visualIndex, setVisualIndex] = useState(0)
    const [visuais, setVisuais] = useState([])
    const { playClick, playHover } = useSound()
    const [user, setUser] = useState(null)

    useEffect(()=>{
        setUser(cheatTodosPersonagens(_user))
    },[])

    useEffect(()=>{
        if(user) {
            const _personagem = user.personagens.find(item=>item.personagemId == personagemId)
            const personagemInstanciado = instanciarPersonagem(_personagem)
            setPersonagem(personagemInstanciado)
            document.documentElement.style.setProperty('--fundo-tema',
                `var(--${personagemInstanciado.corTema})`
            );
            const personagemData = PERSONAGENS_DATA.find(personagem=>personagem.id==personagemId)
            
            setVisuais(personagemData.visuais.map(visual=>{
                if(_personagem.visuais.some(visuailAdquirido => visuailAdquirido==visual.visualId)) {
                    return {...visual, bloqueado: false}
                }else {
                    return {...visual, bloqueado: true}
                }
            }))
            personagemData.visuais.map((visual, i)=> {
                if(visual.visualId==_personagem.visualAtivo) {
                    setVisualIndex(i)
                }
            })
        }
    },[user])

    function handleProximo() {
        playClick(1)
        setVisualIndex(old=>old+1)
    }

    function handleAnterior() {
        playClick(1)
        setVisualIndex(old=>old-1)
    }

    function handleEquiparVisual() {
        playClick(2)
        const _personagem = user.personagens.find(item=>item.personagemId==personagemId)

        const novoPersonagem = {
            ..._personagem,
            visualAtivo: visuais[visualIndex].visualId
        }

        const novosPersonagens = [
            ...user.personagens.filter(personagem => personagem.personagemId!=personagemId),
            novoPersonagem,
        ]

        const _novoUser = {
            ...user,
            personagens: novosPersonagens,
        }
        setUser(_novoUser)
    }

    function renderVisualFundo(lado, modificador) {
        return (
            <div 
            style={{[lado]: "10%"}}
            className="visual-fundo"
            >
                <img
                src={visuais[visualIndex+modificador].sprite}
                alt="Sprite do visual"
                className={visuais[visualIndex+modificador].bloqueado?"visual-bloqueado":null}
                />
            </div>
        )
    }

    function renderVisualPrincipal() {
        return (
            <div className="visual">
                <img
                src={visuais[visualIndex].sprite}
                alt="Sprite do visual"
                className={visuais[visualIndex].bloqueado?"visual-bloqueado":null}
                />

                <div className="setas">
                {visualIndex>0?
                    <button onMouseEnter={()=>playHover(1)} onClick={handleAnterior}>
                        <img src={ICONS.SETA_DIREITA}
                        style={{transform:"scaleX(-1)"}} alt="Seta para esquerda" />
                    </button>
                :
                    <button className="seta-vazia"></button>
                }
                {visualIndex<(visuais.length-1)?
                    <button onMouseEnter={()=>playHover(1)} onClick={handleProximo}>
                        <img src={ICONS.SETA_DIREITA} alt="Seta para direita" />
                    </button>
                :
                    <button className="seta-vazia"></button>
                }
                </div>
                <h1>
                    {!visuais[visualIndex].bloqueado?
                        visuais[visualIndex].nome
                    :   "???"}
                </h1>
            </div>
        )
    }

    function renderVazio() {
        return <div className="vazio"></div>
    }

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
                {visuais.length>0 ?
                    <section className="visuais-section">
                    <h1 className="titulo">Visuais</h1>
                    <section>
                        {visualIndex>0? renderVisualFundo("left", -1):renderVazio()}
                        {renderVisualPrincipal()}
                        {visualIndex<(visuais.length-1)? renderVisualFundo("right", 1):renderVazio()}
                    </section>
                    <BotaoPrimario
                    onClick={handleEquiparVisual}
                    ativo={
                        personagem.visualId!==visuais[visualIndex].visualId
                        && !visuais[visualIndex].bloqueado
                        }>
                        Equipar
                    </BotaoPrimario>
                </section>
                :null}
            </div>

        </ContainerScreen>
    )

}