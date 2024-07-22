import EREENA_1_SPRITE from "./assets/EREENA_1_SPRITE.png"
import EREENA_1_PERFIL from "./assets/EREENA_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const EREENA = {
    ..._BASE_ORIGINAL,
    id: 17,
    nome: "Ereena",
    titulo: "Demônio Pálido",
    elemento: ELEMENTOS.GELO,
    corTema: COR_TEMA.CIANO,
    raridade: 4,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: EREENA_1_SPRITE,
            perfil: EREENA_1_PERFIL,
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
              forca: 2,
              agilidade: 4,
              magia: 3,
              vigor: 1
          },
          talentos: [],
          ataques: [1],
          habilidades: [1]
      }
    ]
  }