import { ALVOS } from "../../../../constants/acoes/acoes.constant"

function personagemStyle(personagem, estaAtivo, isAlvo, escolhendoAlvo, acaoAtiva) {
  let estaMorto = acaoAtiva.acao ? personagem.isMorto || acaoAtiva.acao.alvos===ALVOS.ALIADOS_MORTOS && personagem.isMorto
  : personagem.isMorto
    return {
        animation: `${
          isAlvo && estaMorto
            ? `battle-${
                personagem.isInimigo ? "inimigo" : "personagem"
              } 1s alternate infinite ease-in-out,
              derrotado-${
                personagem.isInimigo ? "inimigo" : isAlvo ? "aliado" : "personagem"
              } 0.8s alternate infinite ease-in-out`
          :
          estaAtivo && !escolhendoAlvo && !estaMorto || isAlvo
            ? `battle-${
                personagem.isInimigo ? "inimigo" : "personagem"
              } 1s alternate infinite ease-in-out,
              bright-${
                personagem.isInimigo ? "inimigo" : isAlvo ? "aliado" : "personagem"
              } 0.8s alternate infinite ease-in-out`
            : ""
        }`,
        filter: `${estaMorto? "grayscale(100%)" : null}`,
      }
}

export { personagemStyle }