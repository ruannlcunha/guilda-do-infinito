import { BANNER_DURACAO } from "../../../../constants";
import { ACOES_AUDIO } from "../../../../constants/audios/acoes.constant";
import { EFFECTS } from "../../../../constants/images";
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant";
import { useAcoesBase } from "../../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../../hook/batalha/rolar-dado/use-rolar-dado.hook";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, restaurarVida, finalizarAcao, consumirItem, informarErro } = useAcoesBase();

export const MANDRAGORA = {
    id: 41,
    nome: "Madrágora",
    descricao: "Um item",
    efeito: "Faz algo",
    evento: ()=>{},
    alvos: "INIMIGOS",
    sprite: "/guilda-do-infinito/src/database/itens/consumiveis/mandragora/MANDRAGORA.png",
    raridade: 4,
    categoria: ITENS_CATEGORIA.CONSUMIVEL,
}
