import { BANNER_DURACAO } from "../../../../constants";
import { ACOES_AUDIO } from "../../../../constants/audios/acoes.constant";
import { EFFECTS } from "../../../../constants/images";
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant";
import { useAcoesBase } from "../../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../../hook/batalha/rolar-dado/use-rolar-dado.hook";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, restaurarVida, finalizarAcao, consumirItem, informarErro } = useAcoesBase();

export const VENENO = {
    id: 44,
    nome: "Frasco de Veneno",
    descricao: "Um frasco contendo um líquido corrosivo que pode ser arremessado.",
    efeito: "Faz algo",
    evento: ()=>{},
    alvos: "ALIADOS",
    sprite: "/guilda-do-infinito/src/database/itens/consumiveis/veneno/VENENO.png",
    raridade: 3,
    categoria: ITENS_CATEGORIA.CONSUMIVEL,
}
