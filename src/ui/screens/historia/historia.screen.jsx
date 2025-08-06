import "./historia.style.css";
import { AudioContainer, BotaoPrimario, ContainerScreen, Header, HomeBloqueado, HomeListItem } from "../../components";
import { useForm, useMusic, useSound } from "../../../hook";
import { ICONS } from "../../../constants/images";
import { useEffect, useState } from "react";
import { HISTORIAS_DATA } from "../../../database/historias/HISTORIAS.data";
import { useNavigate } from "react-router-dom";
import { MUSICS } from "../../../constants/audios/musics.constant";

export function HistoriaScreen() {
  const { startMusic } = useMusic();
  const { playBook, playClick, playHover } = useSound();
  const [data, setData] = useState(null);
  const [isLivroOpen, setIsLivroOpen] = useState(true);
  const [selectedData, setSelectedData] = useState(HISTORIAS_DATA[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const { formData, handleChange } = useForm({
    filter: ""
  });

  useEffect(() => {
    fetchData();
    startMusic(true);
  }, []);

  useEffect(() => {
    setIsLivroOpen(true);
    playBook();
  }, [selectedData]);

  async function fetchData() {
    setData(HISTORIAS_DATA);
    setSelectedData(HISTORIAS_DATA[0]);
  }

  function handleAnterior() {
    if (selectedIndex > 0) {
      playClick(1);
      setSelectedData(HISTORIAS_DATA[selectedIndex - 1]);
      setSelectedIndex(selectedIndex - 1);
      setIsLivroOpen(false);
    }
  }

  function handleProximo() {
    if (selectedIndex < data.length - 1) {
      playClick(1);
      setSelectedData(HISTORIAS_DATA[selectedIndex + 1]);
      setSelectedIndex(selectedIndex + 1);
      setIsLivroOpen(false);
    }
  }

  function handleIniciar() {
    playClick(2);
    navigate(selectedData.url);
  }

  return (
    <ContainerScreen>
      <AudioContainer audio={MUSICS.HOME} />
      <div className="historia-screen">
        <Header idSelected={1} />
        <div className="historia-list-screen">
          {data ? (
            <>
              {selectedIndex > 0 ? (
                <button className="setas" onMouseEnter={() => playHover(1)} onClick={handleAnterior}>
                  <img src={ICONS.SETA_DIREITA} style={{ transform: "scaleX(-1)" }} alt="Seta" />
                </button>
              ) : (
                <button className={"setas"}></button>
              )}

              {isLivroOpen ? (
                <div className="livro-historia">
                  <div>
                    <section>
                      <h1>{selectedData.title}</h1>
                      <p>{selectedData.description}</p>
                    </section>
                    <section>
                      <img src={selectedData.previewImage} alt="" />
                      <BotaoPrimario onClick={handleIniciar}>Iniciar</BotaoPrimario>
                    </section>
                  </div>
                </div>
              ) : null}

              {selectedIndex < data.length - 1 ? (
                <button className="setas" onMouseEnter={() => playHover(1)} onClick={handleProximo}>
                  <img src={ICONS.SETA_DIREITA} alt="Seta" />
                </button>
              ) : (
                <button className={"setas"}></button>
              )}
            </>
          ) : null}
        </div>
      </div>
    </ContainerScreen>
  );
}
