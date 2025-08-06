import { BONUS_DADO, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const ESCAMAS_DRACONICAS = {
  id: 20,
  nome: "Escamas Dracônicas",
  elemento: ELEMENTOS.FISICO,
  descricao: "Você recebe +2 na Defesa e em testes de resistência de Vigor.",
  evento: escamasDraconicasEvento
};

function escamasDraconicasEvento(personagem) {
  const novoPersonagem = {
    ...personagem,
    defesa: personagem.defesa + 2,
    bonusDado: [...personagem.bonusDado, { modificador: 2, tipo: BONUS_DADO.RESISTENCIA_VIGOR }]
  };
  return novoPersonagem;
}
