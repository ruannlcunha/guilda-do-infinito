import { ICONS } from "../../../constants/images";
import { ATAQUES_DATA, HABILIDADES_DATA } from "../../../database";
import { useSound } from "../../../hook";
import { BotaoFecharModal } from "../botao-fechar-modal/botao-fechar-modal.component";
import { BotaoPrimario } from "../botao-primario/botao-primario.component";
import { Modal } from "../modal/modal.component";
import { RaridadeEstrelas } from "../raridade-estrelas/raridade-estrelas.component";
import "./modal-item.style.css";

export function ModalItem({ detalhesModal, setDetalhesModal, itemEscolhido, botao }) {
  const { playClick } = useSound();

  function renderItemDetalhes() {
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
      <section className="item-detalhes">
        <div className="detalhes">
          <header>
            <h1>Detalhes</h1>
          </header>
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
                {botao ? <BotaoPrimario onClick={botao.evento}>{botao.texto}</BotaoPrimario> : null}
              </>
            </div>
          </div>
        </div>
        <img src={itemEscolhido.sprite} alt="Sprite do item" />
      </section>
    );
  }

  return detalhesModal ? (
    <Modal isOpen={detalhesModal} setIsOpen={setDetalhesModal}>
      {itemEscolhido.id ? (
        <div className="detalhes-item-modal">
          <BotaoFecharModal setIsOpen={setDetalhesModal} />
          <section>
            <section>{renderItemDetalhes()}</section>
            <section>
              <img src={itemEscolhido.sprite} alt="" />
            </section>
          </section>
        </div>
      ) : null}
    </Modal>
  ) : null;
}
