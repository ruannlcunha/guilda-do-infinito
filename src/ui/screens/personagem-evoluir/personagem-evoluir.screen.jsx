import "./personagem-evoluir.style.css"
import { BackButton, BotaoPrimario, ContainerScreen } from "../../components"
import { useNavigate, useParams } from "react-router-dom"
import useGlobalUser from "../../../context/global-user.context"
import { useEffect, useState } from "react"
import { calcularPorcentagem, instanciarPersonagem } from "../../../utils"
import { ICONS } from "../../../constants/images"
import { ITENS_DATA } from "../../../database/itens/outros"

export function PersonagemEvoluirScreen() {
    const { personagemId } = useParams()
    const CARDS_ID = {EXP_PEQUENO: 1,EXP_MEDIO: 2,EXP_GRANDE: 3,}
    const [user, setUser] = useGlobalUser()
    const [personagem, setPersonagem] = useState(null)
    const [personagemEvoluido, setPersonagemEvoluido] = useState(null)
    const [quantidadeCard, setQuantidadeCard] = useState(0)
    const [cardsDisponiveis, setCardsDisponiveis] = useState({pequeno: null, medio: null, grande: null})
    const [cardEscolhido, setCardEscolhido] = useState(
        {id: null, raridade: null, quantidadeExp: null, quant: 0})
    const navigate = useNavigate()

    useEffect(()=>{
        const _personagem = user.personagens.find(item=>item.personagemId == personagemId)
        const personagemInstanciado = instanciarPersonagem(_personagem)
        setPersonagem(personagemInstanciado)
        setPersonagemEvoluido(personagemInstanciado)
        document.documentElement.style.setProperty('--fundo-tema',
            `var(--${personagemInstanciado.corTema})`
        );

        const _cardsPequenos = user.inventario
        .find(item=>item.itemId===CARDS_ID.EXP_PEQUENO)
        const _cardsMedios = user.inventario
        .find(item=>item.itemId===CARDS_ID.EXP_MEDIO)
        const _cardsGrandes = user.inventario
        .find(item=>item.itemId===CARDS_ID.EXP_GRANDE)
        setCardsDisponiveis({
            pequeno: _cardsPequenos ? _cardsPequenos.quantidade : 0,
            medio:  _cardsMedios ? _cardsMedios.quantidade : 0,
            grande:  _cardsGrandes ? _cardsGrandes.quantidade : 0
        })
    },[])

    useEffect(()=>{
        if(personagem) {
            const porcentagemExp = calcularPorcentagem(
                personagemEvoluido.experiencia.atual,
                personagemEvoluido.experiencia.maximo
            );
            document.documentElement.style.setProperty('--resultadoExp', `${porcentagemExp}%`);
        }
    },[personagem, personagemEvoluido])

    useEffect(()=>{
        if(personagem) {
            const expGanho = cardEscolhido.quantidadeExp*quantidadeCard
            const _personagem = user.personagens.find(item=>item.personagemId == personagemId)
            const novoPersonagem = {
                ..._personagem,
                experienciaAtual: _personagem.experienciaAtual+expGanho
            }
            const _personagemEvoluido = instanciarPersonagem(novoPersonagem)
            setPersonagemEvoluido(_personagemEvoluido)
        }
    },[quantidadeCard, cardEscolhido])


    function handleAumentarCard() {
        if(cardEscolhido.raridade !== null && quantidadeCard<cardEscolhido.quant) {
            const _quantidadeCard = quantidadeCard+1
            setQuantidadeCard(_quantidadeCard)
        }
    }

    function handleDiminuirCard() {
        if(cardEscolhido.raridade !== null) {
            if(quantidadeCard>0) {
                const _quantidadeCard = quantidadeCard-1
                setQuantidadeCard(_quantidadeCard)
            }
        }
    }

    function handleEscolherCard(card) {
        if(quantidadeCard>card.quant) {
            setQuantidadeCard(card.quant)
        }
        setCardEscolhido(card)
    }

    function handleEvoluir() {
        const _personagem = user.personagens.find(item=>item.personagemId == personagemId)
        const novoPersonagem ={
            ..._personagem,
            level: personagemEvoluido.level,
            experienciaAtual: personagemEvoluido.experiencia.atual
        }
        const novosPersonagens = [
            ...user.personagens.filter(item=>item.personagemId != personagemId),
            novoPersonagem
        ]
        const novoInventario = [...user.inventario.filter(item=>item.itemId !== cardEscolhido.id)]
        const _item = user.inventario.find(item=>item.itemId===cardEscolhido.id)
        const novoItem = {..._item, quantidade: _item.quantidade-quantidadeCard}
        if(novoItem.quantidade>0){
            novoInventario.push(novoItem)
        } 
        const novoUser = {
            ...user,
            personagens: novosPersonagens,
            inventario: novoInventario
        }
        setUser(novoUser)
        navigate(0)
    }

    function renderEstrelas(quantidade) {
        const estrelasArray = []
        for(let i=0;i<quantidade;i++) {
            estrelasArray.push(i)
         }

        return (
            <ul>
            {estrelasArray.map(item=>{
                return  <img src={ICONS.ESTRELA} key={item} alt="Estrela" />
            })}
            </ul>
        )
    }

    function renderCard(id, raridade, experiencia, quantidade, icon) {
        return (
            <button
            className={
                cardEscolhido.raridade===raridade ? "card-escolhido" :
                quantidade<1 ? "card-bloqueado"
                : null}
            onClick={quantidade>0 ?
                ()=>handleEscolherCard({id, raridade, quantidadeExp: experiencia, quant: quantidade})
            :null}
            style={{background:`var(--card-${raridade}-estrelas)`}}>
                <img src={icon} alt="Sprite do card de experiência" />
                <footer>{renderEstrelas(raridade)} x{quantidade}</footer>
            </button>
        )
    }

    return (
        <ContainerScreen>
            <BackButton />
            {personagem?
            <div className="personagem-evoluir">
                <section className="personagem">
                <>
                    <h1>{personagem.nome}</h1>
                    <img src={personagem.sprite} alt="Sprite do personagem" />
                </>
                 </section>

                 <section className="evoluir-section">
                    <h1>Evoluir</h1>

                    <section className="experiencia-section">
                        <div className="level">
                            <h1>Level.{personagem.level}</h1>
                            {personagemEvoluido.level>personagem.level ?
                            <>
                            <img src={ICONS.SETA_DIREITA} alt="Seta para direita" />
                            <h1><span>Level.{personagemEvoluido.level}</span></h1>
                            </>
                            :null}
                        </div>
                        <div className="barra-experiencia">
                            <h1>Exp.</h1>
                            <h1>{personagemEvoluido.experiencia.atual}<span>/{personagemEvoluido.experiencia.maximo}</span></h1>
                        </div>
                        <ul>
                        <li>
                            <div>
                            <img src={ICONS.PV} alt="Ícone de Vida"/>
                            Pontos de Vida:
                            </div>
                            <div>
                                {personagem.pv.atual}
                                {personagemEvoluido.level>personagem.level ?
                                <>
                                <img src={ICONS.SETA_DIREITA} alt="Seta para direita" />
                                <span>
                                   {personagemEvoluido.pv.atual}
                                </span>
                                </>
                                :null}
                            </div>
                        </li>
                        <li>
                            <div>
                            <img src={ICONS.FORCA} alt="Ícone de Força" />
                            Força:
                            </div>
                            <div>
                                {personagem.atributos.forca}
                                {personagemEvoluido.level>personagem.level ?
                                <>
                                <img src={ICONS.SETA_DIREITA} alt="Seta para direita" />
                                <span>
                                    {personagemEvoluido.atributos.forca}
                                </span>
                                </>
                                :null}
                            </div>
                        </li>
                        <li>
                            <div>
                            <img src={ICONS.AGILIDADE} alt="Ícone de Agilidade" />
                            Agilidade:
                            </div>
                            <div>
                                {personagem.atributos.agilidade}
                                {personagemEvoluido.level>personagem.level ?
                                <>
                                <img src={ICONS.SETA_DIREITA} alt="Seta para direita" />
                                <span>
                                    {personagemEvoluido.atributos.agilidade}
                                </span>
                                </>
                                :null}
                            </div>
                        </li>
                        <li>
                            <div>
                            <img src={ICONS.PM} alt="Ícone de Mana" />
                            Pontos de Mana:
                            </div>
                            <div>
                                {personagem.pm.atual}
                                {personagemEvoluido.level>personagem.level ?
                                <>
                                <img src={ICONS.SETA_DIREITA} alt="Seta para direita" />
                                <span>
                                   {personagemEvoluido.pm.atual}
                                </span>
                                </>
                                :null}
                            </div>
                        </li>
                        <li>
                            <div>
                            <img src={ICONS.MAGIA} alt="Ícone de Magia" />
                            Magia:
                            </div>
                            <div>
                                {personagem.atributos.magia}
                                {personagemEvoluido.level>personagem.level ?
                                <>
                                <img src={ICONS.SETA_DIREITA} alt="Seta para direita" />
                                <span>
                                    {personagemEvoluido.atributos.magia}
                                </span>
                                </>
                                :null}
                            </div>
                        </li>
                        <li>
                            <div>
                            <img src={ICONS.VIGOR} alt="Ícone de Vigor" />
                            Vigor:
                            </div>
                            <div>
                                {personagem.atributos.vigor}
                                {personagemEvoluido.level>personagem.level ?
                                <>
                                <img src={ICONS.SETA_DIREITA} alt="Seta para direita" />
                                <span>
                                    {personagemEvoluido.atributos.vigor}
                                </span>
                                </>
                                :null}
                            </div>
                        </li>
                    </ul>
                    </section>

                    <div className="quantidade-opcao">
                        {cardEscolhido.raridade?
                        <>
                        Quantidade usada
                        <div>
                            <button onClick={handleDiminuirCard}>-</button>
                            <h1>{quantidadeCard}</h1>
                            <button onClick={handleAumentarCard}>+</button>
                        </div>
                        </>
                        :null}
                    </div>

                    <div className="cards-experiencia">
                        {renderCard(CARDS_ID.EXP_PEQUENO, 3, 25, cardsDisponiveis.pequeno, ICONS.CARD_3)}
                        {renderCard(CARDS_ID.EXP_MEDIO, 4, 50, cardsDisponiveis.medio, ICONS.CARD_4)}
                        {renderCard(CARDS_ID.EXP_GRANDE, 5, 100, cardsDisponiveis.grande, ICONS.CARD_5)}
                    </div>

                    {cardEscolhido.raridade?
                    <BotaoPrimario onClick={handleEvoluir}>Evoluir</BotaoPrimario>
                    :null}
                 </section>
            </div>
            :null}
        </ContainerScreen>
    )

}