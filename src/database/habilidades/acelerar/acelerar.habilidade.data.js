import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_EXECUCAO, ALVOS, HABILIDADE_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../hook/batalha";
import { BANNER_DURACAO } from "../../../constants";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";

const { iniciarEfeito, finalizarAcao, gastarMana, informarErro } = useAcoesBase();
const { causarVeloz } = useCausarCondicao();
const {rolarDado} = useRolarDado();

export const ACELERAR = {
    id: 24,
    nome: "Acelerar",
    elemento: ELEMENTOS.ELETRICO,
    custo: 2,
    tipo: HABILIDADE_TIPO.BUFF,
    descricao: "Acelera a velocidade de movimento de um aliado, que recebe a condição Veloz por 1d6 rodadas.",
    evento: acelerarEvento,
    alvos: ALVOS.ALIADOS,
    execucao: ACAO_EXECUCAO.PADRAO,
    variantes: [],
}

function acelerarEvento(personagem, alvo, acao, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });
    try {
      const personagemNovo = gastarMana(personagem, acao.custo, functions);
      const alvoCorreto = personagem.idCombate===alvo.idCombate ? personagemNovo : alvo
      const {dados, total} = rolarDado(1, 6, []);
      functions.ativarBannerRolagem([...dados], [], total, personagem.corTema)

      function _etapas() {
        functions.adicionarLog(`${personagem.nome} usou ${ACELERAR.nome} em ${alvoCorreto.nome}.`)
        const novoAlvo =  causarVeloz(alvoCorreto, total, ACELERAR, functions)
        const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.ELETRICO_2, ACOES_AUDIO.ELETRICO_1);
        finalizarAcao(functions, novoAlvo, duracao);
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