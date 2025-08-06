import { CONDICOES, TRANSFORMACOES } from "../../../../../constants/personagens/personagem.constant";
import { ACOES_UNICAS } from "../../../../../database/acoes-unicas";

export function useEncerrarFormaAnimal() {

    function encerrarFormaAnimal(personagem, functions) {
        if (personagem.condicoes.some((condicao) => condicao.nome === CONDICOES.FORMA_ANIMAL.nome)) {
            const condicaoFormaAnimal = personagem.condicoes.find((condicao) => condicao.nome === CONDICOES.FORMA_ANIMAL.nome)

            const novasCondicoes = [...personagem.condicoes.filter((condicao) => condicao.nome !== CONDICOES.FORMA_ANIMAL.nome)];
            const novasAcoesExtras = [...personagem.acoesExtras.filter((acao) => acao.id !== ACOES_UNICAS.DESFAZER_FORMA_ANIMAL.id)];;
            const novoBonusDado = [...personagem.bonusDado.filter((bonus) => bonus.condicao !== CONDICOES.FORMA_ANIMAL.nome)];
            const novoPersonagem = {
                ...personagem,
                ...condicaoFormaAnimal.personagemOriginal,
                condicoes: novasCondicoes,
                acoesExtras: novasAcoesExtras,
                bonusDado: novoBonusDado,
            };
            functions.adicionarLog(`${personagem.nome} não está mais sob efeito de ${CONDICOES.FORMA_ANIMAL.nome}.`);

            if (condicaoFormaAnimal.bonus === TRANSFORMACOES.LOBO) {
                return {
                    ...novoPersonagem,
                    atributos: { ...personagem.atributos, forca: personagem.atributos.forca - 1 },
                }
            }

            if (condicaoFormaAnimal.bonus === TRANSFORMACOES.URSO) {
                const novaVidaMaxima = novoPersonagem.pv.maximo - 15;
                const novaVidaAtual = novoPersonagem.pv.atual <= novaVidaMaxima ? novoPersonagem.pv.atual : novaVidaMaxima;
                return {
                    ...novoPersonagem,
                    pv: {...novoPersonagem.pv, maximo: novaVidaMaxima, atual: novaVidaAtual },
                    atributos: { ...personagem.atributos, vigor: personagem.atributos.vigor - 1 },
                    defesa: personagem.defesa - 3,
                    resistenciaDano: [...personagem.resistenciaDano].filter(resistencia=> resistencia.origem !== CONDICOES.FORMA_ANIMAL.nome),
                }
            }

            if (condicaoFormaAnimal.bonus === TRANSFORMACOES.AGUIA || condicaoFormaAnimal.bonus === TRANSFORMACOES.ARANHA) {
                return {
                    ...novoPersonagem,
                    atributos: { ...personagem.atributos, agilidade: personagem.atributos.agilidade - 1 },
                }
            }

            return novoPersonagem;
        }

        return personagem;
    }

    return { encerrarFormaAnimal }

}