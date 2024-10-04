import basePessoal from "../../personagens/_base/_base-pessoal.personagem.json"
import { EPISODIO_TIPO } from "../../../constants"

export const BASE_BATALHA = {
    id: 0,
    title: "Episódio ?: ",
    description: `BASE`,
    previewImage: null,
    background: null,
    tipo: EPISODIO_TIPO.BATALHA,
    preRequisito: null,
    url: "/historia/{historiaNome}/{capituloId}/{episodioId}/batalha",
    cenas: [],
    batalha: {
        titulo: "Episódio ?:",
        subtitulo: "",
        nivel: 1,
        mapa: null,
        musica: null,
        isBatalhaGigante: false,
        aliados: [
            {
                ...basePessoal,
                personagemId: 2,
                visualAtivo: 2,
            },
        ],
        inimigos: [
            {
                ...basePessoal,
                personagemId: 3,
            },
        ],
        aliadosExtras: [
            {
                ...basePessoal,
                personagemId: 4,
            },
        ]
    },
}