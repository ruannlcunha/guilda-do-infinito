import { EFFECTS } from "../../../constants/images";
import { ACOES_AUDIO } from "../../../constants/audios/acoes.constant";
import { useAcoesBase } from "../../../hook/batalha/acoes/_base/use-acoes-base.hook";
import { ACAO_CATEGORIA, ACAO_EXECUCAO, ALVOS, ACAO_TIPO } from "../../../constants/acoes/acoes.constant";
import { ELEMENTOS, TRANSFORMACOES } from "../../../constants/personagens/personagem.constant";
import { useCausarCondicao } from "../../../hook/batalha";

const { iniciarEfeito, finalizarAcao, gastarMana, informarErro } = useAcoesBase();
const { causarFormaAnimal } = useCausarCondicao();

export const FORMA_ANIMAL = {
  id: 31,
  nome: "Forma Animal",
  elemento: ELEMENTOS.ESSENCIA,
  custo: 3,
  tipo: ACAO_TIPO.BUFF,
  categoria: ACAO_CATEGORIA.MAGICO,
  descricao: "Se transforma em um animal, recebendo bônus e ações próprias para cada forma escolhida.",
  evento: formaAnimalEvento,
  alvos: ALVOS.PESSOAL,
  execucao: ACAO_EXECUCAO.PADRAO,
  bonus: TRANSFORMACOES.LOBO,
  variantes: [
    {
      categoria: "Animal",
      lista: [
        {
          varianteId: "LOBO",
          titulo: "Lobo",
          descricao: "Você recebe +1 de Força, +2 em Ataque e Dano, Golpe Preciso (Ataque), Fúria (Habilidade).",
          novaAcao: {
            nome: "Forma Animal (Lobo)",
            bonus: TRANSFORMACOES.LOBO, 
          }
        },
        {
          varianteId: "URSO",
          titulo: "Urso",
          descricao: "Você recebe +1 de Vigor, +2 em Dano, +3 de Defesa, Resistência a Dano (Físico) 5, +15 PV, Golpe Pesado (Ataque).",
          novaAcao: {
            nome: "Forma Animal (Urso)",
            bonus: TRANSFORMACOES.URSO, 
          }
        },
        {
          varianteId: "AGUIA",
          titulo: "Águia",
          descricao: "Você recebe +1 de Agilidade, +1 em Ataque e Dano, Golpe Aéreo (Ataque), Voar (Habilidade).",
          novaAcao: {
            nome: "Forma Animal (Águia)",
            bonus: TRANSFORMACOES.AGUIA, 
          }
        },
        {
          varianteId: "ARANHA",
          titulo: "Aranha",
          descricao: "Você recebe +1 de Agilidade, +2 em Ataque, Golpe Rápido (Ataque), Esconder-se (Habilidade), Ataque Ágil (Habilidade).",
          novaAcao: {
            nome: "Forma Animal (Aranha)",
            bonus: TRANSFORMACOES.ARANHA, 
          }
        },
      ]
    }
  ]
};

async function formaAnimalEvento(personagem, alvo, acao, functions) {
  functions.setAnimacoes((old) => {
    return { ...old, escolhendoAlvo: false };
  });
  try {
    let personagemNovo = gastarMana(personagem, acao.custo, functions);
    const alvoCorreto = personagem.idCombate === alvo.idCombate ? personagemNovo : alvo;
    functions.adicionarLog(`${personagem.nome} usou ${acao.nome}.`);
    const novoAlvo = causarFormaAnimal(alvoCorreto, acao, functions);
    const duracao = iniciarEfeito(novoAlvo, functions, EFFECTS.FORMA_ANIMAL, ACOES_AUDIO.MAGIA_1);
    finalizarAcao(personagemNovo, functions, novoAlvo, duracao);
    return duracao;
  } catch (error) {
    informarErro(error, functions);
    throw error;
  }
}
