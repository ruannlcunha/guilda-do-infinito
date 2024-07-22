import DIANA_1_SPRITE from "./assets/DIANA_1_SPRITE.png"
import DIANA_1_PERFIL from "./assets/DIANA_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const DIANA = {
    ..._BASE_ORIGINAL,
    id: 35,
    nome: "Diana",
    titulo: "Presa Ruiva",
    elemento: ELEMENTOS.FOGO,
    corTema: COR_TEMA.VERMELHO,
    raridade: 4,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: DIANA_1_SPRITE,
            perfil: DIANA_1_PERFIL,
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
              agilidade: 3,
              magia: 1,
              vigor: 2
          },
          talentos: [],
          ataques: [1],
          habilidades: []
      }
    ]
}