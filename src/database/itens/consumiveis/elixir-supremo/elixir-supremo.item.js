import { BANNER_DURACAO } from "../../../../constants";
import { ACOES_AUDIO } from "../../../../constants/audios/acoes.constant";
import { EFFECTS } from "../../../../constants/images";
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant";
import { useAcoesBase } from "../../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../../hook/batalha/rolar-dado/use-rolar-dado.hook";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, restaurarVida, finalizarAcao, consumirItem, informarErro } = useAcoesBase();

export const ELIXIR_SUPREMO = {
    id: 40,
    nome: "Elixir Supremo",
    descricao: "Um enorme frasco de vidro contendo um líquido dourado mágico que recupera sua vida e mana.",
    descricao: "Faz algo",
    evento: ()=>{},
    alvos: "ALIADOS",
    sprite: "/guilda-do-infinito/src/database/itens/consumiveis/elixir-supremo/ELIXIR_SUPREMO.png",
    raridade: 5,
    categoria: ITENS_CATEGORIA.CONSUMIVEL,
}
