import { CONDICOES, TRANSFORMACOES } from "../../../../../constants/personagens/personagem.constant";
import { ACOES_UNICAS } from "../../../../../database/acoes-unicas";

export function useEncerrarFormaLupina() {

    function encerrarFormaLupina(personagem, functions) {
        if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.FORMA_LUPINA.nome)) {
            const condicaoFormaAnimal = personagem.condicoes.find((condicao) => condicao.nome === CONDICOES.FORMA_LUPINA.nome)

            const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.origem !== CONDICOES.FORMA_LUPINA.nome)];
            const novasAcoesExtras = [...personagem.acoesExtras.filter((acao) => acao.id !== ACOES_UNICAS.DESFAZER_FORMA_LUPINA.id)];;
            const novoBonusDado = [...personagem.bonusDado.filter((bonus) => bonus.condicao !== CONDICOES.FORMA_LUPINA.nome)];
            const novoPersonagem = {
                ...personagem,
                ...condicaoFormaAnimal.personagemOriginal,
                condicoes: novasCondicoes,
                acoesExtras: novasAcoesExtras,
                bonusDado: novoBonusDado,
            };
            const novaVidaMaxima = novoPersonagem.pv.maximo - 20;
            const novaVidaAtual = novoPersonagem.pv.atual <= novaVidaMaxima ? novoPersonagem.pv.atual : novaVidaMaxima;

            functions.adicionarLog(`${personagem.nome} não está mais sob efeito de ${CONDICOES.FORMA_LUPINA.nome}.`);

            return {
                ...novoPersonagem,
                pv: {...novoPersonagem.pv, maximo: novaVidaMaxima, atual: novaVidaAtual },
                atributos: {
                    ...personagem.atributos,
                    forca: personagem.atributos.forca - 1,
                    agilidade: personagem.atributos.agilidade - 1,
                    vigor: personagem.atributos.vigor - 1,
                },
            }

        }

        return personagem;
    }

    return { encerrarFormaLupina }

}