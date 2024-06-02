import "./perfil.style.css"
import { ContainerScreen, Header, HomeBloqueado } from "../../components"

export function PerfilScreen() {

    return (
        <ContainerScreen>
            <div className="perfil-screen">
                <Header idSelected={6}/>
                <HomeBloqueado />
            </div>
        </ContainerScreen>
    )

}