import "./header.style.css"
import { HeaderOption, ModalConfigSom } from "../"
import { useSound } from "../../../hook"
import { useEffect, useState } from "react"
import { ICONS } from "../../../constants/images"
import { useNavigate } from "react-router-dom"

export function Header({idSelected}) {
    const navigate = useNavigate()
    const { playClick, playHover } = useSound()
    const [configIsOpen, setConfigIsOpen] = useState(false)

    useEffect(()=>{
    },[])

    function handleHome() {
        playClick(1)
        navigate("/home")
    }

    function handleConfig() {
        playClick(2)
        setConfigIsOpen(true)
    }

    return (
        <>
        <header className="header">
            <section className="header-top">
                <img
                className="header-logo"
                src={ICONS.HEADER_LOGO}
                onMouseEnter={()=>playHover(1)}
                onClick={handleHome} alt="Logo"
                />

                <ul>
                <HeaderOption
                key={1}
                navigateTo={"/historia"} 
                isSelected={idSelected===1?true:false}
                symbol={ICONS.HISTORIA}
                text={"História"}
                />
                <HeaderOption
                key={2}
                navigateTo={"/aventura"} 
                isSelected={idSelected===2?true:false}
                symbol={ICONS.AVENTURA}
                text={"Aventura"}
                />
                <HeaderOption
                key={3}
                navigateTo={"/versus"} 
                isSelected={idSelected===3?true:false}
                symbol={ICONS.VERSUS}
                text={"Versus"}
                />
                <HeaderOption
                key={4}
                navigateTo={"/cosmos"} 
                isSelected={idSelected===4?true:false}
                symbol={ICONS.COSMOS}
                text={"Cosmos"}
                />
                <HeaderOption
                key={5}
                navigateTo={"/loja"} 
                isSelected={idSelected===5?true:false}
                symbol={ICONS.LOJA}
                text={"Loja"}
                />
                <HeaderOption
                key={6}
                navigateTo={"/perfil"} 
                isSelected={idSelected===6?true:false}
                symbol={ICONS.PERFIL}
                text={"Perfil"}
                />
                </ul>

                <img 
                src={ICONS.CONFIG}
                alt="Engrenagem"
                className="header-config"
                onMouseEnter={()=>playHover(1)}
                onClick={handleConfig}
                />
            </section>
            <section className="header-bottom"></section>
        </header>
        <ModalConfigSom isOpen={configIsOpen} setIsOpen={setConfigIsOpen}/>
        </>
    )
}