import { EQUIPAMENTOS_DATA } from "../database";

export function getArmadura(personagem) {
  return EQUIPAMENTOS_DATA.find((item) => item.id === personagem.equipamentos.armadura);
}
