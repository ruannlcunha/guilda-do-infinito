import { EQUIPAMENTOS_DATA } from "../database";

export function getDataEquipamento(id) {
  return EQUIPAMENTOS_DATA.find((data) => data.id === id);
}
