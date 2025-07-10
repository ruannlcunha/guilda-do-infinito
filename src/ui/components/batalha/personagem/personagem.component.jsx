import { ICONS } from "../../../../constants/images/icons.constant";
import { calcularPorcentagem } from "../../../../utils";
import "./personagem.style.css";
import { personagemStyle } from "./personagem-styles.style"
import { useEffect, useState } from "react";
import { ELEMENTOS_REACOES, TIPO_CONDICAO } from "../../../../constants/personagens/personagem.constant";
import { ALVOS } from "../../../../constants/acoes/acoes.constant";
import DADO_AZUL from "../../../../assets/img/icons/D20.png"
import DADO_VERMELHO from "../../../../assets/img/icons/D20_VERMELHO.png"

export function Personagem({personagem, idAtivo, animacoes, acaoAtiva, functions, }) {

  const porcentagemVida = calcularPorcentagem(
    personagem.pv.atual,
    personagem.pv.maximo
  );

  const isAlvo = acaoAtiva.alvos.some(item=>
     item.idCombate===personagem.idCombate
     && (!personagem.isMorto || acaoAtiva.acao.alvos===ALVOS.ALIADOS_MORTOS && personagem.isMorto)
     && animacoes.escolhendoAlvo
    )

  const isArea = acaoAtiva.acao ? (acaoAtiva.acao.alvos===ALVOS.ALIADOS_AREA || acaoAtiva.acao.alvos===ALVOS.INIMIGOS_AREA) : false

  const estaAtivo =
    idAtivo === personagem.idCombate && idAtivo && animacoes.iniciativaTerminou
      ? true
      : false;
  const [estaEscolhido, setEstaEscolhido] = useState(false);

  useEffect(() => {
    animacoes.escolhendoAlvo ? null : setEstaEscolhido(false);
  }, [animacoes]);

  function hoverEscolherAlvo() {
    if (animacoes.escolhendoAlvo && isAlvo) {
      estaEscolhido ? setEstaEscolhido(false) : setEstaEscolhido(true);
    }
  }
  function handleEscolherAlvo() {
    if(isArea) {
      functions.setAcaoEmAndamento(true)
      acaoAtiva.acao.evento(acaoAtiva.personagem, [...acaoAtiva.alvos], acaoAtiva.acao, functions)
    }
    else {
      functions.setAcaoEmAndamento(true)
      acaoAtiva.acao.evento(acaoAtiva.personagem, personagem, acaoAtiva.acao, functions);
    }
  }

  return (
    <div
      className={estaEscolhido ? "personagem-escolhido" : null}
      onClick={isAlvo ? handleEscolherAlvo : null}
      onMouseEnter={hoverEscolherAlvo}
      onMouseLeave={hoverEscolherAlvo}
    >
      {!animacoes.batalhaTerminou ?
      <div className="icones-container">
        <img
        src={
          estaEscolhido || (isAlvo&&isArea) ? ICONS.ESCOLHER_BAIXO :
          isAlvo && personagem.isInimigo ? ICONS.CRISTAL_VERMELHO :
          isAlvo && !personagem.isInimigo ? ICONS.CRISTAL_AZUL :
          estaAtivo && personagem.isInimigo && !animacoes.escolhendoAlvo ? ICONS.SETA_ATIVO_INIMIGO :
          estaAtivo && !animacoes.escolhendoAlvo ? ICONS.SETA_ATIVO :
          ICONS.QUADRADO_VAZIO
        }
        alt="Seta apontada para baixo"
        className="icone-ativo"
        />
        
        <img src={
          isAlvo && acaoAtiva.tipoAcao==="Ataques" && ELEMENTOS_REACOES[acaoAtiva.acao.elemento].vantagem === personagem.elemento ? ICONS.SETA_VANTAGEM :
          isAlvo && acaoAtiva.tipoAcao==="Ataques" && ELEMENTOS_REACOES[acaoAtiva.acao.elemento].desvantagem === personagem.elemento ? ICONS.SETA_DESVANTAGEM :
          ICONS.QUADRADO_VAZIO
        }
        alt="Seta de Vantagem"
        className="icone-vantagem"
        />
        
        {personagem.testeResistencia ? 
        <div className="icone-dado-resistencia" style={{backgroundImage: `url(${personagem.isInimigo? DADO_VERMELHO : DADO_AZUL})`}}>
          {personagem.testeResistencia}
        </div>
        : null}

        {personagem.defesaEffect ? 
        <div className="icone-defesa" style={{
          textShadow: `var(--borda-texto-${personagem.defesaEffect.acerto? "verde" : "vermelho"})`,
          animation: `defesa-effect-${personagem.defesaEffect.acerto? "verde" : "vermelho"} 3s ease-in-out`}}>
          {personagem.defesa}
        </div>
        : null}

      </div>
      :null}

      <img
        src={personagem.sprite}
        alt="Sprite do personagem"
        style={personagemStyle(personagem, estaAtivo, isAlvo, animacoes.escolhendoAlvo, acaoAtiva)}
        className="sprite-personagem"
      />

      {personagem.effect.isAtivo? (
        <img src={personagem.effect.asset} alt="" className="acao-effect" />
      ) : null}

      <section>
        <div>
          <img src={ICONS[`ELEMENTO_${personagem.elemento}`]} alt={`Símbolo de ${personagem.elemento}`} />
          {personagem.nome}
        </div>
        <h2>Lv {personagem.level}</h2>

        <div
        className="batalha-sprite-vida"
        style={{
          background: `linear-gradient(to right, var(--red) ${porcentagemVida}%, var(--light-grey) 1%)`,
        }}>
        </div>

        <div className="condicoes">
          {personagem.condicoes.map((condicao,i)=>{
            return <img
            key={i}
            src={condicao.icon}
            style={{backgroundColor: condicao.tipo===TIPO_CONDICAO.BUFF ? "var(--mid-green)" : "var(--mid-red)"}}
            alt={`ícone de ${condicao.nome}`}
            />
          })
          }
        </div>
      </section>
    </div>
  );
}
