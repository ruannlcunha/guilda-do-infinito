import { instanciarPersonagem } from "./";
import personagemBase from "../database/personagens/_base/_base-pessoal.personagem.json";
import { EQUIPAMENTOS_DATA } from "../database";

export function findGachaItem(itemId) {
  return EQUIPAMENTOS_DATA.find((item) => item.id === itemId);
}

export function findGachaPersonagem(personagemId, visualId) {
  const _visualId = visualId ? visualId : 1;
  return instanciarPersonagem({
    ...personagemBase,
    personagemId: personagemId,
    visualAtivo: _visualId,
    visuais: [_visualId]
  });
}
