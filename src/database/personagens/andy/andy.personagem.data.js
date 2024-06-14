import { PERFIL, SPRITES } from "../../../constants/images";

export const ANDY = {
    id: 12,
    nome: "Andy",
    sprite: SPRITES.ANDY_SPRITE,
    perfil: PERFIL.ANDY_PERFIL,
    corTema: "tema-verde",
    level: 10,
    expAtual: 10,
    expTotal: 100,
    defesa: 14,
    pvAtual: 10,
    pvTotal: 10,
    pmAtual: 15,
    pmTotal: 15,
    atributos: {
      forca: 1,
      agilidade: 4,
      magia: 3,
      vigor: 2,
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