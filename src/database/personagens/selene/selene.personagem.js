import SELENE_1_SPRITE from "./assets/SELENE_1_SPRITE.png"
import SELENE_1_PERFIL from "./assets/SELENE_1_PERFIL.png"
import SELENE_2_SPRITE from "./assets/SELENE_2_SPRITE.png"
import SELENE_2_PERFIL from "./assets/SELENE_2_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const SELENE = {
    ..._BASE_ORIGINAL,
    id: 31,
    nome: "Selene",
    titulo: "Guardiã Azul",
    elemento: ELEMENTOS.AGUA,
    corTema: COR_TEMA.AZUL,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: SELENE_1_SPRITE,
            perfil: SELENE_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Roupas Comuns",
            sprite: SELENE_2_SPRITE,
            perfil: SELENE_2_PERFIL,
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
              forca: 4,
              agilidade: 1,
              magia: 3,
              vigor: 2
          },
          talentos: [],
          ataques: [1],
          habilidades: [1]
      }
    ]
}