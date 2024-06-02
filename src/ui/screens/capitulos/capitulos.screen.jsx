import { BackButton, ContainerScreen, HomeListItem } from "../../components"
import { useEffect, useState } from "react";
import { CAMPANHAS_DATA } from "../../../database/campanhas/campanhas.data";
import "./capitulos.style.css"
import { useParams } from "react-router-dom";
import { IMAGES } from "../../../constants/images";
import { useSound } from "../../../hook";

export function CapitulosScreen() {
    const { campanha } = useParams()
    const { playClick } = useSound()
    const [data, setData] = useState(null)
    const [selectedData, setSelectedData] = useState(null)
    const [capituloEscolhido, setCapituloEscolhido] = useState(null)

    useEffect(()=> {
        const novaData = fetchData()
        document.documentElement.style.setProperty('--capitulo-background', `url(${novaData.background})`)
        document.documentElement.style.setProperty('--episodio-background', `url()`)
    },[])

    useEffect(()=> {
        if(selectedData) {
            if(selectedData.background) {
                document.documentElement.
                style.setProperty('--episodio-background', `url(${selectedData.background})`)
            }else {
                document.documentElement.
                style.setProperty('--episodio-background', `url()`)
            }
        }
    },[selectedData])

    function fetchData() {
        const novaData = CAMPANHAS_DATA.find(item=>item.url===`/historia/${campanha}`)
        setData(novaData)
        setSelectedData(novaData[0])
        return novaData
    }

    function handleEscolherCapitulo(capitulo) {
        playClick(1)
        setSelectedData(null)
        setCapituloEscolhido(capitulo)
    }

    function handleVoltarCapitulo() {
        playClick(1)
        setCapituloEscolhido(null)
    }

    return data ? (
        <ContainerScreen>
            <BackButton/>
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
                                    onClick={handleVoltarCapitulo}>
                                       <h1>Sair do Capítulo</h1>
                                    </li>
                                :null}
                                {data && !capituloEscolhido?
                                data.capitulos.map(item => {
                                    return <HomeListItem 
                                            key={item.id}
                                            item={item}
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
                                    return <HomeListItem 
                                            key={item.id}
                                            item={item}
                                            selectedData={selectedData}
                                            setSelectedData={setSelectedData}
                                            onClick={!capituloEscolhido
                                                ? ()=> handleEscolherCapitulo(item)
                                                : null
                                            }
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