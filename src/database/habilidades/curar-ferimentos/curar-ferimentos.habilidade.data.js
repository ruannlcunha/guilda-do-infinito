import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { BANNER_DURACAO } from "../../../constants";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_EXECUCAO, ALVOS, HABILIDADE_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { getModificadoresCura } from "../../../utils/get-modificadores.util";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, restaurarVida, finalizarAcao, gastarMana, informarErro } = useAcoesBase();

export const CURAR_FERIMENTOS = {
    id: 1,
    nome: "Curar Ferimentos",
    elemento: ELEMENTOS.LUZ,
    custo: 1,
    tipo: HABILIDADE_TIPO.CURA,
    descricao: "Cura 2d8+2 de PV de um aliado.",
    evento: curarEvento,
    alvos: ALVOS.ALIADOS,
    execucao: ACAO_EXECUCAO.PADRAO,
    variantes: [
      {
        categoria: "Nível",
        lista: [
          {
            varianteId: "NIVEL_1",
            titulo: "1",
            descricao: "Cura 2d8+2 de PV de um aliado.",
            novaAcao: {
              nome: "Curar Ferimentos",
              custo: 1,
              evento: curarEvento,
            }
          },
          {
            varianteId: "NIVEL_2",
            titulo: "2",
            descricao: "Cura 4d8+4 de PV de um aliado.",
            novaAcao: {
              nome: "Curar Ferimentos (Nível 2)",
              custo: 3,
              evento: curarNivel2Evento,
            }
          },
        ],
      },
    ],
}

function curarEvento(personagem, alvo, acao, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });
    try {
      const personagemNovo = gastarMana(personagem, acao.custo, functions);
      const alvoCorreto = personagem.idCombate===alvo.idCombate ? personagemNovo : alvo
      const modificadores = getModificadoresCura([{valor: 2, atributo: "Modificador"}], personagem)
      const {dados, total} = rolarDado(2, 8, modificadores);
      const alvoRestaurado = restaurarVida(alvoCorreto, total, functions);
      functions.ativarBannerRolagem([...dados], modificadores, total, personagem)
      function _etapas() {
        const duracao = iniciarEfeito(alvoRestaurado, functions, EFFECTS.CURA_1, ACOES_AUDIO.CURA);
        functions.adicionarLog(`${personagem.nome} usou ${CURAR_FERIMENTOS.nome} e curou ${total} PV de ${alvo.nome}.`)
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
      throw error
    }
}

function curarNivel2Evento(personagem, alvo, acao, functions) {
    functions.setAnimacoes((old) => {
      return { ...old, escolhendoAlvo: false };
    });
    try {
      const personagemNovo = gastarMana(personagem, acao.custo, functions);
      const alvoCorreto = personagem.idCombate===alvo.idCombate ? personagemNovo : alvo
      const modificadores = getModificadoresCura([{valor: 4, atributo: "Modificador"}], personagem)
      const {dados, total} = rolarDado(4, 8, modificadores);
      const alvoRestaurado = restaurarVida(alvoCorreto, total, functions);
      functions.ativarBannerRolagem([...dados], modificadores, total, personagem)
      function _etapas() {
        const duracao = iniciarEfeito(alvoRestaurado, functions, EFFECTS.CURA_1, ACOES_AUDIO.CURA);
        functions.adicionarLog(`${personagem.nome} usou ${CURAR_FERIMENTOS.nome} e curou ${total} PV de ${alvo.nome}.`)
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
      throw error
    }
}