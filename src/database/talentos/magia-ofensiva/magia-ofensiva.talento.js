import { ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const MAGIA_OFENSIVA = {
  id: 22,
  nome: "Magia Ofensiva",
  elemento: ELEMENTOS.ESSENCIA,
  descricao: "Você adiciona o seu modificador de Magia nos danos de seus ataques mágicos.",
  evento: magiaOfensivaEvento
};

function magiaOfensivaEvento(personagem) {
  return personagem;
}
