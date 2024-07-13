import { BANNER_DURACAO } from "../../../../constants";
import { ACOES_AUDIO } from "../../../../constants/audios/acoes.constant";
import { EFFECTS } from "../../../../constants/images";
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant";
import { useAcoesBase } from "../../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../../hook/batalha/rolar-dado/use-rolar-dado.hook";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, restaurarVida, finalizarAcao, consumirItem, informarErro } = useAcoesBase();

export const POCAO_CURA_MAIOR = {
    id: 13,
    nome: "Poção de Cura Maior",
    descricao: "Um grande frasco de vidro contendo um líquido vermelho mágico que recupera sua vida.",
    efeito: "Cura 2d8+2 de PV de você mesmo ou de um aliado.",
    evento: pocaoCuraMenor,
    alvos: "ALIADOS",
    sprite: "/guilda-do-infinito/src/database/itens/consumiveis/pocao-cura-maior/POCAO_CURA_MAIOR.png",
    raridade: 4,
    categoria: ITENS_CATEGORIA.CONSUMIVEL,
}

function pocaoCuraMenor(personagem, alvo, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    try {
      const personagemNovo = consumirItem(personagem, 1, functions)
      const novoAlvo = personagem.idCombate===alvo.idCombate ? personagemNovo : alvo
      const modificadores = [{valor: 1, atributo: "Modificador"}]
      const {dados, total} = rolarDado(1, 8, modificadores);
      const alvoRestaurado = restaurarVida(novoAlvo, total, functions);
      functions.ativarBannerRolagem([...dados], modificadores, total, personagem.corTema)
      setTimeout(()=>{
        const duracao = iniciarEfeito(alvoRestaurado, functions, EFFECTS.CURA_EFFECT, ACOES_AUDIO.CURA);
        finalizarAcao(functions, alvoRestaurado, duracao);
      }, BANNER_DURACAO.ROLAGEM)
    } catch (error) {
      informarErro(error, functions)
    }
}