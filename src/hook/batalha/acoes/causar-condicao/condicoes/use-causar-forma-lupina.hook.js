
import { BONUS_DADO, CONDICOES, TRANSFORMACOES } from "../../../../../constants/personagens/personagem.constant";
import { ACOES_UNICAS } from "../../../../../database/acoes-unicas";
import { ATAQUES } from "../../../../../database/ataques";
import { HABILIDADES } from "../../../../../database/habilidades";
import { FORMAS_LUPINAS_DATA } from "../../../../../database/transformacoes/forma-lupina";
import { getTransformacao } from "../../../../../utils/get-transformacao.util";
import { instanciarAtaque, instanciarHabilidade } from "../../../../../utils/instanciar-acao.util";

export function useCausarFormaLupina() {

    function causarFormaLupina(personagem, acao, functions) {
        if (!personagem.condicoes.find((condicao) => condicao.nome === CONDICOES.FORMA_LUPINA.nome)) {
            const novaAcaoExtra = { ...ACOES_UNICAS.DESFAZER_FORMA_LUPINA };
            const personagemOriginal = {
                sprite: personagem.sprite,
                perfil: personagem.perfil,
                ataques: personagem.ataques,
                habilidades: personagem.habilidades,
            }

            const transformacao = getTransformacao(TRANSFORMACOES.LOBISOMEM, personagem, FORMAS_LUPINAS_DATA)
            const personagemLobisomem = {
                ...personagem,
                sprite: transformacao.sprite,
                perfil: transformacao.perfil,
                ataques: [instanciarAtaque(ATAQUES.GARRADA.id, []), instanciarAtaque(ATAQUES.MORDIDA.id, ["NORMAL", "EXTRA"])],
                habilidades: [instanciarHabilidade(HABILIDADES.FURIA.id, [])],
                bonusDado: [
                    ...personagem.bonusDado,
                    { modificador: 2, tipo: BONUS_DADO.ATAQUE, condicao: CONDICOES.FORMA_LUPINA.nome },
                    { modificador: 2, tipo: BONUS_DADO.DANO, condicao: CONDICOES.FORMA_LUPINA.nome },
                ],
                pv: { ...personagem.pv, atual: personagem.pv.atual + 20, maximo: personagem.pv.maximo + 20 },
                atributos: {
                    ...personagem.atributos,
                    forca: personagem.atributos.forca + 1,
                    agilidade: personagem.atributos.agilidade + 1,
                    vigor: personagem.atributos.vigor + 1,
                },
            }
            const condicaoFormaLupina = {
                ...CONDICOES.FORMA_LUPINA,
                personagemOriginal: {
                    ...personagemOriginal,
                },
                origem: CONDICOES.FORMA_LUPINA.nome,
            };
            const condicaoRegeneracao = {
                ...CONDICOES.REGENERACAO,
                bonus: 2,
                infinita: true,
                origem: CONDICOES.FORMA_LUPINA.nome,
            };

            functions.adicionarLog(`${personagem.nome} se transformou em lobisomem, 
                recebendo +1 em Força, Agilidade e Vigor, +2 em Ataque e Dano, +20 PV, ações e talentos próprios. `);
            return {
                ...personagemLobisomem,
                acoesExtras: [...personagem.acoesExtras, novaAcaoExtra],
                condicoes: [...personagem.condicoes, condicaoFormaLupina, condicaoRegeneracao]
            };
        }
        else {
            functions.adicionarLog(`AVISO: ${personagem.nome} já está sob efeito de ${CONDICOES.FORMA_LUPINA.nome}.`);
            throw {
                message: `${personagem.nome} já está sob efeito de ${CONDICOES.FORMA_LUPINA.nome}.`
            };
        }
    }

    return { causarFormaLupina }
}