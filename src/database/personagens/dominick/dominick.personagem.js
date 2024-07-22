import DOMINICK_1_SPRITE from "./assets/DOMINICK_1_SPRITE.png"
import DOMINICK_1_PERFIL from "./assets/DOMINICK_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const DOMINICK = {
    ..._BASE_ORIGINAL,
    id: 3,
    nome: "Dominick",
    titulo: "Rainha dos Piratas",
    elemento: ELEMENTOS.ELETRICO,
    corTema: COR_TEMA.ROXO,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: DOMINICK_1_SPRITE,
            perfil: DOMINICK_1_PERFIL,
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
            pv: 28,
            pm: 3,
            atributos: {
                forca: 4,
                agilidade: 1,
                magia: 2,
                vigor: 3
            },
            talentos: [],
            ataques: [1],
            habilidades: []
        },
        {
            level: 2,
            experienciaNecessaria: 250,
            pv: 36,
            pm: 6,
            atributos: {
                forca: 4,
                agilidade: 1,
                magia: 2,
                vigor: 3
            },
            talentos: [],
            ataques: [1],
            habilidades: []
        }
    ]
}