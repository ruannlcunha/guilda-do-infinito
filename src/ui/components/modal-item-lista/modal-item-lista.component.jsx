import { useParams } from "react-router-dom"
import { ICONS } from "../../../constants/images"
import { ITENS_CATEGORIA } from "../../../constants/itens/itens.constant"
import { useSound } from "../../../hook"
import { BotaoPrimario } from "../botao-primario/botao-primario.component"
import { Modal } from "../modal/modal.component"
import "./modal-item-lista.style.css"

export function ModalItemLista({modalIsOpen, setModalIsOpen, categoria, itens, filtroItem, itemEscolhido, titulo, botao, functions}) {
    const { playClick } = useSound()
    const { personagemId } = useParams()

    function handleFecharModal() {
        playClick(1)
        setModalIsOpen(false)
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

    function renderDetalhes() {
        return (<>
            {itemEscolhido.index || itemEscolhido.id?
            <section className="item-detalhes">
            <>
                <div className="detalhes">
                    <div>
                        <h1 style={
                            {textShadow: `var(--borda-texto-${itemEscolhido.raridade}-estrelas)`}
                        }
                        >{itemEscolhido.nome}</h1>
                        {itemEscolhido.descricao?
                            <h2>Descrição: <span>{itemEscolhido.descricao}</span></h2>
                        :null}
                        {itemEscolhido.tipo?<h2>Tipo: <span>{itemEscolhido.tipo}</span></h2>:null}
                        <div>
                            <h2>Raridade:</h2>
                            {renderEstrelas(itemEscolhido.raridade)}
                        </div>
                        {itemEscolhido.quantidade&&itemEscolhido.categoria!==ITENS_CATEGORIA.EQUIPAMENTO?
                            <h2>Quantidade: <span>{itemEscolhido.quantidade}</span></h2>
                        :null}
                        {itemEscolhido.bonus?
                        <div className="bonus-list">
                            <h2>Bônus:</h2>
                            <ul>
                                {
                                itemEscolhido.bonus.map(bonus=>{
                                    return <li>
                                        <img src={bonus.icon} alt="Ícone do atributo bônus" />
                                        +{bonus.valor} de {bonus.nome}
                                        </li>
                                })
                                }
                            </ul>
                        </div>
                        :null}
                    </div>
                    {
                    itemEscolhido.categoria === ITENS_CATEGORIA.EQUIPAMENTO?
                        itemEscolhido.personagemEquipadoId==personagemId ?
                        <BotaoPrimario
                        style={{borderColor: "var(--grey)"}}
                        onClick={functions.handleDesequipar}>Desequipar</BotaoPrimario>
                        :
                        <BotaoPrimario onClick={functions.handleEquipar}>Equipar</BotaoPrimario>
                    :
                        botao
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

    function renderLista() {
        return (
            <>
            {
            categoria===ITENS_CATEGORIA.EQUIPAMENTO?
                itens
                .filter(item=>item.equipamentoTipo===filtroItem.tipo)
                .length>0 ?

                    itens
                    .filter(item=>item.equipamentoTipo===filtroItem.tipo)
                    .map(item=>{
                        return functions.renderCardItem(item)
                    })
                :
                <h1>Você não possui equipamentos deste tipo.</h1>
            :
                itens ?
                itens
                .map(item=>{
                    return functions.renderCardInventario(item)
                })
                :
                <h1>Você não possui itens no inventário.</h1>
            }
            </>
        )
    }
    
    return (
        <Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen}>
        <div className="modal-item-lista">
            <header>
                <h1>{titulo}</h1>
                <button onClick={handleFecharModal}>X</button>
            </header>
            <section>
                <section className="lista-itens">
                    <ul>
                        {renderLista()}
                    </ul>
                </section>
                {renderDetalhes()}
            </section>
        </div>
        </Modal>
    )

}