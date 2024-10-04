import { useEffect, useState } from "react";
import "./turnos.style.css";

export function Turnos({ personagens, turnos, ordemIniciativa, idAtivo, animacoes }) {
  const [ordemAtual, setOrdemAtual] = useState(ordemIniciativa);

  useEffect(() => {
    if (animacoes.iniciativaTerminou) {
      setOrdemAtual(() => {
        const ordenados = ordemIniciativa.sort(function (a, b) {
          return a.ordemIniciativa - b.ordemIniciativa;
        });
        return [...ordenados];
      });
    }
  }, [animacoes.iniciativaTerminou]);

  function renderDado(iniciativa) {
    return animacoes.isDadosAtivos ? (
      <div className="d20-turnos">{iniciativa}</div>
    ) : null;
  }

  function renderPerfilTurno(personagem, ordem, index) {
    const ativo =
      animacoes.iniciativaTerminou &&
      personagem.idCombate === idAtivo &&
      ordem.ordemIniciativa === turnos.atual &&
      idAtivo;
    const novoPersonagem = personagens.find(
      (item) => item.idCombate === personagem.idCombate
    );
    const perfilStyle = {
      backgroundColor: novoPersonagem.isInimigo?"var(--dark-red)":"var(--blue)",
      backgroundImage: `url(${novoPersonagem.perfil})`,
      filter: `${novoPersonagem.isMorto ? "grayscale(100%)" : null}`,
    };
    const resultadoDado = ordemIniciativa
    .find(ord=>ord.index===ordem.index).resultadoIniciativa

    return (
      <div
        key={index}
        style={perfilStyle}
        className={ativo&&novoPersonagem.isInimigo ? "turnos-ativo-inimigo"
          : ativo ? "turnos-ativo-aliado":null}
      >
        {renderDado(resultadoDado)}
      </div>
    );
  }

  return (
    <div className="turnos">
      {!animacoes.escolhendoAlvo ? (
        <>
          <header>Turnos</header>
          <section>
            <div className="turnos-ponta"></div>
            {personagens && ordemAtual
              ? ordemAtual.map((ordem, index) => {
                  const _personagem = personagens
                  .find(personagem=>personagem.idCombate===ordem.idCombate)

                  return renderPerfilTurno(_personagem, ordem, index);
                })
              : null}
            <div className="turnos-ponta"></div>
          </section>
        </>
      ) : null}
    </div>
  );
}
