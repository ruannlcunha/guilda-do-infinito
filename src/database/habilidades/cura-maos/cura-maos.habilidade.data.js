import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { BANNER_DURACAO } from "../../../constants";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_EXECUCAO, ALVOS, HABILIDADE_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { getModificadoresCura } from "../../../utils/get-modificadores.util";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, restaurarVida, finalizarAcao, gastarMana, informarErro } = useAcoesBase();

export const CURA_MAOS = {
    id: 12,
    nome: "Cura pelas Mãos",
    elemento: ELEMENTOS.LUZ,
    custo: 1,
    tipo: HABILIDADE_TIPO.CURA,
    descricao: "Cura 1d8+1 de PV de um aliado.",
    evento: curaMaos,
    alvos: ALVOS.ALIADOS,
    execucao: ACAO_EXECUCAO.PADRAO,
    variantes: [],
}

function curaMaos(personagem, alvo, acao, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });
    try {
      const personagemNovo = gastarMana(personagem, acao.custo, functions);
      const alvoCorreto = personagem.idCombate===alvo.idCombate ? personagemNovo : alvo
      const modificadores = getModificadoresCura([{valor: 1, atributo: "Modificador"}], personagem)
      const {dados, total} = rolarDado(1, 8, modificadores);
      const alvoRestaurado = restaurarVida(alvoCorreto, total, functions);
      functions.ativarBannerRolagem([...dados], modificadores, total, personagem)
      function _etapas() {
        const duracao = iniciarEfeito(alvoRestaurado, functions, EFFECTS.CURA_2, ACOES_AUDIO.CURA);
        functions.adicionarLog(`${personagem.nome} usou ${CURA_MAOS.nome} e curou ${total} PV de ${alvo.nome}.`)
        finalizarAcao(functions, alvoRestaurado, duracao);
      }
      const timeout = setTimeout(()=>{
        _etapas()
      }, BANNER_DURACAO.ROLAGEM)

      functions.setBanners(old => { return {...old, evento: 
        ()=>{
          clearTimeout(timeout)
          _etapas()
        }}})
    } catch (error) {
      informarErro(error, functions)
      throw error
    }
  }