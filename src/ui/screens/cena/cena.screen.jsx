import "./cena.style.css"
import { Cena, ContainerScreen } from "../../components";
import { MAPAS, PERFIL } from "../../../constants/images";
import { CENAS_TIPO } from "../../../constants";
import { useEffect, useState } from "react";
import { CAMPANHAS_DATA } from "../../../database/campanhas/campanhas.data";
import { useParams } from "react-router-dom";

export function CenaScreen() {
    const { campanha, idCapitulo, idEpisodio } = useParams()
    const [cenas, setCenas] = useState([])
    const [dialogo, setDialogo] = useState(0)

    useEffect(()=>{
      fetchData()
    },[])

    function fetchData() {
        const _campanha = CAMPANHAS_DATA.find(item => item.url === `/historia/${campanha}`)
        const _capitulo = _campanha.capitulos.find(item => item.id == idCapitulo)
        const _episodio = _capitulo.episodios.find(item => item.id == idEpisodio)
        setCenas(_episodio.content)
    }
    return (
        <ContainerScreen>
            {cenas.length>0?
                <Cena cenas={cenas} dialogo={dialogo} setDialogo={setDialogo}/>
            :null}
        </ContainerScreen>
    )

}