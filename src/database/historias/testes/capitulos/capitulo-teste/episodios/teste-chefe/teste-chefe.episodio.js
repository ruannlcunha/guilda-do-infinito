import { EPISODIO_TIPO } from "../../../../../../../constants"
import { MAPAS } from "../../../../../../../constants/images"
import { BASE_BATALHA } from "../../../../../_base"
import basePessoal from "../../../../../../personagens/_base/_base-pessoal.personagem.json"

export const TESTE_CHEFE = {
    ...BASE_BATALHA,
    id: 3,
    title: "Episódio 3: Teste Chefe",
    description: `TESTE`,
    previewImage: MAPAS.COSMOS,
    background: MAPAS.COSMOS,
    tipo: EPISODIO_TIPO.CHEFE,
    preRequisito: 2,
    url: "/historia/testes/1/3/batalha",
    batalha: {
        titulo: "Episódio ?:",
        subtitulo: "",
        nivel: 1,
        mapa: null,
        musica: null,
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
    },
}