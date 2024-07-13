import PREVIEW from "./assets/PREVIEW.png"
import basePessoal from "../../../../../../personagens/_base/_base-pessoal.personagem.json"
import { MAPAS } from "../../../../../../../constants/images/mapas.constant"

export const DEMONIO_PALIDO = {
    id: 4,
    title: "Episódio 4: O Demônio Pálido",
    description: `Ereena, a guerreira chamada de Demônio Pálido intercepta o grupo na ponte que
    antecede o local do ritual. A batalha contra o membro mais forte dos Guerreiros Pálidos começa.`,
    previewImage: PREVIEW,
    background: MAPAS.PONTE_GELADA,
    url: "/historia/guilda-de-orion/5/4/batalha",
    content: {
        titulo: "Episódio 4:",
        subtitulo: "O Demônio Pálido",
        mapa: MAPAS.PONTE_GELADA,
        musica: null,
        aliados: [
            {
                ...basePessoal,
                personagemId: 4,
            },
            {
                ...basePessoal,
                personagemId: 2,
            },
            {
                ...basePessoal,
                personagemId: 15,
            },
            {
                ...basePessoal,
                personagemId: 13,
            },
        ],
        inimigos: [
            {
                ...basePessoal,
                personagemId: 17
            },
            {
                ...basePessoal,
                personagemId: 9,
                visualAtivo: 2,
            },
            {
                ...basePessoal,
                personagemId: 9,
                visualAtivo: 2,
            },
        ],
    }
}