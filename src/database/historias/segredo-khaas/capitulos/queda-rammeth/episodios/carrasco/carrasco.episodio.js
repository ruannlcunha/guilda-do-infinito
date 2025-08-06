import PREVIEW from "./assets/PREVIEW.png";
import basePessoal from "../../../../../../personagens/_base/_base-pessoal.personagem.json";
import { MAPAS } from "../../../../../../../constants/images/mapas.constant";

export const CARRASCO = {
  id: 3,
  title: "Episódio 3: O Carrasco",
  description: `JJC, aquele que faria de tudo por sua mestra. Agora ele só tem um dever, matar 
    aqueles que ontem eram seus companheiros.`,
  previewImage: PREVIEW,
  background: MAPAS.MURO_DESERTO_NOITE,
  url: "/historia/segredo-de-khaas/5/3/batalha",
  batalha: {
    titulo: "Episódio 3:",
    subtitulo: "O Carrasco",
    mapa: MAPAS.MURO_DESERTO_NOITE,
    musica: null,
    aliados: [
      {
        ...basePessoal,
        personagemId: 18,
        visualAtivo: 2
      },
      {
        ...basePessoal,
        personagemId: 23
      },
      {
        ...basePessoal,
        personagemId: 21
      }
    ],
    inimigos: [
      {
        ...basePessoal,
        personagemId: 25,
        visualAtivo: 2
      }
    ]
  }
};
