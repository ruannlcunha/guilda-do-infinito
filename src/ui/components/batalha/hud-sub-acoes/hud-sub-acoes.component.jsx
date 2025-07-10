import { useState } from "react";
import { useSound } from "../../../../hook";
import { useEscolherAcao } from "../../../../hook/batalha";
import { BotaoPrimario, Modal } from "../../"
import "./hud-sub-acoes.style.css"
import { ICONS } from "../../../../constants/images";

export function HUDSubAcoes({subAcoes, personagem, personagens, functions}) {
    const { playClick, playHover } = useSound()
    const { escolherAcao } = useEscolherAcao();
    const [variantesModal, setVariantesModal] = useState(false)
    const [variantesAtuais, setVariantesAtuais] = useState(null)
    const [acaoAtual, setAcaoAtual] = useState(null)

    function handleEscolherAcao(personagem, personagens, acao, functions) {
        playClick(2)
        if(acao.variantes) {
          if(acao.variantes.length>0) {
            const novasVariantes = [...acao.variantes].map(variante=> {
              return {...variante, varianteAtiva: variante.lista[0].varianteId}
            })
            setAcaoAtual(acao)
            setVariantesAtuais(novasVariantes)
            setVariantesModal(true)
          } else {
            escolherAcao(personagem, personagens, acao, subAcoes.titulo, functions)
          }
        }
        else {
            escolherAcao(personagem, personagens, acao, subAcoes.titulo, functions)
        }
    }

    function _encontrarIndexVariante(variante, modificador) {
      let indexAtual = 0;
      variante.lista.map((_variante,i)=> {
        if(_variante.varianteId===variante.varianteAtiva) {
          indexAtual = i
        }
      })
      return indexAtual+modificador
    }

    function handleTrocarVariante(variante, modificador) {
      const novoIndex = _encontrarIndexVariante(variante, modificador);
      if(novoIndex<variante.lista.length && novoIndex>=0) {
        playClick(1)
        const novasVariantes = variantesAtuais.map(varianteCategoria=> {
          if(varianteCategoria.categoria===variante.categoria) {
            const novaVarianteAtiva = variante.lista[novoIndex]
            const novaAcao = novaVarianteAtiva.novaAcao ? {...acaoAtual, ...novaVarianteAtiva.novaAcao } : acaoAtual
            setAcaoAtual(novaAcao)
            return {...varianteCategoria, varianteAtiva: novaVarianteAtiva.varianteId}
          }
          return {...varianteCategoria}
        })
        setVariantesAtuais(novasVariantes)
      }
    }

    function renderSetaVariante(variante, modificador) {
      const novoIndex = _encontrarIndexVariante(variante, modificador);
      if(modificador===-1 && novoIndex>=0) {
        return (
          <button onMouseEnter={()=>playHover(1)} onClick={()=>handleTrocarVariante(variante, modificador)}>
            <img src={ICONS.SETA_DIREITA} style={{transform:"scaleX(-1)"}} alt="Seta para esquerda"/>
          </button>
        )
      }
      if (modificador===+1 && novoIndex<variante.lista.length) {
        return (
          <button onMouseEnter={()=>playHover(1)} onClick={()=>handleTrocarVariante(variante, modificador)}>
            <img src={ICONS.SETA_DIREITA}alt="Seta para direita"/>
          </button>
      )
      }
      return <button className="botao-vazio"></button>
    }

    function renderAtaque(subAcao) {
        return (
            <section>
              <h2><span>Dano:</span> {subAcao.dadoDeDano}</h2>
              <h2><span>Tipo:</span> {subAcao.categoria}</h2>
              <h2><span>Custo:</span> {subAcao.custo}PM</h2>
            </section>
        )
    }

    function renderHabilidade(subAcao) {
        return (
            <section>
              <h2><span>Descrição:</span> {subAcao.descricao}</h2>
              <h2><span>Custo:</span> {subAcao.custo}PM</h2>
            </section>
        )
    }

    function renderItem(subAcao) {
        return (
            <section>
              <h2><span>Descrição:</span> {subAcao.descricao}</h2>
              <h2><span>Quantidade:</span> {subAcao.quantidade}</h2>
            </section>
        )
    }

    function renderAcaoExtra(subAcao) {
        return (
            <section>
              <h2><span>Descrição:</span> {subAcao.descricao}</h2>
            </section>
        )
    }

    return (
        <>
        {subAcoes.ativo ? (
            <div className="hud-sub-acoes">
              {acaoAtual?
              <Modal isOpen={variantesModal} setIsOpen={setVariantesModal}>
                <div className="variantes-modal">
                  <header>
                    <h1>{acaoAtual.nome}</h1>
                    <div>
                      <h2>Custo:</h2>
                      <h3>{acaoAtual.custo} PM</h3>
                    </div>
                  </header>
                  {variantesAtuais.map(variante=> {
                    const varianteAtiva = variante.lista.find(item=>item.varianteId===variante.varianteAtiva)
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
                    )
                  })
                  }
                  <footer>
                    <BotaoPrimario onClick={()=>setVariantesModal(false)}>Cancelar</BotaoPrimario>
                    <BotaoPrimario onClick={()=>escolherAcao(personagem, personagens, acaoAtual, subAcoes.titulo, functions)}>Confirmar</BotaoPrimario>
                  </footer>
                </div>
              </Modal>
              :null}

              <header>{subAcoes.titulo}</header>
              <section>
                {subAcoes.acoesAtuais
                  ? subAcoes.acoesAtuais.map((subAcao, index) => {
                      const estaBloqueado = subAcao.custo ? (personagem.pm.atual < subAcao.custo) : false;
                      return (
                          <li
                          key={index}
                          onMouseEnter={()=>{playHover(2)}}
                          className={estaBloqueado ? "acao-bloqueada" : null}
                          onClick={
                              !estaBloqueado
                              ? () => {
                                  handleEscolherAcao(
                                      personagem, 
                                      personagens,
                                      subAcao,
                                      functions
                                  );
                              }
                              : null
                            }
                            >
                          <h1>{subAcao.nome}</h1>
                          {subAcoes.titulo==="Ataques" ? renderAtaque(subAcao) :
                          subAcoes.titulo==="Habilidades" ? renderHabilidade(subAcao) :
                          subAcoes.titulo==="Ações Extras" ? renderAcaoExtra(subAcao) :
                          renderItem(subAcao)}
                        </li>
                      );
                    })
                    : null}
              </section>
            </div>
          ) : null}
          </>
    )
}