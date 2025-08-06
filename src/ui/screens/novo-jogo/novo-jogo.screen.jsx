import { useState } from "react";
import { BotaoPrimario, Cena, ContainerScreen, Modal } from "../../components";
import { novoJogoCenas } from "./novo-jogo-cenas";
import "./novo-jogo.style.css";
import { useForm, useSound, useToast } from "../../../hook";
import VISUAL_1_SPRITE from "./assets/VISUAL_1_SPRITE.png";
import VISUAL_2_SPRITE from "./assets/VISUAL_2_SPRITE.png";
import VISUAL_3_SPRITE from "./assets/VISUAL_3_SPRITE.png";
import { ITEM_PROFICIENCIA, PRONOMES } from "../../../constants";
import personagemBase from "../../../database/personagens/_base/_base-pessoal.personagem.json";
import useGlobalUser from "../../../context/global-user.context";

export function NovoJogoScreen() {
  const [user, setUser, userInicial] = useGlobalUser();
  const [visualModal, setVisualModal] = useState(false);
  const [confirmarModal, setConfirmarModal] = useState(false);
  const [pronomesModal, setPronomesModal] = useState(false);
  const [nomeModal, setNomeModal] = useState(false);
  const [dialogo, setDialogo] = useState(0);
  const { toastWarning } = useToast();
  const { formData, setFormData, handleChange } = useForm({
    nome: "",
    pronomes: PRONOMES.NULO,
    visualId: null
  });
  const { playHover, playClick } = useSound();
  const AVENTUREIRO_SPRITE = {
    VISUAL_1_SPRITE,
    VISUAL_2_SPRITE,
    VISUAL_3_SPRITE
  };

  const DIALOGOS = novoJogoCenas(formData.visualId, formData.pronomes, formData.nome, setVisualModal, setPronomesModal, setNomeModal, setConfirmarModal);

  function escolherVisual(visualId) {
    playClick(1);
    if (visualId) {
      setFormData({
        ...formData,
        visualId
      });
    } else {
      toastWarning("Visual não pode ser vazio.");
    }
  }

  function confirmarVisual(visualId) {
    playClick(1);
    if (formData.visualId) {
      setVisualModal(false);
      setDialogo(dialogo + 1);
    } else {
      toastWarning("Visual não pode ser vazio.");
    }
  }

  function escolherPronomes(pronomes) {
    playClick(1);
    setFormData({
      ...formData,
      pronomes
    });
  }

  function confirmarPronomes() {
    playClick(1);
    if (formData.pronomes != PRONOMES.NULO) {
      setPronomesModal(false);
      setDialogo(dialogo + 1);
    } else {
      toastWarning("Pronomes não pode ser vazio.");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    playClick(1);
    if (formData.nome !== "") {
      setNomeModal(false);
      setDialogo(dialogo + 1);
    } else {
      toastWarning("Nome não pode ser vazio.");
    }
  }

  function handleCriarUsuario() {
    setUser({
      ...userInicial,
      nome: formData.nome,
      pronomes: formData.pronomes.tipo,
      visualId: formData.visualId,
      personagens: [
        {
          ...personagemBase,
          nome: formData.nome,
          titulo: `Aventureir${PRONOMES[formData.pronomes.tipo].minusculo_2}`,
          personagemId: 1,
          visualAtivo: formData.visualId,
          visuais: [1, 2, 3]
        }
      ]
    });
    setDialogo(dialogo + 1);
    setConfirmarModal(false);
  }

  function handleRecomecar() {
    setFormData({ nome: "", pronomes: PRONOMES.NULO, visualId: null });
    setConfirmarModal(false);
    setDialogo(7);
  }

  function renderVisualOption(id, sprite) {
    return (
      <li
        onMouseEnter={() => playHover(1)}
        style={
          formData.visualId === id
            ? {
                backgroundColor: "var(--light-grey)",
                border: "solid 2px var(--blue)"
              }
            : null
        }
        onClick={() => escolherVisual(id)}
      >
        <img style={formData.visualId === id ? { width: "100%" } : null} src={sprite} alt={`Sprite do Visual ${id}`} />
        <h2>Visual {id}</h2>
      </li>
    );
  }

  function renderPronomeOption(pronomes) {
    return (
      <li
        onMouseEnter={() => playHover(1)}
        style={
          formData.pronomes === pronomes
            ? {
                backgroundColor: "var(--light-grey)",
                border: "solid 2px var(--blue)"
              }
            : null
        }
        onClick={() => escolherPronomes(pronomes)}
      >
        <h2>{pronomes.pronome}</h2>
      </li>
    );
  }

  return (
    <ContainerScreen>
      <div className="novo-jogo-screen">
        <Cena cenas={DIALOGOS} dialogo={dialogo} setDialogo={setDialogo} />

        <Modal isOpen={visualModal} setIsOpen={() => {}}>
          <div className="visual-modal">
            <h1>Como você se parece?</h1>
            <ul>
              {renderVisualOption(1, VISUAL_1_SPRITE)}
              {renderVisualOption(2, VISUAL_2_SPRITE)}
              {renderVisualOption(3, VISUAL_3_SPRITE)}
            </ul>
            <BotaoPrimario onClick={confirmarVisual}>Escolher</BotaoPrimario>
          </div>
        </Modal>

        <Modal isOpen={pronomesModal} setIsOpen={() => {}}>
          <div className="pronomes-modal">
            <h1>Quais são os seus pronomes?</h1>
            <ul>
              {renderPronomeOption(PRONOMES.MASCULINO)}
              {renderPronomeOption(PRONOMES.FEMININO)}
              {renderPronomeOption(PRONOMES.NAO_BINARIO)}
            </ul>
            <BotaoPrimario onClick={confirmarPronomes}>Escolher</BotaoPrimario>
          </div>
        </Modal>

        <Modal isOpen={nomeModal} setIsOpen={() => {}}>
          <div className="nome-modal">
            <h1>Qual o seu nome?</h1>
            <form onSubmit={handleSubmit}>
              <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Digite seu nome." />
              <BotaoPrimario onClick={handleSubmit}>Confirmar</BotaoPrimario>
            </form>
          </div>
        </Modal>

        <Modal isOpen={confirmarModal} setIsOpen={() => {}}>
          <div className="confirmar-modal">
            <h1>Este é você?</h1>
            <ul>
              <div>
                <img src={AVENTUREIRO_SPRITE[`VISUAL_${formData.visualId}_SPRITE`]} alt="Sprite do aventureiro" />
                <li style={{ padding: "0" }}>
                  <h2 style={{ textAlign: "center" }}>Visual {formData.visualId}</h2>
                </li>
              </div>
              <div>
                <li>
                  <h2>
                    <span>Nome:</span> {formData.nome}
                  </h2>
                </li>
                <li>
                  <h2>
                    <span>Pronomes:</span> {formData.pronomes.pronome}
                  </h2>
                </li>
              </div>
            </ul>
            <div>
              <BotaoPrimario onClick={handleCriarUsuario}>Confirmar</BotaoPrimario>
              <BotaoPrimario onClick={handleRecomecar}>Refazer</BotaoPrimario>
            </div>
          </div>
        </Modal>
      </div>
    </ContainerScreen>
  );
}
