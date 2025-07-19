import "./personagem-acoes.style.css"
import { BackButton, CardAcao, ContainerScreen, ModalAcao } from "../../components"
import { useParams } from "react-router-dom"
import useGlobalUser from "../../../context/global-user.context"
import { useEffect, useState } from "react"
import { instanciarPersonagem } from "../../../utils"
import { useSound } from "../../../hook"

export function PersonagemAcoesScreen({personagemBatalha, onBack}) {
    const ACOES_CATEGORIAS = {ATAQUES: "ATAQUES", HABILIDADES: "HABILIDADES"}
    const { personagemId } = useParams()
    const [user] = useGlobalUser()
    const [personagem, setPersonagem] = useState(null)
    const [categoria, setCategoria] = useState(ACOES_CATEGORIAS.ATAQUES)
    const { playClick, playHover } = useSound()
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [acoes, setAcoes] = useState([])
    const [acaoEscolhida, setAcaoEscolhida] = useState(null)

    useEffect(()=>{
        let personagemInstanciado = null
        if(personagemBatalha) {
            personagemInstanciado = personagemBatalha
        }
        else {
            const _personagem = user.personagens.find(item=>item.personagemId == personagemId)
            personagemInstanciado = instanciarPersonagem(_personagem)
        }
        setPersonagem(personagemInstanciado)
        document.documentElement.style.setProperty('--fundo-tema',
            `var(--${personagemInstanciado.corTema})`
        );
    },[])

    useEffect(()=>{
        if(personagem) {
            categoria===ACOES_CATEGORIAS.ATAQUES? setAcoes(personagem.ataques) : setAcoes(personagem.habilidades)
        }
    },[personagem, categoria])

    useEffect(()=>{
        if(!modalIsOpen) {
            setAcaoEscolhida(null)
        }
    },[modalIsOpen])

    function handleAcao(acao) {
        playClick(1)
        setModalIsOpen(true)
        setAcaoEscolhida(acao)
    }
    
    return (
        <ContainerScreen>
            <BackButton onClick={onBack ? ()=>{onBack()} : null}/>
            <div className="personagem-acoes">
                <section className="personagem">
                {personagem?
                <>
                    <h1>{personagem.nome}</h1>
                    <img src={personagem.sprite} alt="Sprite do personagem" />
                </>
                :null}
                </section>

                <section className="acoes-section">
                    <h1 className="titulo">Ações</h1>
                    <div className="lista-acoes">
                        <header className="acoes-header">
                            <button
                            onMouseEnter={()=>playHover(1)}
                            style={categoria===ACOES_CATEGORIAS.ATAQUES?{backgroundColor: "var(--blue)", borderRight: "solid 2px var(--dark-blue)", opacity: "100%"}:null}
                            onClick={()=>{setCategoria(ACOES_CATEGORIAS.ATAQUES)}}
                            >
                                Ataques
                            </button>
                            <button
                            onMouseEnter={()=>playHover(1)}
                            style={categoria===ACOES_CATEGORIAS.HABILIDADES?{backgroundColor: "var(--blue)", borderRight: "solid 2px var(--dark-blue)", opacity: "100%"}:null}
                            onClick={()=>{setCategoria(ACOES_CATEGORIAS.HABILIDADES)}}
                            >
                                Habilidades
                            </button>
                        </header>
                        <ul>
                        {acoes.length>0?
                        <>
                            {acoes.map(acao=> {
                                return (
                                    <li key={acao.id} onMouseEnter={()=>playHover(2)} className="acoes">
                                        <CardAcao acao={acao} onClick={()=>handleAcao(acao)}/>
                                    </li>
                                )
                            })

                            }
                        </>
                        :
                        <h1>O personagem não possui {categoria===ACOES_CATEGORIAS.ATAQUES? "ataques" : "habilidades"}.</h1>
                        }
                        </ul>
                    </div>
                </section>
            </div>
            <ModalAcao isOpen={modalIsOpen} setIsOpen={setModalIsOpen} acao={acaoEscolhida}/>
        </ContainerScreen>
    )

}