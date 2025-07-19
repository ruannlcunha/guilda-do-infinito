import { BANNER_DURACAO } from "../../../../constants";
import { ALVOS } from "../../../../constants/acoes/acoes.constant";
import { ACOES_AUDIO } from "../../../../constants/audios/acoes.constant";
import { EFFECTS } from "../../../../constants/images";
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { useAcoesBase } from "../../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import POCAO_CURA_MAIOR_SPRITE from "./POCAO_CURA_MAIOR.png"

const { rolarDado } = useRolarDado();
const { iniciarEfeito, restaurarVida, finalizarAcao, consumirItem, informarErro } = useAcoesBase();

export const POCAO_CURA_MAIOR = {
    id: 2,
    nome: "Poção de Cura Maior",
    descricao: "Um grande frasco de vidro contendo um líquido vermelho mágico que cura 4d8+4 de PV de você mesmo ou de um aliado.",
    efeito: "Cura 4d8+4 PV de você mesmo ou de um aliado.",
    evento: pocaoCuraMaiorEvento,
    alvos: ALVOS.ALIADOS,
    sprite: POCAO_CURA_MAIOR_SPRITE,
    raridade: 4,
    itemTipo: ITEM_TIPO.CONSUMIVEL,
}

function pocaoCuraMaiorEvento(personagem, alvo, acao, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });
    try {
      const personagemNovo = consumirItem(personagem, acao.id, functions)
      const alvoCorreto = personagem.idCombate===alvo.idCombate ? personagemNovo : alvo
      const modificadores = [{valor: 4, atributo: "Modificador"}]
      const {dados, total} = rolarDado(4, 8, modificadores);
      const alvoRestaurado = restaurarVida(alvoCorreto, total, functions);
      functions.ativarBannerRolagem([...dados], modificadores, total, personagem)
      function _etapas() {
        const duracao = iniciarEfeito(alvoRestaurado, functions, EFFECTS.CURA_1, ACOES_AUDIO.CURA);
        functions.adicionarLog(`${personagem.nome} usou ${acao.nome} e curou ${total} PV de ${alvo.nome}.`)
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