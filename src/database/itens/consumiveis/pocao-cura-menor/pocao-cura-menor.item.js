import { BANNER_DURACAO } from "../../../../constants";
import { ALVOS } from "../../../../constants/acoes/acoes.constant";
import { ACOES_AUDIO } from "../../../../constants/audios/acoes.constant";
import { EFFECTS } from "../../../../constants/images";
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { useAcoesBase } from "../../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import POCAO_CURA_MENOR_SPRITE from "./POCAO_CURA_MENOR.png";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, restaurarVida, finalizarAcao, consumirItem, informarErro } = useAcoesBase();

export const POCAO_CURA_MENOR = {
  id: 1,
  nome: "Poção de Cura Menor",
  descricao: "Um pequeno frasco de vidro contendo um líquido vermelho mágico que recupera 2d8+2 de PV de você mesmo ou de um aliado.",
  efeito: "Cura 2d8+2 PV de você mesmo ou de um aliado.",
  evento: pocaoCuraMenorEvento,
  alvos: ALVOS.ALIADOS,
  sprite: POCAO_CURA_MENOR_SPRITE,
  raridade: 3,
  itemTipo: ITEM_TIPO.CONSUMIVEL
};

function pocaoCuraMenorEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });
  try {
    let personagemNovo = consumirItem(personagem, acao.id, functions);
    const alvoCorreto = personagem.idCombate === alvo.idCombate ? personagemNovo : alvo;
    const modificadores = [{ valor: 2, atributo: "Modificador" }];
    const { dados, total } = rolarDado(2, 8, modificadores);
    const alvoRestaurado = restaurarVida(alvoCorreto, total, functions);
    functions.ativarBannerRolagem([...dados], modificadores, total, personagem);
    function _etapas() {
      const duracao = iniciarEfeito(alvoRestaurado, functions, EFFECTS.CURA_3, ACOES_AUDIO.CURA);
      functions.adicionarLog(`${personagem.nome} usou ${acao.nome} e curou ${total} PV de ${alvo.nome}.`);
      finalizarAcao(personagemNovo, functions, alvoRestaurado, duracao);
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
