import PREVIEW from "./assets/PREVIEW.png";
import BANNER from "./assets/BANNER.png";
import { RECOMPENSAS_TIPO } from "../../../constants";
import { findGachaItem, findGachaPersonagem } from "../../../utils/gacha-functions.util";

export const MARES_ASTORIA = {
  id: 5,
  nome: "Mares de Astoria",
  preview: PREVIEW,
  banner: BANNER,
  possibilidades: [
    {
      tipo: RECOMPENSAS_TIPO.PERSONAGEM,
      raridade: 5,
      probMin: 1,
      probMax: 15
    },
    {
      tipo: RECOMPENSAS_TIPO.ARMA,
      raridade: 5,
      probMin: 16,
      probMax: 20
    },
    {
      tipo: RECOMPENSAS_TIPO.ARMA,
      raridade: 4,
      probMin: 21,
      probMax: 50
    },
    {
      tipo: RECOMPENSAS_TIPO.ARMA,
      raridade: 3,
      probMin: 51,
      probMax: 100
    }
  ],
  recompensas: [
    {
      recompensa: findGachaPersonagem(44),
      tipo: RECOMPENSAS_TIPO.PERSONAGEM
    },
    {
      recompensa: findGachaPersonagem(45),
      tipo: RECOMPENSAS_TIPO.PERSONAGEM
    },
    {
      recompensa: findGachaPersonagem(46),
      tipo: RECOMPENSAS_TIPO.PERSONAGEM
    },
    {
      recompensa: findGachaPersonagem(47),
      tipo: RECOMPENSAS_TIPO.PERSONAGEM
    },
    {
      recompensa: findGachaPersonagem(48),
      tipo: RECOMPENSAS_TIPO.PERSONAGEM
    },
    {
      recompensa: findGachaPersonagem(49),
      tipo: RECOMPENSAS_TIPO.PERSONAGEM
    },
    {
      recompensa: findGachaItem(56),
      tipo: RECOMPENSAS_TIPO.ARMA
    },
    {
      recompensa: findGachaItem(32),
      tipo: RECOMPENSAS_TIPO.ARMA
    },
    {
      recompensa: findGachaItem(4),
      tipo: RECOMPENSAS_TIPO.ARMA
    },
    {
      recompensa: findGachaItem(5),
      tipo: RECOMPENSAS_TIPO.ARMA
    },
    {
      recompensa: findGachaItem(16),
      tipo: RECOMPENSAS_TIPO.ARMA
    },
    {
      recompensa: findGachaItem(17),
      tipo: RECOMPENSAS_TIPO.ARMA
    },
    {
      recompensa: findGachaItem(18),
      tipo: RECOMPENSAS_TIPO.ARMA
    },
    {
      recompensa: findGachaItem(19),
      tipo: RECOMPENSAS_TIPO.ARMA
    },
    {
      recompensa: findGachaItem(20),
      tipo: RECOMPENSAS_TIPO.ARMA
    },
    {
      recompensa: findGachaItem(21),
      tipo: RECOMPENSAS_TIPO.ARMA
    },
    {
      recompensa: findGachaItem(22),
      tipo: RECOMPENSAS_TIPO.ARMA
    },
    {
      recompensa: findGachaItem(23),
      tipo: RECOMPENSAS_TIPO.ARMA
    },
    {
      recompensa: findGachaItem(24),
      tipo: RECOMPENSAS_TIPO.ARMA
    },
    {
      recompensa: findGachaItem(25),
      tipo: RECOMPENSAS_TIPO.ARMA
    },
    {
      recompensa: findGachaItem(26),
      tipo: RECOMPENSAS_TIPO.ARMA
    },
    {
      recompensa: findGachaItem(27),
      tipo: RECOMPENSAS_TIPO.ARMA
    },
    {
      recompensa: findGachaItem(28),
      tipo: RECOMPENSAS_TIPO.ARMA
    },
    {
      recompensa: findGachaItem(47),
      tipo: RECOMPENSAS_TIPO.ARMA
    },
    {
      recompensa: findGachaItem(59),
      tipo: RECOMPENSAS_TIPO.ARMA
    },
    {
      recompensa: findGachaItem(7),
      tipo: RECOMPENSAS_TIPO.ARMA
    },
    {
      recompensa: findGachaItem(8),
      tipo: RECOMPENSAS_TIPO.ARMA
    },
    {
      recompensa: findGachaItem(29),
      tipo: RECOMPENSAS_TIPO.ARMA
    },
    {
      recompensa: findGachaItem(30),
      tipo: RECOMPENSAS_TIPO.ARMA
    },
    {
      recompensa: findGachaItem(50),
      tipo: RECOMPENSAS_TIPO.ARMA
    },
    {
      recompensa: findGachaItem(51),
      tipo: RECOMPENSAS_TIPO.ARMA
    },
    {
      recompensa: findGachaItem(52),
      tipo: RECOMPENSAS_TIPO.ARMA
    },
    {
      recompensa: findGachaItem(9),
      tipo: RECOMPENSAS_TIPO.ARMA
    },
    {
      recompensa: findGachaItem(10),
      tipo: RECOMPENSAS_TIPO.ARMA
    },
    {
      recompensa: findGachaItem(33),
      tipo: RECOMPENSAS_TIPO.ARMA
    },
    {
      recompensa: findGachaItem(34),
      tipo: RECOMPENSAS_TIPO.ARMA
    },
    {
      recompensa: findGachaItem(35),
      tipo: RECOMPENSAS_TIPO.ARMA
    },
    {
      recompensa: findGachaItem(37),
      tipo: RECOMPENSAS_TIPO.ARMA
    },
    {
      recompensa: findGachaItem(46),
      tipo: RECOMPENSAS_TIPO.ARMA
    },
    {
      recompensa: findGachaItem(53),
      tipo: RECOMPENSAS_TIPO.ARMA
    }
  ]
};
