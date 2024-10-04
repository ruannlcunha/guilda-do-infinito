import PREVIEW from "./assets/PREVIEW.png"
import BANNER from "./assets/BANNER.png"
import { RECOMPENSAS_TIPO } from "../../../constants"
import { findGachaItem, findGachaPersonagem } from "../../../utils/gacha-functions.util"

export const HEROIS_GRANHELM = {
    id: 6,
    nome: "Heróis de Granhelm",
    preview: PREVIEW,
    banner: BANNER,
    possibilidades: [
        {
            tipo: RECOMPENSAS_TIPO.PERSONAGEM,
            raridade: 5,
            probMin: 1,
            probMax: 5,
        },
        {
            tipo: RECOMPENSAS_TIPO.ARMA,
            raridade: 5,
            probMin: 6,
            probMax: 10,
        },
        {
            tipo: RECOMPENSAS_TIPO.PERSONAGEM,
            raridade: 4,
            probMin: 11,
            probMax: 30,
        },
        {
            tipo: RECOMPENSAS_TIPO.ARMA,
            raridade: 4,
            probMin: 31,
            probMax: 50,
        },
        {
            tipo: RECOMPENSAS_TIPO.ARMA,
            raridade: 3,
            probMin: 51,
            probMax: 100,
        },
    ],
    recompensas: [
        {
            recompensa: findGachaPersonagem(18),
            tipo: RECOMPENSAS_TIPO.PERSONAGEM,
        },
        {
            recompensa: findGachaPersonagem(37),
            tipo: RECOMPENSAS_TIPO.PERSONAGEM,
        },
        {
            recompensa: findGachaPersonagem(41),
            tipo: RECOMPENSAS_TIPO.PERSONAGEM,
        },
        {
            recompensa: findGachaPersonagem(42),
            tipo: RECOMPENSAS_TIPO.PERSONAGEM,
        },
        {
            recompensa: findGachaPersonagem(43),
            tipo: RECOMPENSAS_TIPO.PERSONAGEM,
        },
        {
            recompensa: findGachaPersonagem(68),
            tipo: RECOMPENSAS_TIPO.PERSONAGEM,
        },
        {
            recompensa: findGachaPersonagem(69),
            tipo: RECOMPENSAS_TIPO.PERSONAGEM,
        },
        {
            recompensa: findGachaItem(49),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
        {
            recompensa: findGachaItem(36),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
        {
            recompensa: findGachaItem(54),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
        {
            recompensa: findGachaItem(4),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
        {
            recompensa: findGachaItem(5),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
        {
            recompensa: findGachaItem(16),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
        {
            recompensa: findGachaItem(17),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
        {
            recompensa: findGachaItem(18),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
        {
            recompensa: findGachaItem(19),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
        {
            recompensa: findGachaItem(20),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
        {
            recompensa: findGachaItem(21),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
        {
            recompensa: findGachaItem(22),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
        {
            recompensa: findGachaItem(23),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
        {
            recompensa: findGachaItem(24),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
        {
            recompensa: findGachaItem(25),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
        {
            recompensa: findGachaItem(26),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
        {
            recompensa: findGachaItem(27),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
        {
            recompensa: findGachaItem(28),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
        {
            recompensa: findGachaItem(47),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
        {
            recompensa: findGachaItem(59),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
        {
            recompensa: findGachaItem(7),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
        {
            recompensa: findGachaItem(8),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
        {
            recompensa: findGachaItem(29),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
        {
            recompensa: findGachaItem(30),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
        {
            recompensa: findGachaItem(50),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
        {
            recompensa: findGachaItem(51),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
        {
            recompensa: findGachaItem(52),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
        {
            recompensa: findGachaItem(9),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
        {
            recompensa: findGachaItem(10),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
        {
            recompensa: findGachaItem(33),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
        {
            recompensa: findGachaItem(34),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
        {
            recompensa: findGachaItem(35),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
        {
            recompensa: findGachaItem(37),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
        {
            recompensa: findGachaItem(46),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
        {
            recompensa: findGachaItem(53),
            tipo: RECOMPENSAS_TIPO.ARMA,
        },
    ]
}