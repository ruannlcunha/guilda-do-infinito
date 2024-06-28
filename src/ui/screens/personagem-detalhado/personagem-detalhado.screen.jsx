import { useEffect, useState } from "react"
import { BackButton, ContainerScreen } from "../../components"
import "./personagem-detalhado.style.css"
import { useParams } from "react-router-dom"
import useGlobalUser from "../../../context/global-user.context"
import { calcularPorcentagem, instanciarPersonagem } from "../../../utils"
import { ICONS } from "../../../constants/images"

export function PersonagemDetalhado() {
    const { personagemId } = useParams()
    const [user] = useGlobalUser()
    const [personagem, setPersonagem] = useState(null)

    useEffect(()=>{
        const personagem = user.personagens.find(item=>item.personagemId == personagemId)
        const personagemInstanciado = instanciarPersonagem(personagem)
        setPersonagem(personagemInstanciado)
        const porcentagemExp = calcularPorcentagem(
            personagemInstanciado.experiencia.atual,
            personagemInstanciado.experiencia.maximo
        );
        document.documentElement.style.setProperty('--resultadoExp', `${porcentagemExp}%`);
        document.documentElement.style.setProperty('--fundo-tema',
            `var(--${personagemInstanciado.corTema})`
        );
    },[])

    function renderEstrelas(item) {
        const estrelasArray = []
        for(let i=0;i<item.estrelas;i++) {
            estrelasArray.push(i)
         }

        return (
            <>
            {estrelasArray.map(item=>{
                return  <img src={ICONS.ESTRELA} key={item} alt="Estrela" />
            })}
            </>
        )
    }

    function renderLosangulo() {
        return <div className="losangulo"></div>
    }

    return (
        <ContainerScreen>
            <BackButton />
            <div className="personagem-detalhado">
                {personagem?
                <>

                <section className="personagem-menu">
                    <ul>
                        <li>{renderLosangulo()} Evoluir</li>
                        <li>{renderLosangulo()} Equipamento</li>
                        <li>{renderLosangulo()} Inventário</li>
                        <li>{renderLosangulo()} Ações</li>
                        <li>{renderLosangulo()} Visuais</li>
                        {/* <li>{renderLosangulo()} Informações</li> */}
                    </ul>
                </section>
                <img src={personagem.sprite} alt="Sprite do personagem" />
                <section className="personagem-info">
                    <h1>{personagem.nome}</h1>
                    {console.log(personagem)}
                    <h2>{personagem.titulo}</h2>
                    <div>{renderEstrelas(personagem)}</div>
                    <h3>Level {personagem.level}<span>/20</span></h3>
                    <div className="barra-experiencia">
                        <h1>Exp.</h1>
                        <h1>{personagem.experiencia.atual}<span>/{personagem.experiencia.maximo}</span></h1>
                    </div>
                    <ul>
                        <li>
                            <div>
                            <img src={ICONS.CRISTAL_VERMELHO} alt="Ícone de Vida"/>
                            Pontos de Vida:
                            </div>
                            {personagem.pv.atual}/{personagem.pv.maximo}
                        </li>
                        <li>
                            <div>
                            <img src={ICONS.MAGIA} alt="Ícone de Mana" />
                            Pontos de Mana:
                            </div>
                            {personagem.pm.atual}/{personagem.pm.maximo}
                        </li>
                        <li>
                            <div>
                            <img src={ICONS.FORCA} alt="Ícone de Força" />
                            Força:
                            </div>
                            {personagem.atributos.forca}
                        </li>
                        <li>
                            <div>
                            <img src={ICONS.AGILIDADE} alt="Ícone de Agilidade" />
                            Agilidade:
                            </div>
                            {personagem.atributos.agilidade}
                        </li>
                        <li>
                            <div>
                            <img src={ICONS.MAGIA} alt="Ícone de Magia" />
                            Magia:
                            </div>
                            {personagem.atributos.magia}
                        </li>
                        <li>
                            <div>
                            <img src={ICONS.VIGOR} alt="Ícone de Vigor" />
                            Vigor:
                            </div>
                            {personagem.atributos.vigor}
                        </li>
                    </ul>
                    <h3>Equipamentos:</h3>
                    <section className="equipamentos">
                        <div>
                            {personagem.equipamentos.arma ?
                                <img src={ICONS.AGILIDADE} alt={`Ícone de `} />
                            :
                            <>
                            <img src={ICONS.CROSS_SWORD} alt="Ícone de arma" />
                            <h1>+</h1>
                            </>}
                        </div>
                        <div>
                            {personagem.equipamentos.armadura ?
                                <img src={ICONS.AGILIDADE} alt={`Ícone de `} />
                            :
                            <>
                            <img src={ICONS.CROSS_SWORD} alt="Ícone de armadura" />
                            <h1>+</h1>
                            </>}
                        </div>
                        <div>
                            {personagem.equipamentos.acessorio1 ?
                                <img src={ICONS.AGILIDADE} alt={`Ícone de `} />
                            :
                            <>
                            <img src={ICONS.CROSS_SWORD} alt="Ícone de acessório" />
                            <h1>+</h1>
                            </>}
                        </div>
                        <div>
                            {personagem.equipamentos.acessorio2 ?
                                <img src={ICONS.AGILIDADE} alt={`Ícone de `} />
                            :
                            <>
                            <img src={ICONS.CROSS_SWORD} alt="Ícone de acessório" />
                            <h1>+</h1>
                            </>}
                        </div>
                    </section>
                </section>

                </>
                :null}
            </div>
        </ContainerScreen>
    )

}