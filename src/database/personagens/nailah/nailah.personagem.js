import NAILAH_1_SPRITE from "./assets/NAILAH_1_SPRITE.png"
import NAILAH_1_PERFIL from "./assets/NAILAH_1_PERFIL.png"
import NAILAH_2_SPRITE from "./assets/NAILAH_2_SPRITE.png"
import NAILAH_2_PERFIL from "./assets/NAILAH_2_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const NAILAH = {
    ..._BASE_ORIGINAL,
    id: 20,
    nome: "Nailah",
    titulo: "Gênia Sem Lembranças",
    elemento: ELEMENTOS.ELETRICO,
    corTema: COR_TEMA.ROXO,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: NAILAH_1_SPRITE,
            perfil: NAILAH_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Forma Verdadeira",
            sprite: NAILAH_2_SPRITE,
            perfil: NAILAH_2_PERFIL,
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