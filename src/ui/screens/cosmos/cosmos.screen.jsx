import "./cosmos.style.css"
import { BotaoPrimario, ContainerScreen, Header } from "../../components"
import { ICONS, IMAGES } from "../../../constants/images"
import { GACHA_DATA } from "../../../database"
import { useEffect, useState } from "react"
import useGlobalUser from "../../../context/global-user.context"
import { useNavigate } from "react-router-dom"
import { useSound } from "../../../hook"

export function CosmosScreen() {
    const [gachaAtual, setGachaAtual] = useState(GACHA_DATA[0])
    const [user, setUser] = useGlobalUser()
    const {playHover, playClick} = useSound()
    const navigate = useNavigate()

    useEffect(()=>{
        user.modos.cosmos ? setGachaAtual(
            GACHA_DATA.find(gacha=>gacha.id===user.modos.cosmos)
        ) : null
    },[])

    function handleEscolherGacha(gachaId) {
        playClick(1)
        const _gacha = GACHA_DATA.find(item=>item.id === gachaId)
        setUser({
            ...user,
            modos: {
                ...user.modos,
                cosmos: gachaId,
            }
        })
        setGachaAtual(_gacha)
    }
    
    function renderJogarButton(quantidade) {
        return (
            <BotaoPrimario onClick={()=>navigate(`/cosmos/${gachaAtual.id}/${quantidade}`)}>
                <div>
                    <img src={ICONS.BENCAO} alt="Benção de Orion" />
                    x{quantidade}
                </div>
                Simular <span>x{quantidade}</span>
            </BotaoPrimario>
        )
    }

    function renderBannerOpcao(gacha) {
        return (
            <li>
                <div 
                onMouseEnter={()=>playHover(1)}
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