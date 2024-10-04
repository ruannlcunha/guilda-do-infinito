import { useAutomatizarPersonagem, usePularTurno } from "../"

export function useIniciarTurno() {
    const { pularTurno } = usePularTurno()
    const { automatizarPersonagem } = useAutomatizarPersonagem()

    function iniciarTurno(personagemAtivo, personagens, jogadores, functions) {
        if(personagemAtivo.isInimigo && !personagemAtivo.isMorto && jogadores<2
            ||!personagemAtivo.isMorto && jogadores<1
        ) {
            automatizarPersonagem(personagemAtivo, personagens, functions)
        }
        personagemAtivo.isMorto ? pularTurno(functions.setTurnos) : null
    }

    return { iniciarTurno }

}