import { BANNER_DURACAO } from "../../../../constants";
import { ALVOS } from "../../../../constants/acoes/acoes.constant";
import { ACOES_AUDIO } from "../../../../constants/audios/acoes.constant";
import { EFFECTS } from "../../../../constants/images";
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { useAcoesBase } from "../../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import POCAO_MANA_MAIOR_SPRITE from "./POCAO_MANA_MAIOR.png"

const { rolarDado } = useRolarDado();
const { iniciarEfeito, restaurarMana, finalizarAcao, consumirItem, informarErro } = useAcoesBase();

export const POCAO_MANA_MAIOR = {
    id: 5,
    nome: "Poção de Mana Maior",
    descricao: "Um grande frasco de vidro contendo um líquido azul mágico que recupera 2d4 de PM de você mesmo ou de um aliado.",
    efeito: "Recupera 2d4 de PM de você mesmo ou de um aliado.",
    evento: pocaoManaMaiorEvento,
    alvos: ALVOS.ALIADOS,
    sprite: POCAO_MANA_MAIOR_SPRITE,
    raridade: 4,
    itemTipo: ITEM_TIPO.CONSUMIVEL,
}

function pocaoManaMaiorEvento(personagem, alvo, acao, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });
    try {
      const personagemNovo = consumirItem(personagem, acao.id, functions)
      const alvoCorreto = personagem.idCombate===alvo.idCombate ? personagemNovo : alvo
      const {dados, total} = rolarDado(2, 4, []);
      const alvoRestaurado = restaurarMana(alvoCorreto, total, functions);
      functions.ativarBannerRolagem([...dados], [], total, personagem)
      function _etapas() {
        const duracao = iniciarEfeito(alvoRestaurado, functions, EFFECTS.CURA_2, ACOES_AUDIO.CURA);
        functions.adicionarLog(`${personagem.nome} usou ${acao.nome} e recuperou ${total} PM de ${alvo.nome}.`)
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