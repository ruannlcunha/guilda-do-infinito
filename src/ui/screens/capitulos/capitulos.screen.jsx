import { BackButton, CapituloCard, ContainerScreen, EpisodioCard, HomeListItem } from "../../components"
import { useEffect, useState } from "react";
import { HISTORIAS_DATA } from "../../../database/historias/HISTORIAS.data";
import "./capitulos.style.css"
import { useParams } from "react-router-dom";
import { useSound } from "../../../hook";
import useGlobalUser from "../../../context/global-user.context";
import { calcularPorcentagem } from "../../../utils";

export function CapitulosScreen() {
    const { historia } = useParams()
    const { playClick, playHover } = useSound()
    const [data, setData] = useState(null)
    const [selectedData, setSelectedData] = useState(null)
    const [capituloEscolhido, setCapituloEscolhido] = useState(null)
    const [user, setUser] = useGlobalUser()

    useEffect(()=> {
        const novaData = fetchData()
        document.documentElement.style.setProperty('--capitulo-background', `url(${novaData.background})`)
        document.documentElement.style.setProperty('--episodio-background', `url()`)
    },[])

    useEffect(()=>{
        if(user.modos.capituloEscolhido) {
            if(user.modos.capituloEscolhido.historia===historia) {
                const _historia = HISTORIAS_DATA.find(item=>item.url===`/historia/${historia}`)
                const _capitulo = _historia.capitulos.find(capitulo=>capitulo.id===user.modos.capituloEscolhido.id)
                document.documentElement.style.setProperty('--capitulo-background', `url(${_capitulo.background})`)
                setCapituloEscolhido(_capitulo)
            }
        }
    },[capituloEscolhido])

    useEffect(()=> {
        if(selectedData) {
            if(selectedData.background) {
                document.documentElement.
                style.setProperty('--episodio-background', `url(${selectedData.background})`)
            }else {
                document.documentElement.
                style.setProperty('--episodio-background', `url()`)
            }
        }else {
            document.documentElement.
            style.setProperty('--episodio-background', `url()`)
        }
    },[selectedData])

    function fetchData() {
        const novaData = HISTORIAS_DATA.find(item=>item.url===`/historia/${historia}`)
        setData(novaData)
        return novaData
    }

    function handleEscolherCapitulo(capitulo) {
        playClick(1)
        setSelectedData(null)
        setCapituloEscolhido(capitulo)
        setUser({
            ...user,
            modos: {
                ...user.modos,
                capituloEscolhido: {id:capitulo.id, historia: historia},
            }
        })
    }

    function handleVoltarCapitulo() {
        playClick(1)
        setCapituloEscolhido(null)
        setUser({
            ...user,
            modos: {
                ...user.modos,
                capituloEscolhido: null,
            }
        })
    }

    function hoverVoltarCapitulo() {
        playHover(2)
        setSelectedData(null)
    }

    return data ? (
        <ContainerScreen>
            <BackButton navigateTo={"/historia"} />
            <div className="capitulos-screen">
                <div className="capitulos-list-screen">
                <div className="capitulos-titulo">
                    <h1>{capituloEscolhido? capituloEscolhido.title : data.title}</h1>
                </div>
                <section>
                    <section className="capitulos-list-left">
                        <section>
                            <ul>
                                {capituloEscolhido?
                                    <li className="sair-capitulo"
                                    onMouseEnter={hoverVoltarCapitulo}
                                    onClick={handleVoltarCapitulo}>
                                       <h1>Sair do Capítulo</h1>
                                    </li>
                                :null}
                                {data && !capituloEscolhido?
                                data.capitulos.map(item => {
                                    const totalEpisodios = item.episodios.length
                                    const _historia = user.modos.historia.find(historia=>historia.historiaId===data.id)
                                    const capituloEncontrado = _historia ? _historia.capitulos.find(capitulo=>capitulo.capituloId===item.id)
                                    :{episodios: []}
                                    const _capitulo = capituloEncontrado? capituloEncontrado : {episodios: []}
                                    const _episodios =  _capitulo.episodios.length>0? _capitulo.episodios : []
                                    const porcentagemConclusao = calcularPorcentagem(_episodios.length, totalEpisodios)
                                    return <CapituloCard
                                            key={item.id}
                                            item={item}
                                            porcentagemConclusao={porcentagemConclusao}
                                            selectedData={selectedData}
                                            setSelectedData={setSelectedData}
                                            onClick={!capituloEscolhido
                                                ? ()=> handleEscolherCapitulo(item)
                                                : ()=>{}
                                            }
                                            />
                                })
                                : capituloEscolhido ?
                                capituloEscolhido.episodios.map(item => {
                                    const requisito = capituloEscolhido.episodios.find(episodio=>episodio.id===item.preRequisito)
                                    let isBloqueado = false
                                    let isConcluido = false
                                    const _historia = user.modos.historia.find(historia=>historia.historiaId===data.id)
                                    const capituloEncontrado = _historia ? _historia.capitulos.find(capitulo=>capitulo.capituloId===capituloEscolhido.id)
                                    : {episodios: []}
                                    const _capitulo = capituloEncontrado? capituloEncontrado : {episodios: []}
                                    isConcluido = _capitulo.episodios.find(episodio=>episodio===item.id)
                                    if(requisito) {
                                        const _episodio = _capitulo.episodios.find(episodio=>episodio===requisito.id)
                                        isBloqueado = !_episodio
                                    }
                                    return <EpisodioCard 
                                            key={item.id}
                                            item={item}
                                            selectedData={selectedData}
                                            setSelectedData={setSelectedData}
                                            onClick={!capituloEscolhido
                                                ? ()=> handleEscolherCapitulo(item)
                                                : null
                                            }
                                            isBloqueado={isBloqueado}
                                            isConcluido={isConcluido}
                                            />
                                })
                                :<h1 className="capitulos-list-empty">Não há conteúdos nesta seção</h1>}
                            </ul>
                        </section>
                    </section>

                    <section className="capitulos-list-right"
                    style={!selectedData?{opacity:"0%"}:null}>
                        {selectedData?
                        <div style={{backgroundImage: `url(${selectedData.previewImage})`}}>
                            <section>
                                <h1>{selectedData.title}</h1>
                                <p>{selectedData.description}</p>
                            </section>
                        </div>
                        :null}
                    </section>
                </section>
            </div>
            </div>
        </ContainerScreen>
    ) : null

}