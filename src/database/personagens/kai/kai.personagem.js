import KAI_1_SPRITE from "./assets/KAI_1_SPRITE.png"
import KAI_1_PERFIL from "./assets/KAI_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const KAI = {
    ..._BASE_ORIGINAL,
    id: 24,
    nome: "Kai",
    titulo: "Gatuna Forasteira",
    elemento: ELEMENTOS.ACIDO,
    corTema: COR_TEMA.ROSA,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: KAI_1_SPRITE,
            perfil: KAI_1_PERFIL,
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
          pm: 5,
          atributos: {
              forca: 3,
              agilidade: 4,
              magia: 1,
              vigor: 2
          },
          talentos: [],
          ataques: [1],
          habilidades: []
      }
    ]
}