import CALEB_1_SPRITE from "./assets/CALEB_1_SPRITE.png"
import CALEB_1_PERFIL from "./assets/CALEB_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const CALEB = {
    ..._BASE_ORIGINAL,
    id: 21,
    nome: "Caleb",
    titulo: "Pequeno Inventor",
    elemento: ELEMENTOS.NULO,
    corTema: COR_TEMA.LARANJA,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: CALEB_1_SPRITE,
            perfil: CALEB_1_PERFIL,
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