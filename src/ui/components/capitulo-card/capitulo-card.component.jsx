import { useEffect } from "react"
import { useSound } from "../../../hook"
import "./capitulo-card.style.css"
import { useNavigate } from "react-router-dom"

export function CapituloCard({item, selectedData, setSelectedData, onClick, porcentagemConclusao}) {
    const { playHover, playClick } = useSound()
    const navigate = useNavigate()

    useEffect(()=>{
        document.documentElement.style.setProperty('--porcentagemConclusao', `${porcentagemConclusao}%`);
    },[])

    function handleHover(data) {
        setSelectedData(data)
        playHover(1)
    }

    function handleClick(option) {
        playClick(2)
        onClick ?
        onClick()
        : navigate(option.url)
    }

    function selectStyle() {
        if(item===selectedData) {
            return {
                backgroundColor: "var(--light-blue)",
                cursor: "var(--cursor-pointer)",
                transition: "all 0.1s",
                textShadow: "2px 2px 2px var(--white)",
                width: "100%",
                padding: "2px"
            }
        }
    }

    return (<>
            <li
            className="capitulo-card"
            onMouseEnter={()=>{handleHover(item)}}
            onClick={()=>handleClick(item)}
            style={selectStyle()}
            >
                <div className="preview-image"
                style={item.previewImage ? {backgroundImage: `url(${item.previewImage})`}: null}
                ></div>
                <section>
                    <h1>{item.title}</h1>
                    <section
                    style={{
                            background: `linear-gradient(to right, var(--pacific-blue) ${porcentagemConclusao}%, var(--white-transparent) 1%)`,
                            backgroundSize: `cover`,
                    }}  
                    >
                        {Math.floor(porcentagemConclusao)}% Concluído
                    </section>
                </section>
                
            </li>
            </>
            )
    
}