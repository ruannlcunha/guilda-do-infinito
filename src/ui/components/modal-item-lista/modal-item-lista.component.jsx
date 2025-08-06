import { useParams } from "react-router-dom";
import { ICONS } from "../../../constants/images";
import { ITEM_TIPO } from "../../../constants/itens/itens.constant";
import { useSound } from "../../../hook";
import { BotaoPrimario } from "../botao-primario/botao-primario.component";
import { Modal } from "../modal/modal.component";
import "./modal-item-lista.style.css";
import { BotaoFecharModal, RaridadeEstrelas } from "../";
import { useState } from "react";
import { ATAQUES_DATA, HABILIDADES_DATA } from "../../../database";
import { validarProficiencia } from "../../../utils/validacoes.util";

export function ModalItemLista({ modalIsOpen, setModalIsOpen, categoria, itens, filtroItem, itemEscolhido, titulo, botao, personagem, functions }) {
  const { personagemId } = useParams();
  const [detalhesIsOpen, setDetalhesIsOpen] = useState(true);

  function handleOpenDetalhes() {
    detalhesIsOpen ? setDetalhesIsOpen(false) : setDetalhesIsOpen(true);
  }

  function renderDetalhes() {
    const bonusAcoesList = [];
    if (itemEscolhido.index || itemEscolhido.id) {
      if (itemEscolhido.acoes) {
        itemEscolhido.acoes.ataques.map((ataque) =>
          bonusAcoesList.push({
            texto: "Ataque:",
            acao: ATAQUES_DATA.find((_ataque) => _ataque.id === ataque.ataqueId)
          })
        );
        itemEscolhido.acoes.habilidades.map((habilidade) =>
          bonusAcoesList.push({
            texto: "Habilidade:",
            acao: HABILIDADES_DATA.find((_habilidade) => _habilidade.id === habilidade.habilidadeId)
          })
        );
        itemEscolhido.acoes.talentos.map((talento) => bonusAcoesList.push({ texto: "Talento:", acao: talento }));
      }
    }

    return (
      <>
        {itemEscolhido.index || itemEscolhido.id ? (
          <section className="item-detalhes">
            <>
              <div className="detalhes">
                <header onClick={handleOpenDetalhes} style={{ opacity: `${!detalhesIsOpen ? "50%" : ""}` }}>
                  <h1>Detalhes</h1>
                  <BotaoFecharModal setIsOpen={setDetalhesIsOpen}>
                    <img src={detalhesIsOpen ? ICONS.MINIMIZAR : ICONS.MAXIMIZAR} alt="Ícone de minimizar e maximizar." />
                  </BotaoFecharModal>
                </header>
                {detalhesIsOpen ? (
                  <div className="detalhes-section">
                    <div>
                      <>
                        <ul>
                          <h1
                            style={{
                              textShadow: `var(--borda-texto-${itemEscolhido.raridade}-estrelas)`
                            }}
                          >
                            {itemEscolhido.nome}
                          </h1>
                          {itemEscolhido.tipo ? (
                            <li>
                              <h2>
                                Tipo: <span>{itemEscolhido.tipo}</span>
                              </h2>
                            </li>
                          ) : null}
                          <li>
                            <h2>Raridade:</h2>
                            <RaridadeEstrelas quantidade={itemEscolhido.raridade} />
                          </li>
                          {itemEscolhido.proficiencia ? (
                            <li>
                              <h2>
                                Proficiência:{" "}
                                <span
                                  style={{
                                    color: `${validarProficiencia(itemEscolhido, personagem) ? "" : "var(--red)"}`,
                                    textShadow: `${validarProficiencia(itemEscolhido, personagem) ? "" : "var(--borda-texto-vermelho-fina)"}`
                                  }}
                                >
                                  {itemEscolhido.proficiencia}
                                </span>
                              </h2>
                            </li>
                          ) : null}
                          {itemEscolhido.quantidade && itemEscolhido.itemTipo !== ITEM_TIPO.EQUIPAMENTO ? (
                            <li>
                              <h2>
                                Quantidade: <span>{itemEscolhido.quantidade} x</span>
                              </h2>
                            </li>
                          ) : null}
                          {itemEscolhido.alvos && itemEscolhido.itemTipo !== ITEM_TIPO.EQUIPAMENTO ? (
                            <li>
                              <h2>
                                Alvos: <span>{itemEscolhido.alvos}</span>
                              </h2>
                            </li>
                          ) : null}
                          <li>
                            {itemEscolhido.descricao ? (
                              <h2>
                                Descrição: <span>{itemEscolhido.descricao}</span>
                              </h2>
                            ) : null}
                          </li>
                          {itemEscolhido.bonus ? (
                            <li className="bonus-list">
                              <h2>Bônus:</h2>
                              <ul>
                                {itemEscolhido.bonus.map((bonus) => {
                                  return (
                                    <li>
                                      <img src={bonus.icon} alt="Ícone do atributo bônus" />+{bonus.valor} de {bonus.nome}
                                    </li>
                                  );
                                })}
                                {bonusAcoesList.length > 0
                                  ? bonusAcoesList.map((bonus) => {
                                      return (
                                        <li>
                                          <img src={ICONS[`ELEMENTO_${bonus.acao.elemento}`]} alt={`Ícone do atributo bônus`} />
                                          {bonus.texto} {bonus.acao.nome}
                                        </li>
                                      );
                                    })
                                  : null}
                              </ul>
                            </li>
                          ) : null}
                        </ul>
                        {itemEscolhido.itemTipo === ITEM_TIPO.EQUIPAMENTO ? (
                          itemEscolhido.personagemEquipadoId == personagemId ? (
                            <BotaoPrimario style={{ borderColor: "var(--grey)" }} onClick={functions.handleDesequipar}>
                              Desequipar
                            </BotaoPrimario>
                          ) : (
                            <BotaoPrimario onClick={functions.handleEquipar} ativo={validarProficiencia(itemEscolhido, personagem)}>
                              Equipar
                            </BotaoPrimario>
                          )
                        ) : (
                          botao
                        )}
                      </>
                    </div>
                  </div>
                ) : null}
              </div>
              <img src={itemEscolhido.sprite} alt="Sprite do item" />
            </>
          </section>
        ) : (
          <section className="selecionar-item">
            <h1>Selecione um item no inventário.</h1>
          </section>
        )}
      </>
    );
  }

  function renderLista() {
    return (
      <>
        {categoria === ITEM_TIPO.EQUIPAMENTO ? (
          itens.filter((item) => item.equipamentoTipo === filtroItem.tipo).length > 0 ? (
            itens
              .filter((item) => item.equipamentoTipo === filtroItem.tipo)
              .map((item) => {
                return functions.renderCardItem(item);
              })
          ) : (
            <h1>Você não possui equipamentos deste tipo.</h1>
          )
        ) : itens ? (
          itens.map((item) => {
            return functions.renderCardInventario(item);
          })
        ) : (
          <h1>Você não possui itens no inventário.</h1>
        )}
      </>
    );
  }

  return (
    <Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen}>
      <div className="modal-item-lista">
        <BotaoFecharModal setIsOpen={setModalIsOpen} />
        <section>
          <div className="item-lista-esquerda">
            <header>
              <h1>{titulo}</h1>
            </header>
            <section className="lista-itens">
              <ul>{renderLista()}</ul>
            </section>
          </div>
          {renderDetalhes()}
        </section>
      </div>
    </Modal>
  );
}
