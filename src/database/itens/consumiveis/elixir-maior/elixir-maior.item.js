import { BANNER_DURACAO } from "../../../../constants";
import { ALVOS } from "../../../../constants/acoes/acoes.constant";
import { ACOES_AUDIO } from "../../../../constants/audios/acoes.constant";
import { EFFECTS } from "../../../../constants/images";
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { useAcoesBase } from "../../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import ELIXIR_MAIOR_SPRITE from "./ELIXIR_MAIOR.png";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, restaurarVida, restaurarMana, finalizarAcao, consumirItem, informarErro } = useAcoesBase();

export const ELIXIR_MAIOR = {
    id: 8,
    nome: "Elixir Maior",
    descricao: "Um grande frasco de vidro contendo um líquido dourado mágico que recupera 4d8+4 PV e 4 de PM de você mesmo ou de um aliado.",
    efeito: "Recupera 4d8+4PV e 4 de PM de você mesmo ou de um aliado.",
    evento: pocaoElixirMaiorEvento,
    alvos: ALVOS.ALIADOS,
    sprite: ELIXIR_MAIOR_SPRITE,
    raridade: 4,
    itemTipo: ITEM_TIPO.CONSUMIVEL,
}

function pocaoElixirMaiorEvento(personagem, alvo, acao, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });
    try {
      const personagemNovo = consumirItem(personagem, acao.id, functions)
      const alvoCorreto = personagem.idCombate===alvo.idCombate ? personagemNovo : alvo
      const modificadores = [{valor: 4, atributo: "Modificador"}]
      const {dados, total} = rolarDado(4, 8, modificadores);
      const alvoRestaurado = restaurarVida(alvoCorreto, total, functions);
      const alvoRestaurado2 = restaurarMana(alvoRestaurado, 4, functions);

      functions.ativarBannerRolagem([...dados], modificadores, total, personagem)
      function _etapas() {
        const duracao = iniciarEfeito(alvoRestaurado2, functions, EFFECTS.CURA_1, ACOES_AUDIO.CURA);
        functions.adicionarLog(`${personagem.nome} usou ${acao.nome} e curou ${total} PV e 4 PM de ${alvo.nome}.`)
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