import { useEffect } from "react";
import { HUDAcoes, StatusHUD } from "../../";
import "./batalha-hud.style.css";
import { useIniciarTurno } from "../../../../hook/batalha/iniciar-turno/use-iniciar-turno.hook";

export function BatalhaHUD({ personagens, personagemAtivo, turno, animacoes, batalha, functions }) {
  const { iniciarTurno } = useIniciarTurno();

  useEffect(() => {
    personagemAtivo && animacoes.iniciativaTerminou && !animacoes.batalhaTerminou
    ? iniciarTurno(personagemAtivo, personagens, batalha.jogadores, functions) : null;

    if(animacoes.hudAtivo) {
      functions.setAnimacoes((old) => {return { ...old, hudAtivo: false };});
      setTimeout(()=>{
        functions.setAnimacoes((old) => {return { ...old, hudAtivo: true };});
      },100)
    }
    
  }, [personagemAtivo.idCombate, animacoes.iniciativaTerminou]);

  function handleCancelarAcao() {
    functions.setAcaoAtiva({ personagem: null, evento: null, alvos: [] });
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
            personagemAtivo.isInimigo && batalha.jogadores<2
            || batalha.jogadores<1
              ? {
                  flexDirection: "row-reverse",
                }
              : null
          }
        >
          <StatusHUD
          personagem={personagemAtivo} 
          jogadores={batalha.jogadores}
          />
          <HUDAcoes
          personagem={personagemAtivo}
          personagens={personagens}
          jogadores={batalha.jogadores}
          functions={functions}
          />
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
