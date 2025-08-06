import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_CATEGORIA, ACAO_EXECUCAO, ALVOS, ACAO_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../hook/batalha";

const { iniciarEfeito, finalizarAcao, gastarMana, informarErro } = useAcoesBase();
const { causarFormaLupina } = useCausarCondicao();

export const FORMA_LUPINA = {
  id: 47,
  nome: "Forma Lupina",
  elemento: ELEMENTOS.ESSENCIA,
  custo: 2,
  tipo: ACAO_TIPO.BUFF,
  categoria: ACAO_CATEGORIA.MAGICO,
  descricao: `Conjura uma lua artificial que desperta sua forma de lobisomem. 
  Recebe +1 em Força, Agilidade e Vigor, +2 em Ataque e Dano, +20 PV, Regeneração 2, Garrada (Ataque), Mordida (Ataque), Fúria (Habilidade).`,
  efeito: "Se transforma em lobisomem e recebe bônus e ações próprias.",
  evento: formaLupinaEvento,
  alvos: ALVOS.PESSOAL,
  execucao: ACAO_EXECUCAO.PADRAO,
  variantes: []
};

async function formaLupinaEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });
  try {
    let personagemNovo = gastarMana(personagem, acao.custo, functions);
    const alvoCorreto = personagem.idCombate === alvo.idCombate ? personagemNovo : alvo;
    functions.adicionarLog(`${personagem.nome} usou ${acao.nome}.`);
    const novoAlvo = causarFormaLupina(alvoCorreto, acao, functions);
    const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.LUAR, ACOES_AUDIO.FURIA);
    finalizarAcao(personagemNovo, functions, novoAlvo, duracao);
    return duracao;
  } catch (error) {
    informarErro(error, functions);
    throw error;
  }
}
