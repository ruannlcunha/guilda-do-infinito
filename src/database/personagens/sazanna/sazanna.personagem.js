import SAZANNA_1_SPRITE from "./assets/SAZANNA_1_SPRITE.png"
import SAZANNA_1_PERFIL from "./assets/SAZANNA_1_PERFIL.png"
import SAZANNA_2_SPRITE from "./assets/SAZANNA_2_SPRITE.png"
import SAZANNA_2_PERFIL from "./assets/SAZANNA_2_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const SAZANNA = {
    ..._BASE_ORIGINAL,
    id: 26,
    nome: "Saz'anna",
    titulo: "Instrutora Real",
    elemento: ELEMENTOS.FOGO,
    corTema: COR_TEMA.ROXO,
    raridade: 4,
    visuais:[
        {
            visualId: 1,
            nome: "Com Máscara",
            sprite: SAZANNA_1_SPRITE,
            perfil: SAZANNA_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Sem Máscara",
            sprite: SAZANNA_2_SPRITE,
            perfil: SAZANNA_2_PERFIL,
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