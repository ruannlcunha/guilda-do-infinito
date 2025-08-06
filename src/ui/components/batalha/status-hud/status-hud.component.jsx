import "./status-hud.style.css";
import { calcularPorcentagem } from "../../../../utils";
import pixelTexture from "../../../../assets/img/textures/BANNER_TEXTURE.png";
import { CATEGORIA_CONDICAO, TIPO_CONDICAO } from "../../../../constants/personagens/personagem.constant";
import { ICONS } from "../../../../constants/images";
import { useSound } from "../../../../hook";
import { BotaoFecharModal, Modal, ModalPersonagemDetalhes } from "../../";
import { useEffect, useState } from "react";

export function StatusHUD({ personagem, personagens, jogadores, jogadaAutomatica }) {
  const { playClick, playHover } = useSound();
  const [condicaoIsOpen, setCondicaoIsOpen] = useState(false);
  const [condicaoAtiva, setCondicaoAtiva] = useState(null);
  const [personagemDetalhado, setPersonagemDetalhado] = useState(null);
  const [modalPersonagem, setModalPersonagem] = useState(false);

  useEffect(() => {
    !modalPersonagem ? setPersonagemDetalhado(false) : null;
  }, [modalPersonagem]);

  const styleInvertido = (personagem.isInimigo && jogadores == 1) || (personagem.isInimigo && jogadores == 1) || (jogadores == 1 && jogadaAutomatica) || (jogadores == 2 && jogadaAutomatica) || jogadores == 0;
  const porcentagemVida = calcularPorcentagem(personagem.pv.atual, personagem.pv.maximo);
  const porcentagemMana = calcularPorcentagem(personagem.pm.atual, personagem.pm.maximo);

  function handleVerCondicao(condicao) {
    playClick(1);
    setCondicaoIsOpen(true);
    setCondicaoAtiva(condicao);
  }

  function handleModalDetalhes() {
    setPersonagemDetalhado(personagem);
    setModalPersonagem(true);
  }

  function renderCondicaoModal() {
    return condicaoAtiva ? (
      <Modal isOpen={condicaoIsOpen} setIsOpen={setCondicaoIsOpen}>
        <div className="condicao-modal">
          <BotaoFecharModal setIsOpen={setCondicaoIsOpen} style={{ borderColor: "var(--white)", background: "none" }} />
          <header>
            <div>
              <h1>{condicaoAtiva.nome}</h1>
              <img
                src={condicaoAtiva.icon}
                style={{
                  backgroundColor: condicaoAtiva.tipo === TIPO_CONDICAO.BUFF ? "var(--mid-green)" : "var(--mid-red)"
                }}
                alt={`Ícone da condição ${condicaoAtiva.nome}`}
              />
            </div>
          </header>
          <section>
            {condicaoAtiva.duracao || condicaoAtiva.duracao === 0 ? (
              <p>
                <span>{condicaoAtiva.duracaoTitulo}: </span>
                {condicaoAtiva.duracao} restante
                {condicaoAtiva.duracao > 1 ? "s" : null}
              </p>
            ) : null}
            {condicaoAtiva.bonus ? (
              <p>
                <span>{condicaoAtiva.bonusTitulo}: </span>
                {condicaoAtiva.bonus}
              </p>
            ) : null}
            {condicaoAtiva.personagemId ? (
              <p>
                <span>{condicaoAtiva.personagemTitulo}: </span>
                {personagens.find((_personagem) => _personagem.idCombate === condicaoAtiva.personagemId).nome}
              </p>
            ) : null}
            <p>
              <span>Descrição: </span> {condicaoAtiva.descricao}
            </p>
          </section>
        </div>
      </Modal>
    ) : null;
  }

  return (
    <section
      className="hud-status"
      style={{
        alignItems: `${styleInvertido ? "self-start" : ""}`,
        borderRadius: `${styleInvertido ? "5px 0px 0px 0px" : ""}`,
        background: `url(${pixelTexture}) ${styleInvertido ? "left" : "right"},
        linear-gradient(${styleInvertido ? "to left" : "to right"}, 
        var(--${personagem.corTema}) 0%, var(--${personagem.corTema}) 90%, transparent 99%, transparent 100%)`
      }}
    >
      <div
        className="perfil-personagem"
        onMouseEnter={
          !styleInvertido
            ? () => {
                playHover(1);
              }
            : null
        }
        onClick={!styleInvertido ? handleModalDetalhes : null}
        style={{
          cursor: `${!styleInvertido ? "var(--cursor-pointer)" : ""}`,
          animation: `${styleInvertido ? "hud-perfil-inimigo 1s alternate infinite ease-in-out" : ""}`,
          right: `${styleInvertido ? 0 : ""}`,
          left: `${!styleInvertido ? 0 : ""}`
        }}
      >
        <img src={personagem.perfil} alt="" />
        {!styleInvertido ? <h1 style={{ transform: `${!styleInvertido ? "scaleX(-1)" : ""}` }}>Ver detalhes</h1> : null}
      </div>

      <header className="status-header" style={styleInvertido ? { borderRadius: "0px 0px 0px 5px", flexDirection: "row" } : null}>
        <div>
          <h1 style={styleInvertido ? { marginLeft: "2rem" } : null}>{personagem.nome}</h1>
          <img src={ICONS[`ELEMENTO_${personagem.elemento}`]} alt={`ícone do elemento ${personagem.elemento}`} />
        </div>
      </header>
      <section className="status-section" style={styleInvertido ? { marginLeft: "2rem" } : null}>
        <div>
          <h2>
            PV: {personagem.pv.atual}/{personagem.pv.maximo}
          </h2>
          {personagem.condicoes
            .sort(function (a, b) {
              return a.nome.localeCompare(b.nome);
            })
            .map((condicao, i) => {
              if (condicao.categoria !== CATEGORIA_CONDICAO.MENTAL) {
                return (
                  <img
                    key={i}
                    src={condicao.icon}
                    onMouseEnter={() => playHover(1)}
                    onClick={() => handleVerCondicao(condicao)}
                    style={{
                      backgroundColor: condicao.tipo === TIPO_CONDICAO.BUFF ? "var(--mid-green)" : "var(--mid-red)"
                    }}
                    alt={`ícone de ${condicao.nome}`}
                  />
                );
              }
            })}
          {renderCondicaoModal()}
        </div>

        <div
          className="batalha-hud-barra"
          style={{
            background: `linear-gradient(to right, var(--red) ${porcentagemVida}%, var(--light-grey) 1%)`
          }}
        ></div>

        <div>
          <h2>
            PM: {personagem.pm.atual}/{personagem.pm.maximo}
          </h2>
          {personagem.condicoes
            .sort(function (a, b) {
              return a.nome.localeCompare(b.nome);
            })
            .map((condicao, i) => {
              if (condicao.categoria === CATEGORIA_CONDICAO.MENTAL) {
                return (
                  <img
                    key={i}
                    src={condicao.icon}
                    onMouseEnter={() => playHover(1)}
                    onClick={() => handleVerCondicao(condicao)}
                    style={{
                      backgroundColor: condicao.tipo === TIPO_CONDICAO.BUFF ? "var(--mid-green)" : "var(--mid-red)"
                    }}
                    alt={`ícone de ${condicao.nome}`}
                  />
                );
              }
            })}
        </div>

        <div
          className="batalha-hud-barra"
          style={{
            background: `linear-gradient(to right, var(--blue) ${porcentagemMana}%, var(--light-grey) 1%)`
          }}
        ></div>
      </section>
      <ModalPersonagemDetalhes personagem={personagemDetalhado} isOpen={modalPersonagem} setIsOpen={setModalPersonagem} />
    </section>
  );
}
