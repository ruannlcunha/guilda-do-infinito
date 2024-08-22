import { PERFIL, SPRITES } from "../../../constants/images";

export const SOMBRIO = {
    id: 10,
    nome: "Sombrio",
    sprite: SPRITES.SOMBRIO,
    perfil: PERFIL.SOMBRIO,
    corTema: "tema-inimigo",
    level: 1,
    experienciaAtual: 10,
    defesa: 11,
    pvAtual: 5,
    pvTotal: 5,
    pmAtual: 2,
    pmTotal: 2,
    atributos: {
      forca: 1,
      agilidade: 1,
      magia: 1,
      vigor: 1,
    },
    ataques: [{id: 1}],
  }