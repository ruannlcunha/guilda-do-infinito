import { CENAS_TIPO, EPISODIO_TIPO } from "../../../../../../../constants"
import { MAPAS } from "../../../../../../../constants/images"
import { BASE_BATALHA } from "../../../../../_base"
import basePessoal from "../../../../../../personagens/_base/_base-pessoal.personagem.json"
import { MUSICS } from "../../../../../../../constants/audios/musics.constant"

export const SOMBRIUS_DEVORA = {
    ...BASE_BATALHA,
    id: 3,
    title: "Episódio 3: O Sombrius que devora tudo",
    description: `Um Sombrius começa a devorar a mercadoria dentro da carroça, se tornando uma 
    massa enorme de energia negativa. Essa criatura começa a devorar tudo que vê pela frente, não 
    importa se é vivo ou morto.`,
    previewImage: MAPAS.ESTRADA_FLORESTA,
    background: MAPAS.ESTRADA_FLORESTA,
    tipo: EPISODIO_TIPO.CHEFE,
    preRequisito: null,
    url: "/historia/guilda-de-orion/2/3/cena",
    cenas: [
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: null,
            nome: "Narrador",
            perfil: null,
            texto: "Frase 1",
            navigateTo: "/historia/guilda-de-orion/2/3/batalha",
        },
    ],
    batalha: {
        titulo: "Episódio 3:",
        subtitulo: "O Sombrius que devora tudo",
        nivel: 1,
        mapa: MAPAS.ESTRADA_FLORESTA,
        musica: MUSICS.BATALHA_DARK_1,
        isBatalhaGigante: true,
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
                personagemId: 70,
                multiplicadores: {
                    pv: 4,
                    pm: 2,
                    turnos: 2
                }
            },
        ],
        aliadosExtras: [
        ],
    },
}