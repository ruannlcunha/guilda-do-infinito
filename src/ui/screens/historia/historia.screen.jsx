import "./historia.style.css"
import { ContainerScreen, Header, HomeBloqueado, HomeListItem } from "../../components"
import { useForm } from "../../../hook";
import { ICONS } from "../../../constants/images";
import { useEffect, useState } from "react";
import { CAMPANHAS_DATA } from "../../../database/campanhas/campanhas.data";

export function HistoriaScreen() {
    const [data, setData] = useState(null)
    const [selectedData, setSelectedData] = useState(CAMPANHAS_DATA[0])
    const {formData, handleChange} = useForm({
        filter: ""});

    useEffect(()=> {
        fetchData()
    },[])

    async function fetchData() {
        setData(CAMPANHAS_DATA)
        setSelectedData(CAMPANHAS_DATA[0])
    }

    return (
        <ContainerScreen>
            <div className="historia-screen">
                <Header idSelected={1}/>
                 <HomeBloqueado /> 
                {/*<div className="historia-list-screen">
                <div className="historia-titulo">
                    <img src={ICONS.HISTORIA} alt={`Livro aberto`} />
                    <h1>Campanhas</h1>
                </div>
                <section>
                    <section className="historia-list-left">
                        <header>
                            <input
                            name={"filter"}
                            value={formData.filter}
                            type="text" 
                            onChange={handleChange}
                            placeholder="Pesquisar"
                            />
                        </header>
                        <section>
                            <ul>
                                {data?
                                data.filter(item=> item.title.includes(formData.filter)).map(item => {
                                    return <HomeListItem 
                                            key={item.id}
                                            item={item}
                                            selectedData={selectedData} 
                                            setSelectedData={setSelectedData}
                                            />
                                })
                                :<h1 className="historia-list-empty">Não há conteúdos nesta seção</h1>}
                            </ul>
                        </section>
                    </section>

                    <section className="historia-list-right">

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
            </div>*/}
            </div>
        </ContainerScreen>
    )

}