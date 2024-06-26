import { ContainerScreen } from "../../components"
import "./not-found.style.css"
import { useNavigate } from "react-router-dom"

export function NotFoundScreen() {
    const navigate = useNavigate()

    function handleClick() {
        navigate(-1)
    }

    return (
        <ContainerScreen>
            <div className="not-found-screen">
                <section>
                    <h1>404</h1>
                    <p>Desculpe, não encontramos essa página em nosso domínio.</p>
                </section>
            </div>
        </ContainerScreen>
    )
}