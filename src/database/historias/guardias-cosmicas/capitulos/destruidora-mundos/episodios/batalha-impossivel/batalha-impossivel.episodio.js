import PREVIEW from "./assets/PREVIEW.png"
import basePessoal from "../../../../../../personagens/_base/_base-pessoal.personagem.json"
import { MAPAS } from "../../../../../../../constants/images/mapas.constant"

export const BATALHA_IMPOSSIVEL = {
    id: 3,
    title: "Episódio 3: A Batalha Impossível",
    description: `O grupo inicia uma batalha contra a Destruidora de Mundos. Será que elas tem chance
    de vencer esse inimigo? Todos acreditam que não, menos as Guardiãs Cósmicas.`,
    previewImage: PREVIEW,
    background: MAPAS.COSMOS,
    url: "/historia/guardias-cosmicas/3/3/batalha",
    batalha: {
        titulo: "Episódio 3:",
        subtitulo: "A Batalha Impossível",
        mapa: MAPAS.COSMOS,
        musica: null,
        aliados: [
            {
                ...basePessoal,
                personagemId: 29,
            },
            {
                ...basePessoal,
                personagemId: 30,
            },
            {
                ...basePessoal,
                personagemId: 31,
            },
        ],
        inimigos: [
            {
                ...basePessoal,
                personagemId: 33,
            },
        ],
    }
}