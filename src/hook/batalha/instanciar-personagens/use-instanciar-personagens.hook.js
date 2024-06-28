import useGlobalUser from "../../../context/global-user.context";
import { instanciarPersonagem } from "../../../utils";

export function useInstanciarPersonagens() {
  const [user] = useGlobalUser()

  function instanciarPersonagens(aliadosData, inimigosData) {

    const aliados = aliadosData.map((personagem, index) => {
      const personagemAtual = personagem.personagemId !== 1 ? personagem :
      user.personagens.find(item => item.personagemId === 1)
      const novoPersonagem = instanciarPersonagem(personagemAtual)
      return {
        ...novoPersonagem,
        posicaoEmCampo: index + 1,
        idCombate: index + 1,
        ordemInicial: index + 1,
        isInimigo: false,
        isMorto: false,
        effect: { asset: null, isAtivo: true },
      };
    });

    const inimigos = inimigosData.map((personagem, index) => {
      const personagemAtual = personagem.personagemId !== 1 ? personagem :
      user.personagens.find(item => item.personagemId === 1)
      const novoPersonagem = instanciarPersonagem(personagemAtual)
      return {
        ...novoPersonagem,
        posicaoEmCampo: index + 1,
        isInimigo: true,
        isMorto: false,
        effect: { asset: null, isAtivo: true },
      };
    });

    const personagens = [...aliados, ...inimigos].map((personagem, index) => {
      return {
        ...personagem,
        idCombate: index + 1,
        ordemInicial: index + 1,
      };
    });

    return personagens;
  }

  return { instanciarPersonagens };
}
