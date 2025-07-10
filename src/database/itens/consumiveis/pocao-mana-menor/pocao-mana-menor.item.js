import { BANNER_DURACAO } from "../../../../constants";
import { ACOES_AUDIO } from "../../../../constants/audios/acoes.constant";
import { EFFECTS } from "../../../../constants/images";
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant";
import { useAcoesBase } from "../../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../../hook/batalha/rolar-dado/use-rolar-dado.hook";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, restaurarVida, finalizarAcao, consumirItem, informarErro } = useAcoesBase();

export const POCAO_MANA_MENOR = {
    id: 15,
    nome: "Poção de Mana Menor",
    descricao: "Um pequeno frasco de vidro contendo um líquido azul mágico que recupera sua mana.",
    descricao: "Recupera 1d4 de PM de você mesmo ou de um aliado.",
    evento: null,
    alvos: "ALIADOS",
    sprite: "/guilda-do-infinito/src/database/itens/consumiveis/pocao-mana-menor/POCAO_MANA_MENOR.png",
    raridade: 3,
    categoria: ITENS_CATEGORIA.CONSUMIVEL,
}