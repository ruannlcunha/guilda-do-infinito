import { useEffect, useState } from "react";
import { useSound, useToast } from "../../../../hook";
import { useEscolherAcao } from "../../../../hook/batalha";
import { BotaoPrimario, CardAcao, Modal } from "../../";
import "./hud-sub-acoes.style.css";
import { ICONS } from "../../../../constants/images";
import { ACAO_CATEGORIA, ACAO_EXECUCAO } from "../../../../constants/acoes/acoes.constant";
import { CONDICOES } from "../../../../constants/personagens/personagem.constant";

export function HUDSubAcoes({ subAcoes, personagem, personagens, functions }) {
  const { playClick, playHover, playCancel } = useSound();
  const { escolherAcao } = useEscolherAcao();
  const { toastWarning } = useToast();
  const [variantesModal, setVariantesModal] = useState(false);
  const [variantesAtuais, setVariantesAtuais] = useState(null);
  const [acaoAtual, setAcaoAtual] = useState(null);

  useEffect(() => {
    if (acaoAtual) {
      acaoAtual.variantes.map((varianteCategoria) => {
        const novaVariante = varianteCategoria.lista[0];
        const novaAcao = novaVariante.novaAcao ? { ...acaoAtual, ...novaVariante.novaAcao } : acaoAtual;
        setAcaoAtual(novaAcao);
      });
    }
  }, [variantesModal]);

  function handleEscolherAcao(personagem, personagens, acao, functions, estaBloqueado) {
    if (!estaBloqueado) {
      playClick(2);
      if (acao.variantes) {
        if (acao.variantes.length > 0) {
          const novasVariantes = [...acao.variantes].map((variante) => {
            return { ...variante, varianteAtiva: variante.lista[0].varianteId };
          });
          setAcaoAtual(acao);
          setVariantesAtuais(novasVariantes);
          setVariantesModal(true);
        } else {
          escolherAcao(personagem, personagens, acao, subAcoes.titulo, functions);
        }
      } else {
        escolherAcao(personagem, personagens, acao, subAcoes.titulo, functions);
      }
    } else {
      playCancel();
      toastWarning("Você não pode realizar essa ação.");
    }
  }

  function _encontrarIndexVariante(variante, modificador) {
    let indexAtual = 0;
    variante.lista.map((_variante, i) => {
      if (_variante.varianteId === variante.varianteAtiva) {
        indexAtual = i;
      }
    });
    return indexAtual + modificador;
  }

  function handleTrocarVariante(variante, modificador) {
    const novoIndex = _encontrarIndexVariante(variante, modificador);
    if (novoIndex < variante.lista.length && novoIndex >= 0) {
      playClick(1);
      const novasVariantes = variantesAtuais.map((varianteCategoria) => {
        if (varianteCategoria.categoria === variante.categoria) {
          const novaVarianteAtiva = variante.lista[novoIndex];
          const novaAcao = novaVarianteAtiva.novaAcao ? { ...acaoAtual, ...novaVarianteAtiva.novaAcao } : acaoAtual;
          setAcaoAtual(novaAcao);
          return {
            ...varianteCategoria,
            varianteAtiva: novaVarianteAtiva.varianteId
          };
        }
        return { ...varianteCategoria };
      });
      setVariantesAtuais(novasVariantes);
    }
  }

  function renderSetaVariante(variante, modificador) {
    const novoIndex = _encontrarIndexVariante(variante, modificador);
    if (modificador === -1 && novoIndex >= 0) {
      return (
        <button onMouseEnter={() => playHover(1)} onClick={() => handleTrocarVariante(variante, modificador)}>
          <img src={ICONS.SETA_DIREITA} style={{ transform: "scaleX(-1)" }} alt="Seta para esquerda" />
        </button>
      );
    }
    if (modificador === +1 && novoIndex < variante.lista.length) {
      return (
        <button onMouseEnter={() => playHover(1)} onClick={() => handleTrocarVariante(variante, modificador)}>
          <img src={ICONS.SETA_DIREITA} alt="Seta para direita" />
        </button>
      );
    }
    return <button className="botao-vazio"></button>;
  }

          console.log(acaoAtual)
  return (
    <>
      {subAcoes.ativo ? (
        <div className="hud-sub-acoes">
          {acaoAtual ? (
            <Modal isOpen={variantesModal} setIsOpen={setVariantesModal}>
              <div className="variantes-modal">
                <header>
                  <h1>{acaoAtual.nome}</h1>
                  <div>
                    <h2>Custo:</h2>
                    <h3>{acaoAtual.custo} PM</h3>
                  </div>
                </header>
                {variantesAtuais.map((variante) => {
                  const varianteAtiva = variante.lista.find((item) => item.varianteId === variante.varianteAtiva);
                  return (
                    <>
                      <section className="variante-categoria">
                        <h1>{variante.categoria}:</h1>
                        <div>
                          {renderSetaVariante(variante, -1)}
                          <h2>{varianteAtiva.titulo}</h2>
                          {renderSetaVariante(variante, +1)}
                        </div>
                      </section>
                      <section className="variante-descricao">
                        <p>{varianteAtiva.descricao}</p>
                      </section>
                    </>
                  );
                })}
                <footer>
                  <BotaoPrimario onClick={() => setVariantesModal(false)}>Cancelar</BotaoPrimario>
                  <BotaoPrimario
                  ativo={personagem.usouAcaoExtra && acaoAtual.execucao === ACAO_EXECUCAO.EXTRA ? false : true}
                  onClick={() => escolherAcao(personagem, personagens, acaoAtual, subAcoes.titulo, functions)}>
                    Confirmar
                  </BotaoPrimario>
                </footer>
              </div>
            </Modal>
          ) : null}

          <header className="sub-acoes-header">{subAcoes.titulo}</header>
          <section className="sub-acoes-section">
            {subAcoes.acoesAtuais
              ? subAcoes.acoesAtuais.map((subAcao, index) => {
                  let estaBloqueado = false;
                  if (subAcao.custo) estaBloqueado = personagem.pm.atual < subAcao.custo;
                  if (subAcao.execucao === ACAO_EXECUCAO.EXTRA) estaBloqueado = personagem.usouAcaoExtra;
                  if (subAcao.categoria === ACAO_CATEGORIA.MAGICO && personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.FURIA.nome)) estaBloqueado = true;
                  if (subAcao.categoria === ACAO_CATEGORIA.CORPO_A_CORPO && personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.VOANDO.nome)) estaBloqueado = true;
                  return (
                    <li
                      key={index}
                      onMouseEnter={() => {
                        playHover(2);
                      }}
                      className={estaBloqueado ? "acao-bloqueada" : null}
                    >
                      {
                        <CardAcao
                          acao={subAcao}
                          onClick={() => {
                            handleEscolherAcao(personagem, personagens, subAcao, functions, estaBloqueado);
                          }}
                        />
                      }
                    </li>
                  );
                })
              : null}
          </section>
        </div>
      ) : null}
    </>
  );
}
