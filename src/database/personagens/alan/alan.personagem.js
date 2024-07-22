import ALAN_1_SPRITE from "./assets/ALAN_1_SPRITE.png"
import ALAN_1_PERFIL from "./assets/ALAN_1_PERFIL.png"
import ALAN_2_SPRITE from "./assets/ALAN_2_SPRITE.png"
import ALAN_2_PERFIL from "./assets/ALAN_2_PERFIL.png"
import ALAN_3_SPRITE from "./assets/ALAN_3_SPRITE.png"
import ALAN_3_PERFIL from "./assets/ALAN_3_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const ALAN = {
    ..._BASE_ORIGINAL,
    id: 34,
    nome: "Alan",
    titulo: "Escudeiro Real",
    elemento: ELEMENTOS.TERRA,
    corTema: COR_TEMA.AZUL,
    raridade: 4,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: ALAN_1_SPRITE,
            perfil: ALAN_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Versão do Sonho",
            sprite: ALAN_2_SPRITE,
            perfil: ALAN_2_PERFIL,
            santuario: null,
        },
        {
            visualId: 3,
            nome: "Segredo de Khaas",
            sprite: ALAN_3_SPRITE,
            perfil: ALAN_3_PERFIL,
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
              magia: 1,
              vigor: 4
          },
          talentos: [],
          ataques: [1],
          habilidades: []
      }
    ]
}