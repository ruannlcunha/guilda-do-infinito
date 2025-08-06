import PREVIEW from "./assets/PREVIEW.png";
import basePessoal from "../../../../../../personagens/_base/_base-pessoal.personagem.json";
import { MAPAS } from "../../../../../../../constants/images/mapas.constant";

export const DEMONIO_AREIAS = {
  id: 2,
  title: "Episódio 2: O Demônio das Areias",
  description: `O grupo se depara com uma criatura colossal conhecida como Demônio das Areias.
    Será que eles vão conseguir enfrentar esse monstro enorme?`,
  previewImage: PREVIEW,
  background: MAPAS.DESERTO,
  url: "/historia/segredo-de-khaas/4/2/batalha",
  batalha: {
    titulo: "Episódio 2:",
    subtitulo: "O Demônio das Areias",
    mapa: MAPAS.DESERTO,
    musica: null,
    batalhaTipo: "GIGANTE",
    aliados: [
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
        personagemId: 25
      },
      {
        ...basePessoal,
        personagemId: 20
      }
    ],
    inimigos: [
      {
        ...basePessoal,
        personagemId: 27
      }
    ]
  }
};
