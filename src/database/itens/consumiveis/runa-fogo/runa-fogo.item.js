import { BANNER_DURACAO } from "../../../../constants";
import { ACOES_AUDIO } from "../../../../constants/audios/acoes.constant";
import { EFFECTS } from "../../../../constants/images";
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant";
import { useAcoesBase } from "../../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../../hook/batalha/rolar-dado/use-rolar-dado.hook";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, restaurarVida, finalizarAcao, consumirItem, informarErro } = useAcoesBase();

export const RUNA_FOGO = {
    id: 42,
    nome: "Runa de Fogo",
    descricao: "Uma pedra contendo uma runa mágica do elemento Fogo.",
    efeito: "Faz algo",
    evento: ()=>{},
    alvos: "ALIADOS",
    sprite: "/guilda-do-infinito/src/database/itens/consumiveis/runa-fogo/RUNA_FOGO.png",
    raridade: 4,
    categoria: ITENS_CATEGORIA.CONSUMIVEL,
}
