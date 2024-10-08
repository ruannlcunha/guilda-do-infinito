import { ALVOS } from "../../../constants/acoes/acoes.constant"
import { getRandomInt } from "../../../utils"

export function useAutomatizarPersonagem() {

    function automatizarPersonagem(personagemAtivo, personagens, functions) {
        
        const acoes = [...personagemAtivo.ataques]
        const indexAcao = getRandomInt(1,acoes.length)
        const acaoEscolhida = acoes.find((ataque,i)=> (i+1) === indexAcao)

        const alvos = escolherAlvos(personagens, personagemAtivo,acaoEscolhida)
        
        const indexAlvo = getRandomInt(1, alvos.length)
        const alvoEscolhido = alvos[indexAlvo-1]

        setTimeout(()=>{
            functions.setAnimacoes(old=> {return {...old, hudAtivo: false}})
            functions.ativarBannerInimigo(acaoEscolhida.nome, personagemAtivo.perfil,
                                            alvoEscolhido.perfil, personagemAtivo.corTema)
        }, 3000)

        setTimeout(()=>{
            acaoEscolhida.evento(personagemAtivo, alvoEscolhido, functions);
        }, 8100)
    }

    return { automatizarPersonagem }

    function escolherAlvos(personagens, personagemAtivo, acaoEscolhida) {
        if(acaoEscolhida.alvos===ALVOS.INIMIGOS) {
            return personagens.filter(personagem=>
                (!personagem.isInimigo && personagemAtivo.isInimigo && !personagem.isMorto)
                ||
                (personagem.isInimigo && !personagemAtivo.isInimigo && !personagem.isMorto)
            )
        }
        else {

        }
    }

}