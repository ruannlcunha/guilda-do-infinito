import { CardExperiencia } from "../../index"
import "./resultado-experiencia.style.css"

export function ResultadoExperiencia({personagens, experienciaMaximo}) {

    const aliados = personagens.filter(personagem=> !personagem.isInimigo && !personagem.isExtra)
    const expIndividual = aliados.length>0?Math.ceil((experienciaMaximo / (aliados.length))):0
    return (
    <section className="experiencia-section">
        <header>
            <h1>Experiência</h1>
        </header>
        <div className="experiencia-obtida">
            <div className="triangulo" style={{borderRight: "1rem solid var(--pacific-blue)"}}></div>
            <section style={{backgroundColor:"var(--pacific-blue)"}}>
                <h2>Exp.Total</h2>
                <h2>{experienciaMaximo} xp</h2>
            </section>
            <div className="triangulo" style={{borderRight: "1rem solid var(--pacific-blue)", transform:"scaleX(-1)"}}></div>
        </div>
        <div className="experiencia-obtida">
            <div className="triangulo"></div>
            <section>
                <h2>Exp.Individual</h2>
                <h2>{expIndividual} xp</h2>
            </section>
            <div className="triangulo" style={{transform:"scaleX(-1)"}}></div>
        </div>
        <section className="experiencia-personagens"
        style={aliados.length===0?{alignItems: "center", justifyContent: "center"}:null}>
            {aliados.length>0?
                aliados.map((personagem,i)=> {
                    return (
                        <CardExperiencia key={i} personagem={personagem} expRecebida={expIndividual}/>
                    )
                })
            :
            <h1>Nenhum personagem recebeu experiência.</h1>
            }
        </section>
    </section>
    )

}