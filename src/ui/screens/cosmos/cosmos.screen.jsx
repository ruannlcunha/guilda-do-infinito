import "./cosmos.style.css"
import { BotaoPrimario, ContainerScreen, Header } from "../../components"
import { ICONS, IMAGES } from "../../../constants/images"
import { GACHA_DATA } from "../../../database"
import { useState } from "react"
import useGlobalUser from "../../../context/global-user.context"
import { useNavigate } from "react-router-dom"

export function CosmosScreen() {
    const [gachaAtual, setGachaAtual] = useState(GACHA_DATA[0])
    const [user] = useGlobalUser()
    const navigate = useNavigate()

    function handleEscolherGacha(gachaId) {
        const _gacha = GACHA_DATA.find(item=>item.id === gachaId)
        setGachaAtual(_gacha)
    }
    
    function renderJogarButton(quantidade) {
        return (
            <BotaoPrimario onClick={()=>navigate(`/cosmos/${gachaAtual.id}/${quantidade}`)}>
                <div>
                    <img src={ICONS.BENCAO} alt="Benção de Orion" />
                    x{quantidade}
                </div>
                Jogar <span>x{quantidade}</span>
            </BotaoPrimario>
        )
    }

    function renderBannerOpcao(gacha) {
        return (
            <li>
                <div 
                onClick={()=>handleEscolherGacha(gacha.id)}
                className={gacha.id===gachaAtual.id ? "opcao-escolhida" : "opcao"}
                style={{backgroundImage: `url(${gacha.preview})`}}>
                    <img src={ICONS.ESCOLHER_ESQUERDA} alt="Mão apontando para esquerda." />
                </div>
            </li>
        )
    }

    return (
        <ContainerScreen>
            <div className="cosmos-screen">
                <Header idSelected={4}/>
                <section className="cosmos-section">
                    <div className="banner-opcoes">
                        <div>
                            <img src={ICONS.COSMOS} alt="Ícone do Cosmos" />
                        </div>
                        <h1>Banners</h1>
                        <ul>
                            {
                                GACHA_DATA.map(gacha=>{
                                    return renderBannerOpcao(gacha)
                                })
                            }
                        </ul>
                    </div>
                    <div className="banner-detalhes">
                        <header>
                            <div className="saldo">
                                <img src={ICONS.BENCAO} alt="Benção de Orion" />
                                {user.bencaos}
                            </div>
                        </header>
                        <img src={gachaAtual.banner} alt="Detalhes do Banner" />
                        <div>
                            {renderJogarButton(1)}
                            {renderJogarButton(10)}
                        </div>
                    </div>
                </section>
            </div>
        </ContainerScreen>
    )

}