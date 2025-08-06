import { BONUS_DADO, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const CURA_APRIMORADA = {
  id: 18,
  nome: "Cura Aprimorada",
  elemento: ELEMENTOS.LUZ,
  descricao: "Você soma sua Magia aos PV restaurados por suas habilidades de cura.",
  evento: curaAprimoradaEvento
};

function curaAprimoradaEvento(personagem) {
  const novoPersonagem = {
    ...personagem,
    bonusDado: [
      ...personagem.bonusDado,
      {
        modificador: personagem.atributos.magia,
        tipo: BONUS_DADO.CURA,
        atributo: "Magia"
      }
    ]
  };
  return novoPersonagem;
}
