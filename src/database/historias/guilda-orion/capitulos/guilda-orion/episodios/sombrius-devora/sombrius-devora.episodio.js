import { CENAS_TIPO, EPISODIO_TIPO } from "../../../../../../../constants"
import { IMAGES, MAPAS } from "../../../../../../../constants/images"
import { BASE_BATALHA } from "../../../../../_base"
import basePessoal from "../../../../../../personagens/_base/_base-pessoal.personagem.json"
import { MUSICS } from "../../../../../../../constants/audios/musics.constant"
import { findGachaPersonagem } from "../../../../../../../utils/gacha-functions.util"
import CENA_1 from "./assets/CENA_1.png"
import CENA_2 from "./assets/CENA_2.png"
import CENA_3 from "./assets/CENA_3.png"
import CENA_4 from "./assets/CENA_4.png"

export const SOMBRIUS_DEVORA = {
    ...BASE_BATALHA,
    id: 3,
    title: "Episódio 3: O Sombrius que devora tudo",
    description: `Um Sombrius começa a devorar a mercadoria dentro da carroça, se tornando uma 
    massa enorme de energia negativa. Essa criatura começa a devorar tudo que vê pela frente, não 
    importa se é vivo ou morto.`,
    previewImage: CENA_4,
    background: CENA_4,
    tipo: EPISODIO_TIPO.CHEFE,
    preRequisito: 2,
    url: "/historia/guilda-de-orion/2/3/cena",
    cenas: [
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_1,
            musica: MUSICS.HOME,
            nome: "Andy",
            perfil: findGachaPersonagem(12,1).perfil,
            texto: "Conseguimos, acabamos com todos eles.",
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_1,
            nome: "Dominick",
            perfil: findGachaPersonagem(3,3).perfil,
            texto: "Finalmente, to louca pra voltar pra guil-",
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_1,
            musica: MUSICS.SUSPENSE_1,
            nome: "Aphelios",
            perfil: findGachaPersonagem(4,2).perfil,
            texto: "Espera... Se acabamos com todos, por que nossa benção continua brilhando?",
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_1,
            texto: "*Grito de criança vindo da carroça",
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_2,
            nome: "Mulher",
            perfil: IMAGES.GENERICO_PERFIL,
            texto: "Tem alguma coisa comendo as mercadorias!",
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_2,
            nome: "Andy",
            perfil: findGachaPersonagem(12,1).perfil,
            texto: "Fiquem atrás da gente.",
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_3,
            nome: "Andy",
            perfil: findGachaPersonagem(12,1).perfil,
            texto: "Por que aquela coisa tá comendo legumes? Sombrius não precisam se alimentar.",
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_3,
            nome: "Aphelios",
            perfil: findGachaPersonagem(4,2).perfil,
            texto: "Você tá errado Andy, aquela coisa não tá comendo só os legumes, ela tá devorando tudo pelo caminho.",
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_3,
            nome: "Ayla",
            perfil: findGachaPersonagem(2,4).perfil,
            texto: "É verdade, olha os buracos na carroça. Ele tá comendo a madeira também.",
        },
        {
            tipo: CENAS_TIPO.DIALOGO,
            fundo: CENA_3,
            nome: "Ayla",
            perfil: findGachaPersonagem(3,3).perfil,
            texto: "Acho que nossa volta pra guilda vai demorar um pouco mais...",
        },
        {
            tipo: CENAS_TIPO.IMAGEM,
            fundo: CENA_4,
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
                    pv: 2,
                    pm: 2,
                    turnos: 2
                }
            },
        ],
        aliadosExtras: [
        ],
    },
}