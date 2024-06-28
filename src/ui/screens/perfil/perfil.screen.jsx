import "./perfil.style.css"
import { ContainerScreen, Header, HomeSection, MenuOption } from "../../components"
import { ICONS } from "../../../constants/images"
import { useNavigate } from "react-router-dom"
import useGlobalUser from "../../../context/global-user.context"
import { downloadJson } from "../../../utils"
import { useSound } from "../../../hook"

export function PerfilScreen() {
    const navigate = useNavigate()
    const { playClick } = useSound()
    const [user, setUser] = useGlobalUser()

    function handleSalvarJogo() {
        playClick(2)
        downloadJson(user)
    }

    function handleCarregarJogo() {
        playClick(2)
    }

    function handleChange(e) {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
          const json = JSON.parse(e.target.result)
          setUser(json)
          navigate(0)
        };
    };

    return (
        <ContainerScreen>
            <div className="perfil-screen">
                <Header idSelected={6}/>
                <HomeSection titulo={"Perfil"} icon={ICONS.PERFIL}>
                    <MenuOption
                    navigateTo ={"/perfil/personagens"}
                    icon={ICONS.PESSOAS}
                    text={"Personagens"}
                    />
                    <MenuOption
                    navigateTo ={"/perfil"}
                    icon={ICONS.INVENTARIO}
                    text={"Inventário"}
                    />
                    <MenuOption
                    icon={ICONS.SALVAR_JOGO}
                    text={"Salvar Jogo"}
                    onClick={handleSalvarJogo}
                    />
                    <label className="carregar-option"
                    onClick={handleCarregarJogo}
                    htmlFor="userFile"
                    >
                        <img src={ICONS.CARREGAR_JOGO} alt={`Símbolo de Carregar Jogo`} />
                        Carregar Jogo
                    </label>
                    <input
                    id="userFile"
                    name="userFile"
                    type="file"
                    className="user-input"
                    onChange={handleChange}
                    accept=".json"
                    />
                </HomeSection>

                <section className="perfil-section">
                    
                </section>

            </div>
        </ContainerScreen>
    )

}