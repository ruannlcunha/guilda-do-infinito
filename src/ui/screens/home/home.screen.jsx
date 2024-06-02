import "./home.style.css"
import { ContainerScreen, Header, HomeBloqueado } from "../../components"

export function HomeScreen() {

    return (
        <ContainerScreen>
            <div className="home-screen">
                <Header/>
                <HomeBloqueado />
            </div>
        </ContainerScreen>
    )

}