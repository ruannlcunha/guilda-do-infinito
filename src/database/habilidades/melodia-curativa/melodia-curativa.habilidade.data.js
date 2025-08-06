import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { BANNER_DURACAO } from "../../../constants";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_CATEGORIA, ACAO_EXECUCAO, ALVOS, ACAO_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { getModificadoresCura } from "../../../utils/get-modificadores.util";
import { converterDados } from "../../../utils";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, restaurarVida, finalizarAcaoArea, gastarMana, informarErro } = useAcoesBase();

export const MELODIA_CURATIVA = {
  id: 15,
  nome: "Melodia Curativa",
  elemento: ELEMENTOS.ESSENCIA,
  custo: 1,
  tipo: ACAO_TIPO.CURA,
  categoria: ACAO_CATEGORIA.MAGICO,
  descricao: "Uma música que cura 1d6+1 de todos os aliados.",
  evento: melodiaCurativaEvento,
  alvos: ALVOS.ALIADOS_AREA,
  execucao: ACAO_EXECUCAO.PADRAO,
  bonus: "1d6+1",
  variantes: []
};

function melodiaCurativaEvento(personagem, alvos, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });
  try {
    let personagemNovo = gastarMana(personagem, acao.custo, functions);
    const bonusArray = converterDados(acao.bonus);
    const modificadores = getModificadoresCura([{ valor: bonusArray[2], atributo: "Modificador" }], personagem);
    const { dados, total } = rolarDado(bonusArray[0], bonusArray[1], modificadores);
    functions.ativarBannerRolagem([...dados], modificadores, total, personagem);

    function _etapas() {
      const novosAlvos = [];
      let duracao = 0;
      alvos.map((alvo) => {
        const alvoCorreto = personagem.idCombate === alvo.idCombate ? personagemNovo : alvo;
        const novoAlvo = restaurarVida(alvoCorreto, total, functions);
        if (personagem.idCombate === alvo.idCombate) personagemNovo = novoAlvo;
        duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.MUSICAL_1, ACOES_AUDIO.MELODIA);
        novosAlvos.push(novoAlvo);
        functions.adicionarLog(`${personagem.nome} usou ${acao.nome} e curou ${total} PV de ${alvo.nome}.`);
      });
      finalizarAcaoArea(personagemNovo, functions, novosAlvos, duracao);
    }

    const timeout = setTimeout(() => {
      _etapas();
    }, BANNER_DURACAO.ROLAGEM);

    functions.setBanners((old) => {
      return {
        ...old,
        evento: () => {
          clearTimeout(timeout);
          _etapas();
        }
      };
    });
  } catch (error) {
    informarErro(error, functions);
    throw error;
  }
}
