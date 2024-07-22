import SOTIS_1_SPRITE from "./assets/SOTIS_1_SPRITE.png"
import SOTIS_1_PERFIL from "./assets/SOTIS_1_PERFIL.png"
import SOTIS_2_SPRITE from "./assets/SOTIS_2_SPRITE.png"
import SOTIS_2_PERFIL from "./assets/SOTIS_2_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const SOTIS = {
    ..._BASE_ORIGINAL,
    id: 18,
    nome: "Sotis",
    titulo: "Arqueira Divina",
    elemento: ELEMENTOS.LUZ,
    corTema: COR_TEMA.ROXO,
    raridade: 5,
    visuais: [
      {
        visualId: 1,
        nome: "Original",
        sprite: SOTIS_1_SPRITE,
        perfil: SOTIS_1_PERFIL,
        santuario: null,
      },
      {
        visualId: 2,
        nome: "Armadura Divina",
        sprite: SOTIS_2_SPRITE,
        perfil: SOTIS_2_PERFIL,
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
          forca: 2,
          agilidade: 4,
          magia: 1,
          vigor: 3
        },
        talentos: [],
        ataques: [
          1
        ],
        habilidades: []
      }
    ]
}