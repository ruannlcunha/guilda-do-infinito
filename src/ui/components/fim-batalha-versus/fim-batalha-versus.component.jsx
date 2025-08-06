import { useEffect, useState } from "react";
import { BotaoPrimario, ContainerScreen, LogsFinais } from "..";
import "./fim-batalha-versus.style.css";
import { MUSICS } from "../../../constants/audios/musics.constant";
import { useNavigate, useParams } from "react-router-dom";

export function FimBatalhaVersus({ resultado, logs, setMusica }) {
  const navigate = useNavigate();
  const { jogadores } = useParams();
  const [isLogsOpen, setLogsOpen] = useState(false);

  useEffect(() => {
    setMusica({ src: MUSICS.VICTORY, loop: false });
  }, []);

  const containerStyle = {
    position: "absolute",
    zIndex: 1000,
    top: 0,
    left: 0,
    backgroundColor: "var(--black-transparent)",
    animation: "fade-in 1.5s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };

  return (
    <ContainerScreen style={containerStyle}>
      <LogsFinais logs={logs} isOpen={isLogsOpen} setIsOpen={setLogsOpen} />

      <h1 className="resultado-batalha" translate="no">
        {resultado}
      </h1>
      <div className="fim-batalha-versus">
        <BotaoPrimario
          onClick={() => {
            navigate(0);
          }}
        >
          Reiniciar Batalha
        </BotaoPrimario>
        <BotaoPrimario
          onClick={() => {
            navigate(`/versus/${jogadores}/personagens`);
          }}
        >
          Escolher Personagens
        </BotaoPrimario>
        <BotaoPrimario onClick={() => setLogsOpen(true)}>Visualizar Logs da Batalha</BotaoPrimario>
        <BotaoPrimario
          onClick={() => {
            navigate("/versus");
          }}
        >
          Voltar para o menu
        </BotaoPrimario>
      </div>
    </ContainerScreen>
  );
}
