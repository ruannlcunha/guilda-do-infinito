import { ICONS } from "../../../constants/images"
import { useSound } from "../../../hook"
import { BotaoPrimario } from "../botao-primario/botao-primario.component"
import { Modal } from "../modal/modal.component"
import { RaridadeEstrelas } from "../raridade-estrelas/raridade-estrelas.component"
import "./modal-item.style.css"

export function ModalItem({detalhesModal, setDetalhesModal, itemEscolhido, botao}) {
    const { playClick } = useSound()

    function handleFecharModal() {
        playClick(1)
        setDetalhesModal(false)
    }

    function renderItemDetalhes() {
        return (
            <section className="item-detalhes">
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
                            <RaridadeEstrelas quantidade={itemEscolhido.raridade}/>
                        </div>
                        {itemEscolhido.alvos?
                            <h2>Alvos: <span>{itemEscolhido.alvos}</span></h2>
                        :null}
                        {itemEscolhido.quantidade?
                            <h2>Quantidade: <span>{itemEscolhido.quantidade}</span></h2>
                        :null}
                        {itemEscolhido.bonus?
                        <div className="bonus-list">
                            <h2>Bônus:</h2>
                            <ul>
                                {
                                itemEscolhido.bonus.map(bonus=>{
                                    return <li key={bonus}>
                                        <img src={bonus.icon} alt="Ícone do atributo bônus" />
                                        +{bonus.valor} de {bonus.nome}
                                        </li>
                                })
                                }
                            </ul>
                        </div>
                        :null}
                    </div>
                    {botao?
                        <BotaoPrimario onClick={botao.evento}>{botao.texto}</BotaoPrimario>
                    :null}
                </div>
                <img src={itemEscolhido.sprite} alt="Sprite do item"/>    
            </section>
        )
    }

    return detalhesModal ?(
        <Modal isOpen={detalhesModal} setIsOpen={setDetalhesModal}>
        {itemEscolhido.id ?
        <div className="detalhes-item-modal">
            <header>
                <h1>Detalhes do Item</h1>
                <button onClick={handleFecharModal}>X</button>
            </header>
            <section>
                <section>
                    {renderItemDetalhes()}
                </section>
                <section>
                    <img src={itemEscolhido.sprite} alt="" />
                </section>
            </section>
        </div>
        :null}
        </Modal>
    ) : null

}