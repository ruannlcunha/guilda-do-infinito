import { BANNER_DURACAO } from "../../../../constants";
import { ACOES_AUDIO } from "../../../../constants/audios/acoes.constant";
import { EFFECTS } from "../../../../constants/images";
import { ITENS_CATEGORIA } from "../../../../constants/itens/itens.constant";
import { useAcoesBase } from "../../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../../hook/batalha/rolar-dado/use-rolar-dado.hook";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, restaurarVida, finalizarAcao, consumirItem, informarErro } = useAcoesBase();

export const POCAO_CURA_MENOR = {
    id: 12,
    nome: "Poção de Cura Menor",
    descricao: "Um pequeno frasco de vidro contendo um líquido vermelho mágico que recupera sua vida.",
    efeito: "Cura 1d8+1 de PV de você mesmo ou de um aliado.",
    evento: pocaoCuraMenor,
    alvos: "ALIADOS",
    sprite: "/guilda-do-infinito/src/database/itens/consumiveis/pocao-cura-menor/POCAO_CURA_MENOR.png",
    raridade: 3,
    categoria: ITENS_CATEGORIA.CONSUMIVEL,
}

function pocaoCuraMenor(personagem, alvo, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    try {
      const personagemNovo = consumirItem(personagem, POCAO_CURA_MENOR.id, functions)
      const novoAlvo = personagem.idCombate===alvo.idCombate ? personagemNovo : alvo
      const modificadores = [{valor: 1, atributo: "Modificador"}]
      const {dados, total} = rolarDado(1, 8, modificadores);
      const alvoRestaurado = restaurarVida(novoAlvo, total, functions);
      functions.ativarBannerRolagem([...dados], modificadores, total, personagem.corTema)
      function _etapas() {
        const duracao = iniciarEfeito(alvoRestaurado, functions, EFFECTS.CURA_EFFECT, ACOES_AUDIO.CURA);
        finalizarAcao(functions, alvoRestaurado, duracao);
      }
      const timeout = setTimeout(()=>{
        _etapas()
      }, BANNER_DURACAO.ROLAGEM)

      functions.setBanners(old => { return {...old, evento: 
        ()=>{
          clearTimeout(timeout)
          _etapas()
        }}})
    } catch (error) {
      informarErro(error, functions)
    }
}