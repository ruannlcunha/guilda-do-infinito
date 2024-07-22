import PREVIEW from "./assets/PREVIEW.png"
import BANNER from "./assets/BANNER.png"
import { RECOMPENSAS_TIPO } from "../../../constants"
import { findGachaItem, findGachaPersonagem } from "../../../utils/gacha-functions.util"

export const SEGREDO_KHAAS = null
//     {
//     id: 2,
//     nome: "Segredo de Khaas",
//     preview: PREVIEW,
//     banner: BANNER,
//     possibilidades: [
//         {
//             tipo: RECOMPENSAS_TIPO.PERSONAGEM,
//             raridade: 5,
//             probMin: 1,
//             probMax: 5,
//         },
//         {
//             tipo: RECOMPENSAS_TIPO.ARMA,
//             raridade: 5,
//             probMin: 6,
//             probMax: 10,
//         },
//         {
//             tipo: RECOMPENSAS_TIPO.PERSONAGEM,
//             raridade: 4,
//             probMin: 11,
//             probMax: 30,
//         },
//         {
//             tipo: RECOMPENSAS_TIPO.ARMA,
//             raridade: 4,
//             probMin: 31,
//             probMax: 50,
//         },
//         {
//             tipo: RECOMPENSAS_TIPO.ARMA,
//             raridade: 3,
//             probMin: 51,
//             probMax: 100,
//         },
//     ],
//     recompensas: [
//         {
//             recompensa: findGachaPersonagem(18),
//             raridade: 5,
//             tipo: RECOMPENSAS_TIPO.PERSONAGEM,
//         },
//         {
//             recompensa: findGachaPersonagem(19),
//             raridade: 5,
//             tipo: RECOMPENSAS_TIPO.PERSONAGEM,
//         },
//         {
//             recompensa: findGachaPersonagem(20),
//             raridade: 5,
//             tipo: RECOMPENSAS_TIPO.PERSONAGEM,
//         },
//         {
//             recompensa: findGachaPersonagem(21),
//             raridade: 5,
//             tipo: RECOMPENSAS_TIPO.PERSONAGEM,
//         },
//         {
//             recompensa: findGachaPersonagem(22),
//             raridade: 5,
//             tipo: RECOMPENSAS_TIPO.PERSONAGEM,
//         },
//         {
//             recompensa: findGachaPersonagem(23),
//             raridade: 5,
//             tipo: RECOMPENSAS_TIPO.PERSONAGEM,
//         },
//         {
//             recompensa: findGachaPersonagem(24),
//             raridade: 5,
//             tipo: RECOMPENSAS_TIPO.PERSONAGEM,
//         },
//         {
//             recompensa: findGachaPersonagem(25),
//             raridade: 5,
//             tipo: RECOMPENSAS_TIPO.PERSONAGEM,
//         },
//         {
//             recompensa: findGachaPersonagem(26),
//             raridade: 4,
//             tipo: RECOMPENSAS_TIPO.PERSONAGEM,
//         },
//         {
//             recompensa: findGachaPersonagem(28),
//             raridade: 4,
//             tipo: RECOMPENSAS_TIPO.PERSONAGEM,
//         },
//         {
//             recompensa: findGachaPersonagem(34,3),
//             raridade: 4,
//             tipo: RECOMPENSAS_TIPO.PERSONAGEM,
//         },
//         {
//             recompensa: findGachaItem(6),
//             raridade: 5,
//             tipo: RECOMPENSAS_TIPO.ARMA,
//         },
//         {
//             recompensa: findGachaItem(5),
//             raridade: 4,
//             tipo: RECOMPENSAS_TIPO.ARMA,
//         },
//         {
//             recompensa: findGachaItem(4),
//             raridade: 3,
//             tipo: RECOMPENSAS_TIPO.ARMA,
//         },
//         {
//             recompensa: findGachaItem(4),
//             tipo: RECOMPENSAS_TIPO.ARMA,
//         },
//         {
//             recompensa: findGachaItem(16),
//             tipo: RECOMPENSAS_TIPO.ARMA,
//         },
//         {
//             recompensa: findGachaItem(17),
//             tipo: RECOMPENSAS_TIPO.ARMA,
//         },
//         {
//             recompensa: findGachaItem(18),
//             tipo: RECOMPENSAS_TIPO.ARMA,
//         },
//         {
//             recompensa: findGachaItem(19),
//             tipo: RECOMPENSAS_TIPO.ARMA,
//         },
//         {
//             recompensa: findGachaItem(20),
//             tipo: RECOMPENSAS_TIPO.ARMA,
//         },
//         {
//             recompensa: findGachaItem(21),
//             tipo: RECOMPENSAS_TIPO.ARMA,
//         },
//         {
//             recompensa: findGachaItem(22),
//             tipo: RECOMPENSAS_TIPO.ARMA,
//         },
//         {
//             recompensa: findGachaItem(23),
//             tipo: RECOMPENSAS_TIPO.ARMA,
//         },
//         {
//             recompensa: findGachaItem(24),
//             tipo: RECOMPENSAS_TIPO.ARMA,
//         },
//         {
//             recompensa: findGachaItem(25),
//             tipo: RECOMPENSAS_TIPO.ARMA,
//         },
//         {
//             recompensa: findGachaItem(26),
//             tipo: RECOMPENSAS_TIPO.ARMA,
//         },
//         {
//             recompensa: findGachaItem(27),
//             tipo: RECOMPENSAS_TIPO.ARMA,
//         },
//         {
//             recompensa: findGachaItem(28),
//             tipo: RECOMPENSAS_TIPO.ARMA,
//         },
//         {
//             recompensa: findGachaItem(29),
//             tipo: RECOMPENSAS_TIPO.ARMA,
//         },
//         {
//             recompensa: findGachaItem(30),
//             tipo: RECOMPENSAS_TIPO.ARMA,
//         },
//         {
//             recompensa: findGachaItem(31),
//             tipo: RECOMPENSAS_TIPO.ARMA,
//         },
//         {
//             recompensa: findGachaItem(32),
//             tipo: RECOMPENSAS_TIPO.ARMA,
//         },
//         {
//             recompensa: findGachaItem(33),
//             tipo: RECOMPENSAS_TIPO.ARMA,
//         },
//         {
//             recompensa: findGachaItem(34),
//             tipo: RECOMPENSAS_TIPO.ARMA,
//         },
//         {
//             recompensa: findGachaItem(35),
//             tipo: RECOMPENSAS_TIPO.ARMA,
//         },
//         {
//             recompensa: findGachaItem(36),
//             tipo: RECOMPENSAS_TIPO.ARMA,
//         },
//         {
//             recompensa: findGachaItem(37),
//             tipo: RECOMPENSAS_TIPO.ARMA,
//         },
//     ]
// }