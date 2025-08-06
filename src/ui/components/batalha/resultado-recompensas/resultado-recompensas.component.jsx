import { useNavigate, useParams } from "react-router-dom";
import { ICONS } from "../../../../constants/images";
import { useSound } from "../../../../hook";
import "./resultado-recompensas.style.css";
import { BotaoPrimario } from "../../botao-primario/botao-primario.component";

export function ResultadoRecompensas({ recompensas, handleConcluirEpisodio, setLogsOpen }) {
  const { playClick } = useSound();
  const { historia } = useParams();
  const navigate = useNavigate();

  function handleContinuar() {
    playClick(2);
    handleConcluirEpisodio();
    navigate("/historia/" + historia);
  }

  function renderRecompensa(recompensa) {
    return (
      <div className="recompensa">
        <div>
          <img src={ICONS.CRISTAL_AZUL} alt="Imagem do item" />
          <h2>{recompensa.nome}</h2>
        </div>
        <h3>x{recompensa.quantidade}</h3>
      </div>
    );
  }

  return (
    <section className="recompensas-section">
      <header>
        <h1>Recompensas</h1>
      </header>
      <section>
        {recompensas.length > 0
          ? recompensas.map((recompensa) => {
              return renderRecompensa(recompensa);
            })
          : null}
      </section>
      <footer>
        <button className="botao-logs" onClick={() => setLogsOpen(true)}>
          <img src={ICONS.LOGS_ATIVO} alt="Logs" />
        </button>
        <BotaoPrimario onClick={handleContinuar}>Continuar</BotaoPrimario>
      </footer>
    </section>
  );
}
