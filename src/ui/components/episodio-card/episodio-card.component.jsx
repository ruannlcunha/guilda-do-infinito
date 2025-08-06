import { EPISODIO_TIPO } from "../../../constants";
import { ICONS } from "../../../constants/images";
import { useSound } from "../../../hook";
import "./episodio-card.style.css";
import { useNavigate } from "react-router-dom";

export function EpisodioCard({ item, selectedData, setSelectedData, onClick, isBloqueado, isConcluido }) {
  const { playHover, playClick } = useSound();
  const navigate = useNavigate();

  function handleHover(data) {
    setSelectedData(data);
    playHover(1);
  }

  function handleClick(option) {
    playClick(2);
    onClick ? onClick() : navigate(option.url);
  }

  function selectStyle() {
    if (item === selectedData && !isBloqueado) {
      return {
        background: `linear-gradient(0deg, var(--light-blue) 0%, var(--light-blue) 50%,
                            var(--${item.tipo.cor}) 55%, var(--${item.tipo.gradient}) 85%)`,
        cursor: "var(--cursor-pointer)",
        transition: "all 0.1s",
        textShadow: "2px 2px 2px var(--white)",
        width: "100%",
        padding: "2px"
      };
    } else if (!isBloqueado) {
      return {
        background: `linear-gradient(0deg, var(--light-grey) 0%, var(--light-grey) 50%,
                            var(--${item.tipo.cor}) 55%, var(--${item.tipo.gradient}) 85%)`
      };
    } else {
      return {
        background: `linear-gradient(0deg, var(--light-grey) 0%, var(--light-grey) 50%,
                            var(--black) 55%, var(--light-black) 85%)`
      };
    }
  }

  return (
    <>
      <li
        className={`episodio-card${isBloqueado ? " episodio-bloqueado" : ""}`}
        onMouseEnter={
          !isBloqueado
            ? () => {
                handleHover(item);
              }
            : null
        }
        onClick={!isBloqueado ? () => handleClick(item) : null}
        style={selectStyle()}
      >
        <div className="preview-image" style={item.previewImage && !isBloqueado ? { backgroundImage: `url(${item.previewImage})` } : { backgroundColor: "black" }}>
          {isBloqueado ? <img src={ICONS.CADEADO} alt="" /> : null}
        </div>
        <section>
          <h1>{!isBloqueado ? item.title : "???"}</h1>
          <section>
            {item.tipo != EPISODIO_TIPO.DIALOGO && !isBloqueado ? <div className="dificuldade">{item.batalha.nivel}</div> : null}
            <h1
              style={
                item.tipo != EPISODIO_TIPO.DIALOGO && !isBloqueado
                  ? {
                      borderRadius: `0 5px 5px 0`,
                      paddingLeft: `6%`,
                      border: `solid 2px var(--${item.tipo.cor})`
                    }
                  : {
                      border: `solid 2px var(--${!isBloqueado ? item.tipo.cor : "black"})`,
                      borderRadius: `5px`,
                      paddingLeft: `3%`,
                      marginLeft: `1vw`
                    }
              }
            >
              {isBloqueado ? "???" : item.tipo.nome}
            </h1>
          </section>
        </section>
        {isConcluido ? <img src={ICONS.CONCLUIDO} alt="Episódio Concluído" className="concluido" /> : null}
      </li>
    </>
  );
}
