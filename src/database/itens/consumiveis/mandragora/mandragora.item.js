import { BANNER_DURACAO } from "../../../../constants";
import { ALVOS } from "../../../../constants/acoes/acoes.constant";
import { ACOES_AUDIO } from "../../../../constants/audios/acoes.constant";
import { EFFECTS } from "../../../../constants/images";
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { useAcoesBase } from "../../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../../hook/batalha/rolar-dado/use-rolar-dado.hook";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, restaurarVida, finalizarAcao, consumirItem, informarErro } = useAcoesBase();

export const MANDRAGORA = {
  id: 13,
  nome: "Madrágora",
  descricao: `Uma pequena planta mágica que ao ser acordada seus gritos podem causar a condição "Atordoado" no inimigo por 1d6 rodadas.`,
  evento: () => {},
  alvos: "INIMIGOS",
  sprite: "/guilda-do-infinito/src/database/itens/consumiveis/mandragora/MANDRAGORA.png",
  raridade: 4,
  itemTipo: ITEM_TIPO.CONSUMIVEL
};
