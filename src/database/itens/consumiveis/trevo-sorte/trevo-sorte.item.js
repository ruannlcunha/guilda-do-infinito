import { BANNER_DURACAO } from "../../../../constants";
import { ALVOS } from "../../../../constants/acoes/acoes.constant";
import { ACOES_AUDIO } from "../../../../constants/audios/acoes.constant";
import { EFFECTS } from "../../../../constants/images";
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { CONDICOES } from "../../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../../hook/batalha";
import { useAcoesBase } from "../../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import TREVO_SORTE_SPRITE from "./TREVO_SORTE.png"

const { iniciarEfeito, finalizarAcao, consumirItem, informarErro } = useAcoesBase();
const { causarSortudo } = useCausarCondicao();
const { rolarDado } = useRolarDado();

export const TREVO_SORTE = {
    id: 10,
    nome: "Trevo da Sorte",
    descricao: `Um pequeno trevo de 4 folhas que carrega muita sorte. Ao ser usado fornece ao usuário a condição Sortudo por 1d4 rodadas.`,
    evento: trevoSorteEvento,
    alvos: ALVOS.PESSOAL,
    sprite: TREVO_SORTE_SPRITE,
    raridade: 4,
    itemTipo: ITEM_TIPO.CONSUMIVEL,
}

function trevoSorteEvento(personagem, alvo, acao, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });
    try {
      const personagemNovo = consumirItem(personagem, acao.id, functions)
      const alvoCorreto = personagem.idCombate===alvo.idCombate ? personagemNovo : alvo
      const {dados, total} = rolarDado(1, 4, []);
      functions.ativarBannerRolagem([...dados], [], total, personagem)
      function _etapas() {
        const novoAlvo = causarSortudo(alvoCorreto, total, TREVO_SORTE, functions)
        const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.LUZ_2, ACOES_AUDIO.MAGIA_1);
        functions.adicionarLog(`${personagem.nome} usou o ${acao.nome} e recebeu a condição ${CONDICOES.SORTUDO.nome}.`)
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