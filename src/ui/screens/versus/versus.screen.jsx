import "./versus.style.css"
import { ContainerScreen, Header, HomeBloqueado } from "../../components"

export function VersusScreen() {

    return (
        <ContainerScreen>
            <div className="versus-screen">
                <Header idSelected={3}/>
                <HomeBloqueado />
            </div>
        </ContainerScreen>
    )

}