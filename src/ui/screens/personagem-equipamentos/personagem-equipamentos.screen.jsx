import "./personagem-equipamentos.style.css"
import { BackButton, BotaoPrimario, ContainerScreen, Modal } from "../../components"
import { useParams } from "react-router-dom"
import useGlobalUser from "../../../context/global-user.context"
import { useEffect, useState } from "react"
import { instanciarPersonagem } from "../../../utils"
import { ICONS } from "../../../constants/images"
import { EQUIPAMENTO_TIPO, ITENS_CATEGORIA } from "../../../constants/itens/itens.constant"
import { ITENS_DATA } from "../../../database"
import { useSound } from "../../../hook"

export function PersonagemEquipamentosScreen() {
    const { personagemId, equipamentoTipo } = useParams()
    const [user, setUser] = useGlobalUser()
    const { playClick, playHover } = useSound()
    const [novoUser, setNovoUser] = useState(null)
    const [personagem, setPersonagem] = useState(null)
    const [equipamentos, setEquipamentos] = useState([])
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [filtroItem, setFiltroItem] = useState({atributo: null, tipo: null})
    const [itemEscolhido, setItemEscolhido] = useState({index: null})

    useEffect(()=>{
        const _user = user
        setNovoUser(_user)
        if(equipamentoTipo) {
            handleAbrirModal(EQUIPAMENTO_TIPO[equipamentoTipo])
        }
    },[])

    useEffect(()=>{
        const _user = novoUser
        if(_user) {
        const equipamentosUsados = []
        _user.personagens.map(person=> {
            person.equipamentos.arma?equipamentosUsados.push({
                ...ITENS_DATA.find(item=>item.id===person.equipamentos.arma),
                personagemEquipadoId: person.personagemId,
            }
            ):null
            person.equipamentos.armadura?equipamentosUsados.push({
                ...ITENS_DATA.find(item=>item.id===person.equipamentos.armadura),
                personagemEquipadoId: person.personagemId,
            }
            ):null
            person.equipamentos.acessorio1?equipamentosUsados.push({
                ...ITENS_DATA.find(item=>item.id===person.equipamentos.acessorio1),
                personagemEquipadoId: person.personagemId,
            }
            ):null
            person.equipamentos.acessorio2?equipamentosUsados.push({
                ...ITENS_DATA.find(item=>item.id===person.equipamentos.acessorio2),
                personagemEquipadoId: person.personagemId,
            }
            ):null
        })
        const _equipamentos = [
            ..._user.inventario.map(item=> {
                return {
                ...ITENS_DATA.find(data=> data.id===item.itemId),
                personagemEquipadoId: item.personagemEquipadoId,
                quantidade: item.quantidade,
                }
            }),
            ...equipamentosUsados,
        ]
        .map((item,i)=>{return{...item, index: i}})
        .filter(item=>item.categoria===ITENS_CATEGORIA.EQUIPAMENTO)
        .sort(function (a, b) {
            if(a.personagemEquipadoId && !b.personagemEquipadoId){return -1;}
            else if(!a.personagemEquipadoId && b.personagemEquipadoId){return 1;}
            else{return b.raridade-a.raridade;}
        });
        setEquipamentos(_equipamentos)

        const _personagem = _user.personagens.find(item=>item.personagemId == personagemId)
        const personagemInstanciado = instanciarPersonagem(_personagem)
        setPersonagem(personagemInstanciado)
        document.documentElement.style.setProperty('--fundo-tema',
            `var(--${personagemInstanciado.corTema})`
        );

        if(_equipamentos.length>0) {
            const itemPossuido = _personagem.equipamentos[filtroItem.atributo]
            if(itemPossuido) {
                setItemEscolhido(_equipamentos.find(item=>item.id == itemPossuido))
            } else {
                setItemEscolhido({index: null})
            }
        }
    }
    },[user, novoUser, modalIsOpen])
    
    function handleEscolherItem(item) {
        playClick(1)
        if(item.index===itemEscolhido.index) {
            setItemEscolhido({index: null})
        }
        else {
            setItemEscolhido(item)
        }
    }

    function handleEquipar() {
        playClick(2)
        const _personagem = novoUser.personagens.find(item=>item.personagemId==personagemId)
        const itemAtualEquipado = _personagem.equipamentos[filtroItem.atributo]

        const novoPersonagem = {
            ..._personagem,
            equipamentos: {
                ...personagem.equipamentos,
                [filtroItem.atributo]: itemEscolhido.id
            }
        }
        let novosPersonagens = [
            ...novoUser.personagens.filter((personagem)=> personagem.personagemId!=personagemId),
            novoPersonagem,
        ]
        
        if(itemEscolhido.personagemEquipadoId &&
            itemEscolhido.personagemEquipadoId!==Number(personagemId)) {
            const _personagemEquipado = novoUser.personagens
            .find(item=>item.personagemId==itemEscolhido.personagemEquipadoId)
            const _novoPersonagemEquipado = {
                ..._personagemEquipado,
                equipamentos: {
                    ...personagem.equipamentos,
                    [filtroItem.atributo]: null
                }
            }
            const _novosPersonagens = [
                ...novosPersonagens
                .filter((personagem)=> personagem.personagemId!=itemEscolhido.personagemEquipadoId),
                _novoPersonagemEquipado,
            ]
            novosPersonagens = _novosPersonagens
        }

        const novoInventario = novoUser.inventario.filter((item, i)=> i!=itemEscolhido.index)
        itemAtualEquipado?novoInventario.push({itemId:itemAtualEquipado, quantidade: 1}):null

        const _novoUser = {
            ...user,
            inventario: novoInventario,
            personagens: novosPersonagens,
        }
        setNovoUser(_novoUser)
    }

    function handleDesequipar() {
        playClick(2)
        const _personagem = novoUser.personagens.find(item=>item.personagemId==personagemId)
        const itemAtualEquipado = _personagem.equipamentos[filtroItem.atributo]

        const novoPersonagem = {
            ..._personagem,
            equipamentos: {
                ...personagem.equipamentos,
                [filtroItem.atributo]: null
            }
        }
        const novosPersonagens = [
            ...novoUser.personagens.filter((personagem)=> personagem.personagemId!=personagemId),
            novoPersonagem,
        ]
        const novoInventario = novoUser.inventario.filter((item, i)=> i!=itemEscolhido.index)
        novoInventario.push({itemId:itemAtualEquipado, quantidade: 1})

        const _novoUser = {
            ...user,
            inventario: novoInventario,
            personagens: novosPersonagens,
        }
        setNovoUser(_novoUser)
        setItemEscolhido({index: null})
    }

    function handleSalvarEquipamento() {
        setUser(novoUser)
        playClick(2)
    }

    function handleAbrirModal(filtro) {
        playClick(1)
        setModalIsOpen(true)
        setFiltroItem(filtro)
    }

    function handleFecharModal() {
        playClick(1)
        setModalIsOpen(false)
    }

    function renderCardEquipamento(filtro) {
        const itemData = ITENS_DATA.find(item=>item.id==personagem.equipamentos[filtro.atributo])

        return (
            <div className="card-equipamento">
                <h1>{filtro.titulo}</h1>
                <div
                onMouseEnter={()=>playHover(1)}
                className="card"
                onClick={()=>handleAbrirModal(filtro)}>
                    {itemData ?
                        <img
                        className="item-equipado"
                        src={itemData.sprite}
                        alt={`Ícone de `}
                        />
                    :
                    <>
                    <img src={filtro.icon} alt="Ícone de acessório" />
                    <h1>+</h1>
                    </>}
                </div>
                {itemData ?
                    <section>
                    <h1>{itemData.nome}</h1>
                    {itemData.bonus.length>0 ?
                        itemData.bonus.map(bonus=>{
                            return <div className="bonus">
                                    <div>
                                    <img src={bonus.icon} alt="Ícone do atributo" />
                                    {bonus.nome}
                                    </div>
                                    +{bonus.valor}
                                </div>
                        })
                    :null}
                </section>
                :null}
            </div>
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

    function renderCardItem(item) {
        const _personagem = novoUser.personagens.find(person=>person.personagemId===item.personagemEquipadoId)
        const personagemEquipado = _personagem? instanciarPersonagem(_personagem) : {perfil: null}

        return (
            <li
            onMouseEnter={()=>playHover(1)}
            onClick={()=>handleEscolherItem(item)}
            style={{background: `var(--card-${item.raridade}-estrelas)`}}
            className={itemEscolhido.index===item.index?"item-escolhido":null}>
                {personagemEquipado.perfil?
                <img src={personagemEquipado.perfil}
                alt="Sprite do personagem"
                className="personagem-equipado" />
                :null}

                <img src={item.sprite} alt="" />
                <footer>
                {renderEstrelas(item.raridade)}
                </footer>
            </li>
        )
    }

    function renderEquipamentosDetalhes() {
        return (
            <>
            {itemEscolhido.index || itemEscolhido.id?
            <section className="equipamento-detalhes">
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
                        <div className="bonus-list">
                            <h2>Bônus:</h2>
                            <ul>
                                {itemEscolhido.bonus?
                                itemEscolhido.bonus.map(bonus=>{
                                    return <li>
                                        <img src={bonus.icon} alt="Ícone do atributo bônus" />
                                        +{bonus.valor} de {bonus.nome}
                                    </li>
                                })
                                :null}
                            </ul>
                        </div>
                    </div>
                    {itemEscolhido.personagemEquipadoId==personagemId ?
                        <BotaoPrimario
                        style={{borderColor: "var(--grey)"}}
                        onClick={handleDesequipar}>Desequipar</BotaoPrimario>
                        :
                        <BotaoPrimario onClick={handleEquipar}>Equipar</BotaoPrimario>
                    }
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
            <div className="personagem-equipamentos">
                <section className="personagem">
                {personagem?
                <>
                    <h1>{personagem.nome}</h1>
                    <img src={personagem.sprite} alt="Sprite do personagem" />
                </>
                :null}
                </section>
                {personagem?
                <>
                <section className="equipamento-section">
                    <h1 className="titulo">Equipamentos</h1>
                    <section>
                    {renderCardEquipamento(EQUIPAMENTO_TIPO.ARMA)}
                    {renderCardEquipamento(EQUIPAMENTO_TIPO.ARMADURA)}
                    {renderCardEquipamento(EQUIPAMENTO_TIPO.ACESSORIO_1)}
                    {renderCardEquipamento(EQUIPAMENTO_TIPO.ACESSORIO_2)}
                    </section>
                    <BotaoPrimario
                    ativo={user!=novoUser}
                    onClick={handleSalvarEquipamento}>
                        Salvar
                    </BotaoPrimario>
                </section>

                <Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen}>
                    <div className="equipamento-modal">
                        <header>
                            <h1>{`${filtroItem.titulo}s`}</h1>
                            <button onClick={handleFecharModal}>X</button>
                        </header>
                        <section>
                            <section className="lista-equipamentos">
                                <ul>
                                    {equipamentos
                                    .filter(item=>item.equipamentoTipo===filtroItem.tipo)
                                    .length>0 ?

                                        equipamentos
                                        .filter(item=>item.equipamentoTipo===filtroItem.tipo)
                                        .map(item=>{
                                            return renderCardItem(item)
                                        })
                                    :
                                    <h1>Você não possui equipamentos deste tipo.</h1>
                                    }
                                </ul>
                            </section>
                            {renderEquipamentosDetalhes()}
                        </section>
                    </div>
                </Modal>
                </>
                :null}
            </div>
        </ContainerScreen>
    )

}