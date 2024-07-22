import GENEVIEVE_1_SPRITE from "./assets/GENEVIEVE_1_SPRITE.png"
import GENEVIEVE_1_PERFIL from "./assets/GENEVIEVE_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const GENEVIEVE = {
    ..._BASE_ORIGINAL,
    id: 23,
    nome: "Genevieve",
    titulo: "Curandeira Aprendiz",
    elemento: ELEMENTOS.ACIDO,
    corTema: COR_TEMA.TURQUESA,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: GENEVIEVE_1_SPRITE,
            perfil: GENEVIEVE_1_PERFIL,
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