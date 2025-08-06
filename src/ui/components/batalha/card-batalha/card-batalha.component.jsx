import { MODOS_JOGO } from "../../../../constants";
import { ICONS } from "../../../../constants/images";
import { useSound } from "../../../../hook";
import "./card-batalha.style.css";

export function CardBatalha({ personagem, reverse, handleTrocarModal, modo }) {
  const { playHover, playClick } = useSound();

  function handleTrocar() {
    playClick(1);
    handleTrocarModal(personagem);
  }

  return (
    <div className="card-batalha" style={reverse ? { flexDirection: "row" } : null}>
      <section className="card-info">
        <header>
          <img src={ICONS[`ELEMENTO_${personagem.elemento}`]} alt="" />
          <h1>{personagem.nome}</h1>
          <h2>Lv.{personagem.level}</h2>
        </header>
        <section>
          <section className="card-status">
            <h1>
              PV: {personagem.pv.atual}/{personagem.pv.maximo}
            </h1>
            <div className="barra-pv"></div>

            <h1>
              PM: {personagem.pm.atual}/{personagem.pm.maximo}
            </h1>
            <div className="barra-pm"></div>
          </section>
          <section className="card-atributos">
            <div>
              <img src={ICONS.FORCA} alt="Ícone de Força" />
              FOR: {personagem.atributos.forca}
            </div>
            <div>
              <img src={ICONS.AGILIDADE} alt="Ícone de Agilidade" />
              AGI: {personagem.atributos.agilidade}
            </div>
            <div>
              <img src={ICONS.MAGIA} alt="Ícone de Magia" />
              MAG: {personagem.atributos.magia}
            </div>
            <div>
              <img src={ICONS.VIGOR} alt="Ícone de Vigor" />
              VIG: {personagem.atributos.vigor}
            </div>
          </section>
        </section>
      </section>
      <div
        className="card-perfil"
        style={{
          transform: `${reverse ? "scaleX(-1)" : ""}`,
          background: `radial-gradient(circle, var(--black) 7%, var(--${personagem.corTema}) 100%)`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <img src={personagem.perfil} alt={`Perfil de ${personagem.nome}`} />
      </div>
      <div className="card-ponta" style={reverse ? { left: "-15px" } : { right: "-15px" }}></div>

      {!personagem.isInimigo && modo !== MODOS_JOGO.VERSUS ? (
        <button className="trocar-icon" onMouseEnter={() => playHover(1)} onClick={handleTrocar}>
          <img src={ICONS.TROCAR} alt="Ícone de trocar" />
        </button>
      ) : null}
    </div>
  );
}
