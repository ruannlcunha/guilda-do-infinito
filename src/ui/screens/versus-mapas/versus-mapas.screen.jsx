import "./versus-mapas.style.css"
import { BackButton, BotaoPrimario, ContainerScreen } from "../../components";
import { useEffect, useState } from "react";
import { MAPAS_DATA } from "../../../database";
import { ICONS, IMAGES, MAPAS } from "../../../constants/images";
import useGlobalUser from "../../../context/global-user.context";
import { useNavigate } from "react-router-dom";
import { useSound } from "../../../hook";

export function VersusMapaScreen() {
    const MAPA_VAZIO ={id: null, img: IMAGES.CEU}
    const [pagina, setPagina] = useState({min: 0, max:19, pag: 1, pagTotal: 0})
    const [mapaEscolhido, setMapaEscolhido] = useState(MAPA_VAZIO)
    const [mapas, setMapas] = useState([])
    const [user, setUser] = useGlobalUser()
    const {playClick, playHover} = useSound()
    const navigate = useNavigate()

    useEffect(()=>{
        const _mapas = []
        MAPAS_DATA.forEach((mapa,i)=>{
            if(i>=pagina.min && i<=pagina.max) {
                _mapas.push(mapa)
            }
        })
        setMapas(_mapas)
    },[pagina])

    useEffect(()=>{
        setPaginaTotal()
    },[])

    useEffect(()=>{
        document.documentElement.style.setProperty('--fundo-mapa', `url(${mapaEscolhido.img})`);
    },[mapaEscolhido])

    function setPaginaTotal() {
        let _pagina = {min: 0, max:19, pag: 1}
        while((_pagina.max-1)<=MAPAS_DATA.length) {
            _pagina = {min: _pagina.min+20, max: _pagina.max+20, pag: _pagina.pag+1}
        }
        setPagina(old=>{return {...old, pagTotal: _pagina.pag}})
    }

    function handleVoltarPagina() {
        playClick(1)
        if(pagina.min>0) {
            setPagina(old=> {return {...old,min: old.min-20, max: old.max-20, pag: old.pag-1}})
        }
    }

    function handleProximaPagina() {
        playClick(1)
        if((pagina.max-1)<=mapas.length) {
            setPagina(old=> {return {...old,min: old.min+20, max: old.max+20, pag: old.pag+1}})
        }
    }

    function handleEscolherCard(mapa) {
        playClick(1)
        if(mapa.id!=mapaEscolhido.id) {
            setMapaEscolhido(mapa)
        }else {
            setMapaEscolhido(MAPA_VAZIO)
        }
    }

    function handleConfirmar() {
        playClick(2)
        setUser({
            ...user,
            modos: {
                ...user.modos,
                versus: {
                    ...user.modos.versus,
                    mapa: mapaEscolhido,
                }
            }
        })
        navigate("/versus/batalha")
    }

    function renderCardMapa(mapa) {
        return (
            <li
            onMouseEnter={()=>playHover(1)}
            className={mapa.id===mapaEscolhido.id?"card-escolhido":null}
            onClick={()=>handleEscolherCard(mapa)}
            style={{backgroundImage: `url(${mapa.img})`}}>
            </li>
        )
    }

    return (
        <ContainerScreen>
            <BackButton />
            <div className="versus-mapas">
                <header className="titulo">
                    <h1>Escolha o mapa</h1>
                </header>
                <section className="menu-opcoes">
                    <BotaoPrimario
                    onClick={mapaEscolhido.id?handleConfirmar:null}
                    ativo={mapaEscolhido.id}>
                        Confirmar
                    </BotaoPrimario>
                    <h2 className="paginacao">p.{pagina.pag}/{pagina.pagTotal}</h2>
                </section>
                <section className="mapas-list">
                    <header>
                        {mapaEscolhido.id?
                        <div>
                            <h1>{mapaEscolhido.nome}</h1>
                        </div>
                        :null}
                    </header>
                    <section>
                        <button
                        onMouseEnter={()=>playHover(2)}
                        onClick={handleVoltarPagina}
                        className="setas">
                            {pagina.min>0?
                                <img
                                src={ICONS.SETA_DIREITA}
                                alt="" style={{transform:"scaleX(-1)"}}/>
                            :null}
                        </button>
                        <ul>
                            {
                                mapas.map(mapa=>{
                                    return renderCardMapa(mapa)
                                })
                            }
                        </ul>
                        <button
                        onMouseEnter={()=>playHover(2)}
                        onClick={handleProximaPagina}
                        className="setas">
                            {(pagina.max-1)<=mapas.length?
                                <img
                                src={ICONS.SETA_DIREITA}
                                alt="" />
                            :null}
                        </button>
                    </section>
                </section>
            </div>
        </ContainerScreen>
    )

}