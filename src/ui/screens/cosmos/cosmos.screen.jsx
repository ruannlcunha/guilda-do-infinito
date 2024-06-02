import "./cosmos.style.css"
import { ContainerScreen, Header, HomeBloqueado } from "../../components"

export function CosmosScreen() {

    return (
        <ContainerScreen>
            <div className="cosmos-screen">
                <Header idSelected={4}/>
                <HomeBloqueado />
            </div>
        </ContainerScreen>
    )

}