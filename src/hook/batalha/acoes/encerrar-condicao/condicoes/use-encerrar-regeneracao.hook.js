import { CONDICOES } from "../../../../../constants/personagens/personagem.constant";
import { ACOES_UNICAS } from "../../../../../database/acoes-unicas";

export function useEncerrarRegeneracao() {

    function encerrarRegeneracao(personagem, functions) {
        const condicao = personagem.condicoes.find((condicao) => condicao.nome === CONDICOES.REGENERACAO.nome)
        if (condicao) {
            if(condicao.infinita) {
                functions.adicionarLog(`Condição ${CONDICOES.REGENERACAO.nome} de ${personagem.nome} não pode ser encerrada.`);
                return personagem
            }
            functions.adicionarLog(`${personagem.nome} não está mais sob efeito de ${CONDICOES.REGENERACAO.nome}.`);
            const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.REGENERACAO.nome)];
            return {
                ...personagem,
                condicoes: novasCondicoes,
            };
        }

        return personagem;
    }

    return { encerrarRegeneracao }

}