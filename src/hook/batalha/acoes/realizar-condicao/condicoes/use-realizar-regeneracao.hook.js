import { CONDICOES } from "../../../../../constants/personagens/personagem.constant";

export function useRealizarRegeneracao() {

    function realizarRegeneracao(personagem, functions) {
        const condicao = personagem.condicoes.find((condicao) => condicao.nome === CONDICOES.REGENERACAO.nome)
        if (condicao) {
            functions.adicionarLog(`${personagem.nome} curou ${condicao.bonus} pela sua condição de ${condicao.nome}.`);

            let novoPv = personagem.pv.atual + condicao.bonus
            novoPv = (novoPv>personagem.pv.maximo) ? personagem.pv.maximo : novoPv

            const novoPersonagem = {
                ...personagem,
                pv: { ...personagem.pv, atual: novoPv }
            };
            return novoPersonagem;
        }
        return personagem;
    }

    return { realizarRegeneracao }
}