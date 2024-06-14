import { ATAQUES_DATA } from "../../../database/"
import { getRandomInt } from "../../../utils"
import { useFinalizarTurno } from "../"

export function useAutomatizarInimigo() {
    const { finalizarTurno } = useFinalizarTurno()

    function automatizarInimigo(personagemAtivo, personagens, turno, functions) {
        
        const acoes = [...personagemAtivo.ataques]
        const indexAcao = getRandomInt(1,acoes.length)
        const acaoEscolhida = acoes.find(ataque=> ataque.id === indexAcao)

        const alvos = personagens.filter(personagem=> !personagem.isInimigo)
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

        setTimeout(()=>{
            finalizarTurno(personagens, turno, functions)
        }, 13100)

    }

    return { automatizarInimigo }

}