import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { BANNER_DURACAO } from "../../../constants";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_CATEGORIA, ACAO_EXECUCAO, ALVOS, ACAO_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, restaurarVida, finalizarAcao, gastarMana, informarErro } = useAcoesBase();

export const RECUPERAR_FOLEGO = {
  id: 13,
  nome: "Recuperar Fôlego",
  elemento: ELEMENTOS.FISICO,
  custo: 3,
  tipo: ACAO_TIPO.CURA,
  categoria: ACAO_CATEGORIA.FISICO,
  descricao: "Recupera 1d10+Vigor de PV de você mesmo.",
  evento: recuperarFolego,
  alvos: ALVOS.PESSOAL,
  execucao: ACAO_EXECUCAO.PADRAO,
  variantes: []
};

function recuperarFolego(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });
  try {
    let personagemNovo = gastarMana(personagem, acao.custo, functions);
    const alvoCorreto = personagem.idCombate === alvo.idCombate ? personagemNovo : alvo;
    const modificadores = [{ valor: personagem.atributos.vigor, atributo: "Vigor" }];
    const { dados, total } = rolarDado(1, 10, modificadores);
    const alvoRestaurado = restaurarVida(alvoCorreto, total, functions);
    functions.ativarBannerRolagem([...dados], modificadores, total, personagem);
    function _etapas() {
      const duracao = iniciarEfeito(alvoRestaurado, functions, EFFECTS.FUMACA_1, ACOES_AUDIO.FOLEGO);
      functions.adicionarLog(`${personagem.nome} usou ${RECUPERAR_FOLEGO.nome} e curou ${total} PV de si mesmo.`);
      finalizarAcao(personagemNovo, functions, alvoRestaurado, duracao);
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
