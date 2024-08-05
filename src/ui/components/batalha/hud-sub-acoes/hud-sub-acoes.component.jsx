import { useSound } from "../../../../hook";
import { useEscolherAcao } from "../../../../hook/batalha";
import "./hud-sub-acoes.style.css"

export function HUDSubAcoes({subAcoes, personagem, personagens, functions}) {
    const { playClick, playHover } = useSound()
    const { escolherAcao } = useEscolherAcao();

    console.log(subAcoes)

    function handleEscolherAcao(personagem, personagens, acao, functions) {
        playClick(2)
        escolherAcao(personagem, personagens, acao, functions)
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
              <h2><span>Efeito:</span> {subAcao.efeito}</h2>
              <h2><span>Custo:</span> {subAcao.custo}PM</h2>
            </section>
        )
    }

    function renderItem(subAcao) {
        return (
            <section>
              <h2><span>Efeito:</span> {subAcao.efeito}</h2>
              <h2><span>Quantidade:</span> {subAcao.quantidade}</h2>
            </section>
        )
    }

    return (
        <>
        {subAcoes.ativo ? (
            <div className="hud-sub-acoes">
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
                          {subAcao.dadoDeDano ? renderAtaque(subAcao) :
                          subAcao.custo ? renderHabilidade(subAcao) :
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