import PREVIEW from "./assets/PREVIEW.png";
import basePessoal from "../../../../../../personagens/_base/_base-pessoal.personagem.json";
import { MAPAS } from "../../../../../../../constants/images/mapas.constant";

export const GENIA_TREVAS = {
  id: 6,
  title: "Episódio 6: A Gênia das Trevas",
  description: `Finalmente chegou o momento de enfrentar Nailah. Será que o grupo conseguirá
    selar ela novamente dentro da sua lâmpada? Ou esse será o fim de Rammeth como conhecemos?`,
  previewImage: PREVIEW,
  background: MAPAS.CASTELO_DESERTO_TAPETE,
  url: "/historia/segredo-de-khaas/5/6/batalha",
  batalha: {
    titulo: "Episódio 6:",
    subtitulo: "A Gênia das Trevas",
    mapa: MAPAS.CASTELO_DESERTO_TAPETE,
    musica: null,
    batalhaTipo: "GIGANTE",
    aliados: [
      {
        ...basePessoal,
        personagemId: 19,
        visualAtivo: 2
      },
      {
        ...basePessoal,
        personagemId: 24
      },
      {
        ...basePessoal,
        personagemId: 22
      },
      {
        ...basePessoal,
        personagemId: 21
      }
    ],
    inimigos: [
      {
        ...basePessoal,
        personagemId: 20,
        visualAtivo: 2
      }
    ]
  }
};
