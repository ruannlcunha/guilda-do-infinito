import "./personagem-talentos.style.css";
import { BackButton, CardAcao, ContainerScreen } from "../../components";
import { useParams } from "react-router-dom";
import useGlobalUser from "../../../context/global-user.context";
import { useEffect, useState } from "react";
import { instanciarPersonagem } from "../../../utils";

export function PersonagemTalentosScreen({ personagemBatalha, onBack }) {
  const { personagemId } = useParams();
  const [user] = useGlobalUser();
  const [personagem, setPersonagem] = useState(null);
  const [talentos, setTalentos] = useState([]);

  useEffect(() => {
    let personagemInstanciado = null;
    if (personagemBatalha) {
      personagemInstanciado = personagemBatalha;
    } else {
      const _personagem = user.personagens.find((item) => item.personagemId == personagemId);
      personagemInstanciado = instanciarPersonagem(_personagem);
    }
    setPersonagem(personagemInstanciado);
    document.documentElement.style.setProperty("--fundo-tema", `var(--${personagemInstanciado.corTema})`);
  }, []);

  useEffect(() => {
    if (personagem) {
      setTalentos(personagem.talentos);
    }
  }, [personagem]);

  return (
    <ContainerScreen>
      <BackButton
        onClick={
          onBack
            ? () => {
                onBack();
              }
            : null
        }
      />
      <div className="personagem-talentos">
        <section className="personagem">
          {personagem ? (
            <>
              <h1>{personagem.nome}</h1>
              <img src={personagem.sprite} alt="Sprite do personagem" />
            </>
          ) : null}
        </section>

        <section className="talentos-section">
          <h1 className="titulo">Talentos</h1>
          <div className="lista-talentos">
            <ul>
              {talentos.length > 0 ? (
                <>
                  {talentos.map((talento) => {
                    return (
                      <li className="talentos">
                        {" "}
                        <CardAcao acao={talento} />{" "}
                      </li>
                    );
                  })}
                </>
              ) : (
                <h1>O personagem não possui talentos.</h1>
              )}
            </ul>
          </div>
        </section>
      </div>
    </ContainerScreen>
  );
}
