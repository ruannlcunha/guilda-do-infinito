import "./start.style.css";
import { useEffect, useState } from "react";
import { AudioContainer, ContainerScreen, ModalConfig } from "../../components";
import { useMusic, useSound } from "../../../hook";
import { MUSICS } from "../../../constants/audios/musics.constant";
import { ICONS } from "../../../constants/images";
import { useNavigate } from "react-router-dom";
import useGlobalUser from "../../../context/global-user.context";
import { patchLogs } from "../../../utils/patch-logs.util";

export function StartScreen() {
  const { playHover, playClick } = useSound();
  const { startMusic } = useMusic();
  const navigate = useNavigate();
  const [user, setUser] = useGlobalUser();
  const [aviso, setAviso] = useState(true);
  const [configIsOpen, setConfigIsOpen] = useState(false);

  useEffect(() => {}, []);

  function handleAviso() {
    playClick(2);
    setAviso(false);
    startMusic(false);
  }

  function handleContinuar() {
    playClick(2);
    navigate("/historia");
  }

  function handleNovoJogo() {
    playClick(2);
    navigate("/novo-jogo");
  }

  function handleCarregarJogo() {
    playClick(2);
  }

  function handleConfig() {
    playClick(2);
    setConfigIsOpen(true);
  }

  function handleChange(e) {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      const json = JSON.parse(e.target.result);
      setUser(json);
      navigate("/historia");
    };
  }

  function renderTelaAviso() {
    return (
      <div className="start-aviso">
        <p>
          <span>AVISO:</span>
          Este é um projeto pessoal apenas para fins de diversão entre amigos. Nenhuma imagem ou som é de minha autoria.
          <br />
          <span>Continuar?</span>
        </p>
        <button onMouseEnter={() => playHover(1)} onClick={handleAviso}>
          Sim
        </button>
      </div>
    );
  }

  return (
    <ContainerScreen>
      <AudioContainer audio={MUSICS.START} />
      {aviso ? (
        renderTelaAviso()
      ) : (
        <div className="start-screen">
          <img src={ICONS.TITULO} alt="Logo de Guilda do Infinito" />
          <div style={user.nome ? { bottom: "3rem" } : null}>
            {user.nome ? (
              <button onMouseEnter={() => playHover(1)} onClick={handleContinuar}>
                Continuar
              </button>
            ) : null}
            <button onMouseEnter={() => playHover(1)} onClick={handleNovoJogo}>
              Novo Jogo
            </button>
            <label htmlFor={"userFile"} onMouseEnter={() => playHover(1)} onClick={handleCarregarJogo}>
              Carregar Jogo
            </label>
            <input id="userFile" name="userFile" type="file" className="user-input" onChange={handleChange} accept=".json" />
            <button onMouseEnter={() => playHover(1)} onClick={handleConfig}>
              Configuracoes
            </button>
          </div>
        </div>
      )}
      <ModalConfig isOpen={configIsOpen} setIsOpen={setConfigIsOpen} />
    </ContainerScreen>
  );
}
