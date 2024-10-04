import "./versus-personagens.style.css"
import { BackButton, BotaoPrimario, ContainerScreen, Modal, ModalItem } from "../../components"
import { ICONS, IMAGES, PERFIL, SPRITES } from "../../../constants/images"
import { instanciarPersonagem } from "../../../utils"
import { ITENS_DATA, PERSONAGENS_DATA } from "../../../database"
import basePersonagem from "../../../database/personagens/_base/_base-pessoal.personagem.json"
import { useEffect, useState } from "react"
import useGlobalUser from "../../../context/global-user.context"
import { useNavigate, useParams } from "react-router-dom"
import { useSound } from "../../../hook"

export function VersusPersonagensScreen() {
    const PERSONAGEM_VAZIO ={id: null, perfil: IMAGES.GENERICO_PERFIL}
    const EQUIPES = {ALIADOS: "ALIADOS", INIMIGOS: "INIMIGOS", CONCLUIDO: "CONCLUIDO"}
    const [personagens, setPersonagens] = useState([])
    const [user, setUser] = useGlobalUser()
    const navigate = useNavigate()
    const { jogadores } = useParams()
    const {playHover, playClick, playCancel} = useSound()
    const [personagemModal, setPersonagemModal] = useState(false)
    const [itemModal, setItemModal] = useState(false)
    const [itemEscolhido, setItemEscolhido] = useState({index: null})
    const [equipeAtual, setEquipeAtual] = useState(EQUIPES.ALIADOS)
    const [aliados, setAliados] = useState([])
    const [inimigos, setInimigos] = useState([])
    const [personagemEscolhido, setPersonagemEscolhido] = useState(PERSONAGEM_VAZIO)
    const [pagina, setPagina] = useState({min: 0, max:19, pag: 1, pagTotal: 0})

    useEffect(()=>{
        const _personagens = []
        PERSONAGENS_DATA.forEach((_personagem,i)=>{
            if(i>=pagina.min && i<=pagina.max) {
                const aventureiro = user.personagens.find(item => item.personagemId === 1)
                const _basePersonagem = {
                    ...basePersonagem,
                    personagemId: _personagem.id,
                    nome: _personagem.id===1?aventureiro.nome:null,
                    titulo: _personagem.id===1?aventureiro.titulo:null,
                    equipamentoProntoId: 1,
                }
                const personagemInstanciado = instanciarPersonagem(_basePersonagem)
                _personagens.push(personagemInstanciado)
            }
        })
        setPersonagens(_personagens)
    },[pagina])

    useEffect(()=>{
        setPaginaTotal()
    },[])

    function findPersonagemData() {
        return PERSONAGENS_DATA.find(personagem=>personagem.id===personagemEscolhido.id)
    }

    function setPaginaTotal() {
        let _pagina = {min: 0, max:19, pag: 1}
        while((_pagina.max-1)<=PERSONAGENS_DATA.length) {
            _pagina = {min: _pagina.min+20, max: _pagina.max+20, pag: _pagina.pag+1}
        }
        setPagina(old=>{return {...old, pagTotal: _pagina.pag}})
    }

    function handleEscolherCard(personagem) {
        playClick(1)
        if(equipeAtual != EQUIPES.CONCLUIDO) {
            if(personagem.id!=personagemEscolhido.id) {
                setPersonagemEscolhido(personagem)
            }else {
                setPersonagemEscolhido(PERSONAGEM_VAZIO)
            }
        }
    }

    function handleProximaPagina() {
        playClick(1)
        if((pagina.max-1)<=PERSONAGENS_DATA.length) {
            setPagina(old=> {return {...old,min: old.min+20, max: old.max+20, pag: old.pag+1}})
        }
    }

    function handleVoltarPagina() {
        playClick(1)
        if(pagina.min>0) {
            setPagina(old=> {return {...old,min: old.min-20, max: old.max-20, pag: old.pag-1}})
        }
    }

    function handleEscolherPersonagem() {
        playClick(1)
        setPersonagemModal(true)
    }

    function handleCancelarModal() {
        playCancel()
        setPersonagemModal(false)
    }
    
    function handleDiminuirLevel() {
        playClick(1)
        const _basePersonagem = {
            ...basePersonagem,
            personagemId: personagemEscolhido.id,
            level: personagemEscolhido.level-1,
            visualAtivo: personagemEscolhido.visualId,
            nome: personagemEscolhido.id===1?personagemEscolhido.nome:null,
            titulo: personagemEscolhido.id===1?personagemEscolhido.titulo:null,
            equipamentoProntoId: personagemEscolhido.equipamentoProntoId,
        }
        const novoPersonagem = instanciarPersonagem(_basePersonagem)
        setPersonagemEscolhido(novoPersonagem)
    }
    
    function handleAumentarLevel() {
        playClick(1)
        const _basePersonagem = {
            ...basePersonagem,
            personagemId: personagemEscolhido.id,
            level: personagemEscolhido.level+1,
            visualAtivo: personagemEscolhido.visualId,
            nome: personagemEscolhido.id===1?personagemEscolhido.nome:null,
            titulo: personagemEscolhido.id===1?personagemEscolhido.titulo:null,
            equipamentoProntoId: personagemEscolhido.equipamentoProntoId,
        }
        const novoPersonagem = instanciarPersonagem(_basePersonagem)
        setPersonagemEscolhido(novoPersonagem)
    }

    function handleVoltarVisual() {
        if(personagemEscolhido.visualId>1) {
            playClick(1)
            const _basePersonagem = {
                ...basePersonagem,
                personagemId: personagemEscolhido.id,
                level: personagemEscolhido.level,
                visualAtivo: personagemEscolhido.visualId-1,
                nome: personagemEscolhido.id===1?personagemEscolhido.nome:null,
                titulo: personagemEscolhido.id===1?personagemEscolhido.titulo:null,
                equipamentoProntoId: personagemEscolhido.equipamentoProntoId,
            }
            const novoPersonagem = instanciarPersonagem(_basePersonagem)
            setPersonagemEscolhido(novoPersonagem)
        }
    }

    function handleProximoVisual() {
        if(findPersonagemData().visuais.length>personagemEscolhido.visualId) {
            playClick(1)
            const _basePersonagem = {
                ...basePersonagem,
                personagemId: personagemEscolhido.id,
                level: personagemEscolhido.level,
                visualAtivo: personagemEscolhido.visualId+1,
                nome: personagemEscolhido.id===1?personagemEscolhido.nome:null,
                titulo: personagemEscolhido.id===1?personagemEscolhido.titulo:null,
                equipamentoProntoId: personagemEscolhido.equipamentoProntoId,
            }
            const novoPersonagem = instanciarPersonagem(_basePersonagem)
            setPersonagemEscolhido(novoPersonagem)
        }
    }

    function handleVoltarEquipamento() {
        playClick(1)
        const _basePersonagem = {
            ...basePersonagem,
            personagemId: personagemEscolhido.id,
            level: personagemEscolhido.level,
            visualAtivo: personagemEscolhido.visualId,
            nome: personagemEscolhido.id===1?personagemEscolhido.nome:null,
            titulo: personagemEscolhido.id===1?personagemEscolhido.titulo:null,
            equipamentoProntoId: personagemEscolhido.equipamentoProntoId-1,
        }
        const novoPersonagem = instanciarPersonagem(_basePersonagem)
        setPersonagemEscolhido(novoPersonagem)
    }

    function handleProximoEquipamento() {
        playClick(1)
        const _basePersonagem = {
            ...basePersonagem,
            personagemId: personagemEscolhido.id,
            level: personagemEscolhido.level,
            visualAtivo: personagemEscolhido.visualId,
            nome: personagemEscolhido.id===1?personagemEscolhido.nome:null,
            titulo: personagemEscolhido.id===1?personagemEscolhido.titulo:null,
            equipamentoProntoId: personagemEscolhido.equipamentoProntoId+1,
        }
        const novoPersonagem = instanciarPersonagem(_basePersonagem)
        setPersonagemEscolhido(novoPersonagem)
    }

    function handleConfirmarPersonagem() {
        playClick(2)
        setPersonagemModal(false)
        setPersonagemEscolhido(PERSONAGEM_VAZIO)
        if(equipeAtual===EQUIPES.ALIADOS) {
            if(aliados.length===3) {
                setEquipeAtual(EQUIPES.INIMIGOS)
            }
            setAliados([...aliados, personagemEscolhido])
        }
        else if(equipeAtual===EQUIPES.INIMIGOS){
            if(inimigos.length===3) {
                setEquipeAtual(EQUIPES.CONCLUIDO)
            }
            setInimigos([...inimigos, personagemEscolhido])
        }
    }

    function handleDesfazerEscolha() {
        playCancel()
        setPersonagemEscolhido(PERSONAGEM_VAZIO)
        if(equipeAtual===EQUIPES.ALIADOS) {
            setAliados(aliados.filter((aliado,i)=>i!==(aliados.length-1)))
        }
        else {
            if(inimigos.length>0) {
                setEquipeAtual(EQUIPES.INIMIGOS)
                setInimigos(inimigos.filter((inimigo,i)=>i!==(inimigos.length-1)))
            } else {
                setEquipeAtual(EQUIPES.ALIADOS)
                setAliados(aliados.filter((aliado,i)=>i!==(aliados.length-1)))
            }
        }
    }

    function handleFinalizarEquipe() {
        playClick(2)
        setPersonagemEscolhido(PERSONAGEM_VAZIO)
        equipeAtual===EQUIPES.ALIADOS ? setEquipeAtual(EQUIPES.INIMIGOS)
        : setEquipeAtual(EQUIPES.CONCLUIDO)
    }

    function handleConfirmar() {
        playClick(2)
        const _aliados = aliados.map(aliado=>{
            return {
                ...basePersonagem,
                personagemId: aliado.id,
                level: aliado.level,
                visualAtivo: aliado.visualId,
                nome: aliado.id===1?aliado.nome:null,
                titulo: aliado.id===1?aliado.titulo:null,
                equipamentoProntoId: aliado.equipamentoProntoId,
            }
        })
        const _inimigos = inimigos.map(inimigo=>{
            return {
                ...basePersonagem,
                personagemId: inimigo.id,
                level: inimigo.level,
                visualAtivo: inimigo.visualId,
                nome: inimigo.id===1?inimigo.nome:null,
                titulo: inimigo.id===1?inimigo.titulo:null,
                equipamentoProntoId: inimigo.equipamentoProntoId,
            }
        })
        setUser({
            ...user,
            modos: {
                ...user.modos,
                versus: {
                    ...user.modos.versus,
                    aliados: _aliados,
                    inimigos: _inimigos,
                    mapa: null,
                    jogadores: jogadores,
                }
            }
        })
        navigate(`/versus/${jogadores}/mapas`)
    }

    function handleDetalharItem(item) {
        playClick(1)
        setItemEscolhido(item)
        setItemModal(true)
    }

    function renderCardPersonagem(personagem) {
        return (
            <li
            onMouseEnter={()=>playHover(1)}
            className={personagem.id===personagemEscolhido.id?"card-escolhido":null}
            onClick={()=>handleEscolherCard(personagem)}
            style={{
                background: `radial-gradient(circle, var(--black) 10%, var(--${personagem.corTema}) 100%)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                margin: personagens.length<=10? "8px 2px" : "2px"
                }}>
                    <img src={personagem.perfil} alt="" />
            </li>
        )
    }

    function renderEscolhidoNome(isAliado) {
        const _personagem = equipeAtual!==EQUIPES.ALIADOS && isAliado ? aliados[aliados.length-1]
        : equipeAtual===EQUIPES.ALIADOS && !isAliado ? PERSONAGEM_VAZIO
        : equipeAtual===EQUIPES.CONCLUIDO?inimigos[inimigos.length-1]
        : personagemEscolhido
        return _personagem.id?(
            <div>
                <h1>{_personagem.nome}</h1>
                <img src={ICONS[`ELEMENTO_${_personagem.elemento}`]} alt="" />
            </div>
        ): <div style={{opacity:"0%"}}></div>
    }

    function renderEscolhidoPerfil(isAliado) {
        const _personagem = equipeAtual!==EQUIPES.ALIADOS && isAliado ? aliados[aliados.length-1]
        : equipeAtual===EQUIPES.ALIADOS && !isAliado ? PERSONAGEM_VAZIO
        : equipeAtual===EQUIPES.CONCLUIDO?inimigos[inimigos.length-1]
        : personagemEscolhido
        return (
            <img
            src={_personagem.perfil}
            alt=""
            style={!isAliado?{transform:"scaleX(-1)"}:null}
            />
        )
    }

    function renderPersonagemEscolhido(isAliado, personagem) {
        return (
            <div style={{
            background: `radial-gradient(circle, var(--black) 10%, var(--${
                personagem?personagem.corTema:"tema-cinza"
            }) 100%)`,
            backgroundSize: "cover",
            backgroundPosition: "center"
            }}>
                <img
                style={!isAliado? {transform: "scaleX(-1)"} :null}
                src={personagem?personagem.perfil:IMAGES.GENERICO_PERFIL}
                alt="" />
            </div>
        )
    }

    function renderAtributo(texto, valor, icon) {
        return (
            <li>
                <div>
                    <img src={icon} alt="" />
                    {texto}:
                </div>
                {valor}
            </li>
        )
    }

    function renderEquipamento(tipo, icon) {
        const item = ITENS_DATA.find(item=>
            item.id===personagemEscolhido.equipamentos[tipo])
        return (
            <div
            onClick={item?()=>handleDetalharItem(item) :null}>
                {
                item? <img src={item.sprite} alt="" />
                : <img src={icon} alt="" style={{opacity:"15%"}}/>
                }
            </div>
        )
    }

    function renderTitulo() {
        return equipeAtual===EQUIPES.ALIADOS&&jogadores>1?"Escolha a equipe do Jogador 1"
                :equipeAtual===EQUIPES.ALIADOS?"Escolha sua Equipe"
                :equipeAtual===EQUIPES.INIMIGOS&&jogadores>1?"Escolha a equipe do Jogador 2"
                :equipeAtual===EQUIPES.INIMIGOS?"Escolha seus inimigos"
                :"Confirmar Personagens"
        
    }

    return (
        <ContainerScreen>
            <BackButton />
            <div className="versus-personagens">
                <header className="titulo">
                    <h1>{renderTitulo()}</h1>
                </header>

                <section className="personagem-display">
                    {renderEscolhidoPerfil(false)}
                    <section className="inimigos-escolhidos">
                        {
                            inimigos.map((personagem,i)=>{
                                if(!(equipeAtual===EQUIPES.CONCLUIDO && i===inimigos.length-1)) {
                                    return renderPersonagemEscolhido(false, personagem)
                                }
                            })
                        }
                    </section>
                    <img src={ICONS.VERSUS} alt="Ícone de Versus" className="versus-icon" />
                    <section className="aliados-escolhidos">
                        {
                            aliados.map((personagem, i)=>{
                                if(!(equipeAtual!==EQUIPES.ALIADOS && i===aliados.length-1)) {
                                    return renderPersonagemEscolhido(true, personagem)
                                }
                            })
                        }
                    </section>
                    {renderEscolhidoPerfil(true)}
                </section>
                <div className="personagens-nomes">
                        {renderEscolhidoNome(false)}
                        {renderEscolhidoNome(true)}
                </div>

                <section className="personagens-list">
                    <section>
                        <button
                        onMouseEnter={()=>playHover(2)}
                        onClick={handleVoltarPagina}
                        className="setas">
                            {pagina.min>0
                            &&equipeAtual!==EQUIPES.CONCLUIDO?
                                <img
                                src={ICONS.SETA_DIREITA}
                                alt="" style={{transform:"scaleX(-1)"}}/>
                            :null}
                        </button>
                        <ul
                        style={personagens.length<=10?{alignItems: "self-start"}:null}
                        >
                            {equipeAtual!==EQUIPES.CONCLUIDO?
                                personagens.map(personagem=>{
                                    return renderCardPersonagem(personagem)
                                })
                            :null}
                            {equipeAtual===EQUIPES.CONCLUIDO ?
                                <div className="concluido">
                                    <BotaoPrimario onClick={handleConfirmar}>Confirmar</BotaoPrimario>
                                </div>
                            :null}
                        </ul>
                        <button
                        onMouseEnter={()=>playHover(2)}
                        onClick={handleProximaPagina}
                        className="setas">
                            {(pagina.max-1)<=PERSONAGENS_DATA.length
                            &&equipeAtual!==EQUIPES.CONCLUIDO?
                                <img
                                src={ICONS.SETA_DIREITA}
                                alt="" />
                            :null}
                        </button>
                    </section>
                </section>
                <section className="menu-opcoes">
                    <BotaoPrimario
                    onClick={aliados.length>0||inimigos.length>0?handleDesfazerEscolha:null}
                    ativo={aliados.length>0||inimigos.length>0}>
                        Desfazer
                    </BotaoPrimario>

                    <BotaoPrimario
                    onClick={personagemEscolhido.id?handleEscolherPersonagem:null}
                    ativo={personagemEscolhido.id}>
                        Escolher
                    </BotaoPrimario>

                    <BotaoPrimario
                    onClick={(equipeAtual===EQUIPES.ALIADOS&&aliados.length>0)
                        ||(equipeAtual===EQUIPES.INIMIGOS&&inimigos.length>0)
                        ?handleFinalizarEquipe:null}
                    ativo={(equipeAtual===EQUIPES.ALIADOS&&aliados.length>0)
                        ||(equipeAtual===EQUIPES.INIMIGOS&&inimigos.length>0)}>
                        Finalizar Equipe
                    </BotaoPrimario>
                    {equipeAtual!==EQUIPES.CONCLUIDO?
                        <h2 className="paginacao">p.{pagina.pag}/{pagina.pagTotal}</h2>
                    :null}
                </section>
                                
                {personagemEscolhido.id?
                <Modal isOpen={personagemModal} setIsOpen={setPersonagemModal}>
                    <div className="personagem-modal">
                        <header><h1 className="titulo-modal">Definir Personagem</h1></header>
                        <section>
                            <section className="personagem-info">
                                <header>
                                    <div>
                                        <h1>{personagemEscolhido.nome}</h1>
                                        <img src={ICONS[`ELEMENTO_${personagemEscolhido.elemento}`]} alt="" />
                                    </div>
                                    <div>
                                        {personagemEscolhido.level>1?
                                            <button 
                                            onMouseEnter={()=>playHover(1)}
                                            onClick={handleDiminuirLevel}>-</button>
                                        :   <button className="botao-vazio"></button>}
                                        <h2>Lvl.{personagemEscolhido.level}</h2>
                                        {findPersonagemData()
                                        .evolucoes.length>personagemEscolhido.level?
                                            <button 
                                            onMouseEnter={()=>playHover(1)}
                                            onClick={handleAumentarLevel}>+</button>
                                        :   <button className="botao-vazio"></button>}
                                    </div>
                                </header>
                                <h1>Atributos:</h1>
                                <ul>
                                    {renderAtributo("PV", 
                                        `${personagemEscolhido.pv.atual}/${personagemEscolhido.pv.maximo}`, ICONS.PV)}
                                    {renderAtributo("Força", personagemEscolhido.atributos.forca, ICONS.FORCA)}
                                    {renderAtributo("Agilidade", personagemEscolhido.atributos.agilidade, ICONS.AGILIDADE)}
                                    {renderAtributo("Defesa", personagemEscolhido.defesa, ICONS.DEFESA)}
                                    {renderAtributo("PM", 
                                        `${personagemEscolhido.pm.atual}/${personagemEscolhido.pm.maximo}`, ICONS.PM)}
                                    {renderAtributo("Magia", personagemEscolhido.atributos.magia, ICONS.MAGIA)}
                                    {renderAtributo("Vigor", personagemEscolhido.atributos.vigor, ICONS.VIGOR)}
                                </ul>
                                <div className="equipamentos">
                                    <header>
                                    Equipamentos:
                                    <div>
                                        <button
                                        onClick={personagemEscolhido.equipamentoProntoId>1?
                                            handleVoltarEquipamento:null}
                                        onMouseEnter={()=>playHover(2)}>
                                            {personagemEscolhido.equipamentoProntoId>1?
                                            <img src={ICONS.SETA_DIREITA} alt=""
                                            style={{transform:"scaleX(-1)"}}/>
                                            :null}
                                        </button>
                                        {personagemEscolhido.equipamentos.nome}
                                        <button
                                        onClick={personagemEscolhido.equipamentoProntoId!==
                                            findPersonagemData().equipamentosProntos.length?
                                            handleProximoEquipamento:null}
                                        onMouseEnter={()=>playHover(2)}>
                                            {personagemEscolhido.equipamentoProntoId!==
                                            findPersonagemData().equipamentosProntos.length?
                                            <img src={ICONS.SETA_DIREITA} alt="" />
                                            :null}
                                        </button>
                                    </div>
                                    </header>
                                    <section>
                                        {renderEquipamento("arma", ICONS.ARMA)}
                                        {renderEquipamento("armadura", ICONS.ARMADURA)}
                                        {renderEquipamento("acessorio1", ICONS.ANEL)}
                                        {renderEquipamento("acessorio2", ICONS.ANEL)}
                                    </section>
                                </div>
                            </section>

                            <section className="personagem-visual">
                                <button
                                onMouseEnter={personagemEscolhido.visualId>1?()=>playHover(2):null}
                                onClick={personagemEscolhido.visualId>1?handleVoltarVisual:null}>
                                    {personagemEscolhido.visualId>1?
                                        <img
                                        src={ICONS.SETA_DIREITA} className="setas"
                                        alt=""
                                        style={{transform:"scaleX(-1)", left: "100%"}}/>
                                    :null}
                                </button>
                                <div>
                                    <h1>{personagemEscolhido.visualNome}</h1>
                                    <img src={personagemEscolhido.sprite} alt="" />
                                </div>
                                <button
                                onMouseEnter={
                                    findPersonagemData()
                                    .visuais.length>personagemEscolhido.visualId?()=>playHover(2)
                                :null}
                                onClick={handleProximoVisual}>
                                {findPersonagemData()
                                .visuais.length>personagemEscolhido.visualId?
                                    <img
                                    src={ICONS.SETA_DIREITA} className="setas"
                                    alt=""
                                    style={{right: "100%"}}/>
                                :null}
                                </button>
                            </section>
                        </section>
                        <footer>
                            <BotaoPrimario
                            onClick={handleCancelarModal}>
                                Cancelar</BotaoPrimario>
                            <BotaoPrimario
                            onClick={handleConfirmarPersonagem}>
                                Confirmar</BotaoPrimario>
                        </footer>
                    </div>
                </Modal>
                :null}
                
                <ModalItem
                detalhesModal={itemModal}
                setDetalhesModal={setItemModal}
                itemEscolhido={itemEscolhido}
                />
            </div>
        </ContainerScreen>
    )

}