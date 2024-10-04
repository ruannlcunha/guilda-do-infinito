import PREVIEW from "./assets/PREVIEW.png"
import MAPA from "./assets/MAPA.png"
import basePessoal from "../../../../../../personagens/_base/_base-pessoal.personagem.json"

export const REI_DAS_SOMBRAS = {
    id: 7,
    title: "Episódio 7: Rei das Sombras",
    description: `O rei se revela ser um paladino devoto à Cypher. O que o grupo fará 
    agora que o perigo está a espreita?`,
    previewImage: PREVIEW,
    background: MAPA,
    url: "/historia/guilda-de-orion/5/7/batalha",
    batalha: {
        titulo: "Episódio 7:",
        subtitulo: "Rei das Sombras",
        mapa: MAPA,
        musica: null,
        aliados: [
            {
                ...basePessoal,
                personagemId: 2,
            },
            {
                ...basePessoal,
                personagemId: 4,
            },
            {
                ...basePessoal,
                personagemId: 14,
            },
            {
                ...basePessoal,
                personagemId: 13,
            },
        ],
        inimigos: [
            {
                ...basePessoal,
                personagemId: 16
            },
        ],
    }
}