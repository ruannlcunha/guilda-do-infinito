import { ICONS } from "../../../constants/images";
import useGlobalUser from "../../../context/global-user.context";
import { useSound } from "../../../hook";
import { useInstanciarPersonagens } from "../../../hook/batalha";
import { instanciarPersonagem } from "../../../utils";
import { instanciarBasePessoal } from "../../../utils/instanciar-personagem.util";
import { BotaoPrimario } from "../botao-primario/botao-primario.component";
import { Modal } from "../modal/modal.component";
import "./modal-personagem-lista.style.css";
import { useEffect, useState } from "react";

export function ModalPersonagemLista({ modalIsOpen, setModalIsOpen, aliadosExtras, personagemTrocado, aliados, functions }) {
  const { playClick, playHover } = useSound();
  const [personagens, setPersonagens] = useState([]);
  const { instanciarPersonagens } = useInstanciarPersonagens();
  const [user] = useGlobalUser();
  const [personagemEscolhido, setPersonagemEscolhido] = useState(personagemTrocado);
  useEffect(() => {
    if (personagemTrocado.id !== 0 && personagemTrocado.perfil) {
      const personagensExtras = aliadosExtras
        ? aliadosExtras.map((personagem) => {
            const personagemInstanciado = instanciarPersonagem(personagem);
            return { ...personagemInstanciado, isExtra: true };
          })
        : [];

      const personagensAdquiridos = user.personagens
        .map((personagem) => {
          const personagemInstanciado = instanciarPersonagem(personagem);
          return { ...personagemInstanciado };
        })
        .filter(
          (personagem) =>
            (personagem.id !== personagemTrocado.id && !aliados.some((aliado) => aliado.id === personagem.id && aliado.isExtra == personagem.isExtra)) ||
            (personagem.isExtra !== personagemTrocado.isExtra && !aliados.some((aliado) => aliado.id === personagem.id && aliado.isExtra == personagem.isExtra))
        );

      setPersonagens([personagemTrocado, ...personagensExtras, ...personagensAdquiridos]);
      setPersonagemEscolhido(personagemTrocado);
    }
  }, [personagemTrocado, aliados]);

  function handleFecharModal() {
    playClick(1);
    setModalIsOpen(false);
  }

  function handleEscolher(personagem) {
    playClick(1);
    if (personagem.id !== personagemEscolhido.id || personagem.isExtra !== personagemEscolhido.isExtra) {
      setPersonagemEscolhido(personagem);
    } else {
      setPersonagemEscolhido(personagemTrocado);
    }
  }

  function handleTrocar() {
    const _aliados = aliados.filter((aliado) => aliado.idCombate !== personagemTrocado.idCombate);
    _aliados.push({
      ...personagemEscolhido,
      idCombate: personagemTrocado.idCombate
    });

    const _aliadosOrdenados = _aliados.sort(function (a, b) {
      return a.idCombate - b.idCombate;
    });

    functions.setAliadosExtras((old) => {
      let _aliadosExtras = [...old];
      if (_aliadosExtras.find((aliado) => aliado.personagemId === personagemEscolhido.id && personagemEscolhido.isExtra)) {
        _aliadosExtras = old.filter((aliado) => aliado.personagemId !== personagemEscolhido.id && personagemEscolhido.isExtra);
      }
      if (personagemTrocado.isExtra) {
        _aliadosExtras.push(instanciarBasePessoal(personagemTrocado));
      }
      return _aliadosExtras;
    });
    const _aliadosMapeados = _aliadosOrdenados.map((aliado) => {
      if (personagemEscolhido.isExtra && aliado.isExtra) {
        return { ...instanciarBasePessoal(aliado), isExtra: true };
      }
      return instanciarBasePessoal(aliado);
    });

    functions.setPersonagensInstanciados((old) => {
      const inimigosMapeados = old
        .filter((personagem) => personagem.isInimigo)
        .map((inimigo) => {
          return instanciarBasePessoal(inimigo);
        });
      const _personagensInstanciados = instanciarPersonagens(_aliadosMapeados, inimigosMapeados);
      const personagensOrdenados = _personagensInstanciados.sort(function (a, b) {
        return a.idCombate - b.idCombate;
      });
      return personagensOrdenados;
    });
    setModalIsOpen(false);
  }

  function renderCardPersonagem(personagem) {
    const escolhido = personagemEscolhido.id === personagem.id && personagem.isExtra === personagemEscolhido.isExtra;
    return (
      <li
        onMouseEnter={() => playHover(1)}
        onClick={() => {
          handleEscolher(personagem);
        }}
        className={escolhido ? "card-escolhido" : null}
        style={
          personagem.isExtra
            ? {
                background: `var(--card-aliado)`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }
            : {
                background: `var(--card-${personagem.raridade}-estrelas)`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }
        }
      >
        <header>
          {personagem.elemento ? <img src={ICONS[`ELEMENTO_${personagem.elemento}`]} alt="Ícone do Elemento" className="elemento-icon" /> : null}
          {personagem.isExtra ? <img src={ICONS.ALIADO} alt="Ícone de Aliado" className="aliado-icon" /> : null}
        </header>
        <img src={personagem.perfil} alt={`Perfil de ${personagem.nome}`} />
        <footer>{personagem.nome}</footer>
      </li>
    );
  }

  return (
    <Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen}>
      <div className="modal-personagem-lista">
        <header>
          <h1>Trocar Personagem</h1>
          <button onClick={handleFecharModal}>X</button>
        </header>
        <section>
          <section className="lista-personagens">
            <ul>
              {personagens.length > 0
                ? personagens.map((personagem) => {
                    return renderCardPersonagem(personagem);
                  })
                : null}
            </ul>
          </section>
          <section className="personagem-selecionado">
            {personagemEscolhido.id !== 0 ? (
              <>
                <img src={personagemEscolhido.sprite} alt="Sprite do personagem" />
                <h1>{personagemEscolhido.nome}</h1>
                <BotaoPrimario onClick={handleTrocar} ativo={personagemTrocado.id !== personagemEscolhido.id || personagemTrocado.isExtra !== personagemEscolhido.isExtra}>
                  Selecionar
                </BotaoPrimario>
              </>
            ) : null}
          </section>
        </section>
      </div>
    </Modal>
  );
}
