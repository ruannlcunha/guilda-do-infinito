import { useEffect, useState } from "react"
import { ICONS } from "../../../constants/images"
import { ELEMENTOS_NOMES } from "../../../constants/personagens/personagem.constant"
import { BotaoFecharModal } from "../botao-fechar-modal/botao-fechar-modal.component"
import { Modal } from "../modal/modal.component"
import "./modal-acao.style.css"
import { CATEGORIAS_DE_DANO } from "../../../constants/acoes/acoes.constant"
import { CardAcao } from "../card-acao/card-acao.component"

export function ModalAcao({ isOpen, setIsOpen, acao }) {
    const [categoriaIcon, setCategoriaIcon] = useState(null)

    useEffect(()=>{
        if(acao) {
            if(acao.categoria) {
                acao.categoria===CATEGORIAS_DE_DANO.CORPO_A_CORPO ? setCategoriaIcon(ICONS.FORCA) :
                acao.categoria===CATEGORIAS_DE_DANO.DISTANCIA ? setCategoriaIcon(ICONS.AGILIDADE) :
                setCategoriaIcon(ICONS.MAGIA)
            }
        }
    },[acao])

    return acao?(
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="modal-acao">
            <BotaoFecharModal setIsOpen={setIsOpen}/>
                <section className="acao-detalhes">
                    <h1>Detalhes da Ação</h1>
                    <div>
                        <h2>{acao.nome}</h2>
                        <ul>
                            <li><span>Custo:</span> {acao.custo} PM</li>
                            <li><span>Elemento:</span>
                                <div className="nome-elemento" style={{background: `var(--fundo-${acao.elemento})`}}>
                                    {ELEMENTOS_NOMES[acao.elemento]}
                                    <img
                                    src={ICONS[`ELEMENTO_${acao.elemento}`]}
                                    alt={`Símbolo do elemento ${ELEMENTOS_NOMES[acao.elemento]}`}
                                    />
                                </div>
                            </li>
                            <li><span>Alvos:</span>{acao.alvos}</li>
                            {acao.categoria?
                            <li><span>Categoria:</span>
                                {acao.categoria}
                                <img src={categoriaIcon} alt="" />
                            </li>
                            :null}
                            <li><span>Descrição:</span></li>
                            <p>{acao.descricao}</p>
                        </ul>
                    </div>
                </section>
                <section className="acao-variantes">
                    <h1>Variantes</h1>
                    <ul>
                        {acao.variantes.length>0?
                        acao.variantes.map((variante,i)=> {
                            return <li key={i}>
                                <header><h1>{variante.categoria}</h1></header>
                                <section>
                                    {variante.lista.map(acaoVariante=> {
                                        const novaAcao = {...acao, ...acaoVariante.novaAcao, descricao: acaoVariante.descricao}
                                        return <CardAcao acao={novaAcao}/>
                                    })
                                    }
                                </section>
                            </li>
                        })
                        : <h2>O personagem não possui variantes para esta ação.</h2>
                        }
                    </ul>
                </section>
            </div>
        </Modal>
    ) : null

}