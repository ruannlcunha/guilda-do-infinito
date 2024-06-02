import "./loja.style.css"
import { ContainerScreen, Header, HomeBloqueado } from "../../components"

export function LojaScreen() {

    return (
        <ContainerScreen>
            <div className="loja-screen">
                <Header idSelected={5}/>
                <HomeBloqueado />
            </div>
        </ContainerScreen>
    )

}