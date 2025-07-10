import DEMONIO_AREIAS_1_SPRITE from "./assets/DEMONIO_AREIAS_1_SPRITE.png"
import DEMONIO_AREIAS_1_PERFIL from "./assets/DEMONIO_AREIAS_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { PRONOMES } from "../../../constants"

export const DEMONIO_AREIAS = {
    ..._BASE_ORIGINAL,
    id: 27,
    nome: "Demônio das Areias",
    titulo: "Verme do Deserto",
    elemento: ELEMENTOS.TERRA,
    corTema: COR_TEMA.AMARELO,
    raridade: 3,
    comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: DEMONIO_AREIAS_1_SPRITE,
            perfil: DEMONIO_AREIAS_1_PERFIL,
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
          ataques: [
                {ataqueId: 1, variantes: []}
            ],
          habilidades: [
                {habilidadeId: 1, variantes: []},
            ]
      }
    ]
}