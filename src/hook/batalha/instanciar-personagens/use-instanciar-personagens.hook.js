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
      };
    });

    const personagens = [...aliados, ...inimigos].map((personagem, index) => {
      return {
        ...personagem,
        idCombate: index + 1,
        ordemInicial: index + 1,
        effect: { asset: null, isAtivo: true },
        testeResistencia: null,
        condicoes: [],
        acoesExtras: [],
      };
    });

    return personagens;
  }

  return { instanciarPersonagens };
}
