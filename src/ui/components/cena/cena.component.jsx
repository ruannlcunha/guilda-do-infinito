import { useEffect, useState } from "react";
import { CENAS_TIPO } from "../../../constants";
import { ICONS } from "../../../constants/images";
import { useMusic, useSound } from "../../../hook";
import { Imagem } from "../imagem/imagem.component";
import { OpcoesCena } from "../opcoes-cena/opcoes-cena.component";
import "./cena.style.css";
import { AudioContainer } from "../audio-container/audio-container.component";
import { useNavigate } from "react-router-dom";

export function Cena({ cenas, dialogo, setDialogo, handleFinish }) {
  const [dialogoAtivo, setDialogoAtivo] = useState(true);
  const [audioAtual, setAudioAtual] = useState(null);
  const { startMusic } = useMusic();
  const navigate = useNavigate();
  const { playClick } = useSound();

  useEffect(() => {
    if (cenas[dialogo].onEnter) {
      cenas[dialogo].onEnter();
    }
    if (cenas[dialogo].musica) {
      setAudioAtual(cenas[dialogo].musica);
    }
  }, [dialogo]);

  useEffect(() => {
    startMusic(audioAtual, true);
  }, [audioAtual]);

  function handleProximo() {
    playClick(1);
    if (dialogo + 1 < cenas.length) {
      setDialogo(dialogo + 1);
    }
    if (dialogo + 1 === cenas.length && cenas[dialogo].navigateTo) {
      navigate(cenas[dialogo].navigateTo);
    }
    if (dialogo + 1 === cenas.length && cenas[dialogo].onClick) {
      cenas[dialogo].onClick();
    }
    if (dialogo + 1 === cenas.length && cenas[dialogo].isFinish) {
      handleFinish();
    }
  }

  function handlePular() {
    playClick(2);
    let pulou = false;
    cenas.map((item, index) => {
      if (index > dialogo && !pulou && (item.onClick || item.onEnter || item.musica || item.isFinish || item.navigateTo)) {
        setDialogo(index);
        pulou = true;
      }
    });
  }

  return (
    <>
      <AudioContainer audio={audioAtual} />
      <OpcoesCena dialogoAtivo={dialogoAtivo} functions={{ setDialogoAtivo }} />
      {cenas.length - 1 !== dialogo ? (
        <button onClick={handlePular} className="pular-button">
          Pular cena
          <img src={ICONS.SETA_DIREITA} alt="Seta para direita" />
        </button>
      ) : null}
      <div className="cena-screen" style={{ backgroundImage: `url(${cenas[dialogo].fundo})` }}>
        {cenas[dialogo].tipo === CENAS_TIPO.DIALOGO && dialogoAtivo ? (
          <section className="cena-dialogo">
            <div>
              {cenas[dialogo].perfil ? <Imagem src={cenas[dialogo].perfil} alt={`Foto de ${cenas[dialogo].nome}`} /> : null}
              {cenas[dialogo].nome ? <h1 style={cenas[dialogo].perfil ? { right: "35%" } : { right: "-5%" }}>{cenas[dialogo].nome}</h1> : null}
            </div>
            <p onClick={handleProximo} translate="no">
              {cenas[dialogo].texto}
              <img src={ICONS.SETA_DIREITA} alt="Seta para direita" />
            </p>
          </section>
        ) : null}

        {cenas[dialogo].tipo === CENAS_TIPO.IMAGEM && dialogoAtivo ? (
          <button onClick={handleProximo} className="continuar-button">
            Continuar
            <img src={ICONS.SETA_DIREITA} alt="Seta para direita" />
          </button>
        ) : null}
      </div>
    </>
  );
}
