import { PERFIL, SPRITES } from "../../../constants/images";

export const LOBO = {
    id: 9,
    nome: "Lobo",
    sprite: SPRITES.LOBO_SPRITE,
    perfil: PERFIL.LOBO_PERFIL,
    corTema: "tema-inimigo",
    level: 2,
    experienciaAtual: 10,
    defesa: 12,
    pvAtual: 10,
    pvTotal: 10,
    pmAtual: 2,
    pmTotal: 2,
    atributos: {
      forca: 1,
      agilidade: 2,
      magia: 0,
      vigor: 1,
    },
    ataques: [{id: 2}],
  }