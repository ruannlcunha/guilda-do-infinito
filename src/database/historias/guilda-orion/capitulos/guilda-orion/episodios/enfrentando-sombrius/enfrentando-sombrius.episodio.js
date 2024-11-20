import { CENAS_TIPO, EPISODIO_TIPO } from "../../../../../../../constants"
import { MAPAS } from "../../../../../../../constants/images"
import { BASE_BATALHA } from "../../../../../_base"
import basePessoal from "../../../../../../personagens/_base/_base-pessoal.personagem.json"
import { MUSICS } from "../../../../../../../constants/audios/musics.constant"

export const ENFRENTANDO_SOMBRIUS = {
    ...BASE_BATALHA,
    id: 2,
    title: "Episódio 2: Enfrentando Sombrius",
    description: `Enquanto Andy verifica as condições dos mercadores, o trio Aphelios, 
    Ayla e Dominick se junta para enfrentar os Sombrius Menores que atacaram a carroça.`,
    previewImage: MAPAS.ESTRADA_FLORESTA,
    background: MAPAS.ESTRADA_FLORESTA,
    tipo: EPISODIO_TIPO.BATALHA,
    preRequisito: null,
    url: "/historia/guilda-de-orion/2/2/cena",
    cenas: [
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: null,
            nome: "Narrador",
            perfil: null,
            texto: "Frase 1"
        },
    ],
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
        ],
        inimigos: [
            {
                ...basePessoal,
                personagemId: 10,
            },
            {
                ...basePessoal,
                personagemId: 10,
            },
            {
                ...basePessoal,
                personagemId: 10,
            },
            {
                ...basePessoal,
                personagemId: 10,
            },
        ],
        aliadosExtras: [
        ],
    },
}