import JJC_1_SPRITE from "./assets/JJC_1_SPRITE.png"
import JJC_1_PERFIL from "./assets/JJC_1_PERFIL.png"
import JJC_2_SPRITE from "./assets/JJC_2_SPRITE.png"
import JJC_2_PERFIL from "./assets/JJC_2_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const JJC = {
    ..._BASE_ORIGINAL,
    id: 25,
    nome: "JJC",
    titulo: "Carrasco da Justiça",
    elemento: ELEMENTOS.FOGO,
    corTema: COR_TEMA.LARANJA,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: JJC_1_SPRITE,
            perfil: JJC_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Original",
            sprite: JJC_2_SPRITE,
            perfil: JJC_2_PERFIL,
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
          pv: 30,
          pm: 4,
          atributos: {
              forca: 3,
              agilidade: 1,
              magia: 2,
              vigor: 4
          },
          talentos: [],
          ataques: [1],
          habilidades: []
      }
    ]
}