import { BANNER_DURACAO } from "../../../../constants";
import { ALVOS } from "../../../../constants/acoes/acoes.constant";
import { ACOES_AUDIO } from "../../../../constants/audios/acoes.constant";
import { EFFECTS } from "../../../../constants/images";
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { useAcoesBase } from "../../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import ELIXIR_SUPREMO_SPRITE from "./ELIXIR_SUPREMO.png";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, restaurarVida, restaurarMana, finalizarAcao, consumirItem, informarErro } = useAcoesBase();

export const ELIXIR_SUPREMO = {
    id: 9,
    nome: "Elixir Supremo",
    descricao: "Um enorme frasco de vidro contendo um líquido dourado mágico que recupera 4d4 de PM e cura completamente os PV de você mesmo ou de um aliado.",
    efeito: "Recupera 4d4 de PM e cura completamente os PV de você mesmo ou de um aliado.",
    evento: pocaoElixirSupremaEvento,
    alvos: ALVOS.ALIADOS,
    sprite: ELIXIR_SUPREMO_SPRITE,
    raridade: 5,
    itemTipo: ITEM_TIPO.CONSUMIVEL,
}

function pocaoElixirSupremaEvento(personagem, alvo, acao, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });
    try {
      const personagemNovo = consumirItem(personagem, acao.id, functions)
      const alvoCorreto = personagem.idCombate===alvo.idCombate ? personagemNovo : alvo
      const {dados, total} = rolarDado(4, 4, []);
      const alvoRestaurado = restaurarVida(alvoCorreto, alvoCorreto.pv.maximo, functions);
      const alvoRestaurado2 = restaurarMana(alvoRestaurado, total, functions);

      functions.ativarBannerRolagem([...dados], [], total, personagem)
      function _etapas() {
        const duracao = iniciarEfeito(alvoRestaurado2, functions, EFFECTS.CURA_3, ACOES_AUDIO.CURA);
        functions.adicionarLog(`${personagem.nome} usou ${acao.nome} e recuperou ${total} PM e todos os PV de ${alvo.nome}.`)
        finalizarAcao(functions, alvoRestaurado2, duracao);
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
