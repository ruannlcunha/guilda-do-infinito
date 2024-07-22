import MOXXIE_1_SPRITE from "./assets/MOXXIE_1_SPRITE.png"
import MOXXIE_1_PERFIL from "./assets/MOXXIE_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { ELEMENTOS, COR_TEMA } from "../../../constants/personagens/personagem.constant"

export const MOXXIE = {
    ..._BASE_ORIGINAL,
    id: 13,
    nome: "Moxxie",
    titulo: "Druída Celestial",
    elemento: ELEMENTOS.TERRA,
    corTema: COR_TEMA.VERDE,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: MOXXIE_1_SPRITE,
            perfil: MOXXIE_1_PERFIL,
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