import { EPISODIO_TIPO } from "../../../../../../../constants"
import { MAPAS } from "../../../../../../../constants/images"
import { BASE_BATALHA } from "../../../../../_base"
import basePessoal from "../../../../../../personagens/_base/_base-pessoal.personagem.json"
import { MUSICS } from "../../../../../../../constants/audios/musics.constant"
import CAPA from "./assets/CAPA.png"

export const ENFRENTANDO_SOMBRIUS = {
    ...BASE_BATALHA,
    id: 2,
    title: "Episódio 2: Enfrentando Sombrius",
    description: `A equipe de aventureiros se junta para enfrentar os Sombrius Menores que atacaram a carroça de uma família mercadora.`,
    previewImage: CAPA,
    background: CAPA,
    tipo: EPISODIO_TIPO.BATALHA,
    preRequisito: 1,
    url: "/historia/guilda-de-orion/2/2/batalha",
    cenas: [],
    batalha: {
        titulo: "Episódio 2:",
        subtitulo: "Enfrentando Sombrius",
        nivel: 1,
        mapa: MAPAS.ESTRADA_FLORESTA,
        musica: MUSICS.BATALHA_1,
        aliados: [
            {
                ...basePessoal,
                personagemId: 2,
                visualAtivo: 4,
            },
            {
                ...basePessoal,
                personagemId: 3,
                visualAtivo: 3,
            },
            {
                ...basePessoal,
                personagemId: 4,
                visualAtivo: 2,
            },
            {
                ...basePessoal,
                personagemId: 12,
            },
        ],
        inimigos: [
            {
                ...basePessoal,
                personagemId: 10,
            },
        ],
        aliadosExtras: [
        ],
    },
}