import OPHELLIA_1_SPRITE from "./assets/OPHELLIA_1_SPRITE.png"
import OPHELLIA_1_PERFIL from "./assets/OPHELLIA_1_PERFIL.png"
import OPHELLIA_2_SPRITE from "./assets/OPHELLIA_2_SPRITE.png"
import OPHELLIA_2_PERFIL from "./assets/OPHELLIA_2_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const OPHELLIA = {
    ..._BASE_ORIGINAL,
    id: 30,
    nome: "Ophellia",
    titulo: "Guardiã Verde",
    elemento: ELEMENTOS.AR,
    corTema: COR_TEMA.VERDE,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: OPHELLIA_1_SPRITE,
            perfil: OPHELLIA_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Roupas Comuns",
            sprite: OPHELLIA_2_SPRITE,
            perfil: OPHELLIA_2_PERFIL,
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