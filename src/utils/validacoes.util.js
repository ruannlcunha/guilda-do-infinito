import { ITEM_PROFICIENCIA } from "../constants";

export function validarProficiencia(item, personagem) {
  if (item && personagem) return personagem.proficiencia === ITEM_PROFICIENCIA.PESADA || item.proficiencia === ITEM_PROFICIENCIA.LEVE;
  return false;
}
