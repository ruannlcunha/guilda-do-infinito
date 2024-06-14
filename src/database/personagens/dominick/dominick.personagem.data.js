import { PERFIL, SPRITES } from "../../../constants/images";

export const DOMINICK = {
    id: 3,
    nome: "Dominick",
    sprite: SPRITES.DOMINICK_SPRITE,
    perfil: PERFIL.DOMINICK_PERFIL,
    corTema: "tema-roxo",
    level: 10,
    expAtual: 10,
    expTotal: 100,
    defesa: 14,
    pvAtual: 10,
    pvTotal: 10,
    pmAtual: 10,
    pmTotal: 10,
    atributos: {
      forca: 2,
      agilidade: 4,
      magia: 2,
      vigor: 1,
    },
    ataques: [{id: 1}],
    habilidades: [{id: 1}],
    itens: [
      {
        id: 1,
        quantidade: 1,
      }
    ]
  }