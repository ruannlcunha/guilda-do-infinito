import NERO_1_SPRITE from "./assets/NERO_1_SPRITE.png"
import NERO_1_PERFIL from "./assets/NERO_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { ELEMENTOS, COR_TEMA } from "../../../constants/personagens/personagem.constant"

export const NERO = {
    ..._BASE_ORIGINAL,
    id: 14,
    nome: "Nero",
    titulo: "Inventora Amaldiçoada",
    elemento: ELEMENTOS.FOGO,
    corTema: COR_TEMA.LARANJA,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: NERO_1_SPRITE,
            perfil: NERO_1_PERFIL,
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
            pv: 25,
            pm: 10,
            atributos: {
                forca: 1,
                agilidade: 4,
                magia: 3,
                vigor: 2
            },
            talentos: [],
            ataques: [1],
            habilidades: [1]
        }
    ]
}