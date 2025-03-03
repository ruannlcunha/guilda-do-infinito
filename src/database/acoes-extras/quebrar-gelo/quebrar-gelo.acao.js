import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ALVOS } from "../../../constants/acoes/acoes.constant";
import { useEncerrarCondicao } from "../../../hook/batalha";
import { CONDICOES, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { BANNER_DURACAO } from "../../../constants";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";

const { iniciarEfeito, finalizarAcao, informarErro } = useAcoesBase();
const { rolarDado } = useRolarDado();
const { encerrarCongelado } = useEncerrarCondicao();

export const QUEBRAR_GELO = {
    id: 2,
    nome: "Quebrar Gelo",
    elemento: ELEMENTOS.FISICO,
    descricao: "Destrói o gelo ao redor do seu corpo para encerrar a condição Congelado.",
    evento: quebrarGeloEvento,
    alvos: ALVOS.PESSOAL,
}

function quebrarGeloEvento(personagem, alvo, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });

    try {
      const modificadorForca = {valor: personagem.atributos.forca, atributo: "Força"}
      const {dados, total} = rolarDado(1, 20, [modificadorForca]);
      const teste = {resultadoDado: dados[0].resultado, resultadoTotal: total, ...modificadorForca}
      const dificuldade = personagem.condicoes.find(condicao=>condicao.nome===CONDICOES.CONGELADO.nome).dificuldade

      functions.ativarBannerAtaque(teste, dificuldade, personagem.corTema);

      function etapas() {
        if(teste.resultadoTotal>=dificuldade||teste.resultadoDado===20) {
          const novoAlvo = personagem.idCombate===alvo.idCombate ? personagem : alvo
          const alvoCurado = encerrarCongelado(novoAlvo);
          const duracao = iniciarEfeito(alvoCurado, functions, EFFECTS.QUEBRAR_GELO, ACOES_AUDIO.QUEBRAR_GELO);
          functions.adicionarLog(`${personagem.nome} usou ${QUEBRAR_GELO.nome} e encerrou a condição Congelado.`)
          finalizarAcao(functions, alvoCurado, duracao);
        }
        else {
          const novoAlvo = personagem.idCombate===alvo.idCombate ? personagem : alvo
          functions.adicionarLog(`${personagem.nome} usou ${QUEBRAR_GELO.nome} mas não conseguiu passar no teste de força com ${teste.resultadoTotal}.`)
          finalizarAcao(functions, novoAlvo, 0);
        }
      }

      const timeout = setTimeout(()=>{
        etapas()
      },BANNER_DURACAO.ATAQUE)

      functions.setBanners(old => { return {...old, evento: 
        ()=>{
          clearTimeout(timeout)
          etapas()
        }}})
      
      
    } catch (error) {
      informarErro(error, functions)
    }
  }