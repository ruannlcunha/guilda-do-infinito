import { PERFIL, SPRITES } from "../../../constants/images";

export const APHELIOS = {
    id: 4,
    nome: "Aphelios",
    sprite: SPRITES.APHELIOS_SPRITE,
    perfil: PERFIL.APHELIOS_PERFIL,
    corTema: "tema-ciano",
    level: 10,
    experienciaAtual: 10,
    defesa: 13,
    pvAtual: 10,
    pvTotal: 10,
    pmAtual: 20,
    pmTotal: 20,
    atributos: {
      forca: 1,
      agilidade: 3,
      magia: 4,
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