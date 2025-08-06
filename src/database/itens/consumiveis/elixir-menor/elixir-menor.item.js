import { BANNER_DURACAO } from "../../../../constants";
import { ALVOS } from "../../../../constants/acoes/acoes.constant";
import { ACOES_AUDIO } from "../../../../constants/audios/acoes.constant";
import { EFFECTS } from "../../../../constants/images";
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { useAcoesBase } from "../../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import ELIXIR_MENOR_SPRITE from "./ELIXIR_MENOR.png";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, restaurarVida, restaurarMana, finalizarAcao, consumirItem, informarErro } = useAcoesBase();

export const ELIXIR_MENOR = {
  id: 7,
  nome: "Elixir Menor",
  descricao: "Um pequeno frasco de vidro contendo um líquido dourado mágico que recupera 2d8+2PV e 2 de PM de você mesmo ou de um aliado.",
  efeito: "Recupera 2d8+2PV e 2 de PM de você mesmo ou de um aliado.",
  evento: pocaoElixirMenorEvento,
  alvos: ALVOS.ALIADOS,
  sprite: ELIXIR_MENOR_SPRITE,
  raridade: 4,
  itemTipo: ITEM_TIPO.CONSUMIVEL
};

function pocaoElixirMenorEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });
  try {
    let personagemNovo = consumirItem(personagem, acao.id, functions);
    const alvoCorreto = personagem.idCombate === alvo.idCombate ? personagemNovo : alvo;
    const modificadores = [{ valor: 2, atributo: "Modificador" }];
    const { dados, total } = rolarDado(2, 8, modificadores);
    const alvoRestaurado = restaurarVida(alvoCorreto, total, functions);
    const alvoRestaurado2 = restaurarMana(alvoRestaurado, 2, functions);

    functions.ativarBannerRolagem([...dados], modificadores, total, personagem);
    function _etapas() {
      const duracao = iniciarEfeito(alvoRestaurado2, functions, EFFECTS.CURA_3, ACOES_AUDIO.CURA);
      functions.adicionarLog(`${personagem.nome} usou ${acao.nome} e curou ${total} PV e 2 PM de ${alvo.nome}.`);
      finalizarAcao(personagemNovo, functions, alvoRestaurado2, duracao);
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
