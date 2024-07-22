import SETH_1_SPRITE from "./assets/SETH_1_SPRITE.png"
import SETH_1_PERFIL from "./assets/SETH_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const SETH = {
    ..._BASE_ORIGINAL,
    id: 22,
    nome: "Seth",
    titulo: "Dançarino das Chamas",
    elemento: ELEMENTOS.FOGO,
    corTema: COR_TEMA.VERMELHO,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: SETH_1_SPRITE,
            perfil: SETH_1_PERFIL,
            santuario: null
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
          pm: 5,
          atributos: {
              forca: 2,
              agilidade: 3,
              magia: 4,
              vigor: 1
          },
          talentos: [],
          ataques: [1],
          habilidades: [1]
      }
    ]
}