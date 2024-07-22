import APHELIOS_1_SPRITE from "./assets/APHELIOS_1_SPRITE.png"
import APHELIOS_1_PERFIL from "./assets/APHELIOS_1_PERFIL.png"
import { _BASE_ORIGINAL } from "../_base/_base-original.personagem"
import { COR_TEMA, ELEMENTOS } from "../../../constants/personagens/personagem.constant";

export const APHELIOS = {
    ..._BASE_ORIGINAL,
    id: 4,
    nome: "Aphelios",
    titulo: "Rei Dragão",
    elemento: ELEMENTOS.GELO,
    corTema: COR_TEMA.CIANO,
    raridade: 5,
    visuais:[
        {
            visualId: 1,
            nome: "Original",
            sprite: APHELIOS_1_SPRITE,
            perfil: APHELIOS_1_PERFIL,
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
                agilidade: 2,
                magia: 4,
                vigor: 3
            },
            talentos: [],
            ataques: [1],
            habilidades: [1]
        }
    ]
}