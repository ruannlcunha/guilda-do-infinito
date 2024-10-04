import "./personagem-inventario.style.css"
import { BackButton, BotaoPrimario, ContainerScreen, Modal, ModalItem, ModalItemLista } from "../../components"
import { useParams } from "react-router-dom"
import useGlobalUser from "../../../context/global-user.context"
import { useEffect, useState } from "react"
import { instanciarPersonagem } from "../../../utils"
import { ITENS_DATA } from "../../../database"
import { ITENS_CATEGORIA } from "../../../constants/itens/itens.constant"
import { ICONS } from "../../../constants/images"
import { useSound } from "../../../hook"
import { cheatTodosItens, cheatTodosPersonagens } from "../../../utils/cheats-testes.util"

export function PersonagemInventarioScreen() {
    const EVENTO = {ADICIONAR:"ADICIONAR", REMOVER: "REMOVER"}
    const { personagemId } = useParams()
    const [user, setUser] = useGlobalUser()
    const { playClick, playHover } = useSound()
    const [personagem, setPersonagem] = useState(null)
    const [itemEscolhido, setItemEscolhido] = useState({index: null})
    const [quantidadeItem, setQuantidadeItem] = useState(1)
    const [novoUser, setNovoUser] = useState(null)
    const [inventario, setInventario] = useState([])
    const [detalhesModal, setDetalhesModal] = useState(false)
    const [quantidadeModal, setQuantidadeModal] = useState(false)
    const [quantidadeEvento, setQuantidadeEvento] = useState({evento: null})
    const [listaModal, setListaModal] = useState(false)

    useEffect(()=>{
        const userTodosPersonagens = cheatTodosPersonagens(user)
        const userTodosItens = cheatTodosItens(userTodosPersonagens)
        const _user = userTodosItens
        setNovoUser(_user)
    },[])

    useEffect(()=>{
        setQuantidadeItem(1)
    },[quantidadeModal])

    useEffect(()=>{
        !detalhesModal||listaModal ? setItemEscolhido({index: null}) : null
    },[listaModal, detalhesModal])

    useEffect(()=>{
        const _user = novoUser
        if(_user) {
        const _inventario = [
            ..._user.inventario.map(item=> {
                return {
                ...ITENS_DATA.find(data=> data.id===item.itemId),
                quantidade: item.quantidade,
                }
            }),
        ]
        .map((item,i)=>{return{...item, index: i}})
        .filter(item=>item.categoria===ITENS_CATEGORIA.CONSUMIVEL)
        .sort(function (a, b) {return b.raridade-a.raridade;});
        setInventario(_inventario)

        const _personagem = _user.personagens.find(item=>item.personagemId == personagemId)
        const personagemInstanciado = instanciarPersonagem(_personagem)
        setPersonagem(personagemInstanciado)
        document.documentElement.style.setProperty('--fundo-tema',
            `var(--${personagemInstanciado.corTema})`
        );
    }
    },[user, novoUser])

    function handleAumentarQuantidade() {
        playClick(1)
        if(itemEscolhido.index !== null && quantidadeItem<itemEscolhido.quantidade) {
            const _quantidadeItem = quantidadeItem+1
            setQuantidadeItem(_quantidadeItem)
        }
    }

    function handleDiminuirQuantidade() {
        playClick(1)
        if(itemEscolhido.index !== null) {
            if(quantidadeItem>0) {
                const _quantidadeItem = quantidadeItem-1
                setQuantidadeItem(_quantidadeItem)
            }
        }
    }
    
    function handleEscolherItem(item) {
        playClick(1)
        if(item.index===itemEscolhido.index) {
            setItemEscolhido({index: null})
        }
        else {
            setItemEscolhido(item)
        }
    }

    function handleVisualizarItem(item) {
        playClick(1)
        setItemEscolhido(item)
        setDetalhesModal(true)
    }

    function handleAbrirInventario() {
        playClick(1)
        setListaModal(true)
    }
    
    function handleAdicionarQuantidadeModal() {
        playClick(2)
        setQuantidadeEvento({texto: "adicionar", evento: EVENTO.ADICIONAR})
        setQuantidadeModal(true)
    }
    
    function handleRemoverQuantidadeModal() {
        playClick(2)
        setQuantidadeEvento({texto: "remover", evento: EVENTO.REMOVER})
        setQuantidadeModal(true)
    }

    function adicionarItem() {
        const _personagem = novoUser.personagens.find(item=>item.personagemId==personagemId)

        const itemAtual = _personagem.inventario.find(item=> item.itemId === itemEscolhido.id)
        let novoPersonagem = null
        if(itemAtual) {
            novoPersonagem = {
                ..._personagem,
                inventario: [
                    ..._personagem.inventario.filter(item=> item.itemId!=itemEscolhido.id),
                    {
                        itemId: itemEscolhido.id,
                        quantidade: quantidadeItem + itemAtual.quantidade
                    }
                ]
            }
        } else {
            novoPersonagem = {
                ..._personagem,
                inventario: [
                    ..._personagem.inventario,
                    {itemId: itemEscolhido.id, quantidade: quantidadeItem}
                ]
            }
        }

        const novosPersonagens = [
            ...novoUser.personagens.filter((personagem)=> personagem.personagemId!=personagemId),
            novoPersonagem,
        ]

        const _item = novoPersonagem.inventario.find(item=>item.itemId===itemEscolhido.id)
        const novoInventario = novoUser.inventario.filter((item, i)=> i!=itemEscolhido.index)
        if(quantidadeItem<itemEscolhido.quantidade) {
            const novoItem = {
                ..._item,
                quantidade: itemEscolhido.quantidade - quantidadeItem
            }
            novoInventario.push(novoItem)
        }

        const _novoUser = {
            ...user,
            inventario: novoInventario,
            personagens: novosPersonagens,
        }
        setNovoUser(_novoUser)
        setUser(_novoUser)
        setListaModal(false)
        setQuantidadeModal(false)
    }

    function removerItem() {
        const _personagem = novoUser.personagens.find(item=>item.personagemId==personagemId)

        const itemAtual = _personagem.inventario.find(item=> item.itemId === itemEscolhido.id)
        let novoPersonagem = null
        if(quantidadeItem>=itemAtual.quantidade) {
            novoPersonagem = {
                ..._personagem,
                inventario: _personagem.inventario.filter(item=>item.itemId!=itemEscolhido.id)
            }
        }
        else {
            const _inventario = _personagem.inventario.filter(item=>item.itemId!=itemEscolhido.id)
            _inventario.push({
                ...itemAtual,
                quantidade: itemAtual.quantidade - quantidadeItem
            })
            novoPersonagem = {
                ..._personagem,
                inventario: _inventario,
            }
        }

        const novosPersonagens = [
            ...novoUser.personagens.filter((personagem)=> personagem.personagemId!=personagemId),
            novoPersonagem,
        ]

        const itemEncontrado = novoUser.inventario.find(item=>item.itemId===itemEscolhido.id)
        let novoInventario = null
        if(itemEncontrado) {
            const novoItem = {
                ...itemEncontrado,
                quantidade: itemEncontrado.quantidade + quantidadeItem
            }
            novoInventario = [
                ...novoUser.inventario.filter(item=> item.itemId!=itemEscolhido.id),
                novoItem
            ]
        }
        else {
            const novoItem = {
                ...itemAtual,
                quantidade: quantidadeItem
            }
            novoInventario = [
                ...novoUser.inventario,
                novoItem
            ]
        }

        const _novoUser = {
            ...user,
            inventario: novoInventario,
            personagens: novosPersonagens,
        }
        setNovoUser(_novoUser)
        setUser(_novoUser)
        setDetalhesModal(false)
        setQuantidadeModal(false)
    }

    function handleQuantidadeEvento() {
        playClick(2)
        if(quantidadeEvento.evento===EVENTO.ADICIONAR) {
            adicionarItem()
        } else if(quantidadeEvento.evento===EVENTO.REMOVER){
            removerItem()
        }
    }

    function renderCardItem(item) {
        return (
            <li
            onMouseEnter={()=>playHover(1)}
            onClick={()=>handleVisualizarItem(item)}
            style={{background: `var(--card-${item.raridade}-estrelas)`}}
            >
                <h1 className="quantidade">x{item.quantidade}</h1>
                <img src={item.sprite} alt="" />
                <footer>
                {renderEstrelas(item.raridade)}
                </footer>
            </li>
        )
    }

    function renderCardInventario(item) {
        return (
            <li
            onMouseEnter={()=>playHover(1)}
            onClick={()=>handleEscolherItem(item)}
            style={{background: `var(--card-${item.raridade}-estrelas)`}}
            className={itemEscolhido.index===item.index?"item-escolhido":null}>
                <h1 className="quantidade">x{item.quantidade}</h1>
                <img src={item.sprite} alt="" />
                <footer>
                {renderEstrelas(item.raridade)}
                </footer>
            </li>
        )
    }

    function renderEstrelas(quantidade) {
        const estrelasArray = []
        for(let i=0;i<quantidade;i++) {
            estrelasArray.push(i)
         }

        return (
            <ul className="estrelas">
            {estrelasArray.map(item=>{
                return  <img src={ICONS.ESTRELA} key={item} alt="Estrela" />
            })}
            </ul>
        )
    }

    function renderItemDetalhes(texto, evento) {
        return (
            <>
            {itemEscolhido.index || itemEscolhido.id?
            <section className="item-detalhes">
            <>
                <div className="detalhes">
                    <div>
                        <h1 style={
                            {textShadow: `var(--borda-texto-${itemEscolhido.raridade}-estrelas)`}
                        }
                        >{itemEscolhido.nome}</h1>
                        <h2>Descrição: <span>{itemEscolhido.descricao}</span></h2>
                        {itemEscolhido.tipo?<h2>Tipo: <span>{itemEscolhido.tipo}</span></h2>:null}
                        <div>
                            <h2>Raridade:</h2>
                            {renderEstrelas(itemEscolhido.raridade)}
                        </div>
                        <h2>Efeito: <span>{itemEscolhido.efeito}</span></h2>
                        <h2>Quantidade: <span>{itemEscolhido.quantidade}</span></h2>
                    </div>
                    <BotaoPrimario onClick={evento}>{texto}</BotaoPrimario>
                </div>
                <img src={itemEscolhido.sprite} alt="Sprite do item"/>      
            </>
            </section>
            :
            <section className="selecionar-item">
                <h1>Selecione um item no inventário.</h1>
            </section>
            }
            </>
        )
    }

    return (
        <ContainerScreen>
            <BackButton />
            <div className="personagem-inventario">
            {personagem?
            <>
                <section className="personagem">
                    <h1>{personagem.nome}</h1>
                    <img src={personagem.sprite} alt="Sprite do personagem" />
                </section>
                <section className="inventario-section">
                    <h1 className="titulo">Inventário</h1>
                    <section className="lista-itens">
                                <ul>
                                    {personagem.inventario.itens.length>0?
                                    <>
                                    {
                                        personagem.inventario.itens.map(item=>{
                                            return renderCardItem(item)
                                        })
                                    }
                                    </>
                                    :
                                    <h1>Este personagem não possui itens em seu inventário.</h1>
                                    }
                                </ul>
                            </section>
                    <BotaoPrimario onClick={handleAbrirInventario}>Adicionar item</BotaoPrimario>
                </section>

                <ModalItem
                detalhesModal={detalhesModal}
                setDetalhesModal={setDetalhesModal}
                itemEscolhido={itemEscolhido}
                botao={{texto: "Remover", evento: handleRemoverQuantidadeModal}}
                />
                
                <ModalItemLista
                modalIsOpen={listaModal}
                setModalIsOpen={setListaModal}
                categoria={ITENS_CATEGORIA.CONSUMIVEL}
                itens={inventario}
                itemEscolhido={itemEscolhido}
                titulo={"Inventário Geral"}
                botao={<BotaoPrimario onClick={handleAdicionarQuantidadeModal}>Adicionar</BotaoPrimario>}
                functions={{renderCardInventario}}
                />
                
                <Modal isOpen={quantidadeModal} setIsOpen={setQuantidadeModal}>
                    <div className="quantidade-modal">
                        <h1>Quantos você gostaria de {quantidadeEvento.texto}?</h1>
                        <div className="quantidade-opcao">
                            Quantidade:
                            <div>
                                <button onClick={handleDiminuirQuantidade}>-</button>
                                <h1>{quantidadeItem}</h1>
                                <button onClick={handleAumentarQuantidade}>+</button>
                            </div>
                        </div>
                        <BotaoPrimario onClick={handleQuantidadeEvento}>Confirmar</BotaoPrimario>
                    </div>
                </Modal>
            </>
            :null}
            </div>

        </ContainerScreen>
    )

}