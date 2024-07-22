import AKINN_1_SPRITE from "./assets/AKINN_1_SPRITE.png"
import AKINN_1_PERFIL from "./assets/AKINN_1_PERFIL.png"
import AKINN_2_SPRITE from "./assets/AKINN_2_SPRITE.png"
import AKINN_2_PERFIL from "./assets/AKINN_2_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const AKINN = {
    ..._BASE_ORIGINAL,
    id: 19,
    nome: "Akinn",
    titulo: "Herdeiro de Rammeth",
    elemento: ELEMENTOS.FOGO,
    corTema: COR_TEMA.AMARELO,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: AKINN_1_SPRITE,
            perfil: AKINN_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Forma Desperta",
            sprite: AKINN_2_SPRITE,
            perfil: AKINN_2_PERFIL,
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