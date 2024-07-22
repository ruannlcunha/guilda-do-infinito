import ANDRIUS_1_SPRITE from "./assets/ANDRIUS_1_SPRITE.png"
import ANDRIUS_1_PERFIL from "./assets/ANDRIUS_1_PERFIL.png"
import ANDRIUS_2_SPRITE from "./assets/ANDRIUS_2_SPRITE.png"
import ANDRIUS_2_PERFIL from "./assets/ANDRIUS_2_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const ANDRIUS = {
    ..._BASE_ORIGINAL,
    id: 16,
    nome: "Andrius",
    titulo: "Rei das Sombras",
    elemento: ELEMENTOS.TREVAS,
    corTema: COR_TEMA.ROXO,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Armadura Sombria",
            sprite: ANDRIUS_1_SPRITE,
            perfil: ANDRIUS_1_PERFIL,
            santuario: null,
        },
        {
            visualId: 2,
            nome: "Traje Real",
            sprite: ANDRIUS_2_SPRITE,
            perfil: ANDRIUS_2_PERFIL,
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
            pv: 30,
            pm: 10,
            atributos: {
                forca: 4,
                agilidade: 2,
                magia: 3,
                vigor: 3
            },
            talentos: [],
            ataques: [1],
            habilidades: [1]
        }
    ]
}