import "./versus.style.css"
import { ContainerScreen, Header, HomeSection, MenuOption } from "../../components"
import { ICONS } from "../../../constants/images"

export function VersusScreen() {
    
    return (
        <ContainerScreen>
            <div className="versus-screen">
                <Header idSelected={3}/>
                <HomeSection titulo={"Versus"} icon={ICONS.VERSUS}>
                    <MenuOption
                    navigateTo ={"/versus/1/personagens"}
                    icon={ICONS.PERFIL}
                    text={"1 Jogador"}
                    />
                    <MenuOption
                    navigateTo ={"/versus/2/personagens"}
                    icon={ICONS.DUPLA}
                    text={"2 Jogadores Locais"}
                    />
                    <MenuOption
                    navigateTo ={"/versus/0/personagens"}
                    icon={ICONS.ROBO}
                    text={"Batalha Automática"}
                    />
                </HomeSection>
            </div>
        </ContainerScreen>
    )

}