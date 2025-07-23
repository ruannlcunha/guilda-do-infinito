import { ICONS } from "../../../constants/images"
import "./raridade-estrelas.style.css"

export function RaridadeEstrelas({ quantidade }) {
    console.log(quantidade)
    const estrelasArray = []
    for(let i=0;i<quantidade;i++) {
        estrelasArray.push(i)
     }

    return (
        <ul className="estrelas">
        {estrelasArray.map(item=>{
        return  <img src={ICONS.ESTRELA} key={item} alt="Estrela" />
        })}
        </ul>
    )

}