import { CENAS_TIPO, EPISODIO_TIPO } from "../../../../../../../constants"
import { MAPAS } from "../../../../../../../constants/images"
import { BASE_BATALHA } from "../../../../../_base"
import basePessoal from "../../../../../../personagens/_base/_base-pessoal.personagem.json"

export const TESTE_BATALHA = {
    ...BASE_BATALHA,
    id: 2,
    title: "Episódio 2: Teste Batalha",
    description: `TESTE`,
    previewImage: MAPAS.COSMOS,
    background: MAPAS.COSMOS,
    tipo: EPISODIO_TIPO.BATALHA,
    preRequisito: 1,
    url: "/historia/testes/1/2/cena",
    cenas: [
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: null,
            nome: "Narrador",
            perfil: null,
            texto: "Frase 1"
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: null,
            nome: "Narrador",
            perfil: null,
            texto: "Frase 2"
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: null,
            nome: "Narrador",
            perfil: null,
            texto: "Frase 3",
            navigateTo: "/historia/testes/1/2/batalha",
        },
    ],
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
        aliadosExtras: [
            {
                ...basePessoal,
                personagemId: 4,
            },
            {
                ...basePessoal,
                personagemId: 5,
            },
            {
                ...basePessoal,
                personagemId: 6,
            },
            {
                ...basePessoal,
                personagemId: 7,
            },
            {
                ...basePessoal,
                personagemId: 8,
            },
            {
                ...basePessoal,
                personagemId: 11,
            },
        ],
    },
}