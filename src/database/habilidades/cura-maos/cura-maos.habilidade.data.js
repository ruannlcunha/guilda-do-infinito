import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { BANNER_DURACAO } from "../../../constants";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ALVOS } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, restaurarVida, finalizarAcao, gastarMana, informarErro } = useAcoesBase();

export const CURA_MAOS = {
    id: 12,
    nome: "Cura pelas Mãos",
    elemento: ELEMENTOS.LUZ,
    custo: 1,
    efeito: "Cura 1d8+1 de PV de um aliado.",
    evento: curaMaos,
    alvos: ALVOS.ALIADOS,
}

function curaMaos(personagem, alvo, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });
    try {
      const personagemNovo = gastarMana(personagem, 1, functions);
      const novoAlvo = personagem.idCombate===alvo.idCombate ? personagemNovo : alvo
      const modificadores = [{valor: 1, atributo: "Modificador"}]
      const {dados, total} = rolarDado(1, 8, modificadores);
      const alvoRestaurado = restaurarVida(novoAlvo, total, functions);
      functions.ativarBannerRolagem([...dados], modificadores, total, personagem.corTema, resultadoAtaque.dado)
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
    }
  }