import { useEffect } from "react";
import { HUDAcoes, StatusHUD } from "../../";
import "./batalha-hud.style.css";
import { useIniciarTurno } from "../../../../hook/batalha/iniciar-turno/use-iniciar-turno.hook";

export function BatalhaHUD({ personagens, personagemAtivo, animacoes, batalha, jogadaAutomatica, acaoEmAndamento, functions }) {
  const { iniciarTurno } = useIniciarTurno();

  useEffect(() => {
    personagemAtivo && animacoes.iniciativaTerminou && !animacoes.batalhaTerminou && !acaoEmAndamento ? iniciarTurno(personagemAtivo, personagens, batalha.jogadores, jogadaAutomatica, functions) : null;

    if (animacoes.hudAtivo) {
      functions.setAnimacoes((old) => {
        return { ...old, hudAtivo: false };
      });
      setTimeout(() => {
        functions.setAnimacoes((old) => {
          return { ...old, hudAtivo: true };
        });
      }, 100);
    }
  }, [personagemAtivo.idCombate, animacoes.iniciativaTerminou, jogadaAutomatica]);

  function handleCancelarAcao() {
    functions.setAcaoAtiva({
      personagem: null,
      acao: null,
      alvos: [],
      tipoAcao: null
    });
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false, hudAtivo: true };
    });
  }

  function renderHud() {
    if (animacoes.hudAtivo) {
      return (
        <div
          className="batalha-hud"
          style={
            (personagemAtivo.isInimigo && batalha.jogadores < 2) || (!personagemAtivo.isInimigo && batalha.jogadores < 2 && jogadaAutomatica) || batalha.jogadores < 1
              ? {
                  flexDirection: "row-reverse"
                }
              : null
          }
        >
          <StatusHUD personagem={personagemAtivo} personagens={personagens} jogadores={batalha.jogadores} jogadaAutomatica={jogadaAutomatica} />
          <HUDAcoes personagem={personagemAtivo} personagens={personagens} jogadores={batalha.jogadores} jogadaAutomatica={jogadaAutomatica} functions={functions} />
        </div>
      );
    }

    if (animacoes.escolhendoAlvo) {
      return (
        <>
          <header className="escolhendo-alvo">Escolha um alvo</header>
          <footer className="cancelar-acao" onClick={handleCancelarAcao}>
            Cancelar
          </footer>
        </>
      );
    }
    return null;
  }

  return renderHud();
}
