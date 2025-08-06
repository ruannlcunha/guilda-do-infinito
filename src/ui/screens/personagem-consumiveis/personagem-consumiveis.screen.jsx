import "./personagem-consumiveis.style.css";
import { BackButton, BotaoFecharModal, BotaoPrimario, CardAcao, ContainerScreen, Modal, ModalItem, ModalItemLista, RaridadeEstrelas } from "../../components";
import { useParams } from "react-router-dom";
import useGlobalUser from "../../../context/global-user.context";
import { useEffect, useState } from "react";
import { instanciarPersonagem } from "../../../utils";
import { CONSUMIVEIS_DATA, ITENS_DATA } from "../../../database";
import { ITEM_TIPO } from "../../../constants/itens/itens.constant";
import { useSound } from "../../../hook";
import { cheatTodosItens, cheatTodosPersonagens } from "../../../utils/cheats-testes.util";

export function PersonagemConsumiveisScreen({ personagemBatalha, onBack }) {
  const EVENTO = { ADICIONAR: "ADICIONAR", REMOVER: "REMOVER" };
  const { personagemId } = useParams();
  const [user, setUser] = useGlobalUser();
  const { playClick, playHover } = useSound();
  const [personagem, setPersonagem] = useState(null);
  const [itemEscolhido, setItemEscolhido] = useState({ index: null });
  const [quantidadeItem, setQuantidadeItem] = useState(1);
  const [novoUser, setNovoUser] = useState(null);
  const [inventario, setInventario] = useState([]);
  const [detalhesModal, setDetalhesModal] = useState(false);
  const [quantidadeModal, setQuantidadeModal] = useState(false);
  const [quantidadeEvento, setQuantidadeEvento] = useState({ evento: null });
  const [listaModal, setListaModal] = useState(false);
  const [podeAdicionarQuantidade, setPodeAdicionarQuantidade] = useState(null);

  useEffect(() => {
    const userTodosPersonagens = cheatTodosPersonagens(user);
    const userTodosItens = cheatTodosItens(userTodosPersonagens);
    const _user = userTodosItens;
    setNovoUser(_user);
  }, []);

  useEffect(() => {
    setQuantidadeItem(1);
  }, [quantidadeModal]);

  useEffect(() => {
    if (quantidadeEvento.evento) {
      const quantidadeEspaco = quantidadeItem < personagem.inventario.espaco.maximo - personagem.inventario.espaco.atual && quantidadeEvento.evento === EVENTO.ADICIONAR;
      const quantidadeRemover = quantidadeItem < itemEscolhido.quantidade && quantidadeEvento.evento === EVENTO.REMOVER;
      setPodeAdicionarQuantidade(quantidadeEspaco || quantidadeRemover);
    }
  }, [quantidadeEvento.evento, quantidadeItem]);

  useEffect(() => {
    !detalhesModal || listaModal ? setItemEscolhido({ index: null }) : null;
  }, [listaModal, detalhesModal]);

  useEffect(() => {
    const _user = novoUser;
    if (_user) {
      const _inventario = [
        ..._user.inventario.map((item) => {
          return {
            ...CONSUMIVEIS_DATA.find((itemData) => itemData.id === item.itemId && itemData.itemTipo === item.itemTipo),
            quantidade: item.quantidade
          };
        })
      ]
        .map((item, i) => {
          return { ...item, index: i };
        })
        .filter((item) => item.itemTipo === ITEM_TIPO.CONSUMIVEL)
        .sort(function (a, b) {
          return a.id - b.id;
        })
        .sort(function (a, b) {
          return b.raridade - a.raridade;
        });
      setInventario(_inventario);

      let personagemInstanciado = null;
      if (personagemBatalha) {
        personagemInstanciado = personagemBatalha;
      } else {
        const _personagem = novoUser.personagens.find((item) => item.personagemId == personagemId);
        personagemInstanciado = instanciarPersonagem(_personagem);
      }
      setPersonagem(personagemInstanciado);
      document.documentElement.style.setProperty("--fundo-tema", `var(--${personagemInstanciado.corTema})`);
    }
  }, [user, novoUser]);

  function handleAumentarQuantidade() {
    playClick(1);
    if (itemEscolhido.index !== null && quantidadeItem < itemEscolhido.quantidade && podeAdicionarQuantidade) {
      const _quantidadeItem = quantidadeItem + 1;
      setQuantidadeItem(_quantidadeItem);
    }
  }

  function handleDiminuirQuantidade() {
    playClick(1);
    if (itemEscolhido.index !== null) {
      if (quantidadeItem > 1) {
        const _quantidadeItem = quantidadeItem - 1;
        setQuantidadeItem(_quantidadeItem);
      }
    }
  }

  function handleEscolherItem(item) {
    playClick(1);
    if (item.index === itemEscolhido.index) {
      setItemEscolhido({ index: null });
    } else {
      setItemEscolhido(item);
    }
  }

  function handleVisualizarItem(item) {
    playClick(1);
    setItemEscolhido(item);
    setDetalhesModal(true);
  }

  function handleAbrirInventario() {
    playClick(1);
    setListaModal(true);
  }

  function handleAdicionarQuantidadeModal() {
    playClick(2);
    setQuantidadeEvento({ texto: "adicionar", evento: EVENTO.ADICIONAR });
    setQuantidadeModal(true);
  }

  function handleRemoverQuantidadeModal() {
    playClick(2);
    setQuantidadeEvento({ texto: "remover", evento: EVENTO.REMOVER });
    setQuantidadeModal(true);
  }

  function adicionarItem() {
    const _personagem = novoUser.personagens.find((item) => item.personagemId == personagemId);

    const itemAtual = _personagem.inventario.find((item) => item.itemId === itemEscolhido.id);
    let novoPersonagem = null;
    if (itemAtual) {
      novoPersonagem = {
        ..._personagem,
        inventario: [
          ..._personagem.inventario.filter((item) => item.itemId != itemEscolhido.id),
          {
            itemId: itemEscolhido.id,
            itemTipo: itemEscolhido.itemTipo,
            quantidade: quantidadeItem + itemAtual.quantidade
          }
        ]
      };
    } else {
      novoPersonagem = {
        ..._personagem,
        inventario: [
          ..._personagem.inventario,
          {
            itemId: itemEscolhido.id,
            itemTipo: itemEscolhido.itemTipo,
            quantidade: quantidadeItem
          }
        ]
      };
    }

    const novosPersonagens = [...novoUser.personagens.filter((personagem) => personagem.personagemId != personagemId), novoPersonagem];

    const _item = novoPersonagem.inventario.find((item) => item.itemId === itemEscolhido.id);
    const novoInventario = novoUser.inventario.filter((item, i) => i != itemEscolhido.index);
    if (quantidadeItem < itemEscolhido.quantidade) {
      const novoItem = {
        ..._item,
        quantidade: itemEscolhido.quantidade - quantidadeItem
      };
      novoInventario.push(novoItem);
    }

    const _novoUser = {
      ...user,
      inventario: novoInventario,
      personagens: novosPersonagens
    };
    setNovoUser(_novoUser);
    setUser(_novoUser);
    setListaModal(false);
    setQuantidadeModal(false);
  }

  function removerItem() {
    const _personagem = novoUser.personagens.find((item) => item.personagemId == personagemId);

    const itemAtual = _personagem.inventario.find((item) => item.itemId === itemEscolhido.id);
    let novoPersonagem = null;
    if (quantidadeItem >= itemAtual.quantidade) {
      novoPersonagem = {
        ..._personagem,
        inventario: _personagem.inventario.filter((item) => item.itemId != itemEscolhido.id)
      };
    } else {
      const _inventario = _personagem.inventario.filter((item) => item.itemId != itemEscolhido.id);
      _inventario.push({
        ...itemAtual,
        quantidade: itemAtual.quantidade - quantidadeItem
      });
      novoPersonagem = {
        ..._personagem,
        inventario: _inventario
      };
    }

    const novosPersonagens = [...novoUser.personagens.filter((personagem) => personagem.personagemId != personagemId), novoPersonagem];

    const itemEncontrado = novoUser.inventario.find((item) => item.itemId === itemEscolhido.id);
    let novoInventario = null;
    if (itemEncontrado) {
      const novoItem = {
        ...itemEncontrado,
        quantidade: itemEncontrado.quantidade + quantidadeItem
      };
      novoInventario = [...novoUser.inventario.filter((item) => item.itemId != itemEscolhido.id), novoItem];
    } else {
      const novoItem = {
        ...itemAtual,
        quantidade: quantidadeItem
      };
      novoInventario = [...novoUser.inventario, novoItem];
    }

    const _novoUser = {
      ...user,
      inventario: novoInventario,
      personagens: novosPersonagens
    };
    setNovoUser(_novoUser);
    setUser(_novoUser);
    setDetalhesModal(false);
    setQuantidadeModal(false);
  }

  function handleQuantidadeEvento() {
    playClick(2);
    if (quantidadeEvento.evento === EVENTO.ADICIONAR) {
      adicionarItem();
    } else if (quantidadeEvento.evento === EVENTO.REMOVER) {
      removerItem();
    }
  }

  function renderCardInventario(item) {
    return (
      <li onMouseEnter={() => playHover(1)} onClick={() => handleEscolherItem(item)} style={{ background: `var(--card-${item.raridade}-estrelas)` }} className={itemEscolhido.index === item.index ? "item-escolhido" : null}>
        <h1 className="quantidade">x{item.quantidade}</h1>
        <img src={item.sprite} alt="" />
        <footer>
          <RaridadeEstrelas quantidade={item.raridade} />
        </footer>
      </li>
    );
  }

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
      <div className="personagem-consumiveis">
        {personagem ? (
          <>
            <section className="personagem">
              <h1>{personagem.nome}</h1>
              <img src={personagem.sprite} alt="Sprite do personagem" />
            </section>
            <section className="itens-section">
              <h1 className="titulo">Inventário</h1>
              <div className="lista-itens">
                <header className="itens-header">
                  <h1>Espaço:</h1>
                  <h2>
                    {personagem.inventario.espaco.atual}/{personagem.inventario.espaco.maximo}
                  </h2>
                </header>
                <ul className="lista">
                  {personagem.inventario.itens.length > 0 ? (
                    <>
                      {personagem.inventario.itens.map((item) => {
                        return (
                          <li key={item.id} onMouseEnter={() => playHover(2)} className="itens">
                            <CardAcao
                              acao={item}
                              onClick={() => {
                                handleVisualizarItem(item);
                              }}
                            />
                          </li>
                        );
                      })}
                    </>
                  ) : (
                    <h1>O personagem não possui consumíveis no seu inventário.</h1>
                  )}
                </ul>
              </div>
              {!personagemBatalha ? (
                <BotaoPrimario onClick={handleAbrirInventario} ativo={personagem.inventario.espaco.atual < personagem.inventario.espaco.maximo}>
                  Adicionar item
                </BotaoPrimario>
              ) : null}
            </section>

            <ModalItem detalhesModal={detalhesModal} setDetalhesModal={setDetalhesModal} itemEscolhido={itemEscolhido} botao={!personagemBatalha ? { texto: "Remover", evento: handleRemoverQuantidadeModal } : null} />

            <ModalItemLista
              modalIsOpen={listaModal}
              setModalIsOpen={setListaModal}
              categoria={ITEM_TIPO.CONSUMIVEL}
              itens={inventario}
              itemEscolhido={itemEscolhido}
              titulo={"Inventário"}
              botao={personagem.inventario.espaco.atual < personagem.inventario.espaco.maximo ? <BotaoPrimario onClick={handleAdicionarQuantidadeModal}>Adicionar</BotaoPrimario> : null}
              personagem={personagem}
              functions={{ renderCardInventario }}
            />

            <Modal isOpen={quantidadeModal} setIsOpen={setQuantidadeModal}>
              <div className="quantidade-modal">
                <BotaoFecharModal setIsOpen={setQuantidadeModal} />
                <h1>Quantos você gostaria de {quantidadeEvento.texto}?</h1>
                <div className="quantidade-opcao">
                  Quantidade:
                  <div>
                    <BotaoPrimario onClick={handleDiminuirQuantidade} ativo={quantidadeItem > 1}>
                      -
                    </BotaoPrimario>
                    <h1>{quantidadeItem}</h1>
                    <BotaoPrimario onClick={handleAumentarQuantidade} ativo={podeAdicionarQuantidade}>
                      +
                    </BotaoPrimario>
                  </div>
                </div>
                <BotaoPrimario onClick={handleQuantidadeEvento}>Confirmar</BotaoPrimario>
              </div>
            </Modal>
          </>
        ) : null}
      </div>
    </ContainerScreen>
  );
}
