import AURORA_1_SPRITE from "./assets/AURORA_1_SPRITE.png"
import AURORA_1_PERFIL from "./assets/AURORA_1_PERFIL.png"
import AURORA_2_SPRITE from "./assets/AURORA_2_SPRITE.png"
import AURORA_2_PERFIL from "./assets/AURORA_2_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const AURORA = {
    ..._BASE_ORIGINAL,
    id: 29,
    nome: "Aurora",
    titulo: "Guardiã Rosa",
    elemento: ELEMENTOS.LUZ,
    corTema: COR_TEMA.ROSA,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: AURORA_1_SPRITE,
            perfil: AURORA_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Roupas Comuns",
            sprite: AURORA_2_SPRITE,
            perfil: AURORA_2_PERFIL,
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
              forca: 3,
              agilidade: 2,
              magia: 4,
              vigor: 1
          },
          talentos: [],
          ataques: [1],
          habilidades: [1]
      }
    ]
}