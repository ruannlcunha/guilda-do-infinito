import { useEffect } from "react"
import { useSound } from "../../../hook"
import "./home-list-item.style.css"
import { useNavigate } from "react-router-dom"

export function HomeListItem({item, selectedData, setSelectedData, onClick}) {
    const { playHover, playClick } = useSound()
    const navigate = useNavigate()

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
                cursor: "pointer",
                transition: "all 0.1s",
                textShadow: "2px 2px 2px var(--white)",
                width: "100%",
                padding: "2px"
            }
        }
    }

    return (<>
            <li
            onMouseEnter={()=>{handleHover(item)}}
            onClick={()=>handleClick(item)}
            style={selectStyle()}
            >
                <div className="preview-image"
                style={item.previewImage ? {backgroundImage: `url(${item.previewImage})`}: null}
                ></div>
                <section>
                    <h1>{item.title}</h1>
                    <p></p>
                </section>
                
            </li>
            </>
            )
    
}