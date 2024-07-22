import COSMULA_1_SPRITE from "./assets/COSMULA_1_SPRITE.png"
import COSMULA_1_PERFIL from "./assets/COSMULA_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const COSMULA = {
    ..._BASE_ORIGINAL,
    id: 36,
    nome: "Cósmula",
    titulo: "Bruxa Pálida",
    elemento: ELEMENTOS.AR,
    corTema: COR_TEMA.CIANO,
    raridade: 4,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: COSMULA_1_SPRITE,
            perfil: COSMULA_1_PERFIL,
            santuario: null,
        }
    ],
    status: {
        pvBase: 0,
        pmBase: 0,
        pvBonus: 0
    },
    evolucoes: [
      {
          level: 1,
          experienciaNecessaria: 100,
          pv: 24,
          pm: 8,
          atributos: {
              forca: 1,
              agilidade: 3,
              magia: 4,
              vigor: 2
          },
          talentos: [],
          ataques: [1],
          habilidades: [1]
      }
    ]
}