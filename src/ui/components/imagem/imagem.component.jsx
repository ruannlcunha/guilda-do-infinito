import { useEffect, useState } from "react"
import { ICONS } from "../../../constants/images"

export function Imagem({src, alt}) {
    const [imagem, setImagem] = useState(ICONS.LOADING)

    useEffect(()=>{
        handleLoad()
    },[src])

    function handleLoad() {
        setImagem(src)
    }

    return (
        <img src={imagem} alt={alt} onLoad={handleLoad}/>
    )

}