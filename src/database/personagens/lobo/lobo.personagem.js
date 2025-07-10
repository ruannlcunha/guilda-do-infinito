import LOBO_1_SPRITE from "./assets/LOBO_1_SPRITE.png"
import LOBO_1_PERFIL from "./assets/LOBO_1_PERFIL.png"
import LOBO_2_SPRITE from "./assets/LOBO_2_SPRITE.png"
import LOBO_2_PERFIL from "./assets/LOBO_2_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COMPORTAMENTOS, COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";
import { PRONOMES } from "../../../constants"

export const LOBO = {
    ..._BASE_ORIGINAL,
    id: 9,
    nome: "Lobo",
    titulo: "Animal Feroz",
    elemento: ELEMENTOS.NULO,
    corTema: COR_TEMA.CINZA,
    raridade: 3,
    comportamento: COMPORTAMENTOS.ATACANTE_FEROZ,
    visuais:[
        {
            visualId: 1,
            nome: "Marrom",
            sprite: LOBO_1_SPRITE,
            perfil: LOBO_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Cristal",
            sprite: LOBO_2_SPRITE,
            perfil: LOBO_2_PERFIL,
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
            pv: 10,
            pm: 2,
            atributos: {
                forca: 1,
                agilidade: 2,
                magia: 0,
                vigor: 1
            },
            talentos: [],
            ataques: [
                {ataqueId: 1, variantes: []}
            ],
            habilidades: []
        }
    ]
}