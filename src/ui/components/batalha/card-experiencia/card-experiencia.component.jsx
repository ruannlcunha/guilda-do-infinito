import "./card-experiencia.style.css";
import { calcularPorcentagem } from "../../../../utils";

export function CardExperiencia({ personagem }) {
  const porcentagemExp = calcularPorcentagem(personagem.experiencia.atual, personagem.experiencia.maximo);
  document.documentElement.style.setProperty("--resultadoExp", `${porcentagemExp}%`);

  return (
    <div className="card-experiencia">
      <img src={personagem.perfil} alt="Perfil do personagem" />
      <section>
        <div className="barra-perfil">
          <div className="triangulo" style={{ borderRight: `1rem solid var(--${personagem.corTema})` }}></div>
          <section style={{ backgroundColor: `var(--${personagem.corTema})` }}>
            <div className="triangulo"></div>
            <h1>{personagem.nome}</h1>
            <h2>Lvl {personagem.level}</h2>
            <div className="triangulo" style={{ margin: "0", transform: "scaleX(-1)" }}></div>
          </section>
          <div
            className="triangulo"
            style={{
              borderRight: `1rem solid var(--${personagem.corTema})`,
              transform: "scaleX(-1)"
            }}
          ></div>
        </div>
        <div className="barra-experiencia">
          <h1>Exp.</h1>
          <h1>
            {personagem.experiencia.atual}
            <span>/{personagem.experiencia.maximo}</span>
          </h1>
        </div>
      </section>
    </div>
  );
}
