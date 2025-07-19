import { BANNER_DURACAO } from "../../../../constants";
import { ALVOS } from "../../../../constants/acoes/acoes.constant";
import { ACOES_AUDIO } from "../../../../constants/audios/acoes.constant";
import { EFFECTS } from "../../../../constants/images";
import { ITEM_TIPO } from "../../../../constants/itens/itens.constant";
import { useAcoesBase } from "../../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../../hook/batalha/rolar-dado/use-rolar-dado.hook";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, restaurarVida, finalizarAcao, consumirItem, informarErro } = useAcoesBase();

export const TREVO_SORTE = {
    id: 10,
    nome: "Trevo da Sorte",
    descricao: `Um pequeno trevo de 4 folhas que carrega muita sorte. Ao ser usado fornece a condição "Com Sorte" ao alvo por 4 rodadas.`,
    evento: ()=>{},
    alvos: ALVOS.ALIADOS,
    sprite: "/guilda-do-infinito/src/database/itens/consumiveis/trevo-sorte/TREVO_SORTE.png",
    raridade: 4,
    itemTipo: ITEM_TIPO.CONSUMIVEL,
}
