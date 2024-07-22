import MALESCULA_1_SPRITE from "./assets/MALESCULA_1_SPRITE.png"
import MALESCULA_1_PERFIL from "./assets/MALESCULA_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const MALESCULA = {
    ..._BASE_ORIGINAL,
    id: 33,
    nome: "???",
    titulo: "Destruidora de Mundos",
    elemento: ELEMENTOS.TREVAS,
    corTema: COR_TEMA.ROXO,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: MALESCULA_1_SPRITE,
            perfil: MALESCULA_1_PERFIL,
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