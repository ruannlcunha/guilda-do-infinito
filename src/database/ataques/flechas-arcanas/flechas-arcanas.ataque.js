import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { useRolarDado } from "../../../hook/batalha/rolar-dado/use-rolar-dado.hook";
import { ACAO_EXECUCAO, ALVOS, ACAO_CATEGORIA, ACAO_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { getModificadoresDano, getModificadoresConjuracao } from "../../../utils/get-modificadores.util";

const { rolarDado } = useRolarDado();
const { iniciarEfeito, causarDano, finalizarAcaoArea, atacar, realizarEtapasAtaqueArea, gastarMana } = useAcoesBase();

export const FLECHAS_ARCANAS = {
  id: 13,
  nome: "Flechas Arcanas",
  dadoDeDano: "1d4+1",
  descricao: "Flechas de magia pura que acertam todos os inimigos adversários.",
  elemento: ELEMENTOS.ESSENCIA,
  tipo: ACAO_TIPO.ATAQUE,
  categoria: ACAO_CATEGORIA.MAGICO,
  custo: 1,
  evento: flechasArcanasEvento,
  alvos: ALVOS.INIMIGOS_AREA,
  execucao: ACAO_EXECUCAO.PADRAO,
  variantes: []
};

function flechasArcanasEvento(personagem, alvos, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });

  let personagemNovo = gastarMana(personagem, acao.custo, functions);
  const modificadorMagia = {
    valor: personagem.atributos.magia,
    atributo: "Magia"
  };

  const modificadoresAtaque = getModificadoresConjuracao(acao, [modificadorMagia], personagem);
  const dadoPadrao = rolarDado(1, 20, modificadoresAtaque);
  const ataquePadrao = {
    resultadoDado: dadoPadrao.dados[0].resultado,
    resultadoTotal: dadoPadrao.total,
    modificadores: modificadoresAtaque
  };
  functions.ativarBannerAtaque(ataquePadrao, null, personagem.corTema);

  const ataques = [];
  alvos.map((alvo) => {
    const resultadoAtaque = atacar(personagem, alvo, acao, functions, ataquePadrao);
    personagemNovo = resultadoAtaque.personagem;
    ataques.push(resultadoAtaque);
  });
  const resultadoAtaques = { ataquePadrao, ataques };
  const novosAlvos = [];
  resultadoAtaques.ataques.map((resultadoAtaque) => {
    novosAlvos.push(resultadoAtaque.alvo);
  });

  const modificadorDano = { valor: 1, atributo: "Modificador" };
  const modificadores = getModificadoresDano(personagem, null, acao, [modificadorDano]);
  const danoPadrao = rolarDado(1, 4, modificadores);

  const danos = [];
  resultadoAtaques.ataques.map((resultadoAtaque) => {
    const dadoDano = rolarDado(1, 4, modificadores, acao.elemento, resultadoAtaque.alvo.elemento, danoPadrao.dados);
    danos.push({ alvo: resultadoAtaque.alvo, dano: dadoDano });
  });

  realizarEtapasAtaqueArea(
    () => {
      functions.ativarBannerRolagem([...danoPadrao.dados], modificadores, danoPadrao.total, personagem, {
        dado: ataquePadrao.resultadoDado
      });
    },
    () => {
      const novosAlvos2 = [];
      let duracao = 0;
      resultadoAtaques.ataques.map((resultadoAtaque) => {
        if (resultadoAtaque.acerto) {
          const _dano = danos.find((dano) => dano.alvo.idCombate === resultadoAtaque.alvo.idCombate);
          const novoAlvo = causarDano(resultadoAtaque.alvo, [_dano.dano], resultadoAtaque, acao, functions);
          duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.FLECHAS_ARCANAS, ACOES_AUDIO.MAGIA_2);
          novosAlvos.push(novoAlvo);
        } else {
          novosAlvos.push(resultadoAtaque.alvo);
        }
      });

      finalizarAcaoArea(personagemNovo, functions, novosAlvos2, duracao, 3100);
    },
    () => {
      finalizarAcaoArea(personagemNovo, functions, novosAlvos, 0);
    },
    resultadoAtaques,
    functions,
    personagem,
    acao
  );
}
