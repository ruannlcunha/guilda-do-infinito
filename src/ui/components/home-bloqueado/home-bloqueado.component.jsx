import { ICONS } from "../../../constants/images"
import "./home-bloqueado.style.css"

export function HomeBloqueado() {

    return (
        <div className="home-bloqueado">
            <h1>Em desenvolvimento</h1>
            <p>Esta página ainda está em desenvolvimento, aguarde novidades!</p>
            <img src={ICONS.CADEADO} alt="Cadeado" />
        </div>
    )

}