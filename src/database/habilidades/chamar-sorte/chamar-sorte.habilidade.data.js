import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_EXECUCAO, ALVOS, HABILIDADE_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../hook/batalha";
import { BANNER_DURACAO } from "../../../constants";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";

const { iniciarEfeito, finalizarAcao, gastarMana, informarErro } = useAcoesBase();
const { causarSortudo } = useCausarCondicao();
const { rolarDado } = useRolarDado();

export const CHAMAR_SORTE = {
    id: 33,
    nome: "Chamar a Sorte",
    elemento: ELEMENTOS.LUZ,
    custo: 1,
    tipo: HABILIDADE_TIPO.BUFF,
    descricao: "Cruza os dedos enquanto segura um objeto de sorte, chamando a sorte para si e recebendo a condição Sortudo por 1d4 rodadas.",
    evento: chamarSorteEvento,
    alvos: ALVOS.PESSOAL,
    execucao: ACAO_EXECUCAO.PADRAO,
    variantes: [],
}

function chamarSorteEvento(personagem, alvo, acao, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });
    try {
      const personagemNovo = gastarMana(personagem, acao.custo, functions);
      const alvoCorreto = personagem.idCombate===alvo.idCombate ? personagemNovo : alvo
      const {dados, total} = rolarDado(1, 4, []);
      functions.ativarBannerRolagem([...dados], [], total, personagem)
      function _etapas() {
        const novoAlvo = causarSortudo(alvoCorreto, total, CHAMAR_SORTE, functions)
        const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.LUZ_2, ACOES_AUDIO.MAGIA_1);
        functions.adicionarLog(`${personagem.nome} cruzou os dedos e usou ${CHAMAR_SORTE.nome} em si mesmo.`)
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